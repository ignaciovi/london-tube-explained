/* Octilinear ("Beck") layout for the Underground network.
 *
 * Runs offline: node tools/schematic.js  ->  data/schematic.js
 *
 * Multicriteria hill-climbing after Stott, Rodgers, Martinez-Ovando &
 * Walker, "Automatic Metro Map Layout Using Multicriteria Optimization"
 * (IEEE TVCG, 2011). Seeded from the geographic positions, every station
 * is repeatedly offered a set of nearby grid points and moves to whichever
 * lowers a weighted sum of six penalties. Nothing here is traced from
 * TfL's diagram; the layout is derived from the network's own topology.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const mod = { exports: {} };
new Function('module',
  fs.readFileSync(path.join(ROOT, 'data/network.js'), 'utf8') +
  '\nmodule.exports = { STATIONS, EDGES };')(mod);
const { STATIONS, EDGES } = mod.exports;

const ids = Object.keys(STATIONS);
const idx = {};
ids.forEach((id, i) => { idx[id] = i; });
const N = ids.length;

/* ---- unique geometric edges (several lines may share one) ------------- */

const seen = new Map();
const E = [];
const eLines = [];                       // which lines run over each edge
EDGES.forEach(e => {
  const a = idx[e[0]], b = idx[e[1]];
  const key = Math.min(a, b) + ':' + Math.max(a, b);
  if (seen.has(key)) { eLines[seen.get(key)].add(e[2]); return; }
  seen.set(key, E.length);
  E.push([Math.min(a, b), Math.max(a, b)]);
  eLines.push(new Set([e[2]]));
});
function sharesLine(e1, e2) {
  for (const l of eLines[e1]) if (eLines[e2].has(l)) return true;
  return false;
}

const inc = ids.map(() => []);          // node -> edge indices
E.forEach((e, i) => { inc[e[0]].push(i); inc[e[1]].push(i); });
const deg = inc.map(l => l.length);

/* ---- seed from geography --------------------------------------------- */

const lat0 = ids.reduce((s, id) => s + STATIONS[id].lat, 0) / N;
const kx = Math.cos(lat0 * Math.PI / 180);
let gx = new Float64Array(N), gy = new Float64Array(N);
ids.forEach((id, i) => { gx[i] = STATIONS[id].lon * kx; gy[i] = -STATIONS[id].lat; });

/* Beck's central trick: magnify the middle, compress the outskirts. A radial
 * power transform about the centre of gravity of zone 1 does the same job. */
(function fisheye() {
  const z1 = ids.filter(id => parseFloat(STATIONS[id].zone) <= 1.5);
  let cx = 0, cy = 0;
  z1.forEach(id => { cx += gx[idx[id]]; cy += gy[idx[id]]; });
  cx /= z1.length; cy /= z1.length;
  let R = 0;
  for (let i = 0; i < N; i++) R = Math.max(R, Math.hypot(gx[i] - cx, gy[i] - cy));
  const P = 0.47;
  for (let i = 0; i < N; i++) {
    const dx = gx[i] - cx, dy = gy[i] - cy;
    const r = Math.hypot(dx, dy);
    if (r < 1e-12) continue;
    const r2 = R * Math.pow(r / R, P);
    gx[i] = cx + dx / r * r2;
    gy[i] = cy + dy / r * r2;
  }
})();

/* Even out the spacing with a short spring relaxation: every edge wants the
 * same length, stations repel each other, and a weak anchor keeps the whole
 * thing pointing the way London does. */
const ax = Float64Array.from(gx), ay = Float64Array.from(gy);
(function relax() {
  const L0 = (function () {
    const l = E.map(([a, b]) => Math.hypot(gx[a] - gx[b], gy[a] - gy[b])).sort((p, q) => p - q);
    return l[Math.floor(l.length / 2)];
  })();
  const CELL2 = L0 * 1.5;
  for (let it = 0; it < 900; it++) {
    const fx = new Float64Array(N), fy = new Float64Array(N);

    for (const [a, b] of E) {
      let dx = gx[b] - gx[a], dy = gy[b] - gy[a];
      const len = Math.hypot(dx, dy) || 1e-9;
      const f = 0.5 * (len - L0) / len;
      fx[a] += dx * f; fy[a] += dy * f;
      fx[b] -= dx * f; fy[b] -= dy * f;
    }

    const buckets = new Map();
    for (let i = 0; i < N; i++) {
      const k = Math.floor(gx[i] / CELL2) + ',' + Math.floor(gy[i] / CELL2);
      (buckets.get(k) || buckets.set(k, []).get(k)).push(i);
    }
    for (let i = 0; i < N; i++) {
      const bx = Math.floor(gx[i] / CELL2), by = Math.floor(gy[i] / CELL2);
      for (let cx = bx - 1; cx <= bx + 1; cx++) {
        for (let cy = by - 1; cy <= by + 1; cy++) {
          const b = buckets.get(cx + ',' + cy);
          if (!b) continue;
          for (const j of b) {
            if (j <= i) continue;
            let dx = gx[j] - gx[i], dy = gy[j] - gy[i];
            const d = Math.hypot(dx, dy) || 1e-9;
            if (d >= L0) continue;
            const f = 0.35 * (L0 - d) / d;
            fx[i] -= dx * f; fy[i] -= dy * f;
            fx[j] += dx * f; fy[j] += dy * f;
          }
        }
      }
    }

    for (let i = 0; i < N; i++) {
      gx[i] += fx[i] * 0.35 + (ax[i] - gx[i]) * 0.006;
      gy[i] += fy[i] * 0.35 + (ay[i] - gy[i]) * 0.006;
    }
  }
})();

/* scale so a typical edge spans IDEAL grid units */
const lens = E.map(([a, b]) => Math.hypot(gx[a] - gx[b], gy[a] - gy[b])).sort((p, q) => p - q);
const IDEAL = 5;
const scale = IDEAL / lens[Math.floor(lens.length / 2)];

const x = new Int32Array(N), y = new Int32Array(N);
for (let i = 0; i < N; i++) { x[i] = Math.round(gx[i] * scale); y[i] = Math.round(gy[i] * scale); }

/* original directions, so the map keeps pointing the way London does */
const theta0 = E.map(([a, b]) => Math.atan2(ay[b] - ay[a], ax[b] - ax[a]));

/* pull apart anything that landed on the same grid point */
(function unstack() {
  const taken = new Map();
  const key = i => x[i] + ',' + y[i];
  for (let i = 0; i < N; i++) {
    if (!taken.has(key(i))) { taken.set(key(i), i); continue; }
    for (let r = 1; r < 60; r++) {
      let done = false;
      for (let dx = -r; dx <= r && !done; dx++) {
        for (let dy = -r; dy <= r && !done; dy++) {
          if (Math.max(Math.abs(dx), Math.abs(dy)) !== r) continue;
          const k = (x[i] + dx) + ',' + (y[i] + dy);
          if (!taken.has(k)) { x[i] += dx; y[i] += dy; taken.set(k, i); done = true; }
        }
      }
      if (done) break;
    }
  }
})();

/* ---- spatial index --------------------------------------------------- */

const CELL = IDEAL * 1.5;
let nodeGrid = new Map(), edgeGrid = new Map();
const ck = (cx, cy) => cx + ',' + cy;

function reindex() {
  nodeGrid = new Map();
  edgeGrid = new Map();
  for (let i = 0; i < N; i++) {
    const k = ck(Math.floor(x[i] / CELL), Math.floor(y[i] / CELL));
    (nodeGrid.get(k) || nodeGrid.set(k, []).get(k)).push(i);
  }
  E.forEach(([a, b], i) => {
    const x0 = Math.floor(Math.min(x[a], x[b]) / CELL), x1 = Math.floor(Math.max(x[a], x[b]) / CELL);
    const y0 = Math.floor(Math.min(y[a], y[b]) / CELL), y1 = Math.floor(Math.max(y[a], y[b]) / CELL);
    for (let cx = x0; cx <= x1; cx++) {
      for (let cy = y0; cy <= y1; cy++) {
        const k = ck(cx, cy);
        (edgeGrid.get(k) || edgeGrid.set(k, []).get(k)).push(i);
      }
    }
  });
}

function near(gridMap, px, py, radius) {
  const out = [];
  const c0 = Math.floor((px - radius) / CELL), c1 = Math.floor((px + radius) / CELL);
  const d0 = Math.floor((py - radius) / CELL), d1 = Math.floor((py + radius) / CELL);
  for (let cx = c0; cx <= c1; cx++) {
    for (let cy = d0; cy <= d1; cy++) {
      const b = gridMap.get(ck(cx, cy));
      if (b) for (let i = 0; i < b.length; i++) if (out.indexOf(b[i]) < 0) out.push(b[i]);
    }
  }
  return out;
}

/* ---- penalties ------------------------------------------------------- */

let W = {
  octi: 4.2,      // edges should run at multiples of 45 degrees
  len: 1.4,       // and be about the same length
  rel: 1.5,       // while keeping London's shape recognisable
  ang: 1.2,       // incident edges should not crowd each other
  straight: 1.9,  // a line should run straight through a plain station
  nodeOcc: 9,     // stations must not sit on top of each other
  edgeOcc: 7      // nor on top of somebody else's line
};
const OCT = Math.PI / 4;
const MIN_SEP = IDEAL * 0.62;      // stations must stay this far apart
const CLEAR = IDEAL * 0.40;        // and this far off other people's lines

function angDiff(a, b) {
  let d = Math.abs(a - b) % (2 * Math.PI);
  return d > Math.PI ? 2 * Math.PI - d : d;
}

function segDist(px, py, ax, ay, bx, by) {
  const dx = bx - ax, dy = by - ay;
  const L = dx * dx + dy * dy;
  let t = L ? ((px - ax) * dx + (py - ay) * dy) / L : 0;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(px - (ax + t * dx), py - (ay + t * dy));
}

/* cost of everything that changes when node v sits at (px, py) */
function localCost(v, px, py) {
  let c = 0;
  const angles = [];

  for (const ei of inc[v]) {
    const [a, b] = E[ei];
    const u = a === v ? b : a;
    const ux = x[u], uy = y[u];
    const dx = ux - px, dy = uy - py;
    const len = Math.hypot(dx, dy);
    if (len < 1e-9) return 1e9;
    const th = Math.atan2(dy, dx);
    angles.push(th);

    /* octilinearity */
    const off = Math.abs(((th % OCT) + OCT) % OCT);
    c += W.octi * (Math.min(off, OCT - off) / (OCT / 2));

    /* uniform edge length */
    c += W.len * Math.abs(len - IDEAL) / IDEAL;

    /* keep the original bearing within reason */
    const want = a === v ? theta0[ei] : theta0[ei] + Math.PI;
    const drift = angDiff(th, want);
    if (drift > OCT) c += W.rel * (drift - OCT) / Math.PI * 4;

    /* the edge must not run over some other station */
    for (const w of near(nodeGrid, (px + ux) / 2, (py + uy) / 2, len / 2 + MIN_SEP)) {
      if (w === v || w === u) continue;
      const d = segDist(x[w], y[w], px, py, ux, uy);
      if (d < CLEAR) c += W.edgeOcc * (CLEAR - d) / CLEAR;
    }
  }

  /* a line should carry straight on through the stations between junctions */
  for (let i = 0; i < inc[v].length; i++) {
    for (let j = i + 1; j < inc[v].length; j++) {
      const e1 = inc[v][i], e2 = inc[v][j];
      if (!sharesLine(e1, e2)) continue;
      const u1 = E[e1][0] === v ? E[e1][1] : E[e1][0];
      const u2 = E[e2][0] === v ? E[e2][1] : E[e2][0];
      const t1 = Math.atan2(y[u1] - py, x[u1] - px);
      const t2 = Math.atan2(y[u2] - py, x[u2] - px);
      c += W.straight * (Math.PI - angDiff(t1, t2)) / Math.PI;
    }
  }

  /* angular resolution at v */
  if (angles.length > 1) {
    angles.sort((p, q) => p - q);
    const ideal = 2 * Math.PI / angles.length;
    for (let i = 0; i < angles.length; i++) {
      const gap = i === angles.length - 1
        ? angles[0] + 2 * Math.PI - angles[i]
        : angles[i + 1] - angles[i];
      if (gap < ideal) c += W.ang * (ideal - gap) / ideal;
    }
  }

  /* station-on-station */
  for (const w of near(nodeGrid, px, py, MIN_SEP * 1.5)) {
    if (w === v) continue;
    const d = Math.hypot(x[w] - px, y[w] - py);
    if (d < MIN_SEP) c += W.nodeOcc * (MIN_SEP - d) / MIN_SEP;
  }

  /* v sitting on somebody else's line */
  for (const ei of near(edgeGrid, px, py, MIN_SEP * 1.5)) {
    const [a, b] = E[ei];
    if (a === v || b === v) continue;
    const d = segDist(px, py, x[a], y[a], x[b], y[b]);
    if (d < CLEAR) c += W.edgeOcc * (CLEAR - d) / CLEAR;
  }
  return c;
}

/* ---- hill climb ------------------------------------------------------ */

const DIRS = [];
for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) if (dx || dy) DIRS.push([dx, dy]);

const schedule = [16, 12, 9, 7, 5, 4, 3, 2, 2, 1, 1, 1, 1, 1];
let moves = 0;

for (let pass = 0; pass < schedule.length; pass++) {
  const r = schedule[pass];
  for (let sweep = 0; sweep < 16; sweep++) {
    reindex();
    const order = ids.map((_, i) => i).sort(() => Math.random() - 0.5);
    let movedThisSweep = 0;
    for (const v of order) {
      const base = localCost(v, x[v], y[v]);
      let bestC = base, bx = x[v], by = y[v];
      for (const [dx, dy] of DIRS) {
        const px = x[v] + dx * r, py = y[v] + dy * r;
        const c = localCost(v, px, py);
        if (c < bestC - 1e-6) { bestC = c; bx = px; by = py; }
      }
      if (bx !== x[v] || by !== y[v]) { x[v] = bx; y[v] = by; moves++; movedThisSweep++; }
    }
    if (!movedThisSweep) break;
  }
}

/* A final polish that cares mostly about right angles and clearance, once the
 * overall shape has settled. */
W = { octi: 9, len: 0.6, rel: 0.35, ang: 1.0, straight: 2.4, nodeOcc: 9, edgeOcc: 7 };
for (const r of [3, 2, 1, 1, 1]) {
  for (let sweep = 0; sweep < 14; sweep++) {
    reindex();
    let movedThisSweep = 0;
    for (let v = 0; v < N; v++) {
      const base = localCost(v, x[v], y[v]);
      let bestC = base, bx = x[v], by = y[v];
      for (const [dx, dy] of DIRS) {
        const c = localCost(v, x[v] + dx * r, y[v] + dy * r);
        if (c < bestC - 1e-6) { bestC = c; bx = x[v] + dx * r; by = y[v] + dy * r; }
      }
      if (bx !== x[v] || by !== y[v]) { x[v] = bx; y[v] = by; moves++; movedThisSweep++; }
    }
    if (!movedThisSweep) break;
  }
}

/* ---- report ---------------------------------------------------------- */

reindex();
let exact = 0, worstOff = 0, collisions = 0, onLine = 0;
E.forEach(([a, b]) => {
  const th = Math.atan2(y[b] - y[a], x[b] - x[a]);
  const off = Math.abs(((th % OCT) + OCT) % OCT);
  const dev = Math.min(off, OCT - off) * 180 / Math.PI;
  if (dev < 1) exact++;
  worstOff = Math.max(worstOff, dev);
});
for (let i = 0; i < N; i++) {
  for (const w of near(nodeGrid, x[i], y[i], MIN_SEP)) {
    if (w > i && Math.hypot(x[w] - x[i], y[w] - y[i]) < MIN_SEP * 0.8) collisions++;
  }
  for (const ei of near(edgeGrid, x[i], y[i], MIN_SEP)) {
    const [a, b] = E[ei];
    if (a === i || b === i) continue;
    if (segDist(x[i], y[i], x[a], y[a], x[b], y[b]) < CLEAR * 0.7) onLine++;
  }
}

console.log('stations            ', N);
console.log('geometric edges     ', E.length);
console.log('moves accepted      ', moves);
console.log('exactly octilinear  ', exact + '/' + E.length,
            '(' + (100 * exact / E.length).toFixed(1) + '%)');
console.log('worst deviation     ', worstOff.toFixed(1) + ' deg');
console.log('station collisions  ', collisions);
console.log('station on a line   ', onLine);

/* ---- write ----------------------------------------------------------- */

let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
for (let i = 0; i < N; i++) {
  minX = Math.min(minX, x[i]); maxX = Math.max(maxX, x[i]);
  minY = Math.min(minY, y[i]); maxY = Math.max(maxY, y[i]);
}
console.log('extent (grid units) ', (maxX - minX) + ' x ' + (maxY - minY));

const out = [
  '// Octilinear layout, generated by tools/schematic.js — do not hand-edit.',
  '// Positions are integer grid units; the app scales them to fit.',
  '// Derived from the network\'s own topology, not traced from any published map.',
  '',
  'const SCHEMATIC = {'
];
ids.slice().sort((a, b) => STATIONS[a].name < STATIONS[b].name ? -1 : 1)
  .forEach(id => { const i = idx[id]; out.push('  "' + id + '": [' + x[i] + ', ' + y[i] + '],'); });
out.push('};');
fs.writeFileSync(path.join(ROOT, 'data/schematic.js'), out.join('\n') + '\n');
console.log('\nwrote data/schematic.js');

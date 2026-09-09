# London Tube, Explained

An interactive map of the London Underground that tells you where every
station name came from — all 270 of them — and flies a little train between
them along the fastest route.

It opens on an octilinear diagram in the manner of Harry Beck's 1933 map. The
**Geographic** button morphs the stations back to where they actually are, and
back again.

Open `index.html` in a browser. There is no build step and no server: the data
is plain JavaScript, so double-clicking the file works.

## What it does

* Opens on the whole network, geographically laid out, with station names.
* After a couple of seconds it picks a station at random, zooms in, and parks
  a miniature train beside it — you are the train.
* The panel at the bottom right explains the name.
* The **Go to** box at the top right searches all 270 stations. Pick one and
  the train travels there along the fastest route, changing lines where it has
  to, drawing its trail in the colour of whichever line it is on.
* Clicking a station does the same thing — its dot **or** its name. Selection is
  hit-tested on pointer-up rather than by a click listener per dot, which means
  a name counts as much as its dot, and a drag that happens to finish on a
  station does not select it. Touch gets a wider reach around each dot and more
  slack before a tap is judged a drag, since a finger is blunter than a mouse
  and wobbles.
* Three interchanges are a walk rather than a ride — Bank to Monument, and the
  two split-site stations at Edgware Road and Shepherd's Bush. On those legs the
  train marker becomes a person on foot, and turns back into a train on the
  other side.
* Drag to pan and scroll to zoom with a mouse. On touch the two are separated:
  one finger only ever selects a station, and the map is moved and scaled with
  two — pinch to zoom, and the midpoint carries the map with it. A finger that
  lands on the map is far more often reaching for a station than trying to
  shove the map about, and there is no cursor to disambiguate.
* Focusing the search box clears it, so you can type a new station without
  deleting the old one; look away without choosing and the name comes back.
* **Geographic** / **Schematic** slides between the two layouts. The stations
  travel rather than cutting, which makes the relationship between diagram and
  geography legible.

## Files

| File | What's in it |
| --- | --- |
| `index.html` | The page |
| `styles.css` | All styling |
| `app.js` | Projection, rendering, label placement, routing, animation |
| `data/network.js` | 270 stations with coordinates, 368 line segments, line colours, interchange walks |
| `data/schematic.js` | Generated octilinear positions, one grid point per station |
| `data/sources.js` | One further-reading link per station |
| `data/etymology.js` | The name origins |
| `tools/schematic.js` | Generates `data/schematic.js` — run with `node tools/schematic.js` |
| `tools/sources.py` | Generates the link list — resolves and verifies every article |

## The name origins

Each station has a one-line `gist`, a `text` explaining the derivation, and,
where the name visibly wore down, a `chain` of its recorded forms, oldest first,
which the panel renders as a row of arrows:

> Candelwrichstrete (1180) → Candlewick Street → Canwick Street → **Cannon Street**

162 stations carry a chain. Only attested forms are listed — where the
intermediate steps are not documented, the chain jumps straight from the
earliest record to the modern spelling rather than inventing a plausible middle.

Where a derivation is genuinely unsettled there is a `note` setting out the
competing theories. Thirty-four stations carry one, and the panel labels them
**No settled answer** rather than picking a winner.

The entries answer one question only: why is it called that? Every description
opens by saying so outright — "The name comes from...", "The station is named
after...", "Originally referring to..." — so the origin is the first thing you
read rather than something to be inferred from the middle of a paragraph. Where
a derivation is uncertain the opener carries the hedge ("The name comes, most
probably, from...") rather than dropping it.

Where a name comes from a word, the text gives the word and what it meant, and
where that word came from if it was itself borrowed. Where it comes from a
person, who they were. Nothing about when the station opened, who designed it or
what happened there.

They fall into three groups:

* **Names where scholars disagree**, usually because one Old English element is
  ambiguous — Balham, Kilburn, Chigwell, Wanstead, Dollis Hill, Turnham Green,
  Walthamstow, Kennington.
* **Names with a popular story that the evidence contradicts.** Charing Cross is
  not *chère reine*; Elephant & Castle is not the *Infanta de Castilla*;
  Knightsbridge records no duel; Whetstone predates the Battle of Barnet by
  half a century; Hainault has nothing to do with Philippa of Hainault, whose
  name was retro-fitted to an Old English word for a monastic wood.
* **Names nobody has explained**, most conspicuously Pimlico, which the standard
  place-name authorities record as origin unknown.

Where a fact is a matter of local tradition rather than record — Gunnersbury's
Gunhilda, Burnt Oak's Roman boundary marker — the text says so.

## Where the derivations come from, and what the links are

The entries were written from the standard body of English place-name
scholarship — the kind set out in A. D. Mills's *A Dictionary of London Place
Names*, Ekwall's *Concise Oxford Dictionary of English Place-Names* and Watts's
*Cambridge Dictionary of English Place-Names* — rather than transcribed from
particular web pages. The panel therefore carries a **further-reading link**,
not a citation: it points at the Wikipedia article for that station, which
covers the same ground and can be checked, but it is not the place the text came
from and is not offered as one.

The links are not guesses. `tools/sources.py` puts every candidate title through
the MediaWiki API, follows redirects to the canonical article and keeps only
titles the API confirms exist. All 270 resolve — 54 of them to combined National
Rail articles such as *Cannon Street station*, and Bank and Monument to the
single article they share.

**What was actually checked.** `tools/verify.py` then fetched all 270 articles
and tested, for each, whether the article corroborates the derivation given
here — matching on the distinctive things an entry commits to, such as the
earliest recorded form or the Old English root. The panel shows a tick beside
the link where it does:

| | |
| --- | --- |
| ✓ Wikipedia | 220 stations — the article supports the derivation |
| Wikipedia | 50 stations — the article never discusses the name, so it corroborates nothing either way |

The check earned its keep. Elm Park was wrong: the entry called it a 1930s
developer's invention, and the article records Elm Farm in 1777 and the Elms in
1883, so the name is older than the estate built over it. Upton Park and
Northwick Park were named at one remove — after a Victorian housing development
and a public park respectively — and both entries now say so.

What is still not done is citing a scholarly source per station. That is a
larger job: a reference book per name, and a rewrite wherever it disagrees.

## Routing

Dijkstra over `(station, line)` states rather than plain stations, so that
staying on a train is cheaper than changing off it. Edge weights are approximate
scheduled running times in minutes, plus a six-minute penalty for changing line.
This reproduces the journeys a Londoner would actually make: Vauxhall to
Paddington comes out as the Victoria line to Oxford Circus, then the Bakerloo.

Three passageway and out-of-station interchanges are modelled as walks
(`TRANSFERS` in `data/network.js`): Bank–Monument, the two Edgware Roads, and
Shepherd's Bush–Shepherd's Bush Market. They are drawn as dotted grey lines.

## The two maps

**Schematic** (the default) is an octilinear layout: every line runs at a
multiple of 45°, adjacent stations sit roughly the same distance apart, and the
centre is magnified relative to the suburbs — the three moves that make Beck's
diagram work. It is generated, not traced. Nothing is copied from TfL's
copyrighted map; the layout is derived from the network's own topology by
`tools/schematic.js`, and it does not come out looking exactly like the official
diagram, because Beck and his successors made thousands of hand judgements no
optimiser reproduces.

The generator, following Stott et al. (2011), works in three stages:

1. **Seed.** Start from the real coordinates, apply a radial power transform
   about the centre of gravity of zone 1 to magnify the middle, then run a
   short spring relaxation so every edge ends up about the same length while a
   weak anchor keeps London's overall shape.
2. **Hill-climb.** Snap to an integer grid and repeatedly offer each station
   the eight neighbouring grid points at a shrinking radius, moving it whenever
   that lowers a weighted sum of six penalties: deviation from 45°, uneven edge
   length, drift from the original bearing, crowded angles at a junction,
   stations too close together, and stations sitting on somebody else's line.
   A seventh rewards a line running straight through the stations between its
   junctions, which is what gives the diagram its long clean runs.
3. **Polish.** A final pass that cares mostly about right angles and clearance.

The current output puts 94% of edges on an exact 45° multiple, with no station
collisions. The remaining edges are drawn with a single bend at render time, so
no line is ever seen at an odd angle.

**Geographic** places each station at its real latitude and longitude,
projected equirectangular with a `cos(lat)` correction. Central London is
genuinely as congested as it is in life, which is what the zoom is for. Track
between stations is drawn as a straight chord, not the real tunnel alignment.

In both layouts, where several lines run between the same two stations they are
fanned out either side of the centre line — which for the schematic means
offsetting a bent polyline, each segment shifting along its own normal and
consecutive segments meeting at the intersection of the shifted lines.

Line colours are the TfL house palette, on white, which is what they were
designed for — the Northern line's black and the Circle's yellow both read
correctly without being tampered with. Interchanges are hollow rings and
ordinary stations solid dots, as on a printed map. Station names are dark type
with a white halo behind them, so a name stays readable where it crosses a
line; the halo width is set in code because it has to track the zoom.

While a journey is running the map dims — except for the lines that journey
actually uses, which stay at full colour, so you can see the Victoria blue you
are riding and the Bakerloo brown you are about to change onto even as the
camera pulls right back.

Labels are placed by a greedy declutter pass on every frame: stations are tried
in order of importance (interchanges first, then by zone), each gets up to four
candidate positions, and anything that will not fit without overlapping — or
that would fall under one of the floating panels — is dropped. Zoom in and the
dropped ones reappear.

## Coverage and its limits

* **In:** the eleven London Underground lines and their 270 stations, including
  Nine Elms and Battersea Power Station (2021), Wood Lane (2008) and Heathrow
  Terminal 5 (2008).
* **Out:** the Elizabeth line, the Overground, the DLR and the trams. They are
  not the Underground, and adding them would mean a second set of colours and
  a much larger claim about what a "tube station" is.

The geographic coordinates and running times come from the openly available
[tubemaps dataset](https://github.com/nicola/tubemaps), which reflects the
network around 2012. Station names have been brought up to date (Heathrow
Terminals 2 & 3, Shepherd's Bush Market, Harrow & Wealdstone), the four stations
opened since have been added by hand, and the East London line has been removed,
it having become part of the Overground in 2010. Coordinates are accurate to
roughly the width of a station building, which is ample at this scale but is not
a survey.

TfL's own count of Underground stations is 272; this map has 270. The difference
is a matter of how you count stations that share a name or an interchange, not
of missing places.

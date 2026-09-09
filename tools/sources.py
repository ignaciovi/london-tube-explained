"""Resolve every station to a Wikipedia article that actually exists.

Nothing is guessed: each candidate title is checked against the MediaWiki API
and only a title the API confirms (after following redirects) is kept.
"""
import json, re, subprocess, sys, time, urllib.parse

ROOT = "/Users/ignaciovaldelviraisla/Repos/london-tube-explained"
API = "https://en.wikipedia.org/w/api.php"
UA = {"User-Agent": "london-tube-explained/1.0 (local project)"}

names = json.load(open(sys.argv[2]))
print(len(names), "stations")

# a handful of stations whose article is not "<name> tube station"
SPECIAL = {
    "edgware-road-bakerloo": ["Edgware Road tube station (Bakerloo line)"],
    "edgware-road-circle": ["Edgware Road tube station (Circle, District and Hammersmith & City lines)"],
    "watford-met": ["Watford tube station"],
    "kensington-olympia": ["Kensington (Olympia) station"],
    "hammersmith": ["Hammersmith station (London)",
                    "Hammersmith tube station (Circle and Hammersmith & City lines)"],
    "bank": ["Bank and Monument stations"],
    "monument": ["Bank and Monument stations"],
}

def candidates(slug, name):
    out = list(SPECIAL.get(slug, []))
    base = re.sub(r"\s*\((Bakerloo|Circle|Met)\)$", "", name)
    out += [f"{base} tube station", f"{base} station", base]
    seen, uniq = set(), []
    for c in out:
        if c not in seen:
            seen.add(c); uniq.append(c)
    return uniq

def api(params):
    """curl rather than urllib: this Python has no configured CA bundle."""
    url = API + "?" + urllib.parse.urlencode(params)
    for attempt in range(4):
        r = subprocess.run(["curl", "-sS", "--max-time", "40",
                            "-H", "User-Agent: london-tube-explained/1.0", url],
                           capture_output=True, text=True)
        if r.returncode == 0 and r.stdout.strip().startswith("{"):
            return json.loads(r.stdout)
        if attempt == 3:
            raise RuntimeError(r.stderr or r.stdout[:200])
        time.sleep(1.5 * (attempt + 1))

def exists(titles):
    """title -> resolved title, for those that exist."""
    found = {}
    for i in range(0, len(titles), 40):
        chunk = titles[i:i + 40]
        d = api({"action": "query", "format": "json", "redirects": 1,
                 "titles": "|".join(chunk)})
        q = d.get("query", {})
        norm = {n["from"]: n["to"] for n in q.get("normalized", [])}
        redir = {r["from"]: r["to"] for r in q.get("redirects", [])}
        live = {p["title"] for p in q.get("pages", {}).values() if "missing" not in p}
        for t in chunk:
            r = redir.get(norm.get(t, t), norm.get(t, t))
            if r in live:
                found[t] = r
        time.sleep(0.2)
    return found

resolved, pending = {}, list(names.items())
for round_no in range(4):
    if not pending:
        break
    probe, owner = [], {}
    for slug, name in pending:
        cs = candidates(slug, name)
        if round_no < len(cs):
            probe.append(cs[round_no]); owner[cs[round_no]] = slug
    if not probe:
        break
    found = exists(sorted(set(probe)))
    still = []
    for slug, name in pending:
        cs = candidates(slug, name)
        t = cs[round_no] if round_no < len(cs) else None
        if t and t in found:
            resolved[slug] = found[t]
        else:
            still.append((slug, name))
    print(f"round {round_no}: resolved {len(resolved)}, left {len(still)}")
    pending = still

if pending:
    print("UNRESOLVED:", [n for _, n in pending])

json.dump(resolved, open(sys.argv[1], "w"), ensure_ascii=False, indent=0)
print("wrote", len(resolved))

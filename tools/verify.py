"""Fetch each station's article and test whether it corroborates our derivation.

The test is deliberately mechanical: we take the distinctive tokens out of our
own entry — the earliest recorded form from the chain, the Old English roots,
the personal names — and ask whether the article contains any of them. A hit is
corroboration; a miss is something for a human to look at, not a verdict.
"""
import json, re, subprocess, sys, time, urllib.parse

API = "https://en.wikipedia.org/w/api.php"

def api(params):
    """Wikimedia rate-limits hard, so back off generously and keep going."""
    url = API + "?" + urllib.parse.urlencode(params)
    for attempt in range(6):
        r = subprocess.run(["curl", "-sS", "--max-time", "60",
                            "-H", "User-Agent: london-tube-explained/1.0 (local project)",
                            url], capture_output=True, text=True)
        if r.returncode == 0 and r.stdout.strip().startswith("{"):
            return json.loads(r.stdout)
        time.sleep(4 * (attempt + 1))
    return {}

titles = json.load(open(sys.argv[1]))          # slug -> article title
entries = json.load(open(sys.argv[2]))         # slug -> {gist, chain, text}

want = sorted({t for t in titles.values()})
text_by_title = {}

# pass 1: intros, twenty at a time — cheap, and enough for many stations
for i in range(0, len(want), 20):
    chunk = want[i:i + 20]
    d = api({"action": "query", "format": "json", "redirects": 1,
             "prop": "extracts", "explaintext": 1, "exintro": 1, "exlimit": 20,
             "titles": "|".join(chunk)})
    for p in d.get("query", {}).get("pages", {}).values():
        if "extract" in p:
            text_by_title[p["title"]] = p["extract"]
    print(f"  intros {len(text_by_title)}/{len(want)}", flush=True)
    time.sleep(1.0)

json.dump(text_by_title, open(sys.argv[3] + ".intros", "w"))

def tokens(slug, e):
    """distinctive strings our entry commits to"""
    out = []
    for form in (e.get("chain") or [])[:-1]:
        out.append(re.sub(r"\s*\(.*?\)", "", form).strip())
    body = e["text"] + " " + e["gist"]
    # italicised roots and quoted forms we cite, e.g. eowestre, hlȳp, Cnihtebricge
    out += re.findall(r"\b([A-Za-zÆæÐðÞþȳēāīōūǣ]{4,})(?=,? (?:a |an |the |meaning|which))", body)
    out += re.findall(r"called ([A-ZÆ][A-Za-zÆæðþȳēāīōū]{2,})", body)
    return [t for t in {t.strip() for t in out} if len(t) >= 4]

def norm(s):
    s = s.lower()
    for a, b in [("æ","ae"),("ð","d"),("þ","th"),("ȳ","y"),("ē","e"),("ā","a"),
                 ("ī","i"),("ō","o"),("ū","u"),("ǣ","ae"),("'","'")]:
        s = s.replace(a, b)
    return s

result = {}
for slug, title in titles.items():
    art = norm(text_by_title.get(title, ""))
    hits = [t for t in tokens(slug, entries[slug]) if norm(t) in art]
    result[slug] = {"title": title, "has_article_text": bool(art),
                    "hits": hits, "tokens": tokens(slug, entries[slug])}

ok = [k for k, v in result.items() if v["hits"]]
none = [k for k, v in result.items() if not v["hits"] and v["has_article_text"]]
notext = [k for k, v in result.items() if not v["has_article_text"]]
print(f"\ncorroborated : {len(ok)}")
print(f"no token hit : {len(none)}")
print(f"no article   : {len(notext)}")
json.dump(result, open(sys.argv[3], "w"), ensure_ascii=False, indent=0)

"""Pass 2: for stations the intro did not corroborate, fetch the whole article."""
import json, re, subprocess, sys, time, urllib.parse
sys.path.insert(0, "/private/tmp/claude-501/-Users-ignaciovaldelviraisla-Repos-london-tube-explained/dcea97fb-ca71-499b-9cfc-3556c1b2f82c/scratchpad")
API = "https://en.wikipedia.org/w/api.php"

def api(params):
    url = API + "?" + urllib.parse.urlencode(params)
    for attempt in range(6):
        r = subprocess.run(["curl", "-sS", "--max-time", "60",
                            "-H", "User-Agent: london-tube-explained/1.0 (local project)", url],
                           capture_output=True, text=True)
        if r.returncode == 0 and r.stdout.strip().startswith("{"):
            return json.loads(r.stdout)
        time.sleep(4 * (attempt + 1))
    return {}

titles  = json.load(open(f"{sys.argv[1]}/sources.json"))
entries = json.load(open(f"{sys.argv[1]}/entries.json"))
prev    = json.load(open(f"{sys.argv[1]}/verify.json"))
full    = json.load(open(f"{sys.argv[1]}/verify.json.intros"))

def tokens(e):
    out = []
    for form in (e.get("chain") or [])[:-1]:
        out.append(re.sub(r"\s*\(.*?\)", "", form).strip())
    body = e["text"] + " " + e["gist"]
    out += re.findall(r"\b([A-Za-zÆæÐðÞþȳēāīōūǣ]{4,})(?=,? (?:a |an |the |meaning|which))", body)
    out += re.findall(r"called ([A-ZÆ][A-Za-zÆæðþȳēāīōū]{2,})", body)
    return [t for t in {t.strip() for t in out} if len(t) >= 4]

def norm(s):
    s = s.lower()
    for a, b in [("æ","ae"),("ð","d"),("þ","th"),("ȳ","y"),("ē","e"),("ā","a"),
                 ("ī","i"),("ō","o"),("ū","u"),("ǣ","ae"),("’","'")]:
        s = s.replace(a, b)
    return s

todo = [k for k, v in prev.items() if not v["hits"]]
print(len(todo), "to re-check with full article text", flush=True)
for n, slug in enumerate(todo, 1):
    t = titles[slug]
    if t not in full or len(full[t]) < 4000:
        d = api({"action": "query", "format": "json", "redirects": 1,
                 "prop": "extracts", "explaintext": 1, "titles": t})
        for p in d.get("query", {}).get("pages", {}).values():
            if "extract" in p:
                full[t] = p["extract"]
        time.sleep(1.1)
    art = norm(full.get(t, ""))
    hits = [x for x in tokens(entries[slug]) if norm(x) in art]
    prev[slug]["hits"] = hits
    prev[slug]["full"] = True
    if n % 25 == 0:
        print(f"  {n}/{len(todo)}", flush=True)

json.dump(prev, open(f"{sys.argv[1]}/verify.json", "w"), ensure_ascii=False, indent=0)
json.dump(full, open(f"{sys.argv[1]}/articles.json", "w"), ensure_ascii=False)
ok   = [k for k, v in prev.items() if v["hits"]]
miss = [k for k, v in prev.items() if not v["hits"]]
print(f"\ncorroborated: {len(ok)}   still no hit: {len(miss)}")

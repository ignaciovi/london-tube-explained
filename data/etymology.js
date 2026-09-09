// Why each London Underground station is called what it is called.
//
// Every description opens by stating where the name comes from.
//
// `gist`  – the derivation in one line
// `chain` – the recorded forms of the name, oldest first, ending in today's
//           spelling. Present wherever the name visibly wore down; only forms
//           that are actually attested are listed.
// `text`  – what the elements meant and why they applied to this place. Where
//           the name comes from another word, where that word came from.
// `note`  – present only where there is no scholarly consensus.

const ETYMOLOGY = {
  "acton-town": {
    gist: "“The farmstead by the oak trees”.",
    chain: ["Actune (1181)", "Acton", "Acton Town"],
    text: "The name comes from Old English āc, an oak, and tūn, a farmstead — the farm cleared out of the oak woods that covered west Middlesex. “Town” was added in 1910 because the railways had by then produced half a dozen Actons, and this was the one at the old village centre."
  },
  "aldgate": {
    gist: "One of the gates through the City wall — but which kind of gate is disputed.",
    chain: ["Alegate (c.1108)", "Algate", "Aldgate"],
    text: "The name comes from the easternmost of the gates through London's Roman and medieval wall. What the first element meant is the difficulty: the earliest spelling is Alegate, not Ealdgate, which is why the obvious modern reading — “old gate” — is the one scholars distrust.",
    note: "Three readings compete. Old English eald geat, “old gate”, is intuitive but does not fit the early spellings. Ealu geat, “ale gate”, would be a gate where ale was sold or given out. Eal geat, “the gate free to all”, meaning one that charged no toll, was Eilert Ekwall's suggestion. The spellings favour the last two; none is proven."
  },
  "aldgate-east": {
    gist: "The station east of Aldgate.",
    text: "The station is named for its position east of Aldgate, a railway coinage of 1884 when the line was pushed past the older station. Aldgate itself is one of the gates through the City wall."
  },
  "alperton": {
    gist: "“The farmstead of Ealhbeorht's people”.",
    chain: ["Alprinton (1199)", "Alperton"],
    text: "The name comes from a man called Ealhbeorht who held land here in the Anglo-Saxon period: his name, plus the connecting “-ing-” meaning “the people of”, plus tūn, a farmstead. Five syllables wore down to three."
  },
  "amersham": {
    gist: "“The homestead of a man called Ealhmund”.",
    chain: ["Elmodesham (1086)", "Agmodesham", "Amersham"],
    text: "The name comes from a man called Ealhmund and Old English hām, a homestead — “Ealhmund's village”. The personal name was eaten away at both ends over five centuries until only its middle survived in the modern spelling."
  },
  "angel": {
    gist: "A coaching inn, the Angel, named from its sign.",
    text: "The station is named after the Angel Inn, which stood where the Great North Road met the New Road and was the first stop out of the City for northbound coaches. Coaching inns were the landmarks travellers steered by, so the crossroads took the inn's name and then the district did. The inn took its own name from its painted sign, which showed the Angel of the Annunciation."
  },
  "archway": {
    gist: "A bridge carrying Hornsey Lane over the road below.",
    text: "The station is named after the Archway, the viaduct built in 1813 to carry Hornsey Lane over a new cutting driven through Highgate Hill so that carts could avoid the climb. Londoners called the structure simply the Archway, and the name spread to the road running beneath it and then to the district."
  },
  "arnos-grove": {
    gist: "A wood held by a family called Arnold.",
    chain: ["Arnoldes (1373)", "Arnolds Grove", "Arnos Grove"],
    text: "The name comes from a family called Arnold, who held land here in the Middle Ages; medieval records identify the ground by their surname. Grove — a small wood — later replaced the older word for it, and the family name contracted to Arnos."
  },
  "arsenal": {
    gist: "The football club, which took its name from a weapons factory.",
    chain: ["Gillespie Road (1906)", "Arsenal (Highbury Hill)", "Arsenal"],
    text: "The station is named after Arsenal FC, founded in 1886 by workers at the Royal Arsenal in Woolwich, who carried the factory's name north when the club moved to Highbury in 1913. “Arsenal” means a store or workshop of weapons, and reached English through Italian arzanale from Arabic dar as-sina'a, “house of manufacture”. The station was Gillespie Road until the club's manager Herbert Chapman had it renamed in 1932."
  },
  "baker-street": {
    gist: "William Baker, the builder who laid the street out.",
    text: "The station is named after William Baker, the builder who took the fields on lease from the Portman family and laid the street out in the 1750s. Streets on the great London estates were routinely named after the landowner, his titles, his country seats or — as here — the man who built them."
  },
  "balham": {
    gist: "An Old English settlement name whose first element is not securely identified.",
    chain: ["Bælgenham (957)", "Balgeham", "Balham"],
    text: "The name comes from Old English hām, a homestead, or hamm, an enclosure or river meadow: the second element is clear enough. The first is the problem.",
    note: "Most accounts take the first element as a personal name, *Bealga, giving “Bealga's homestead”. Others derive it from Old English bealg, “rounded, smooth”, describing the low swell of ground the village sits on. Only one early spelling survives, and it will not decide between them."
  },
  "bank": {
    gist: "The Bank of England, directly above.",
    text: "The station is named after the Bank of England, which has stood on the site above since 1734 and gives its name to the junction of eight streets outside. The word itself comes from Italian banca, the money-changer's bench or counter."
  },
  "barbican": {
    gist: "A barbican — the outer fortification guarding a gate.",
    chain: ["Barbecanna (1275)", "Barbican"],
    text: "The name comes from the barbican that stood near Aldersgate on the line of the City wall — a watchtower or outwork built in front of a gate to defend it. The word came through Old French barbacane, and before that probably from Persian or Arabic. The station carried the name Aldersgate Street until 1968."
  },
  "barking": {
    gist: "“The settlement of Berica's people”.",
    chain: ["Berecingas (c.730)", "Berchinges (1086)", "Barking"],
    text: "The name comes from a man called Berica and the Old English suffix “-ingas”, “the people or followers of” — one of the oldest layers of English place-naming, in which a group is identified by the man who led them.",
    note: "The personal name is inferred rather than attested. An alternative reads the first element as beorc, “birch”, giving “the people of the birch place”. The group name is not in doubt; its owner is."
  },
  "barkingside": {
    gist: "The side of the parish nearest Barking.",
    chain: ["Barkyngsyde (1538)", "Barkingside"],
    text: "Originally referring to the part of Ilford that lay on the side facing Barking, the parish that administered it. “Side” in this sense — the district over that way — was ordinary usage."
  },
  "barons-court": {
    gist: "A name invented by a developer in the 1870s.",
    text: "The name was invented by Sir William Palliser, who laid out the estate here in the 1870s and coined a title for it. No baron ever held a court on the spot, and there is no older settlement of the name.",
    note: "It is generally taken to honour Baronscourt in County Tyrone, seat of the Dukes of Abercorn, to whose family Palliser had Irish connections — but that is an inference from his background, not a recorded statement of intent. A rival suggestion is that he simply echoed neighbouring Earl's Court to make the address sound grand. The missing apostrophe — Barons, not Baron's — is often read as evidence that no particular baron was meant."
  },
  "battersea-power-station": {
    gist: "The power station, on “Beaduric's island”.",
    chain: ["Badrices īeg (693)", "Patricesy (1086)", "Battersey", "Battersea"],
    text: "The station is named after the power station beside it, and Battersea after a man called Beaduric. Old English īeg means an island, or in practice a patch of ground high enough to stay dry in marshland, which is what this bend of the Thames offered him. The Norman clerks of Domesday misheard the first element as Patrick, and the spelling wandered back afterwards."
  },
  "bayswater": {
    gist: "“Bayard's watering place”.",
    chain: ["Bayards Watering (1380)", "Bayswater"],
    text: "The name comes from a roadside pond or spring where horses were watered, generally traced to the Norman Baynard family, who held land here and also gave their name to Baynard's Castle in the City. Bayard was additionally a common name for a bay horse, which may have helped the form along."
  },
  "becontree": {
    gist: "“Beohha's tree” — the meeting place of the hundred.",
    chain: ["Beventreu (1086)", "Beghentre", "Becontree"],
    text: "The name comes from a prominent tree known by the name of a man called Beohha. A hundred was an Anglo-Saxon administrative district whose court met in the open air at a landmark everyone could find, and this tree was that landmark."
  },
  "belsize-park": {
    gist: "Norman French bel assis — “beautifully situated”.",
    chain: ["Belasis (1317)", "Belsize"],
    text: "The name comes from Norman French bel assis, “beautifully situated”. The manor house stood on the slope of Hampstead looking south over open country towards the City, and its owners named it for the view; the park is its former grounds."
  },
  "bermondsey": {
    gist: "“Beornmund's island”.",
    chain: ["Vermundesei (712)", "Bermundeseye", "Bermondsey"],
    text: "The name comes from a man called Beornmund and Old English īeg, an island — here a patch of firm ground standing above the Thames marshes. The same element ends Battersea, Chelsea and Hackney."
  },
  "bethnal-green": {
    gist: "“Blitha's corner of land”, and the hamlet green.",
    chain: ["Blithehale (1231)", "Blithenhale (1443)", "Bethnal Green"],
    text: "The name comes from Old English halh, a nook or corner of land, with a first element that is either a personal name, Blitha, or the word “blīthe”, pleasant. “Green” is the common the hamlet grew around, added once the settlement had outgrown the corner."
  },
  "blackfriars": {
    gist: "The Dominican friary, whose friars wore black.",
    text: "The station is named after the Dominican friary that held a precinct between Ludgate Hill and the river from 1276 until the Dissolution. Londoners identified religious orders by the colour of their habits — black friars here, white friars at Whitefriars, grey friars at Greyfriars — and the district kept the nickname long after the friars had gone."
  },
  "blackhorse-road": {
    gist: "A road named for the Black Horse.",
    chain: ["Black House Lane / Black Horse Lane (18th c.)", "Blackhorse Road"],
    text: "The name comes from Black Horse Lane in Walthamstow, recorded from the 18th century — but in two forms, which is the whole difficulty.",
    note: "The usual reading is an inn sign, the Black Horse, and the station's tiling and its relief sculpture both commit to it. The competing derivation is Black House, a farm that stood nearby, with Horse a later mishearing. Both spellings are recorded and no document settles which came first."
  },
  "bond-street": {
    gist: "Sir Thomas Bond, who developed the street.",
    text: "The station is named after Sir Thomas Bond, who headed the syndicate that bought Clarendon House in Piccadilly in 1683, pulled it down and cut streets across its gardens. He died two years later with the work barely begun, but the street kept his name; New Bond Street is the northward continuation added in the 1720s."
  },
  "borough": {
    gist: "“The Borough” — Southwark, at the far end of London Bridge.",
    text: "The name comes from Old English burh, a fortified place, which came to mean a town holding its own privileges and courts. Southwark was a borough in its own right, outside the City's jurisdiction, and Londoners referred to it simply as the Borough — the one across the bridge — rather than by name."
  },
  "boston-manor": {
    gist: "A manor house whose name descends from “Bord's estate”.",
    chain: ["Bordwadesbenne (1274)", "Bordeston", "Boston"],
    text: "The station is named after Boston Manor House, whose name descends from an Old English personal name plus tūn, a farmstead. The contraction to Boston is coincidental: there is no connection with Boston in Lincolnshire, which is a different name entirely."
  },
  "bounds-green": {
    gist: "The green belonging to the medieval Bounds family.",
    chain: ["Boundes Green (1608)", "Bounds Green"],
    text: "The name comes from the Bounds family, of whom John de Bounds held land here in the 14th century. A green was the common grazing at the centre of a hamlet, and it was routinely identified by whoever held the land around it."
  },
  "bow-road": {
    gist: "The bow — the arch — of the bridge over the River Lea.",
    chain: ["Stratford-atte-Bow (c.1177)", "Bow"],
    text: "The name comes from the bow — the arch — of a bridge built over the River Lea around 1110, which was unusual enough then to become the settlement's identifying feature. The full name was Stratford-atte-Bow, distinguishing it from Stratford across the river; the first half was eventually dropped."
  },
  "brent-cross": {
    gist: "The crossing of the River Brent.",
    text: "The name comes from the River Brent, which is older than English: a British word related to the goddess-name Brigantia, meaning “high one” or “holy one”. River names are the most durable layer of British place-names, often outliving every change of language around them. “Cross” is the road crossing; the station was called simply Brent until 1976."
  },
  "brixton": {
    gist: "“The stone of a man called Beorhtsige”.",
    chain: ["Brixges stan (1062)", "Brixiestan", "Brixton"],
    text: "The name comes from a stone — Old English stān — that marked the meeting place of Brixton hundred, the district's open-air court, and was known by the name of the man who set it up or owned the land, Beorhtsige. The stone itself vanished long ago."
  },
  "bromley-by-bow": {
    gist: "“The woodland clearing where broom grows”.",
    chain: ["Braembelege (1000)", "Bromleg", "Bromley", "Bromley-by-Bow"],
    text: "The name comes from Old English brōm, the yellow-flowered shrub that colonises poor sandy ground, and lēah, a clearing in woodland. The suffix was added in 1967 to stop passengers confusing it with Bromley in Kent — which is a different name again, “the clearing where brambles grow”."
  },
  "buckhurst-hill": {
    gist: "“The beech wood”, on a hill.",
    chain: ["Bocherst (1135)", "Buckhurst"],
    text: "The name comes from Old English bōc, a beech tree, and hyrst, a wooded hill — the beeches of what is now Epping Forest. The same bōc gives the word “book”, from the beech boards early writings were bound between."
  },
  "burnt-oak": {
    gist: "A burnt oak tree that marked a boundary.",
    text: "The name comes from a burnt oak that stood beside Watling Street and served as a boundary marker. Such markers had to be unmistakable and permanent, and a tree deliberately fired left a black landmark that would stand for generations.",
    note: "The often-told version, that the oak was burnt by the Romans to mark a boundary on Watling Street, is undocumented. All that is certain is that a burnt oak stood hereabouts and was well enough known to name the place."
  },
  "caledonian-road": {
    gist: "The Royal Caledonian Asylum, a school for Scottish soldiers' children.",
    chain: ["Chalk Road (1826)", "Caledonian Road"],
    text: "The station is named after the Royal Caledonian Asylum, a boarding school for the children of Scots servicemen killed in the Napoleonic wars, built alongside the road in 1828. The road had been Chalk Road, named for its surface, until the school gave it a better one; Caledonia is the Roman name for Scotland."
  },
  "camden-town": {
    gist: "Charles Pratt, 1st Earl Camden, who began building here.",
    text: "The station is named after Charles Pratt, 1st Earl Camden, who granted the first building leases on his fields here in 1791. His title came from Camden Place in Chislehurst, the house he had married into, which was itself named after its earlier owner — the Elizabethan historian William Camden."
  },
  "canada-water": {
    gist: "A dock where Canadian timber ships unloaded.",
    text: "The station is named after Canada Dock, one of the Surrey Commercial Docks, which took the softwood shipped from Quebec and the Maritimes. The basins were named for the trades that used them, as Greenland Dock had been named for the whalers; when the docks closed, the surviving stretch of water kept the name."
  },
  "canary-wharf": {
    gist: "A warehouse berth named for the Canary Islands fruit trade.",
    text: "The station is named after a berth in the West India Docks, rebuilt in 1936 for a shipping line running tomatoes and bananas from the Canary Islands and named after the route. The islands themselves are named from Latin canis, a dog: Roman accounts of the expedition that found them describe the place as full of large dogs. The birds were named after the islands, not the other way round."
  },
  "canning-town": {
    gist: "Named after a Canning — but nobody is sure which one.",
    text: "The name comes from somebody called Canning: the settlement grew from the 1840s around the ironworks and the docks, and appears as Canning Town in the 1850s.",
    note: "The most-repeated candidate is Charles John Canning, 1st Earl Canning, Governor-General of India from 1856, whose dates fit neatly. Others propose his father George Canning, the Prime Minister who died in 1827, or Samuel Canning, engineer of the Atlantic telegraph cable that was made at works nearby. No founding document survives to settle it."
  },
  "cannon-street": {
    gist: "The street of the candle-makers — nothing to do with artillery.",
    chain: ["Candelwrichstrete (1180)", "Candlewick Street", "Canwick Street", "Cannon Street"],
    text: "The name comes from the candle-wrights — the makers of candles, and the wax chandlers who supplied the churches — who were concentrated in this street in the Middle Ages, and for whose trade it was named. Over four centuries the mouthful was worn down in ordinary speech, syllable by syllable, until it arrived at a word that looks like artillery and has nothing whatever to do with it."
  },
  "canons-park": {
    gist: "The park of the canons of St Bartholomew's Priory.",
    text: "The name comes from the Augustinian canons of St Bartholomew's, Smithfield, who held the manor of Little Stanmore until the Dissolution — a canon being a clergyman living under rule in a cathedral or priory community. The mansion later built on their land was named Cannons after them, and the park is its grounds."
  },
  "chalfont-and-latimer": {
    gist: "“The calves' spring”, and a manor held by the Latimer family.",
    chain: ["Celfunte (1086)", "Chalfhunte", "Chalfont"],
    text: "The name comes from Old English cealf, a calf, and funta, a spring — a word borrowed from Latin fontana and used specifically for springs the Romans had built up. “Latimer” comes from the family who held the manor, whose surname was occupational: a latimer was an interpreter or Latin-speaker. The place was Isenhampstead Latimer until the 19th century."
  },
  "chalk-farm": {
    gist: "A corruption of Chalcots, “the cold cottages”.",
    chain: ["Chaldecote (1253)", "Chalcots", "Chalk Cot", "Chalk Farm"],
    text: "The name comes from Old English ceald cot, “the cold cottages” — exposed dwellings on the open hillside. Once the original words had stopped meaning anything to the people saying them, the name drifted towards two familiar ones that made a kind of sense. There is no chalk here, the ground being London clay, and there was never a farm."
  },
  "chancery-lane": {
    gist: "The Court of Chancery, the Lord Chancellor's court.",
    chain: ["New Street (1227)", "Chancellor's Lane", "Chancery Lane"],
    text: "The station is named after the Court of Chancery, whose archive of records — the Rolls — Edward III moved into a converted building on this street in 1377. Chancery is a contraction of chancellery, the chancellor's office, from Latin cancellarius: originally the doorkeeper who stood at the cancelli, the lattice screen of a Roman court."
  },
  "charing-cross": {
    gist: "The Eleanor Cross at the hamlet of Charing.",
    chain: ["Cerring (1002)", "Cherringe", "Charing", "Charing Cross"],
    text: "The station is named after the Eleanor Cross that stood here, the last of twelve raised by Edward I in 1291–94 at each place his wife Eleanor of Castile's body rested on its journey to Westminster for burial. The hamlet was already called Charing, from Old English cierring, a bend — almost certainly the sharp turn the Thames makes here.",
    note: "The story that Charing comes from chère reine, “dear queen”, is folk etymology of the most appealing kind, and wrong: the hamlet is recorded as Cerring in 1002, nearly three centuries before Eleanor died."
  },
  "chesham": {
    gist: "“The river meadow by the heap of stones”.",
    chain: ["Cæstæleshamm (1012)", "Chestham", "Chesham"],
    text: "The name comes from Old English ceastel, a heap or cairn of stones, and hamm, a meadow enclosed in a bend of a river — here the Chess, which runs through the town. The stones may have been a marker or simply the stony bed of the stream."
  },
  "chigwell": {
    gist: "A spring or well — whose, or of what, is unsettled.",
    chain: ["Cinghewella (1187)", "Chiggewell", "Chigwell"],
    text: "The name comes from Old English wella, a spring or the stream running from one; springs were named after whoever owned them or whatever they ran through. Which of those applies here is the question.",
    note: "The first element is argued over. It is usually taken as a personal name, Cicca, giving “Cicca's spring”. The alternative is Old English cēacge, “shingle” or “gravel”, giving “the spring in the gravel”. Both fit the recorded spellings."
  },
  "chiswick-park": {
    gist: "Chiswick is “the cheese farm”.",
    chain: ["Ceswican (c.1000)", "Chesewik", "Chiswick"],
    text: "The name comes from Old English cēse, cheese, and wīc — not an ordinary farm but one specialising in a single product, here a dairy working the riverside meadows. Wīc was borrowed from Latin vicus, a settlement, and survives in dozens of English place-names for specialised holdings."
  },
  "chorleywood": {
    gist: "“The wood of the ceorls” — the free peasants.",
    chain: ["Charleywood (1524)", "Chorleywood"],
    text: "The name comes from Old English ceorla lēah, the clearing of the ceorls — free men of the lowest rank, who held it in common rather than under a lord. The word survives in modern English as “churl”. “Wood” was added later, once lēah had stopped meaning anything to the people saying it."
  },
  "clapham-common": {
    gist: "“The homestead by the hill”, and its common land.",
    chain: ["Cloppaham (c.880)", "Clopeham", "Clapham"],
    text: "The name comes from Old English clopp, a hill or lump of rock, and hām, a homestead — the settlement on the rise. The common is the manorial waste, the rough ground a lord left open for his tenants to graze."
  },
  "clapham-north": {
    gist: "The northern of the three Claphams.",
    chain: ["Clapham Road (1900)", "Clapham North"],
    text: "The name comes from Old English clopp, a hill, and hām, a homestead. This station was named after the road it stands on and took a compass point in 1926, when a third Clapham on the same line made plain names impossible."
  },
  "clapham-south": {
    gist: "The southern of the three Claphams.",
    text: "The name comes from Old English clopp, a hill, and hām, a homestead. “South” distinguishes this station from Clapham Common and Clapham North, all three on the same stretch of line."
  },
  "cockfosters": {
    gist: "Probably “chief forester” — the head forester of Enfield Chase.",
    text: "The name comes, most probably, from the chief forester of Enfield Chase, the royal hunting ground on whose edge the place stands. “Cock” was used in the sense of chief or leading — as in “cock of the walk” — and “foster” is a worn-down form of “forester”.",
    note: "The alternative is that Cockfoster was simply the surname of a family holding land here. Since “chief forester” would itself explain such a surname, the two readings are hard to separate."
  },
  "colindale": {
    gist: "The valley of the Collin family.",
    chain: ["Collyndepe (1550)", "Colindeep", "Colindale"],
    text: "The name comes from a family called Collin, who held land in Hendon in the Middle Ages: the deep place beside their holding — Old English dēop — was identified by their surname. Colindeep Lane still runs there; the ending later drifted to the more picturesque dale."
  },
  "colliers-wood": {
    gist: "The wood of the colliers — charcoal burners, not coal miners.",
    chain: ["Colliers Wood (1786)", "Colliers Wood"],
    text: "The name comes from the colliers who worked this wood — not coal miners but charcoal burners, who slow-burned stacked wood under turf for days at a time. The trade needed a wood to work in and a city to sell to, and this wood supplied London."
  },
  "covent-garden": {
    gist: "The walled garden of the Convent of St Peter, Westminster.",
    chain: ["the Convent Garden (13th c.)", "Covent Garden"],
    text: "The name comes from the forty-acre kitchen garden of Westminster Abbey, worked to feed the monks. Convent comes from Latin conventus, an assembly of people living under a rule; the n dropped out in ordinary speech, leaving a word that no longer looks like its origin."
  },
  "croxley": {
    gist: "“Croc's woodland clearing”.",
    chain: ["Crokesleya (1166)", "Croxley"],
    text: "The name comes from a man called Krókr — a Scandinavian personal name, common in England after the Danish settlements of the 9th and 10th centuries — and Old English lēah, a clearing in woodland. Names that mix the two languages mark where Danish settlers took over English land."
  },
  "dagenham-east": {
    gist: "“Dæcca's homestead”.",
    chain: ["Dæccanhaam (692)", "Dakenham", "Dagenham"],
    text: "The name comes from a man called Dæcca and Old English hām, a homestead or village. “East” was added in 1949 to separate this station from the other two the growth of the area had produced."
  },
  "dagenham-heathway": {
    gist: "The Heathway — the road across Dagenham Heath.",
    text: "The station is named after the Heathway, the road running across what was Dagenham Heath — a heath being open uncultivated ground, and a way across one a heathway. Dagenham itself is “Dæcca's homestead”, from an Old English personal name plus hām."
  },
  "debden": {
    gist: "“The deep valley”.",
    chain: ["Deppedana (1062)", "Depden", "Debden"],
    text: "The name comes from Old English dēop, deep, and denu, a valley — the ordinary Anglo-Saxon word for a long narrow one, as distinct from a dell or a hollow. The “p” softened to b in speech."
  },
  "dollis-hill": {
    gist: "A hill by the Dollis Brook — but Dollis itself is obscure.",
    chain: ["Daleson Hill (1593)", "Dolly's Hill", "Dollis Hill"],
    text: "The name comes from the Dollis Brook, but what Dollis itself means is unclear. The recorded forms wander, which is usually the sign of a name whose sense had already been forgotten by the people writing it down.",
    note: "No derivation commands agreement. The leading suggestions are a family surname, Daleson or Dolley; Middle English dole, a share or allotted strip of meadow, giving “the hill of the shared meadow”; and a personal nickname now lost. The 1593 spelling favours the surname, but the chain to Dollis is not continuous."
  },
  "ealing-broadway": {
    gist: "“The people of Gilla”, and the broad street at their centre.",
    chain: ["Gillingas (c.700)", "Yilling", "Zeallyng", "Ealing"],
    text: "The name comes from a man called Gilla and the Old English suffix “-ingas”, “the people or followers of”. The hard G at the front softened to a Y sound and then vanished altogether, which is why the modern spelling gives no hint of him. A broadway is simply a wide street."
  },
  "ealing-common": {
    gist: "Ealing's surviving common land.",
    text: "The name comes from a man called Gilla and Old English “-ingas”, “the people of”. A common is ground over which a manor's tenants held rights of grazing; this is the part that escaped enclosure."
  },
  "earl-s-court": {
    gist: "The manor court of the Earls of Oxford.",
    text: "The name comes from the manorial court of the de Vere family, Earls of Oxford, who held the manor of Kensington from the 12th century. A manorial court was where a lord's tenants had their dues assessed and their disputes settled — a real court, held in a real building, which stood here."
  },
  "east-acton": {
    gist: "The eastern part of the oak farmstead.",
    text: "The name comes from Old English āc, an oak, and tūn, a farmstead — the farm cleared out of the oak woods of west Middlesex. This hamlet was distinguished from the village proper by the 17th century."
  },
  "east-finchley": {
    gist: "“The finches' clearing”, eastern end.",
    chain: ["Finchelee (c.1208)", "Fynchesle", "Finchley"],
    text: "The name comes from Old English finc, a finch, and lēah, a clearing in woodland. Anglo-Saxon settlers routinely named a clearing for whatever they noticed in it, birds included. The station was East End Finchley until 1886."
  },
  "east-ham": {
    gist: "The eastern hām — a homestead, or land in a river bend.",
    chain: ["Hamme (958)", "Hame (1086)", "East Ham"],
    text: "The name comes from one of two Old English words that fell together here: hām, a homestead, and hamm, land enclosed in a river bend or standing dry among marshes. The site between the Lea and the Roding fits hamm particularly well. East and West were distinguished by the 12th century."
  },
  "east-putney": {
    gist: "The eastern side of Putney — “Putta's landing place”.",
    chain: ["Putelei (1086)", "Puttenhuth", "Putney"],
    text: "The name comes from a man called Putta and Old English hȳth, a landing place on a river — the later medieval spellings show the ending clearly. Domesday's Putelei looks instead like lēah, a clearing, but that is a Norman clerk mishearing a word he did not know."
  },
  "eastcote": {
    gist: "“The eastern cottages” — east of Ruislip.",
    chain: ["Estcote (1236)", "Eastcote"],
    text: "The name comes from Old English ēast and cot, a cottage or humble dwelling — the eastern cottages of Ruislip parish, one of three hamlets named by their direction from the village along with Northwood and Westcott."
  },
  "edgware": {
    gist: "“Ecgi's weir” — a fishing weir on the brook.",
    chain: ["Æcgeswer (975)", "Eggeswere", "Edgware"],
    text: "The name comes from a man called Ecgi and Old English wer, a weir: a dam built across a stream to trap fish in baskets as the water fell. The settlement that grew up where Watling Street crossed the brook took his name."
  },
  "edgware-road-bakerloo": {
    gist: "The road running north-west towards Edgware.",
    text: "The station is named after the road to Edgware, as roads were routinely named for the place they led to. This one is the Roman Watling Street, and Edgware is “Ecgi's weir”, a fishing dam on the brook there. The bracketed line name distinguishes this station from the other Edgware Road a few hundred metres away."
  },
  "edgware-road-circle": {
    gist: "The same road — a different station.",
    text: "The station is named after the road to Edgware, which is “Ecgi's weir” — a fishing dam on the brook there. Two entirely separate stations carry the name; they have never been connected, and the bracketed line name is simply how they are told apart."
  },
  "elephant-and-castle": {
    gist: "A coaching inn whose sign showed an elephant carrying a castle.",
    text: "The station is named after a coaching inn recorded from 1765, whose sign showed an elephant carrying a castle. The device — an elephant bearing a howdah, which heraldry draws as a castle — is the crest of the Worshipful Company of Cutlers, who worked in ivory, and it was a common inn sign long before this junction adopted it.",
    note: "The claim that the name corrupts “Infanta de Castile” has no documentary support and is rejected by place-name scholars. The two phrases do not corrupt into one another, and the heraldic elephant needs no explaining."
  },
  "elm-park": {
    gist: "Elm Farm, whose land the estate was built over.",
    chain: ["Elm Farm (1777)", "the Elms (1883)", "Elm Park"],
    text: "The name comes from Elm Farm, recorded here in 1777 and known as the Elms by 1883. The housing estate laid out over its fields in the 1930s took the farm's name, and the station was built in 1935 to serve the estate."
  },
  "embankment": {
    gist: "The Victoria Embankment — land reclaimed from the Thames.",
    text: "The station is named after the Victoria Embankment, the wall Joseph Bazalgette built between 1862 and 1870 to confine the Thames, narrowing the river and reclaiming thirty-two acres of foreshore. To “embank” is to hold water behind a raised bank; the word comes through French from the same root as bank."
  },
  "epping": {
    gist: "“The people of the upland”.",
    chain: ["Eppinges (1086)", "Epping"],
    text: "The name comes, probably, from Old English yppe, a raised or lookout place, and “-ingas”, “the people of” — the settlers on the high ground above the forest, named for where they lived rather than for a man.",
    note: "The alternative reads the first element as a personal name, giving “Eppa's people”, which would make it an ordinary “-ingas” name of the commonest kind."
  },
  "euston": {
    gist: "Euston Hall in Suffolk, the seat of the landowning Dukes of Grafton.",
    text: "The station is named after Euston Hall in Suffolk, seat of the Fitzroy family, Dukes of Grafton, who owned the fields north of the New Road and named the square they laid out here in the 1820s after their country house. Euston in Suffolk is itself “Efe's farmstead”, an Old English personal name plus tūn."
  },
  "euston-square": {
    gist: "The square in front of Euston station.",
    chain: ["Gower Street (1863)", "Euston Square"],
    text: "The station is named after Euston Square, which the Dukes of Grafton named after Euston Hall, their seat in Suffolk. The station was Gower Street until 1909."
  },
  "fairlop": {
    gist: "The Fairlop Oak, a celebrated tree in Hainault Forest.",
    text: "The name comes from the Fairlop Oak, a vast tree with branches spreading some three hundred feet that stood here until it was blown down in 1820. “Lop” means the branches cut from a tree, and one regularly lopped for timber and firewood took a shape distinctive enough to name the place.",
    note: "The exact sense is uncertain. The likeliest reading is “the fair — that is, handsome — lopped tree”, but the tree may equally have taken its name from an existing field name rather than the other way round."
  },
  "farringdon": {
    gist: "The Farndon family, goldsmiths and aldermen of the ward.",
    chain: ["Faringdon Without (14th c.)", "Farringdon Street", "Farringdon"],
    text: "The name comes from William de Farndon, a goldsmith who bought the aldermanry of this City ward outright in 1279 and whose son Nicholas was four times Lord Mayor. Wards were named after the alderman who held them, and the name passed from the ward to the street and then to the station."
  },
  "finchley-central": {
    gist: "“The finches' clearing”.",
    chain: ["Finchelee (c.1208)", "Fynchesle", "Finchley"],
    text: "The name comes from Old English finc, a finch, and lēah, a clearing in woodland. “Central” distinguishes this station from East, West and North Finchley, all named from the same clearing."
  },
  "finchley-road": {
    gist: "The road built towards Finchley.",
    text: "The station is named after the road to Finchley, a turnpike driven north in 1826 to give a gentler route than the pull over Hampstead's hills. Finchley is Old English finc, a finch, plus lēah, a woodland clearing."
  },
  "finsbury-park": {
    gist: "A park named after Finsbury — “Finn's manor” — three miles away.",
    chain: ["Vinisbir (1231)", "Finnesbury", "Finsbury"],
    text: "The station is named after the park, which carries the name of Finsbury — “Finn's manor”, from a personal name plus Old English burh — for an administrative reason rather than a geographical one. The park was laid out to give the crowded Finsbury division of Middlesex the open space it lacked, three miles away."
  },
  "fulham-broadway": {
    gist: "“Fulla's land in the river bend”, and its wide street.",
    chain: ["Fulanham (691)", "Fuleham", "Fulham"],
    text: "The name comes from a man called Fulla and Old English hamm, land enclosed in a bend of a river — which is exactly the loop of Thames that Fulham sits in. The station was Walham Green until 1952, when it took the name of the broad street outside."
  },
  "gants-hill": {
    gist: "The medieval le Gant family, landholders in the parish.",
    text: "The name comes from the le Gant family, who held land in Barking parish in the 14th century, and whose surname identified the rise they held. The name is the same word as Ghent, the Flemish city many such families came from."
  },
  "gloucester-road": {
    gist: "Gloucester Lodge, the house of the Duchess of Gloucester.",
    chain: ["Hogmore Lane", "Gloucester Road"],
    text: "The station is named after Gloucester Lodge, the villa Maria, Duchess of Gloucester, built on the lane in 1805. The lane had been Hogmore Lane, named for a muddy hog-moor, until it was renamed for its grandest resident — a common enough upgrade as London spread west."
  },
  "golders-green": {
    gist: "The green belonging to a family named Godyere or Golder.",
    chain: ["Golders Greene (1612)", "Golders Green"],
    text: "The name comes from a family called Godyere, recorded in 15th- and 16th-century Hendon, whose surname is generally accepted as the source. A green was the hamlet's common grazing, identified by whoever held the land around it."
  },
  "goldhawk-road": {
    gist: "The Goldhawk family, landowners in Shepherd's Bush.",
    text: "The name comes from the Goldhawk family, of whom John Goldhawk held land here in the 15th century. They were long gone before the road was built up, but their surname had attached itself to the track across their fields and stayed there."
  },
  "goodge-street": {
    gist: "John Goodge, a carpenter who inherited the field.",
    text: "The station is named after John Goodge, a carpenter who married into ownership of a field called Crab Tree Field. After his death his nephews William and Francis Goodge laid it out for building in the 1740s, and the new street took the family name."
  },
  "grange-hill": {
    gist: "A grange — the outlying farm of a monastery.",
    text: "The name comes from a grange — a religious house's working farm, often miles from the abbey itself and run to supply it with grain. The word comes through Old French from Latin granica, a granary, from granum, grain. This one is associated with Stratford Langthorne Abbey."
  },
  "great-portland-street": {
    gist: "The Dukes of Portland, ground landlords of Marylebone.",
    chain: ["Portland Road (1863)", "Great Portland Street"],
    text: "The station is named after the Dukes of Portland, whose family acquired the Marylebone estate by marriage in 1734 and laid out streets across it under their title. “Great” distinguishes the main street from Little Portland Street beside it."
  },
  "green-park": {
    gist: "The park that is only green — it has no flower beds.",
    chain: ["Upper St James's Park (1668)", "The Green Park (1746)", "Green Park"],
    text: "The name comes from the ground itself: Charles II enclosed it in 1668 as an extension of St James's Park, and after eighty years under that borrowed name people simply began calling it the green one, describing a park that is grass and plane trees and almost nothing else.",
    note: "The story that Queen Catherine of Braganza had every flower torn out after catching Charles II picking a posy there for another woman is a legend with no contemporary evidence. The plainer explanation is that the ground was rough pasture and was never planted."
  },
  "greenford": {
    gist: "“The green ford” over the River Brent.",
    chain: ["Grenan forda (845)", "Greneford", "Greenford"],
    text: "The name comes from Old English grēne, green, and ford, a river crossing — one with grassy banks, as against the muddy or stony fords that gave their own names elsewhere."
  },
  "gunnersbury": {
    gist: "“Gunnhildr's manor”.",
    chain: ["Gonyldesbury (1348)", "Gunnersbury"],
    text: "The name comes from a woman called Gunnhildr — a Scandinavian name — and Old English burh, a manor house or fortified place. Local tradition identifies her as a niece of King Cnut banished from England in 1044, though that is a guess made to fit an existing name rather than evidence for it."
  },
  "hainault": {
    gist: "“The wood of the monastic household” — nothing to do with Belgium.",
    chain: ["Hyneholt (1221)", "Henehout", "Hainault"],
    text: "The name comes from Old English hīwan, the members of a religious household, and holt, a wood: the forest belonged to the nuns of Barking Abbey and supplied their house. It has nothing to do with Belgium.",
    note: "The Flemish spelling is antiquarian invention. Somebody, probably in the 17th or 18th century, decided the name must honour Philippa of Hainault, queen of Edward III, and respelt it to match. The medieval forms rule that out completely, but the invented spelling is now the official one."
  },
  "hammersmith": {
    gist: "Probably “the hammer smithy” — a place with a forge.",
    chain: ["Hamersmyth (1294)", "Hammersmith"],
    text: "The name comes, most probably, from Old English hamor, a hammer, and smiððe, a smithy — a forge substantial enough to identify the settlement on the road west out of London.",
    note: "A minority reading takes the elements as hamm, river-bend land, plus hȳth, a landing place, which would suit the Thames-side site equally well. The recorded spellings favour the smithy."
  },
  "hampstead": {
    gist: "Old English hām-stede — simply “the homestead”.",
    chain: ["Hemstede (959)", "Hamstede", "Hampstead"],
    text: "The name comes from Old English hām, a home or village, and stede, a place: hām-stede was the ordinary Anglo-Saxon word for a farmstead, applied here without qualification. The “p” is a later intrusion, the mouth's shortcut between m and s, as in Thompson."
  },
  "hanger-lane": {
    gist: "Old English hangra — a wood on a steep slope.",
    chain: ["Hangerhill (13th c.)", "Hanger Lane"],
    text: "The name comes from Old English hangra, a wood clinging to a hillside, from the same root as hang. The word is still used in southern England for the beech hangers of the chalk downs, and Hanger Hill kept it here."
  },
  "harlesden": {
    gist: "“Herewulf's farmstead”.",
    chain: ["Herulvestune (1086)", "Harleston", "Harlesden"],
    text: "The name comes from a man called Herewulf and Old English tūn, a farmstead. The final “-tune” drifting to “-den” is a common late change, the ending pulled towards a more familiar word."
  },
  "harrow-and-wealdstone": {
    gist: "A pagan shrine, and a boundary stone at the edge of the weald.",
    chain: ["Gumeninga hergae (767)", "Herges", "Harrow"],
    text: "The name comes from Old English hearg, a heathen temple or holy place — this is one of very few English place-names to record pre-Christian worship, the shrine of a people called the Gumeningas. Wealdstone is a stone that marked the boundary of the weald, the wooded country; “weald” is the same word as German “Wald”, forest."
  },
  "harrow-on-the-hill": {
    gist: "The same pagan shrine — on its hill.",
    text: "The name comes from Old English hearg, a heathen temple or holy place. Such shrines stood on prominent high ground, and this one presumably occupied the summit where St Mary's church was later built — churches were routinely planted on pagan sites to supersede them."
  },
  "hatton-cross": {
    gist: "“The heath farmstead”, at a crossroads.",
    text: "The name comes from Old English hǣth, heath, and tūn, a farmstead — the farm out on Hounslow Heath, the open scrubby common that covered this part of Middlesex. “Cross” is the crossroads beside it."
  },
  "heathrow-terminal-4": {
    gist: "The airport's fourth terminal.",
    text: "The station is named after the terminal building it serves. Heathrow is “Heath Row”, from Old English hǣth plus rāw — a row of cottages along the edge of Hounslow Heath, cleared in 1944 for the airport."
  },
  "heathrow-terminal-5": {
    gist: "The airport's fifth terminal.",
    text: "The station is named after the terminal building it serves. Heathrow is “Heath Row”, from Old English hǣth plus rāw — a row of cottages along the edge of Hounslow Heath, cleared in 1944 for the airport."
  },
  "heathrow-terminals-2-and-3": {
    gist: "Heath Row — a row of cottages at the edge of Hounslow Heath.",
    chain: ["La Hetherewe (1453)", "Heath Row", "Heathrow"],
    text: "The name comes from Old English hǣth, heath, and rāw, a row: a hamlet of houses strung out in a line along a lane at the edge of the common. Heath Row was cleared in 1944 to build the airport, which took its name."
  },
  "hendon-central": {
    gist: "Old English æt hēan dūne — “at the high hill”.",
    chain: ["Hendun (959)", "Hendon"],
    text: "The name comes from the Old English phrase æt hēan dūne, “at the high hill”, frozen into a name — which is why the adjective comes first and the old ending survives. The hill is the one St Mary's church stands on. “Central” was added because the station was built to serve a new town centre."
  },
  "high-barnet": {
    gist: "“Land cleared by burning”, on the high ground.",
    chain: ["Barnet (1070)", "Chipping Barnet", "High Barnet"],
    text: "The name comes from Old English bærnet, a burning: woodland cleared by fire to make arable, a practice ordinary enough to name several places. “High” distinguishes it from Friern Barnet and East Barnet; the town is also called Chipping Barnet, from Old English cēping, a market."
  },
  "high-street-kensington": {
    gist: "Kensington's high street — “the farmstead of Cynesige's people”.",
    chain: ["Chenesitun (1086)", "Kensington"],
    text: "The name comes from a man called Cynesige, plus the connecting “-ing-” meaning “the people of”, plus Old English tūn, a farmstead. A high street is the principal street of a town, “high” in the sense of chief."
  },
  "highbury-and-islington": {
    gist: "“The high manor house”, and “Gīsla's hill”.",
    chain: ["Gīslandūn (c.1000)", "Iseldon", "Islington"],
    text: "The name comes from the higher of the Islington manor houses of the Knights Hospitaller, burh meaning a manor or fortified house — it was distinguished from Canonbury and Barnsbury. Islington is the hill, dūn, of a man called Gīsla, and has nothing whatever to do with islands despite what the spelling now suggests."
  },
  "highgate": {
    gist: "A toll gate at the top of the hill.",
    chain: ["le Heighgate (1354)", "Highgate"],
    text: "The name comes from a toll gate at the top of the hill: the Bishop of London kept a park here and allowed a road through it, with a gate where travellers paid for the privilege. Whether the name means the gate that stood high up or a tall gate hardly matters; the toll is the point."
  },
  "hillingdon": {
    gist: "“Hilda's hill”.",
    chain: ["Hillendone (1086)", "Hillingdon"],
    text: "The name comes from a man called Hilda — here a man's name — and Old English dūn, a hill. The doubled hill of the modern spelling is an accident: “-don” had stopped being recognisable as the word for a hill long before the name was fixed."
  },
  "holborn": {
    gist: "The “hollow bourne” — a stream in a deep valley.",
    chain: ["Holburne (959)", "Holbourne", "Holborn"],
    text: "The name comes from Old English hol, hollow or sunken, and burna, a stream — the Fleet, or its upper reach, which ran through a valley steep enough that a viaduct had to be built over it in the 19th century. “Burna” survives in Scots “burn” and in dozens of southern place-names."
  },
  "holland-park": {
    gist: "Holland House, seat of the Earls of Holland.",
    chain: ["Cope Castle (1605)", "Holland House", "Holland Park"],
    text: "The station is named after Holland House, built in 1605 by Sir Walter Cope as Cope Castle and renamed when it passed by marriage to Henry Rich, created Earl of Holland in 1624 — the earldom being named for Holland in Lincolnshire, not the Netherlands. The park is the house's grounds."
  },
  "holloway-road": {
    gist: "A “hollow way” — a road worn down between banks.",
    chain: ["le Holwey (1307)", "Holloway"],
    text: "The name comes from Old English hol, hollow, and weg, a way. Centuries of cartwheels and rainwater cut the road north to Highgate well below the level of the fields on either side, leaving it running in a trench — a shape common enough on old routes to have its own name."
  },
  "hornchurch": {
    gist: "The church with horns.",
    chain: ["Monasterium Cornutum (1222)", "Hornedchurch", "Hornchurch"],
    text: "The name comes from the horns on the church: St Andrew's carries a carved bull's head with horns on its east gable and has done for centuries, and the Latin record of 1222 calls it Monasterium Cornutum, “the horned monastery”. The building named the parish.",
    note: "Why the horns are there is unresolved. Explanations include the leather trade of the monastery that held the church, the arms of a benefactor, and a survival of the horned masks worn at medieval festivals. The horns are documented; their reason is not."
  },
  "hounslow-central": {
    gist: "“Hund's burial mound”.",
    chain: ["Hundeslawe (1217)", "Hounslow"],
    text: "The name comes from a man called Hund and Old English hlāw, a mound — usually a prehistoric barrow, which the Anglo-Saxons found already in the landscape and used as meeting points and boundary markers. “Central” distinguishes this station from Hounslow East and West."
  },
  "hounslow-east": {
    gist: "The eastern station of the Hounslow group.",
    text: "The name comes from a man called Hund and Old English hlāw, a burial mound. “East” distinguishes this station from Hounslow Central and Hounslow West."
  },
  "hounslow-west": {
    gist: "The western station of the Hounslow group.",
    chain: ["Hounslow Barracks (1884)", "Hounslow West"],
    text: "The name comes from a man called Hund and Old English hlāw, a burial mound. The station was named Hounslow Barracks, after the cavalry barracks on the heath, until 1925."
  },
  "hyde-park-corner": {
    gist: "The manor of Hyde — a “hide” of land.",
    text: "The name comes from the manor of Hyde, a hide of land — the unit of Anglo-Saxon assessment, being the amount reckoned to support one household, notionally about 120 acres. The manor belonged to Westminster Abbey until Henry VIII took it in 1536 and enclosed it to hunt deer in."
  },
  "ickenham": {
    gist: "“Ticca's homestead” — with the T lost by mishearing.",
    chain: ["Ticheham (1086)", "Tikenham", "Ikenham", "Ickenham"],
    text: "The name comes from a man called Ticca and Old English hām, a homestead. The initial T was worn away by a habit of medieval speech: “at Ticheham” ran together as “a Ticheham”, the T attached itself to the preposition, and the place was left without it."
  },
  "kennington": {
    gist: "Either “the king's farmstead” or “the farmstead of Cēna's people”.",
    chain: ["Chenintune (1086)", "Kenington", "Kennington"],
    text: "The name comes either from Old English cyning, a king, or from a man called Cēna and his people — the two readings compete. Kennington was a royal manor, and the Black Prince built a palace here in the 1340s, which makes the royal version tempting.",
    note: "Place-name scholars generally prefer a personal name, Cēna, because of the connecting “-ing-” in the early forms, which usually signals “the people of”. The royal reading, from Old English cyning, is favoured by local historians pointing to the manor's long Crown ownership. The ownership is real; whether it produced the name is not established."
  },
  "kensal-green": {
    gist: "“The king's wood”.",
    chain: ["Kingisholt (1253)", "Kynsale", "Kensal Green"],
    text: "The name comes from Old English cyning, king, and holt, a wood. Both words were worn past recognition — Kingisholt to Kensal in three centuries — which is what happens to a name once the things it describes have gone. “Green” is the surviving common."
  },
  "kensington-olympia": {
    gist: "Kensington, plus the Olympia exhibition hall.",
    text: "The name comes from a man called Cynesige and his people, plus Old English tūn, a farmstead. Olympia is the great glass-roofed exhibition hall built beside the station in 1886 and named after the sanctuary in Greece where the ancient games were held — a borrowed grandeur typical of Victorian exhibition halls."
  },
  "kentish-town": {
    gist: "Nothing to do with Kent — the estate of a man called Kentish.",
    chain: ["Kentisston (1208)", "Kentishtowne", "Kentish Town"],
    text: "The name comes, most likely, from a landholder surnamed le Kenteis, “the man from Kent”, whose holding took his name. Town here has its older sense of an estate or settlement rather than an urban place, and the county itself is fifteen miles away.",
    note: "A rival explanation reads the first element as a lost stream or field name rather than a surname. Nobody has identified the man, and the county itself is fifteen miles away."
  },
  "kenton": {
    gist: "“Cæna's farmstead”.",
    chain: ["Keninton (1232)", "Kenton"],
    text: "The name comes from a man called Cæna and Old English tūn, a farmstead — the commonest shape of English place-name, and one that usually preserves the name of an otherwise unrecorded Anglo-Saxon landholder."
  },
  "kew-gardens": {
    gist: "“The quay on the spur of land”, and the royal botanic gardens.",
    chain: ["Cayho (1327)", "Kayhough", "Kew"],
    text: "The name comes from Middle English kai, a quay or landing place, and Old English hōh, a spur or heel of land — precisely the promontory the Thames wraps around here. Two syllables collapsed into one. The gardens are the Royal Botanic Gardens, founded in 1759."
  },
  "kilburn": {
    gist: "A stream — but whose, or what kind, is disputed.",
    chain: ["Cuneburna (1134)", "Keleburne", "Kilburn"],
    text: "The name comes from a stream, a tributary of the Westbourne that ran down the line of what is now Kilburn High Road. The second element is Old English burna, a stream; the first is the argument.",
    note: "Three readings are current: cyne-burna, “the royal stream”; Cynehild's or Cyneburg's stream, from a woman's name; and “the cows' stream”, from cū. The early spellings can be made to support all three."
  },
  "kilburn-park": {
    gist: "The Kilburn Park estate, beside the Kilburn stream.",
    text: "The name comes from the Kilburn stream, whose first element is disputed and whose second is Old English burna, a stream. The park was the estate built over its fields."
  },
  "king-s-cross-st-pancras": {
    gist: "A short-lived monument to George IV, and a Roman boy martyr.",
    chain: ["Battle Bridge", "King's Cross (1830)", "King's Cross St Pancras"],
    text: "The name comes from a monument to George IV put up at the crossroads in 1830 — a lumpen structure topped with a statue of the king. Londoners disliked it and it was demolished in 1845, but the name it gave the junction, which had been Battle Bridge, outlasted it by two centuries. St Pancras is the dedication of the parish church, to a boy martyred in Rome around 304."
  },
  "kingsbury": {
    gist: "“The king's manor”.",
    chain: ["Kynggesbyrig (1044)", "Kingsbury"],
    text: "The name comes from Old English cyning, king, and burh, a fortified place or manor house — an estate held by the Crown. The “-bury” ending is the dative form of burh, frozen from phrases like “at the manor”."
  },
  "knightsbridge": {
    gist: "“The bridge of the young men” — over the buried Westbourne.",
    chain: ["Cnihtebricge (c.1050)", "Knyghtsbrigge", "Knightsbridge"],
    text: "The name comes from Old English cniht, which did not yet mean an armoured knight but a youth, or a household retainer in a lord's service. It records a bridge over the Westbourne used or maintained by a body of such men.",
    note: "The legend that two knights fought a duel on the bridge is a back-formation invented once cniht had shifted its meaning."
  },
  "ladbroke-grove": {
    gist: "The Ladbroke family, who developed the estate.",
    text: "The station is named after the Ladbroke family, who held the land from the 18th century and whose James Weller Ladbroke laid out the crescents and communal gardens of the Ladbroke Estate from the 1820s. A grove is a small wood, used loosely by developers for a leafy street."
  },
  "lambeth-north": {
    gist: "“The landing place for lambs”.",
    chain: ["Lambehitha (1041)", "Lambeth"],
    text: "The name comes from Old English lamb and hȳth, a landing place on a river — a wharf where sheep were loaded and unloaded. The “th” of the modern spelling is the worn remains of hȳth, the same element that ends Rotherhithe."
  },
  "lancaster-gate": {
    gist: "A gate into Kensington Gardens, named for the Duchy of Lancaster.",
    text: "The station is named after a gate into Kensington Gardens, itself named in 1865 in honour of Queen Victoria in her capacity as Duke of Lancaster — the title by which the sovereign holds the Duchy, and which is Duke regardless of the holder's sex."
  },
  "latimer-road": {
    gist: "The charitable foundation of Edward Latymer.",
    text: "The station is named after the charitable foundation of Edward Latymer, a London merchant who died in 1627 leaving money to clothe and educate poor boys. His foundation held land in the area, and the road commemorates the endowment rather than the man directly. The surname is occupational — a latimer was an interpreter."
  },
  "leicester-square": {
    gist: "Leicester House, the mansion of the Earls of Leicester.",
    chain: ["Leicester Fields (1630s)", "Leicester Square"],
    text: "The station is named after Leicester House, built on the north side of the common fields in the 1630s by Robert Sidney, 2nd Earl of Leicester, who enclosed part of them in front of it to local fury. The fields took his title and became a square when the ground was laid out formally."
  },
  "leyton": {
    gist: "“The farmstead on the River Lea”.",
    chain: ["Lugetune (1050)", "Leyton"],
    text: "The name comes from the River Lea and Old English tūn, a farmstead. Lea is far older than English — a Celtic name, possibly containing the god-name Lugus, or simply meaning “bright river”."
  },
  "leytonstone": {
    gist: "Leyton, at the stone.",
    text: "The name comes from a stone marker on the road north — the High Stone — which distinguished this settlement from Leyton proper, “the farmstead on the Lea”. It may have been a Roman milestone; the pillar standing there now is an 18th-century replacement."
  },
  "liverpool-street": {
    gist: "The 2nd Earl of Liverpool, Prime Minister from 1812 to 1827.",
    text: "The station is named after Robert Banks Jenkinson, 2nd Earl of Liverpool, Prime Minister from 1812 to 1827. The street was cut in 1829 across the grounds of the old Bethlem Hospital, just after his fifteen-year premiership ended — the ordinary Georgian practice of naming a new street after a public man of the moment."
  },
  "london-bridge": {
    gist: "The bridge.",
    text: "The station is named after the bridge, which for some 1,750 years was the only crossing of the Thames in London and therefore needed no further description."
  },
  "loughton": {
    gist: "“Luca's farmstead”.",
    chain: ["Lukintone (1062)", "Lucketon", "Loughton"],
    text: "The name comes from a man called Luca, plus the connecting “-ing-” and Old English tūn, a farmstead: “the farm of Luca's people”. The “gh” of the modern spelling represents a throat sound that has since gone silent."
  },
  "maida-vale": {
    gist: "A battle in Italy, by way of a pub.",
    text: "The station is named after a pub, the Hero of Maida, which stood on the Edgware Road and commemorated Sir John Stuart's defeat of the French at Maida in Calabria in 1806. Pubs were routinely named for recent victories, and the district that grew up round this one took the name. Vale describes the low ground."
  },
  "manor-house": {
    gist: "A pub, the Manor House Tavern.",
    text: "The station is named after the Manor House Tavern, which stood at the junction of Green Lanes and Seven Sisters Road. Crossroads regularly took the name of the inn on the corner. There was no manor house; the pub simply had a grand name."
  },
  "mansion-house": {
    gist: "The official residence of the Lord Mayor of London.",
    text: "The station is named after the Mansion House, built between 1739 and 1752 to give the City's Lord Mayor a house to hold office in — until then each Mayor had used his own home. A mansion house, from Latin mansio, a dwelling, was the formal term for a residence that went with an office."
  },
  "marble-arch": {
    gist: "John Nash's triumphal arch of Carrara marble.",
    text: "The station is named after John Nash's triumphal arch of Carrara marble, built in 1827 as the state entrance to Buckingham Palace and moved to the corner of Hyde Park in 1851. It is named simply for what it is made of, and the junction took the name of the object standing in it."
  },
  "marylebone": {
    gist: "“St Mary's church by the bourne” — with a spurious French “le”.",
    chain: ["Maryburne (1453)", "Marybourne", "Mary-le-bourne", "Marylebone"],
    text: "The name comes from the church of St Mary that stood beside the Tyburn stream — a bourne, from Old English burna. In the 17th century antiquarian writers began inserting a “le” on the assumption that the name must be Norman-French, as in Stratford-le-Bow. It was not, but the invented particle stuck and is now the middle of the word."
  },
  "mile-end": {
    gist: "The hamlet one mile from Aldgate.",
    chain: ["La Mile ende (1288)", "Mile End"],
    text: "Originally referring to the settlement at the end of a mile's walk out of the City along the old Roman road — a distance measured from the point where the City's jurisdiction was reckoned, as milestones were."
  },
  "mill-hill-east": {
    gist: "The hill with the windmill.",
    chain: ["Myllehill (1547)", "Mill Hill"],
    text: "The name comes from a windmill on the hill. Windmills needed open high ground, and a hill carrying one was identified by it. “East” distinguishes the station from Mill Hill Broadway on the other side."
  },
  "monument": {
    gist: "The column commemorating the Great Fire of 1666.",
    text: "The station is named after the Monument to the Great Fire, Wren and Hooke's fluted Doric column finished in 1677. It was so much the largest thing of its kind in London that it needed no describing: Londoners called it the Monument, and the street corner took the name."
  },
  "moor-park": {
    gist: "A country house named for the moor it stood on.",
    chain: ["Sandy Lodge (1910)", "Moor Park & Sandy Lodge", "Moor Park"],
    text: "The station is named after Moor Park, a mansion at Rickmansworth built on marshy waste ground — Old English mōr, which means marsh rather than upland heath — and named for it. The station was called Sandy Lodge, after a nearby golf club, until 1923."
  },
  "moorgate": {
    gist: "A gate in the City wall opening onto the moor.",
    text: "The name comes from a gate cut through the City wall in 1415 to give access to Moorfields, the genuine marsh — Old English mōr — that lay immediately north and stayed waterlogged partly because the wall dammed the drainage. The gate named the street."
  },
  "morden": {
    gist: "“The hill in the marsh”.",
    chain: ["Mordune (969)", "Morden"],
    text: "The name comes from Old English mōr, marsh or waste ground, and dūn, a hill — a patch of rising, dry ground in wet country, which is exactly the kind of site early settlers looked for."
  },
  "mornington-crescent": {
    gist: "The Earls of Mornington.",
    text: "The station is named after the crescent, built in the 1820s and named for the Wellesley Earls of Mornington, an Irish title held by the Duke of Wellington's family. A crescent is a curved terrace, named for its shape."
  },
  "neasden": {
    gist: "“The nose-shaped hill”.",
    chain: ["Neasdun (1258)", "Neasden"],
    text: "The name comes from Old English nēosu, a nose, and dūn, a hill: a hill with a projecting spur, described by the part of the body it resembled. Anglo-Saxon naming did this constantly — shoulders, heels, backs and necks of land."
  },
  "newbury-park": {
    gist: "“The new fortified place”.",
    chain: ["Newbery (1456)", "Newbury Park"],
    text: "The name comes from Old English nīwe, new, and burh, a fortified place or manor — new in relation to some older one nearby. The “-bury” ending is the dative of burh, worn smooth by use."
  },
  "nine-elms": {
    gist: "A row of nine elm trees.",
    text: "Originally referring to a row of nine elm trees that marked the riverside lane towards Battersea, recorded from the 17th century. A conspicuous group of trees was a landmark on a featureless marsh road, and the count stuck as the name long after the elms had gone."
  },
  "north-acton": {
    gist: "The northern part of the oak farmstead.",
    text: "The name comes from Old English āc, an oak, and tūn, a farmstead — the farm cleared from the oak woods of west Middlesex. “North” distinguishes this station from the other Actons the railways created."
  },
  "north-ealing": {
    gist: "North of “the people of Gilla”.",
    text: "The name comes from a man called Gilla and Old English “-ingas”, “the people or followers of”. The initial G softened away entirely, which is why the modern name gives no sign of him."
  },
  "north-greenwich": {
    gist: "The north end of Greenwich — “the green trading settlement”.",
    chain: ["Grenewic (964)", "Grenevic", "Greenwich"],
    text: "The name comes from Old English grēne, green, and wīc, a trading place or specialised settlement — the word borrowed from Latin vicus. The station stands at the northern tip of the peninsula, well away from Greenwich proper."
  },
  "north-harrow": {
    gist: "North of the pagan shrine on the hill.",
    text: "The name comes from Old English hearg, a heathen temple or holy place — one of the few English names to record pre-Christian worship."
  },
  "north-wembley": {
    gist: "North of “Wemba's clearing”.",
    chain: ["Wembalea (825)", "Wembley"],
    text: "The name comes from a man called Wemba and Old English lēah, a clearing in woodland. “North” distinguishes this station from Wembley Central and Wembley Park."
  },
  "northfields": {
    gist: "The north fields of Ealing.",
    text: "Originally referring to the open arable on Ealing's northern side — a plain field name off the parish maps. Field names are the most ordinary layer of English naming and the first to be lost when land is built over."
  },
  "northolt": {
    gist: "“The northern nook of land” — not, despite the spelling, a wood.",
    chain: ["Northealum (960)", "Northolt"],
    text: "The name comes from Old English north and healh, a nook or corner of land. Its pair three miles away is Southall, the southern healh — the two were coined together. The modern “-holt” ending, which suggests a wood, is a late corruption that has misled readers ever since."
  },
  "northwick-park": {
    gist: "The Barons Northwick, landowners in Harrow.",
    text: "The station is named after the public park beside it, which carries the title of the Rushout family, Barons Northwick, who held the estate here. Their title comes from Northwick Park in Worcestershire — “the north wīc”, a specialised farm."
  },
  "northwood": {
    gist: "The north wood of Ruislip parish.",
    chain: ["Northwode (1435)", "Northwood"],
    text: "The name comes from Old English north and wudu, a wood — one of the hamlets of Ruislip named by their direction from the village, with Eastcote and Westcott."
  },
  "northwood-hills": {
    gist: "A name chosen in a public competition in 1933.",
    text: "The name was chosen in a public competition in 1933. There was no settlement here to name the station after, so the railway asked for suggestions; the winning entry beat Potter Street and Beau Regard, and the district took its name from the station rather than the other way round."
  },
  "notting-hill-gate": {
    gist: "“The hill of Cnotta's people”, and a turnpike gate.",
    chain: ["Knottynghull (1356)", "Nottinghill", "Notting Hill"],
    text: "The name comes from a man called Cnotta and his people, plus Old English hyll, a hill. The gate was a turnpike on the Uxbridge Road where travellers paid for the road's upkeep; it came down in 1864, but the name had already attached itself to the junction."
  },
  "oakwood": {
    gist: "The oak woods of Enfield Chase.",
    chain: ["Enfield West (1933)", "Enfield West (Oakwood)", "Oakwood"],
    text: "The station is named after the neighbouring oak woodland, a remnant of Enfield Chase, the royal hunting ground. It was called Enfield West until 1946."
  },
  "old-street": {
    gist: "“The old street” — a road already ancient by 1200.",
    chain: ["Ealdestrete (c.1200)", "Old Street"],
    text: "The name comes from Old English strǣt, borrowed from Latin strata, which means a paved road and almost always a Roman one. This one ran east–west outside the City wall and was old enough by the 13th century that nobody remembered another name for it."
  },
  "osterley": {
    gist: "“The sheepfold clearing”.",
    chain: ["Osterle (1274)", "Osterley"],
    text: "The name comes from Old English eowestre, a sheepfold, and lēah, a clearing in woodland — a place where a flock could be penned in ground cleared from the trees."
  },
  "oval": {
    gist: "The cricket ground, laid out on an oval plot.",
    text: "The station is named after the cricket ground, whose oval outline was fixed by a street pattern laid out in 1790; when Surrey County Cricket Club took the ground in 1845 the shape gave it a name. Oval comes from Latin ovum, an egg."
  },
  "oxford-circus": {
    gist: "The circus where Oxford Street crosses Regent Street.",
    chain: ["Regent Circus North (1819)", "Oxford Circus"],
    text: "The station is named after the junction where Oxford Street crosses Regent Street. A circus is a circular road junction — Latin for a ring — and this one was built as part of Nash's Regent Street scheme. Oxford Street was called the Tyburn Road until the 18th century.",
    note: "Two explanations for the street's name circulate: that it was the highway west towards Oxford, and that it honours Edward Harley, 2nd Earl of Oxford, whose family owned and developed the land to the north. The Harley connection is better documented — Harley Street and Cavendish Square come from the same estate — but the road-to-Oxford reading may have reinforced it."
  },
  "paddington": {
    gist: "“The farmstead of Padda's people”.",
    chain: ["Padington (c.1050)", "Paddington"],
    text: "The name comes from a man called Padda and his people, plus Old English tūn, a farmstead — the standard three-part shape that produced hundreds of English “-ington” names."
  },
  "park-royal": {
    gist: "A royal agricultural showground that barely happened.",
    text: "The name comes from the Royal Agricultural Society, which bought a hundred acres here in 1903 for a permanent showground and called it Park Royal, inverting the words for grandeur. The 1903 show was a washout and the society sold up within two years, but the name had already fixed itself to the district."
  },
  "parsons-green": {
    gist: "The green beside the parson's house.",
    chain: ["Personesgrene (1391)", "Parsons Green"],
    text: "The name comes from the parson of Fulham, whose rectory stood on the north side of the green; the common took the incumbent's title. Parson comes through Old French from Latin persona, the person who legally embodied the parish."
  },
  "perivale": {
    gist: "Probably “the pear-tree valley”.",
    chain: ["Greenford Parva", "Perivale (1508)"],
    text: "The name comes, most probably, from Old English pirige, a pear tree, and vale, a valley. The place was Little Greenford throughout the Middle Ages and only took its present name in the 16th century.",
    note: "An alternative reads it as a late, semi-poetic coinage meaning “pure vale” — the valley of the Brent being fresher here than downstream. Because the name appears late and already in its modern form, the medieval evidence that would settle it does not exist."
  },
  "piccadilly-circus": {
    gist: "A tailor's fortune, made from stiff collars called piccadills.",
    chain: ["Piccadilly Hall (c.1623)", "Piccadilly", "Piccadilly Circus"],
    text: "The name comes from the piccadill, the stiff notched collar fashionable in the early 17th century. Robert Baker grew rich selling them and built himself a house near what is now Great Windmill Street; neighbours mocked it as Piccadilly Hall, after the garment that paid for it, and the joke spread first to the road and then to the junction. A circus is a circular road junction, from the Latin for a ring."
  },
  "pimlico": {
    gist: "An unexplained name.",
    text: "The name comes from somewhere unknown. It appears in Westminster in the 17th century, having apparently migrated from elsewhere in London, and the standard place-name authorities record it as of unknown origin — one of very few London names about which nothing can be said with confidence.",
    note: "Two theories circulate. Ben Pimlico kept an alehouse in Hoxton around 1600 famous for its nut-brown ale, and “Pimlico” became a byword for a drinking resort, a label that could have travelled to any pleasure ground. Alternatively the name comes from the Pamlico, an Algonquian people of North Carolina, reaching London through the timber and tobacco trades. Neither can be demonstrated."
  },
  "pinner": {
    gist: "“Pinna's bank” — and the river is named after the place, not the reverse.",
    chain: ["Pinnora (1231)", "Pinnore", "Pinner"],
    text: "The name comes from a man called Pinna and Old English ōra, a bank or slope. The River Pinn is a back-formation: later generations assumed a place called Pinner must stand on a river called the Pinn, and duly named the stream to match."
  },
  "plaistow": {
    gist: "Old English plegstōw — “the place for play”.",
    chain: ["Pleystowe (1278)", "Plaistow"],
    text: "The name comes from Old English plegstōw, “the place for play” — a village's open ground for sports, dancing and assemblies, an institution formal enough to have its own word and to name several places across southern England.",
    note: "The competing derivation takes the name from the de Plaiz family, lords of the manor in the 13th century. The 1278 spelling supports the play-place reading, but the family were certainly here, and the two may have reinforced each other."
  },
  "preston-road": {
    gist: "“The priests' farmstead”.",
    chain: ["Prestone (1194)", "Preston"],
    text: "The name comes from Old English prēost, a priest, and tūn, a farmstead — an estate whose produce or rents supported clergy rather than a lay lord. The name occurs all over England for the same reason."
  },
  "putney-bridge": {
    gist: "“Putta's landing place”, and its bridge.",
    chain: ["Putelei (1086)", "Puttenhuth", "Putney"],
    text: "The name comes from a man called Putta and Old English hȳth, a landing place on a river, which the medieval spellings show clearly. A wooden toll bridge replaced the ferry in 1729 and gave the station its name."
  },
  "queen-s-park": {
    gist: "Queen Victoria's Golden Jubilee.",
    text: "The station is named after the park, laid out and named in 1887 for Queen Victoria's Golden Jubilee — one of a great many jubilee namings that year."
  },
  "queensbury": {
    gist: "A name invented in the 1930s to pair with Kingsbury.",
    text: "The name was invented in 1934 to pair with Kingsbury, one stop down the line. There was no settlement here at all, just fields on a new railway branch, and the name was coined — by most accounts through a local newspaper competition — to match its neighbour, which is a genuine Old English name meaning “the king's manor”. The district then took its name from the station."
  },
  "queensway": {
    gist: "Queen Victoria, who rode along it as a girl.",
    chain: ["Black Lion Lane", "Queen's Road", "Queensway"],
    text: "The station is named after the road, which was renamed for Queen Victoria — she rode here from Kensington Palace as a girl, before her accession. It had been Black Lion Lane, after a pub, then Queen's Road, and was compressed into a single word in 1938."
  },
  "ravenscourt-park": {
    gist: "A pun on an owner's name — corbeau, a raven.",
    chain: ["Palingswick", "Ravenscourt (1747)", "Ravenscourt Park"],
    text: "The station is named after Ravenscourt, the manor Thomas Corbett bought in 1747 and renamed as a joke on his own surname: his arms carried a raven, and corbeau is French for raven. It had been called Palingswick. The park is the house's grounds."
  },
  "rayners-lane": {
    gist: "Daniel Rayner, who lived in the only cottage on the lane.",
    text: "The name comes from Daniel Rayner, a shepherd who lived in the only cottage on the lane when this was still farmland. A track with one house on it is identified by whoever lives there."
  },
  "redbridge": {
    gist: "A red brick bridge over the River Roding.",
    text: "Originally referring to a bridge of red brick that carried the road between Ilford and Woodford over the River Roding. The colour distinguished it from the White Bridge downstream — a pair of names that only made sense together."
  },
  "regent-s-park": {
    gist: "The Prince Regent, later George IV.",
    text: "The station is named after the park John Nash laid out from 1811 for George, Prince of Wales, who was then Prince Regent — a regent being one who rules on behalf of a monarch unable to, in his case during his father's illness. The park kept the title rather than the name."
  },
  "richmond": {
    gist: "Named by Henry VII after his Yorkshire earldom — “strong hill”.",
    chain: ["Sheen", "Richmond (1501)"],
    text: "The name comes from Henry VII's earldom of Richmond in Yorkshire, which is Norman French riche mont, “strong hill” — a name the Normans had themselves imported from Richemont in France. The manor here was called Sheen until the royal palace burnt down in 1497; Henry rebuilt it and renamed the place after his title."
  },
  "rickmansworth": {
    gist: "“Ricmær's enclosure”.",
    chain: ["Prichemaresworde (1086)", "Richemaresworth", "Rickmansworth"],
    text: "The name comes from a man called Ricmær and Old English worth, an enclosed homestead — land fenced off from the waste, one of the commonest endings in southern England. Domesday's initial P is a Norman clerk's error."
  },
  "roding-valley": {
    gist: "The valley of the Roding — a river named after villages, not the reverse.",
    text: "The name comes from the Essex Rodings, “the people of Hrotha”, an Old English “-ingas” group name that produced eight villages. The river running past them had no recorded name of its own, so it was eventually called the Roding after the places it flowed through — the opposite of the usual order."
  },
  "royal-oak": {
    gist: "A pub named for the tree Charles II hid in.",
    text: "The station is named after a pub on Bishop's Bridge Road, itself named for the oak at Boscobel in which Charles II hid for a day after his defeat at Worcester in 1651 while Parliamentary soldiers searched below. After the Restoration the Royal Oak became one of the commonest pub names in England."
  },
  "ruislip": {
    gist: "“The crossing place on the rushy river”.",
    chain: ["Rislepe (1086)", "Ruislip"],
    text: "The name comes from Old English rysc, a rush, and hlȳp, a leap — a stretch of stream narrow enough to jump or ford. The river is the Pinn, and the rushes are what grew along it."
  },
  "ruislip-gardens": {
    gist: "A garden-suburb estate at Ruislip.",
    text: "The station is named after the garden-suburb estate laid out here in the 1930s. Ruislip is Old English rysc, a rush, plus hlȳp, a leap — the rushy crossing on the River Pinn."
  },
  "ruislip-manor": {
    gist: "The manor of Ruislip.",
    text: "The station is named after the manor of Ruislip, granted after the Conquest to the Norman abbey of Bec, which held it for centuries. Ruislip is Old English rysc, a rush, plus hlȳp, a leap — the crossing on the rushy river."
  },
  "russell-square": {
    gist: "The Russell family, Dukes of Bedford.",
    text: "The station is named after the Russell family, Dukes of Bedford, who acquired Bloomsbury by marriage in 1669 and laid out its squares over the following century and a half. Their estate names — Russell, Bedford, Tavistock, Woburn — still map the family across the district."
  },
  "seven-sisters": {
    gist: "Seven elm trees planted in a ring.",
    text: "Originally referring to seven elm trees planted in a ring on Page Green in Tottenham, recorded from at least 1619 and a landmark on the road out of London. The road took their name, and then the district and station did."
  },
  "shepherd-s-bush": {
    gist: "A resting place for shepherds and their flocks.",
    chain: ["Sheppards Bush Green (1635)", "Shepherd's Bush"],
    text: "The name comes from a bush or thicket on the green where drovers bringing sheep into London along the Uxbridge Road rested their flocks.",
    note: "The alternative is that a family called Sheppard held land here and the bush was simply theirs. The surname was common enough locally to keep the question open."
  },
  "shepherd-s-bush-market": {
    gist: "The market beside the station.",
    chain: ["Shepherd's Bush (1914)", "Shepherd's Bush Market"],
    text: "The station is named after the street market outside it, a name adopted in 2008 to end an eighty-year confusion with the Central line's Shepherd's Bush a few hundred metres away. Shepherd's Bush is the green where drovers rested their flocks on the way into London."
  },
  "sloane-square": {
    gist: "Sir Hans Sloane, physician and lord of the manor of Chelsea.",
    text: "The station is named after Sir Hans Sloane, physician and collector, who bought the manor of Chelsea in 1712; the square was laid out on his land in 1771. His 71,000 objects became the founding collection of the British Museum."
  },
  "snaresbrook": {
    gist: "A brook associated with snares — or with a family called Snare.",
    chain: ["Snaresbrook (1599)", "Snaresbrook"],
    text: "The name comes from a brook on the edge of Epping Forest, but what the first element means is uncertain — the name is recorded late, by which time its sense may already have been lost.",
    note: "Two readings: the word “snare”, meaning traps set for wildfowl or game at the water, which suits a forest edge; or the surname Snare, from a family holding land nearby. Neither is documented before the 16th century."
  },
  "south-ealing": {
    gist: "South of “the people of Gilla”.",
    text: "The name comes from a man called Gilla and Old English “-ingas”, “the people or followers of”. The initial G softened away over the centuries, leaving no trace in the modern spelling."
  },
  "south-harrow": {
    gist: "South of the pagan shrine on the hill.",
    text: "The name comes from Old English hearg, a heathen temple or holy place — one of the very few English place-names to record pre-Christian worship."
  },
  "south-kensington": {
    gist: "The southern part of “Cynesige's people's farmstead”.",
    chain: ["Chenesitun (1086)", "Kensington"],
    text: "The name comes from a man called Cynesige and his people, plus Old English tūn, a farmstead. “South” distinguishes this station from High Street Kensington and West Kensington."
  },
  "south-kenton": {
    gist: "South of “Cæna's farmstead”.",
    text: "The name comes from a man called Cæna and Old English tūn, a farmstead. “South” distinguishes this station from Kenton and North Wembley on either side."
  },
  "south-ruislip": {
    gist: "South of “the crossing on the rushy river”.",
    chain: ["Northolt Junction (1908)", "South Ruislip"],
    text: "The name comes from Old English rysc, a rush, and hlȳp, a leap — the rushy crossing on the River Pinn. The station was called Northolt Junction, after the railway junction it stood at, until 1932."
  },
  "south-wimbledon": {
    gist: "South of “Wynnman's hill”.",
    chain: ["Wunemannedune (c.950)", "Wimbeldon", "Wimbledon"],
    text: "The name comes from a man called Wynnman and Old English dūn, a hill. The intrusive b appeared later, the mouth's shortcut between m and l, as in Hambledon and bramble."
  },
  "south-woodford": {
    gist: "South of “the ford by the wood”.",
    chain: ["George Lane (1856)", "South Woodford"],
    text: "The name comes from Old English wudu, a wood, and ford — the crossing of the River Roding at the forest edge. The station was named George Lane, after the road, until 1937."
  },
  "southfields": {
    gist: "The south fields of the parish.",
    text: "Originally referring to the open arable on the southern edge of Wandsworth — the plainest kind of English name, and the first to vanish when land is built over."
  },
  "southgate": {
    gist: "The south gate of Enfield Chase.",
    chain: ["Suthgate (1370)", "Southgate"],
    text: "Originally referring to the southern entrance to Enfield Chase, a royal hunting ground enclosed by a pale whose gates were named by direction."
  },
  "southwark": {
    gist: "“The southern defensive work”.",
    chain: ["Suthringa geweorche (c.1000)", "Suthgeweorc", "Southwark"],
    text: "The name comes from Old English sūth and weorc, a fortification guarding the southern bridgehead of London Bridge. The earliest recorded form means “the fort of the men of Surrey”. “Weorc” is the same word as modern “work”, in its older sense of something built."
  },
  "st-james-s-park": {
    gist: "A leper hospital dedicated to St James the Less.",
    text: "The name comes from a hospital for leprous women that stood in the marshy fields here under the patronage of St James the Less. Henry VIII took the site in 1531, built St James's Palace on it and enclosed the surrounding ground as a deer park; the saint's name passed from hospital to palace to park."
  },
  "st-john-s-wood": {
    gist: "A wood belonging to the Knights of St John of Jerusalem.",
    text: "The name comes from the Knights of St John of Jerusalem — the Hospitallers, a military religious order founded to care for pilgrims — who held this land from the 12th century until the Dissolution. The wood was part of the Great Middlesex Forest and was identified by the order that owned it."
  },
  "st-paul-s": {
    gist: "The cathedral of St Paul.",
    chain: ["Post Office (1900)", "St Paul's"],
    text: "The station is named after the cathedral, which has stood in some form on the hill since 604. The station itself was called Post Office, after the General Post Office headquarters next door, until 1937."
  },
  "stamford-brook": {
    gist: "“The stony ford” over the brook.",
    chain: ["Staneford (1274)", "Stamford Brook"],
    text: "The name comes from Old English stān, stone, and ford: a crossing with a firm stony bed, worth naming in a district of soft mud. The “n” shifted to m in speech, as it did in Stamford in Lincolnshire."
  },
  "stanmore": {
    gist: "“The stony pool”.",
    chain: ["Stanmere (1086)", "Stanmore"],
    text: "The name comes from Old English stān, stone, and mere, a pool — one with a gravelly bed rather than a muddy one. “Mere” drifted to “-more” once the word had dropped out of everyday use."
  },
  "stepney-green": {
    gist: "“Stybba's landing place”, and the hamlet green.",
    chain: ["Stybbanhyþe (c.1000)", "Stebenhithe", "Stepney"],
    text: "The name comes from a man called Stybba and Old English hȳth, a wharf or landing place on the Thames. Three syllables wore down to two, and the hȳth became an unrecognisable “-ney”. “Green” is the hamlet's common."
  },
  "stockwell": {
    gist: "“The well by the tree stump”.",
    chain: ["Stokewell (1197)", "Stockwell"],
    text: "The name comes from Old English stocc, a stump or log, and wella, a spring. The stump may have been a marker beside the water or the hollowed log through which the spring was piped — both are recorded uses."
  },
  "stonebridge-park": {
    gist: "A stone bridge over the River Brent.",
    text: "Originally referring to a bridge of stone by which the Harrow Road crossed the River Brent, notable enough in a district of wooden ones to identify the place. “Park” was added by the developers who built the estate."
  },
  "stratford": {
    gist: "“The ford on the Roman road”.",
    chain: ["Stratforde (1066)", "Stratford"],
    text: "The name comes from Old English strǣt, a paved Roman road — borrowed from Latin strata — and ford. This is where the road from London to Colchester crossed the River Lea, and the same combination named Stratfords all over England."
  },
  "sudbury-hill": {
    gist: "“The southern manor”, on the hill.",
    chain: ["Sudbery (1292)", "Sudbury"],
    text: "The name comes from Old English sūth, south, and burh, a manor or fortified place — the manor lying south of Harrow, to which it belonged. Names of this kind only make sense from the place that coined them."
  },
  "sudbury-town": {
    gist: "The same southern manor, at its centre.",
    text: "The name comes from Old English sūth, south, and burh, a manor — the manor south of Harrow. “Town” marks the settlement's centre, distinguishing this station from Sudbury Hill."
  },
  "swiss-cottage": {
    gist: "A pub built to look like a Swiss chalet.",
    text: "The station is named after a tavern built beside the Finchley Road tollgate around 1804 in the alpine style then fashionable in England. It became known as the Swiss Cottage and — as so often — the pub named the crossroads, then the district."
  },
  "temple": {
    gist: "The London house of the Knights Templar.",
    text: "The name comes from the Knights Templar, a military order founded to protect pilgrims to Jerusalem, who settled here around 1160 and built the round church that still stands, modelled on the Holy Sepulchre. The order was suppressed in 1312 and the property passed eventually to lawyers, whose Inner and Middle Temple keep the name."
  },
  "theydon-bois": {
    gist: "“The valley where thatch grows”, held by the de Bosco family.",
    chain: ["Teidena (1086)", "Theydon Boys", "Theydon Bois"],
    text: "The name comes from Old English thæc, thatch or roofing straw, and denu, a valley — a valley that supplied roofing material. “Bois” comes from the de Bosco family, who held the manor from the 12th century, distinguishing it from Theydon Garnon and Theydon Mount. It is still pronounced “Boys”.",
    note: "Because Latin boscus means wood, some accounts read the suffix as describing the trees of Epping Forest rather than the family. The family is documented, so the surname reading is preferred."
  },
  "tooting-bec": {
    gist: "“The people of Tota”, and the Norman abbey of Bec.",
    chain: ["Totinge (1086)", "Toting Bek", "Tooting Bec"],
    text: "The name comes from a man called Tota and Old English “-ingas”, “the people or followers of”. “Bec” is the abbey of Bec-Hellouin in Normandy, which was granted the manor after the Conquest; its name distinguished this Tooting from Tooting Graveney, held by the de Gravenel family."
  },
  "tooting-broadway": {
    gist: "The broad junction at the centre of Tooting.",
    text: "The name comes from a man called Tota and Old English “-ingas”, “the people of”. A broadway is simply a wide street — the name given to the junction where the roads meet."
  },
  "tottenham-court-road": {
    gist: "Not Tottenham — the road to the manor house of Tottenhall.",
    chain: ["Totehele (1170)", "Tottenhall", "Totten Court", "Tottenham Court"],
    text: "The name comes from a man called Totta, whose hall stood near the top of the road. “Court” replaced “hall” in the name, and the whole thing was then pulled towards the better-known Tottenham seven miles north — which is a different Totta's hām altogether. The confusion is six centuries old and permanent."
  },
  "tottenham-hale": {
    gist: "“Totta's homestead”, at the nook of land.",
    chain: ["Toteham (1086)", "Tottenham"],
    text: "The name comes from a man called Totta and Old English hām, a homestead. Hale is Old English healh, a nook or corner of land — here the corner between the village and the Lea marshes."
  },
  "totteridge-and-whetstone": {
    gist: "“Tata's ridge”, and a stone of uncertain purpose.",
    chain: ["Taterugge (c.1150)", "Totteridge"],
    text: "The name comes from a man called Tata and Old English hrycg, a ridge — and the village does run along one. Whetstone, its neighbour, is the puzzle.",
    note: "“Whetstone” is the puzzle. The story that soldiers sharpened their swords on a stone here before the Battle of Barnet in 1471 is killed by the name being recorded in 1417. Soberer readings are a place where whetstones were quarried, or a house or inn called the Whetstone."
  },
  "tower-hill": {
    gist: "The hill outside the Tower of London.",
    text: "Originally referring to the rising ground just outside the walls of the Tower of London, where prisoners were beheaded in public. Execution inside the walls was a privilege granted to very few; the hill was where everyone else died, in front of a crowd."
  },
  "tufnell-park": {
    gist: "William Tufnell, lord of the manor of Barnsbury.",
    text: "The station is named after William Tufnell, who inherited the manor of Barnsbury in 1753. His descendants laid the fields out for housing in the 1860s and named the new streets and the district after the family, as estate owners routinely did."
  },
  "turnham-green": {
    gist: "A green by a bend — probably in the river.",
    chain: ["Turneham (1229)", "Turnham Green"],
    text: "The name comes, most likely, from an Old English word for a bend or curve plus hām or hamm, land in a loop of the Thames — which fits the ground here exactly. “Green” is the common.",
    note: "The first element is not agreed. Alternatives include a personal name, Turna, and Old English trun, “round”, describing a circular enclosure."
  },
  "turnpike-lane": {
    gist: "A tollgate on the road.",
    text: "The name comes from a turnpike on Green Lanes — a barrier across a road at which travellers paid for its upkeep, named from the pike, the spiked pole that swung aside once you had paid. The lane beside it kept the name long after the tolls were abolished."
  },
  "upminster": {
    gist: "“The higher minster church”.",
    chain: ["Upmynstre (1062)", "Upminster"],
    text: "The name comes from Old English upp, higher, and mynster, a large or important church — the word borrowed from Latin monasterium. The village stands on rising ground above the Ingrebourne, and the church was the one up there."
  },
  "upminster-bridge": {
    gist: "The bridge over the River Ingrebourne.",
    text: "The station is named after the bridge over the River Ingrebourne below Upminster, which is Old English upp, higher, plus mynster, a large church — the church on the high ground."
  },
  "upney": {
    gist: "“The higher island”.",
    chain: ["Upney (1456)", "Upney"],
    text: "The name comes from Old English upp, higher, and īeg, an island — a patch of drier, raised ground among the marshes north of the Thames, of the kind early settlers built on."
  },
  "upton-park": {
    gist: "“The upper farmstead”, and its park.",
    text: "The station is named after the Upton Park housing development built here in Victorian times, which took its name in turn from Upton — Old English upp plus tūn, the farm on the higher ground, one of the commonest names in England."
  },
  "uxbridge": {
    gist: "“The bridge of the Wixan” — an Anglo-Saxon tribal group.",
    chain: ["Wixebrug (1145)", "Woxbrigge", "Uxbridge"],
    text: "The name comes from the Wixan, an Anglo-Saxon people recorded in the Tribal Hidage who settled in this part of Middlesex, and the bridge that carried the road over the River Colne. The initial W was lost and the vowel shifted, leaving no trace of the tribe in the modern spelling."
  },
  "vauxhall": {
    gist: "“Falkes's hall” — the manor of a mercenary of King John.",
    chain: ["Faukeshale (1279)", "Fauxhall", "Vauxhall"],
    text: "The name comes from Falkes de Bréauté, a Norman soldier of fortune in King John's service who acquired the manor by marriage around 1216; his hall took his name. F drifted to V, which is an ordinary southern English change — the same one that gives vixen from fox.",
    note: "It is often said that the Russian word for a railway station, вокзал (vokzal), comes from Vauxhall — either through a Russian delegation misunderstanding the name of the pleasure gardens, or through the gardens at Pavlovsk being called Vokzal in imitation of them. The second route is plausible and partly documented; the delegation story is almost certainly apocryphal."
  },
  "victoria": {
    gist: "Queen Victoria.",
    text: "The station is named after Queen Victoria, at two removes: Victoria Street was cut through Westminster in 1851 and named for her, the railway terminus of 1860 took the street's name, and the Underground station took the terminus's."
  },
  "walthamstow-central": {
    gist: "“The place of welcome” — or a woman called Wilcume.",
    chain: ["Wilcumestowe (c.1067)", "Walthamstowe", "Walthamstow"],
    text: "The name comes from Old English stōw, which usually means a holy place or an assembly place, with a first element that is the difficulty — and the modern spelling, pulled towards the familiar Waltham, hides it further.",
    note: "It may be wilcuma, “a welcome guest”, giving “the place of welcome”; or the woman's personal name Wilcume, giving “Wilcume's holy place”. Scholars are split, and the town has adopted the friendlier reading."
  },
  "wanstead": {
    gist: "“The place by the mound”.",
    chain: ["Wænstede (1055)", "Wanstead"],
    text: "The name comes from Old English stede, a place, with a first element that is probably wænn, a lump or small hill.",
    note: "The alternative takes the first element as wægn, a wagon — “the place where wagons are kept”. The two words are barely distinguishable in the early spellings."
  },
  "warren-street": {
    gist: "The Warren family, by marriage into the Fitzroy estate.",
    text: "The station is named after the Warren family, who came into the Fitzroy estate by marriage: Charles Fitzroy, 1st Baron Southampton, married Anne Warren, daughter of Admiral Sir Peter Warren. When his land was laid out for building in the 1790s the new streets took family names — Warren, Fitzroy, Grafton, Euston — which is why they cluster in one district."
  },
  "warwick-avenue": {
    gist: "The Earls of Warwick.",
    text: "The station is named after the Earls of Warwick. The avenue was laid out in the 1840s as part of the Paddington estate, in a group of streets named after peerages of the day — Warwick, Clarendon, Sutherland — the developer's usual way of lending an address some borrowed rank."
  },
  "waterloo": {
    gist: "The battle of 1815, by way of the bridge.",
    chain: ["Strand Bridge", "Waterloo Bridge (1817)", "Waterloo"],
    text: "The station is named after Waterloo Bridge, which was to have been called Strand Bridge until Parliament renamed it before it opened in 1817, two years after Wellington's victory. The railway terminus built at the bridge approach took the name from the road. Waterloo itself is a Flemish village name: water plus loo, a wood or clearing."
  },
  "watford-met": {
    gist: "“The hunters' ford”.",
    chain: ["Watforda (944)", "Watford"],
    text: "The name comes, most probably, from Old English wāth, hunting, and ford — the crossing of the River Colne used by hunting parties working the woods beyond it."
  },
  "wembley-central": {
    gist: "“Wemba's woodland clearing”.",
    chain: ["Wembalea (825)", "Wemblee", "Wembley"],
    text: "The name comes from a man called Wemba and Old English lēah, a clearing in woodland — land won from the forest and named after him."
  },
  "wembley-park": {
    gist: "A pleasure park at Wembley.",
    text: "The station is named after a pleasure park laid out here in 1889 as an excursion attraction for the railway, which took its name from the place. Wembley is “Wemba's woodland clearing”, an Old English personal name plus lēah."
  },
  "west-acton": {
    gist: "The western part of the oak farmstead.",
    text: "The name comes from Old English āc, an oak, and tūn, a farmstead — the farm cleared out of the oak woods that covered west Middlesex."
  },
  "west-brompton": {
    gist: "West of “the broom farmstead”.",
    chain: ["Brompton (1294)", "West Brompton"],
    text: "The name comes from Old English brōm — the yellow-flowered shrub that colonises poor sandy ground — and tūn, a farmstead. The same plant names Bromley and Bromsgrove."
  },
  "west-finchley": {
    gist: "West of “the finches' clearing”.",
    text: "The name comes from Old English finc, a finch, and lēah, a clearing in woodland — a clearing named for the birds in it."
  },
  "west-ham": {
    gist: "The western hām — a homestead, or land in a river bend.",
    chain: ["Hamme (958)", "Hame (1086)", "West Ham"],
    text: "The name comes from one of two Old English words that fell together here: hām, a homestead, and hamm, land enclosed in a river bend or standing dry among marshes. The ground between the Lea and the Roding suits hamm particularly well. East and West were distinguished by the 12th century."
  },
  "west-hampstead": {
    gist: "West of “the homestead”.",
    chain: ["West End Lane (1879)", "West Hampstead"],
    text: "The name comes from Old English hām-stede, simply a homestead. The station was named West End Lane, after the hamlet of West End that stood here, and renamed West Hampstead in 1903 — a deliberate upgrade of address."
  },
  "west-harrow": {
    gist: "West of the pagan shrine on the hill.",
    text: "The name comes from Old English hearg, a heathen temple or holy place — one of the few English names to preserve a record of pre-Christian worship."
  },
  "west-kensington": {
    gist: "A name chosen by developers — the place is in Fulham.",
    chain: ["North End (Fulham) (1874)", "West Kensington"],
    text: "The name was chosen by local builders, who had the station renamed in 1877 on the reasoning that Kensington sold houses better than Fulham — where the place actually is. It worked, and the district has been called West Kensington ever since. Kensington is “the farmstead of Cynesige's people”."
  },
  "west-ruislip": {
    gist: "West of “the crossing on the rushy river”.",
    chain: ["Ruislip & Ickenham (1906)", "West Ruislip"],
    text: "The name comes from Old English rysc, a rush, and hlȳp, a leap — a stretch of the River Pinn narrow enough to jump. The station was Ruislip & Ickenham until 1947."
  },
  "westbourne-park": {
    gist: "The Westbourne — “the west stream”.",
    text: "The name comes from the Westbourne — Old English west plus burna, a stream — the river running down to the Thames on the western side of the old City, as against the Eastbourne. Westbourne Green stood beside it; the river now runs in pipes."
  },
  "westminster": {
    gist: "“The west minster” — the abbey, west of the City.",
    text: "The name comes from Old English west and mynster, a large church, borrowed from Latin monasterium. The great church on Thorney Island was the minster to the west, as against St Paul's to the east — a pair of names that only makes sense from inside the City."
  },
  "white-city": {
    gist: "The white-painted halls of the 1908 Franco-British Exhibition.",
    text: "The name comes from the pavilions of the 1908 Franco-British Exhibition, which covered 140 acres and were finished in gleaming white stucco. Londoners nicknamed the grounds the White City, and the name outlived the buildings and attached itself to the district."
  },
  "whitechapel": {
    gist: "A whitewashed chapel.",
    text: "The name comes from the white lime rendering of St Mary Matfelon, built in the 13th century as a chapel of ease — a subsidiary church for parishioners too far from the parish church, here Stepney. Londoners called it the white chapel to distinguish it from every other."
  },
  "willesden-green": {
    gist: "“The hill by the spring”, and its green.",
    chain: ["Wellesdone (1086)", "Wilsdon", "Willesden"],
    text: "The name comes from Old English wiell, a spring, and dūn, a hill. “Green” is the hamlet's common grazing, added to distinguish the settlement on it."
  },
  "willesden-junction": {
    gist: "A railway junction, not a place.",
    text: "The station is named after the railway junction it was built at in 1866, where several lines met — there has never been a place called Willesden Junction. Willesden itself is “the hill by the spring”, from Old English wiell plus dūn."
  },
  "wimbledon": {
    gist: "“Wynnman's hill”.",
    chain: ["Wunemannedune (c.950)", "Wimbeldon", "Wimbledon"],
    text: "The name comes from a man called Wynnman and Old English dūn, a hill — the high ground the common now covers. The “b” is a later intrusion, the mouth's shortcut between m and l."
  },
  "wimbledon-park": {
    gist: "The park of Wimbledon House.",
    text: "The station is named after the park of Wimbledon House, laid out for Earl Spencer in 1765 and named after the manor. Wimbledon is “Wynnman's hill”, an Old English personal name plus dūn."
  },
  "wood-green": {
    gist: "The green beside Tottenham Wood.",
    chain: ["Wodegrene (1502)", "Wood Green"],
    text: "Originally referring to the hamlet's common grazing at the edge of the wood that covered the high ground of Tottenham. Green and wood together are about as plain as English naming gets."
  },
  "wood-lane": {
    gist: "The lane that ran through the wood.",
    text: "Originally referring to the lane that ran north through what was then woodland and market garden at Shepherd's Bush, recorded from the 18th century. The wood went; the lane and its name stayed."
  },
  "woodford": {
    gist: "“The ford by the wood”.",
    chain: ["Wudeford (1062)", "Woodford"],
    text: "The name comes from Old English wudu, a wood, and ford — the crossing of the River Roding at the edge of what is now Epping Forest."
  },
  "woodside-park": {
    gist: "The settlement at the side of the wood.",
    text: "Originally referring to Woodside, the hamlet on the edge of Finchley Wood — “side” in the sense of the ground alongside something, as in “hillside”. “Park” was added by the builders of the Victorian estate."
  }
};

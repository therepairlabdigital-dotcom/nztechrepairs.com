/**
 * Suburb / town data for the local-SEO location pages.
 *
 * The shop is at 8/9 Fairwater Road, Warkworth. Everything north of Puhoi and
 * south of Mangawhai is realistic drive-in catchment; the Hibiscus Coast towns
 * are included because they sit on the same SH1 corridor.
 *
 * Each entry carries its own route, parking note, landmarks and "why locals come
 * to us" line. Those four fields are what stop the service x suburb matrix pages
 * from collapsing into the same page 285 times — see lib/matrix.ts.
 */

export type Location = {
  slug: string;
  href: string;
  /** Suburb name as people write it. */
  name: string;
  /** Short key used to build matrix slugs, e.g. "snells-beach". */
  key: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  description: string;
  /** Roughly how long the drive takes, in plain words. */
  driveTime: string;
  /** How to get from this town to Fairwater Road. */
  travel: string;
  /** Parking / access note. */
  parking: string;
  landmarks: string[];
  intro: string[];
  /** Why people from this specific town come to us — never duplicated. */
  localNote: string;
  /** Slugs of neighbouring pages, for internal linking. */
  nearby: string[];
};

const page = (key: string) => `/phone-repair-${key}`;

type Row = {
  key: string;
  name: string;
  eyebrow?: string;
  driveTime: string;
  travel: string;
  parking: string;
  landmarks: string[];
  description: string;
  intro: string[];
  localNote: string;
  nearby: string[];
};

const rows: Row[] = [
  {
    key: 'warkworth',
    name: 'Warkworth',
    driveTime: 'a few minutes from anywhere in town',
    travel:
      'We are on Fairwater Road, on the Woodcocks Road side of Warkworth rather than down in the Queen Street shops. From the town centre it is a two-minute drive up and over, and from the SH1 off-ramp you are here without going through the middle of town at all.',
    parking:
      'Because we are out of the Queen Street retail strip, you are not fighting for a time-limited town-centre park. Most people pull up, walk in, and are seen straight away.',
    landmarks: ['Warkworth town centre', 'Mahurangi River and the wharf', 'Warkworth Showgrounds', 'Hill Street intersection'],
    description:
      'We are a Warkworth repair workshop, not a courier depot or a chain branch that visits once a week. The bench is here, the parts are here, and most repairs are handed back the same day you drop them in.',
    intro: [
      'Warkworth is home for us. Almost everyone who walks in lives or works within a few minutes of Fairwater Road, and a good share of our regulars first came in with a cracked phone screen and have since brought us laptops, TVs and the kids’ iPads.',
      'Being genuinely local changes what a repair feels like. You can drop a device in on the way to the supermarket, get a call once we have actually looked at it, and pick it up the same afternoon — rather than posting it to Auckland and waiting a week to hear anything.',
      'Free assessment, an honest quote before we start, and a 3-month warranty on the parts and the workmanship.',
    ],
    localNote:
      'Because we are in Warkworth itself, most local jobs are walk-in-and-wait rather than drop-off-and-return — screens and batteries are usually done in about 30 minutes while you get on with the rest of your errands.',
    nearby: ['matakana', 'snells-beach', 'sandspit', 'kaipara-flats'],
  },
  {
    key: 'matakana',
    name: 'Matakana',
    driveTime: 'about 10 minutes',
    travel:
      'Straight down Matakana Road and into Warkworth. At the Hill Street intersection carry on towards Woodcocks Road and we are a short run up Fairwater Road — you never have to get into the Queen Street traffic.',
    parking:
      'Easy off-street parking at our end of town, which is a relief if you are used to circling the Matakana village car park on a market morning.',
    landmarks: ['Matakana Village', 'Matakana Farmers Market', 'Matakana Country Park', 'Matakana Cinemas'],
    description:
      'Matakana is ten minutes down the road, so we see a steady stream of village locals, winery and cafe staff, and weekenders who have dropped a phone on a tiled terrace.',
    intro: [
      'Matakana sits close enough that a repair here is a quick errand rather than a trip. Most Matakana customers come in on the way to or from Warkworth for something else, and collect the device on the way back through.',
      'We repair the full spread of what the area actually uses — iPhones and Samsungs, iPads that live in cafes and cellar doors, MacBooks used to run small businesses, and the family TV.',
      'Everything is quoted before we start and covered by a 3-month warranty.',
    ],
    localNote:
      'A lot of Matakana work is hospitality and small-business gear — EFTPOS-adjacent tablets, till iPads and owner laptops — where being down for a week simply is not an option. We prioritise anything a business is trading on.',
    nearby: ['point-wells', 'omaha', 'warkworth', 'leigh'],
  },
  {
    key: 'snells-beach',
    name: 'Snells Beach',
    driveTime: 'about 15 minutes',
    travel:
      'Follow Mahurangi East Road back along the peninsula to Sandspit Road, into Warkworth, then across to Woodcocks Road and up Fairwater Road. It is one straight run with no motorway involved.',
    parking:
      'Off-street parking directly at the shop — no meters and no time limits, so there is no rush if we need fifteen minutes to diagnose something properly.',
    landmarks: ['Snells Beach shops', 'Mahurangi East Road', 'Sunburst Reserve', 'Snells Beach foreshore'],
    description:
      'Snells Beach is one of our biggest catchments outside Warkworth itself. It is a fifteen-minute drive, and we are the closest proper repair bench to the whole Mahurangi East peninsula.',
    intro: [
      'There is no repair shop out on the peninsula, so Snells Beach devices either come to us or get posted to Auckland. We would rather you got it back the same day.',
      'We see a lot of salt-air and sand damage from this end of the coast — charging ports full of beach grit, speakers that have gone muffled, and phones that have had an unplanned swim. All of that is routine work for us.',
      'Free assessment, an upfront quote, and a 3-month warranty on every repair.',
    ],
    localNote:
      'Snells Beach is a genuinely retiree-heavy community, and a big share of what we do here is patient, unhurried help — setting a replacement phone up properly, moving photos across, and explaining what actually went wrong rather than just handing the device back.',
    nearby: ['algies-bay', 'sandspit', 'warkworth', 'matakana'],
  },
  {
    key: 'algies-bay',
    name: 'Algies Bay',
    driveTime: 'about 18 minutes',
    travel:
      'Out of Algies Bay onto Mahurangi East Road, past Snells Beach, then along Sandspit Road into Warkworth and across to Fairwater Road via Woodcocks Road.',
    parking:
      'Park right outside. There is no meter, no time limit and no hunting for a space — worth knowing if you are making the trip in from the bay.',
    landmarks: ['Algies Bay foreshore', 'Martins Bay Road', 'Scandrett Regional Park', 'Mahurangi East'],
    description:
      'Algies Bay is at the far end of the Mahurangi East peninsula, which makes us comfortably the nearest repair workshop — and a much shorter trip than driving into Auckland.',
    intro: [
      'Coming from Algies Bay the drive is short enough to be worth doing once, but not twice. So we try to sort everything in a single visit: assess it while you wait, quote it on the spot, and where we can, repair it there and then.',
      'If a part has to be ordered, we will tell you honestly and hold the device securely until it lands, rather than having you make the trip in twice for nothing.',
      'Every job carries a 3-month parts and workmanship warranty.',
    ],
    localNote:
      'Because it is a longer run in from the bay, we will always try to diagnose over the phone first — tell us the model and the symptom on 027-827-0002 and we can usually say whether it is worth the drive before you make it.',
    nearby: ['snells-beach', 'sandspit', 'warkworth', 'matakana'],
  },
  {
    key: 'sandspit',
    name: 'Sandspit',
    driveTime: 'about 10 minutes',
    travel:
      'Sandspit Road straight into Warkworth, then over to Woodcocks Road and up Fairwater Road. It is a genuinely short drive — the sort of thing you do while the ferry queue clears.',
    parking:
      'Free off-street parking at the shop, which is more than can be said for the Sandspit wharf car park in the middle of summer.',
    landmarks: ['Sandspit Wharf', 'Kawau Island ferry terminal', 'Sandspit Yacht Club', 'Brick Bay'],
    description:
      'Sandspit is ten minutes away, and we get a lot of work off the back of the Kawau ferry — phones dropped on the wharf, marine electronics, and devices that have taken on salt water.',
    intro: [
      'Sandspit is close enough that most people drop in on the way past rather than making a special trip. Screens and batteries are usually turned around in about half an hour.',
      'Water damage is the standout job from this area. If a device has been in salt water, time matters far more than anything else — get it to us the same day and do not try to charge it in the meantime.',
      'Free assessment, honest quote, 3-month warranty.',
    ],
    localNote:
      'Kawau Island residents come through Sandspit for everything, and we are the first repair option on the mainland side. If you are working around a ferry timetable, call ahead and we will have the part ready so you are not waiting.',
    nearby: ['warkworth', 'snells-beach', 'algies-bay', 'matakana'],
  },
  {
    key: 'omaha',
    name: 'Omaha',
    driveTime: 'about 20 minutes',
    travel:
      'Back over the Omaha causeway, through Point Wells and Matakana, then down Matakana Road into Warkworth and across to Fairwater Road.',
    parking:
      'Straightforward off-street parking outside the shop — no time limits, so there is no pressure if the diagnosis takes a few minutes.',
    landmarks: ['Omaha Beach', 'Omaha Golf Club', 'Omaha Sands', 'Omaha causeway'],
    description:
      'Omaha is twenty minutes from the bench, and it is a beach community, which shows in the work — sand in charging ports, sun-cooked batteries and phones that have gone into the surf.',
    intro: [
      'A lot of Omaha devices are holiday-home devices, which means they get used hard for a few weeks and then sit in a drawer. Batteries that have been left flat for months are one of the most common things we see from here.',
      'Salt, sand and sunscreen are hard on phones. Charging ports pack with grit, speaker meshes clog, and back glass that was already chipped finally gives way on a deck.',
      'We assess for free, quote before we start, and warranty the repair for 3 months.',
    ],
    localNote:
      'Because Omaha empties out midweek and fills up at the weekend, we are used to working around it — if you need something ready before Friday, tell us and we will schedule the part for it.',
    nearby: ['point-wells', 'matakana', 'leigh', 'warkworth'],
  },
  {
    key: 'point-wells',
    name: 'Point Wells',
    driveTime: 'about 17 minutes',
    travel:
      'Out of Point Wells to Takatu Road, through Matakana village, then down Matakana Road into Warkworth and over to Fairwater Road.',
    parking: 'Park directly outside the shop, free and untimed — easier than the Matakana village car park you passed on the way in.',
    landmarks: ['Point Wells village', 'Whangateau Harbour', 'Takatu Road', 'Omaha estuary'],
    description:
      'Point Wells sits between Matakana and Omaha on the Whangateau Harbour, and it is a comfortable seventeen-minute run in to us.',
    intro: [
      'Point Wells is a small, close-knit community, and word of mouth is how most people here find us — usually after a neighbour got a screen done in half an hour instead of posting a phone to Auckland.',
      'We handle the full range from here: phone and tablet screens, laptop and MacBook faults, TVs, and data recovery when a drive or a phone has stopped cooperating.',
      'Free assessment and a 3-month warranty on every repair.',
    ],
    localNote:
      'Harbour-side living means humidity and salt air, and both quietly corrode charging ports and connectors over time. If your phone has started charging only at certain angles, that is usually port wear rather than a bad cable.',
    nearby: ['matakana', 'omaha', 'leigh', 'warkworth'],
  },
  {
    key: 'leigh',
    name: 'Leigh',
    driveTime: 'about 30 minutes',
    travel:
      'Leigh Road down through Matakana, then Matakana Road into Warkworth and across to Woodcocks Road and Fairwater Road.',
    parking: 'Free untimed parking at the door. Worth the certainty when you have driven half an hour to get here.',
    landmarks: ['Leigh village', 'Goat Island Marine Reserve', 'Leigh Harbour', 'Leigh Sawmill'],
    description:
      'Leigh is the far end of our northern catchment at about half an hour, and we are still by a distance the closest repair bench — the alternative is Auckland.',
    intro: [
      'From Leigh, a repair is a proper trip, so we do everything we can to make it a single one. Call first with your model and the fault and we will confirm we have the part before you set off.',
      'We see a lot of dive, boat and marine-adjacent damage from Leigh and Goat Island — water ingress, corroded ports and cameras that have fogged. Salt water is urgent; get it to us the same day if you can.',
      'Free assessment, an upfront quote, and a 3-month warranty.',
    ],
    localNote:
      'Goat Island brings a steady flow of divers and day visitors, and a phone that has been in the sea needs to be off and unplugged, not in rice and not on charge. That single decision often makes the difference between a recoverable device and a dead one.',
    nearby: ['omaha', 'point-wells', 'matakana', 'warkworth'],
  },
  {
    key: 'wellsford',
    name: 'Wellsford',
    driveTime: 'about 20 minutes',
    travel:
      'Straight down SH1 through Dome Valley into Warkworth, then take Woodcocks Road and turn up Fairwater Road. You do not need to go through the town centre.',
    parking: 'Free off-street parking outside the shop, and we are on the northern side of Warkworth so you are off SH1 and parked in a couple of minutes.',
    landmarks: ['Wellsford town centre', 'Rodney College', 'Dome Valley', 'Port Albert Road'],
    description:
      'Wellsford is twenty minutes south down SH1, and for most of the northern Rodney district we are the nearest repair workshop that actually has a bench and parts on site.',
    intro: [
      'Wellsford customers make up a solid share of our work. The drive down the Dome is short, and it beats sending a device to Auckland and losing it for a week.',
      'We cover everything from cracked iPhone and Samsung screens through to laptops, MacBooks, TVs and data recovery off dead drives.',
      'Free assessment, an honest quote before we touch anything, and a 3-month warranty.',
    ],
    localNote:
      'A lot of Wellsford work comes from farms and trades, where phones live in utes and get treated accordingly. Cracked screens, worn charging ports and dust-clogged laptop fans are the three we see most from up this way.',
    nearby: ['te-hana', 'kaiwaka', 'warkworth', 'kaipara-flats'],
  },
  {
    key: 'te-hana',
    name: 'Te Hana',
    driveTime: 'about 25 minutes',
    travel: 'South on SH1 through Wellsford and down the Dome Valley into Warkworth, then across to Woodcocks Road and up Fairwater Road.',
    parking: 'Free untimed parking right outside — no meters and no walking from a town-centre car park.',
    landmarks: ['Te Hana', 'Te Hana Te Ao Marama', 'SH1 north', 'Wellsford'],
    description:
      'Te Hana sits just north of Wellsford on SH1, roughly twenty-five minutes from the bench and well inside our regular catchment.',
    intro: [
      'From Te Hana the run down SH1 is straightforward, and we are positioned on the near side of Warkworth so you are not driving through the town to reach us.',
      'Phones, tablets, laptops, MacBooks, TVs and data recovery — it is all done here on site rather than sent away to a third party in Auckland.',
      'We assess for free and back every repair with a 3-month warranty.',
    ],
    localNote:
      'Given the distance, we would always rather diagnose over the phone first. Ring 027-827-0002 with the model and what it is doing, and we will tell you honestly whether it is worth the drive down.',
    nearby: ['wellsford', 'kaiwaka', 'mangawhai', 'warkworth'],
  },
  {
    key: 'kaiwaka',
    name: 'Kaiwaka',
    driveTime: 'about 35 minutes',
    travel: 'South on SH1 through Te Hana and Wellsford, down through Dome Valley to Warkworth, then Woodcocks Road and up Fairwater Road.',
    parking: 'Free off-street parking at the shop, no time limit — you will not be watching the clock after a 35-minute drive.',
    landmarks: ['Kaiwaka township', 'SH1 Kaiwaka', 'Oneriri Road', 'Kaiwaka Sports Complex'],
    description:
      'Kaiwaka is at the northern edge of what we can realistically serve as a drive-in, and plenty of people do make the run rather than posting a device to the city.',
    intro: [
      'At around thirty-five minutes, a Kaiwaka repair is worth planning. Call ahead so we can confirm the part is on the shelf, and we will aim to have you back on the road the same visit.',
      'If a drive-in does not suit, our mail-in service covers the whole of New Zealand — you post the device, we assess it and call you with a quote before doing anything.',
      'Free assessment, upfront quote, 3-month warranty on the repair.',
    ],
    localNote:
      'Kaiwaka is where the drive starts to make our mail-in option genuinely competitive. For a single phone or tablet, posting it is often faster than losing an hour and a quarter on the road.',
    nearby: ['mangawhai', 'te-hana', 'wellsford', 'warkworth'],
  },
  {
    key: 'mangawhai',
    name: 'Mangawhai',
    driveTime: 'about 45 minutes',
    travel:
      'Down Cove Road and Mangawhai Road to SH1 at Kaiwaka, then south through Wellsford and the Dome Valley into Warkworth and up Fairwater Road.',
    parking: 'Free untimed parking outside the shop.',
    landmarks: ['Mangawhai Heads', 'Mangawhai Village', 'Mangawhai Estuary', 'Cove Road'],
    description:
      'Mangawhai is the furthest town we regularly serve. It is a forty-five minute run, and a fair few people still make it rather than deal with the wait of sending a device away.',
    intro: [
      'Mangawhai has grown fast, and repair options up there have not kept pace. For anything beyond a basic screen swap, we are one of the closest workshops with proper diagnostic gear and parts in stock.',
      'For most Mangawhai customers we would honestly suggest the mail-in service unless you are coming to Warkworth anyway — it is the same technicians, the same warranty, and you skip the ninety-minute round trip.',
      'Free assessment either way, and a 3-month warranty on every repair.',
    ],
    localNote:
      'Beach-town devices take a beating from sand and salt, and Mangawhai Heads is no exception. Charging faults here are far more often a packed or corroded port than a failing battery — worth checking before you replace anything.',
    nearby: ['kaiwaka', 'te-hana', 'wellsford', 'warkworth'],
  },
  {
    key: 'kaipara-flats',
    name: 'Kaipara Flats',
    driveTime: 'about 12 minutes',
    travel: 'Kaipara Flats Road straight in to Warkworth, then across to Woodcocks Road and up Fairwater Road — a short, easy run.',
    parking: 'Free parking at the door, no meters, no time limit.',
    landmarks: ['Kaipara Flats Road', 'Kaipara Flats Airfield', 'Warkworth rural surrounds', 'Woodcocks Road'],
    description:
      'Kaipara Flats is rural Warkworth — twelve minutes out, and close enough that most people drop devices in on a normal trip into town.',
    intro: [
      'Kaipara Flats customers are effectively local, and we treat the work the same way: assess it while you wait, quote it honestly, and hand it back the same day wherever the parts allow.',
      'Rural devices come with their own pattern of faults — dust in laptop fans, phones dropped on concrete and gravel, and screens cracked in a ute door.',
      'Free assessment and a 3-month warranty on parts and workmanship.',
    ],
    localNote:
      'Poor rural mobile coverage means a lot of people here lean on Wi-Fi calling, and a phone that "stopped working on the property" is sometimes a settings or SIM issue rather than a hardware fault. We check that first before quoting you for anything.',
    nearby: ['warkworth', 'wellsford', 'matakana', 'sandspit'],
  },
  {
    key: 'puhoi',
    name: 'Puhoi',
    driveTime: 'about 15 minutes',
    travel:
      'Onto SH1 and north on the Pūhoi to Warkworth motorway, off at Warkworth and across to Woodcocks Road and Fairwater Road. The motorway has taken a serious chunk off this drive.',
    parking: 'Free off-street parking at the shop.',
    landmarks: ['Puhoi village', 'Puhoi Pub', 'Puhoi River', 'Pūhoi to Warkworth motorway'],
    description:
      'Puhoi is fifteen minutes south, and since the motorway opened it is one of the easier runs into Warkworth from anywhere on the Hibiscus Coast side.',
    intro: [
      'Puhoi sits at the southern gate of our catchment. The motorway made the trip to Warkworth quicker than heading south into Silverdale for most things.',
      'We repair phones, tablets, laptops, MacBooks, Apple Watches and TVs, and recover data off drives and devices that have stopped booting.',
      'Free assessment, upfront quote, 3-month warranty.',
    ],
    localNote:
      'The valley is a notorious coverage blackspot, so if your phone seems dead only at home, it is worth ruling out signal before assuming hardware. We will tell you if that is what is going on rather than sell you a repair you do not need.',
    nearby: ['waiwera', 'hatfields-beach', 'orewa', 'warkworth'],
  },
  {
    key: 'waiwera',
    name: 'Waiwera',
    driveTime: 'about 18 minutes',
    travel: 'North on SH1 and the Pūhoi to Warkworth motorway, off at Warkworth, then Woodcocks Road and up Fairwater Road.',
    parking: 'Free untimed parking directly outside.',
    landmarks: ['Waiwera Beach', 'Waiwera River', 'Wenderholm Regional Park', 'SH1 Waiwera'],
    description:
      'Waiwera is a short motorway run north, and we are a straightforward alternative to heading south into the Hibiscus Coast for a repair.',
    intro: [
      'From Waiwera the drive north to us is quick and predictable, and unlike the coast road south you are not queueing through Orewa to get there.',
      'We handle everything on site — screens, batteries, charging ports, water damage, laptops, TVs and data recovery.',
      'Free assessment and a 3-month warranty on every job.',
    ],
    localNote:
      'Wenderholm and the beach mean a steady trickle of sand-and-saltwater jobs from this stretch. If a device has been in the sea, do not put it on charge — that is what turns a recoverable phone into a write-off.',
    nearby: ['puhoi', 'hatfields-beach', 'orewa', 'warkworth'],
  },
  {
    key: 'hatfields-beach',
    name: 'Hatfields Beach',
    driveTime: 'about 20 minutes',
    travel: 'Onto SH1 north through Waiwera and up the motorway to Warkworth, then across to Woodcocks Road and Fairwater Road.',
    parking: 'Free parking at the door with no time limit.',
    landmarks: ['Hatfields Beach', 'Orewa Estuary', 'SH1 Hatfields', 'Wenderholm'],
    description:
      'Hatfields Beach is twenty minutes north of us on SH1, at the top end of the Hibiscus Coast and comfortably within reach.',
    intro: [
      'Hatfields sits right on the highway, so the run to Warkworth is simple — and often quicker than crawling through the Orewa shops in the other direction.',
      'Phone and tablet screens, batteries, charging ports, water damage, laptops, MacBooks, TVs and data recovery are all done in-house.',
      'Free assessment, honest quote, 3-month warranty.',
    ],
    localNote:
      'Beachfront living is hard on charging ports — fine sand packs into a Lightning or USB-C port and stops the cable seating properly. That is a clean-out job far more often than it is a battery replacement.',
    nearby: ['orewa', 'waiwera', 'red-beach', 'puhoi'],
  },
  {
    key: 'orewa',
    name: 'Orewa',
    driveTime: 'about 25 minutes',
    travel: 'Up Hibiscus Coast Highway to SH1 and north on the motorway to Warkworth, then Woodcocks Road and up Fairwater Road.',
    parking: 'Free off-street parking outside the shop — no time-limited bays like the Orewa main street.',
    landmarks: ['Orewa Beach', 'Orewa town centre', 'Hibiscus Coast Highway', 'Orewa Estuary'],
    description:
      'Orewa is twenty-five minutes down the motorway, and plenty of Hibiscus Coast customers make the trip for a workshop that gives them a real technician and a real answer.',
    intro: [
      'Orewa is a big town with plenty of phone shops, but not many places that will actually open a device, diagnose the fault properly and tell you what is wrong before quoting.',
      'We do board-level diagnosis, water damage recovery, data recovery and the full range of screen, battery and port work — not just parts swapping.',
      'Free assessment, an upfront quote, and a 3-month warranty on parts and labour.',
    ],
    localNote:
      'Most Orewa customers come to us for the things a quick-turnaround kiosk will not take on — water damage, devices that will not boot, and data recovery off a phone or drive that has been written off elsewhere.',
    nearby: ['red-beach', 'hatfields-beach', 'silverdale', 'millwater'],
  },
  {
    key: 'red-beach',
    name: 'Red Beach',
    driveTime: 'about 27 minutes',
    travel: 'Whangaparaoa Road out to Hibiscus Coast Highway, onto SH1 north and up the motorway to Warkworth, then Woodcocks Road and Fairwater Road.',
    parking: 'Free untimed parking right outside the workshop.',
    landmarks: ['Red Beach', 'Whangaparaoa Road', 'Red Beach Surf Life Saving Club', 'Hibiscus Coast Highway'],
    description:
      'Red Beach is under half an hour north on the motorway, and we are a genuine option for anything the Hibiscus Coast shops will not tackle.',
    intro: [
      'The motorway makes Red Beach to Warkworth a clean run, and a lot of people find it faster than fighting the Whangaparaoa peninsula traffic in the other direction.',
      'We take on the harder jobs as well as the routine ones — water damage, no-boot faults, data recovery, and board-level work on phones and laptops.',
      'Free assessment and 3 months of warranty on every repair.',
    ],
    localNote:
      'If you are coming from the peninsula, ring ahead on 027-827-0002 with your model. We will confirm the part is in stock so the drive is worth making.',
    nearby: ['whangaparaoa', 'orewa', 'millwater', 'silverdale'],
  },
  {
    key: 'silverdale',
    name: 'Silverdale',
    driveTime: 'about 30 minutes',
    travel: 'Straight onto SH1 north and up the Pūhoi to Warkworth motorway, off at Warkworth, then across to Woodcocks Road and up Fairwater Road.',
    parking: 'Free off-street parking at the door — and no shopping-centre car park to navigate.',
    landmarks: ['Silverdale village', 'Silverdale Centre', 'Silverdale interchange', 'Millwater'],
    description:
      'Silverdale is a straight thirty-minute motorway run, and we regularly see customers from here for repairs that need a proper diagnosis rather than a counter estimate.',
    intro: [
      'From Silverdale it is motorway the whole way, which makes the trip more predictable than the distance suggests.',
      'We cover phones, tablets, laptops, MacBooks, Apple Watches and TVs, plus data recovery when a device or drive has stopped being readable.',
      'Free assessment, a clear quote before we start, and a 3-month warranty.',
    ],
    localNote:
      'We pick up a fair amount of Silverdale business and trade work — laptops and tablets that a company depends on daily. If a device is holding up your work, tell us and we will treat it as urgent.',
    nearby: ['millwater', 'orewa', 'red-beach', 'whangaparaoa'],
  },
  {
    key: 'millwater',
    name: 'Millwater',
    driveTime: 'about 28 minutes',
    travel: 'Out to the Silverdale interchange, north on SH1 and the motorway to Warkworth, then Woodcocks Road and up Fairwater Road.',
    parking: 'Free parking outside, untimed.',
    landmarks: ['Millwater', 'Millwater Parkway', 'Silverdale Centre', 'Orewa Estuary'],
    description:
      'Millwater is a young, fast-growing suburb, and a straightforward twenty-eight minute motorway trip from our bench.',
    intro: [
      'Millwater is full of families, which in repair terms means a lot of dropped phones, cracked iPads and consoles that have stopped reading discs.',
      'We repair all of it in-house — screens, batteries, charging ports, water damage, laptops, TVs and game consoles — and recover data when something will not turn on at all.',
      'Free assessment and a 3-month warranty on every repair.',
    ],
    localNote:
      'Kids’ iPads and school Chromebooks are a steady stream from Millwater. Cracked glass on a school device is almost always cheaper to repair than to replace, and we can usually turn one around inside a day.',
    nearby: ['silverdale', 'orewa', 'red-beach', 'whangaparaoa'],
  },
  {
    key: 'whangaparaoa',
    name: 'Whangaparaoa',
    driveTime: 'about 35 minutes',
    travel:
      'Along Whangaparaoa Road to the Hibiscus Coast Highway, onto SH1 north and up the motorway to Warkworth, then Woodcocks Road and Fairwater Road.',
    parking: 'Free untimed parking directly outside the shop.',
    landmarks: ['Whangaparaoa Peninsula', 'Gulf Harbour', 'Manly Beach', 'Stanmore Bay'],
    description:
      'Whangaparaoa is the southern edge of our catchment at around thirty-five minutes, and we see peninsula customers regularly for the more involved repairs.',
    intro: [
      'The peninsula is a long way from anywhere, and getting off it is the slow part of the trip. Once you are on the motorway, Warkworth comes up quickly.',
      'People generally come to us from Whangaparaoa for the jobs that need real diagnostic work — water damage, devices that will not boot, board-level faults and data recovery.',
      'Free assessment, an upfront quote, and a 3-month warranty.',
    ],
    localNote:
      'Gulf Harbour and the boating community bring us a steady run of salt-water damage. If a device has been in the sea, keep it off and get it in — corrosion keeps spreading for as long as it is left.',
    nearby: ['red-beach', 'millwater', 'silverdale', 'orewa'],
  },
];

export const locations: Location[] = rows.map((row) => ({
  slug: `phone-repair-${row.key}`,
  href: page(row.key),
  key: row.key,
  name: row.name,
  metaTitle: `Phone & Computer Repair ${row.name} | NZ Tech Repairs`,
  metaDescription: `Device repair for ${row.name} — phone screens, batteries, laptops, MacBooks, TVs and data recovery. ${row.driveTime.charAt(0).toUpperCase() + row.driveTime.slice(1)} from our Warkworth workshop, with a 3-month warranty.`,
  eyebrow: row.eyebrow ?? row.name.toUpperCase(),
  headline: `Phone & Device Repair in ${row.name}`,
  description: row.description,
  driveTime: row.driveTime,
  travel: row.travel,
  parking: row.parking,
  landmarks: row.landmarks,
  intro: row.intro,
  localNote: row.localNote,
  nearby: row.nearby,
}));

const byKey = new Map(locations.map((location) => [location.key, location]));
const bySlug = new Map(locations.map((location) => [location.slug, location]));

export const getLocationByKey = (key: string) => byKey.get(key);
export const getLocationBySlug = (slug: string) => bySlug.get(slug);

/** The home town — excluded from the service x suburb matrix so it cannot
 *  duplicate the existing /services/{slug}-in-warkworth pages. */
export const HOME_KEY = 'warkworth';
export const matrixLocations = locations.filter((location) => location.key !== HOME_KEY);

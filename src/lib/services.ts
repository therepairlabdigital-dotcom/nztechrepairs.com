export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  icon: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  tagline: string;
  intro: string[];
  fixes: string[];
  faqs: Faq[];
  related: string[];
};

export const CATEGORIES = [
  'Phone & Tablet Repairs',
  'Computer & Laptop',
  'TV & Wearables',
  'Data & Software',
  'Accessories',
] as const;

export const services: Service[] = [
  {
    slug: 'iphone-repair',
    name: 'iPhone Repair',
    shortName: 'iPhone Repair',
    category: 'Phone & Tablet Repairs',
    icon: 'phone',
    image: '/images/lab/mobile-repair-open-clean.webp',
    metaTitle: 'iPhone Repair Warkworth | Screen & Battery Fixes | NZ Tech Repairs',
    metaDescription:
      'Fast iPhone repair in Warkworth — cracked screens, batteries, charging ports and more. Most iPhones fixed in about 30 minutes with a 3-month warranty.',
    keywords: ['iphone repair warkworth', 'iphone screen repair near me', 'iphone battery replacement', 'cracked iphone screen', 'apple repair warkworth'],
    tagline: 'Cracked screen, fading battery or dodgy charging? We fix iPhones fast — usually in about 30 minutes.',
    intro: [
      'Your iPhone runs your whole day, so when it breaks you want it back fast — and done properly. At NZ Tech Repairs in Warkworth we repair every iPhone model, from the latest Pro Max right back to the older classics, using high-quality parts and a 3-month warranty on every job.',
      'Most common iPhone repairs are completed while you wait, often in around 30 minutes. No appointment needed — just pop in, or call ahead and we will have the parts ready.',
    ],
    fixes: [
      'Cracked and shattered screen replacement',
      'Battery replacement for poor life or swelling',
      'Charging port cleaning and repair',
      'Front and rear camera repair',
      'Speaker, microphone and earpiece fixes',
      'Water damage diagnosis and cleaning',
      'Back glass and housing replacement',
    ],
    faqs: [
      { q: 'How long does an iPhone screen repair take?', a: 'Most iPhone screen and battery repairs are done in about 30 minutes while you wait. More involved repairs like water damage may take a little longer.' },
      { q: 'Do you use genuine parts?', a: 'We use high-quality replacement parts that match original performance, and every repair is backed by our 3-month warranty.' },
      { q: 'Do I need an appointment?', a: 'No appointment needed — walk in any time during opening hours, or call 027-827-0002 so we can confirm we have your part in stock.' },
    ],
    related: ['phone-screen-replacement', 'battery-replacement', 'samsung-android-repair'],
  },
  {
    slug: 'samsung-android-repair',
    name: 'Samsung & Android Phone Repair',
    shortName: 'Samsung & Android',
    category: 'Phone & Tablet Repairs',
    icon: 'samsung',
    image: '/images/lab/mobile-repair-phone-open.webp',
    metaTitle: 'Samsung & Android Phone Repair Warkworth | NZ Tech Repairs',
    metaDescription:
      'Samsung and Android phone repair in Warkworth — screens, batteries, charging ports and water damage. Fast turnaround and a 3-month warranty. Call today.',
    keywords: ['samsung repair warkworth', 'android phone repair near me', 'samsung screen replacement', 'galaxy screen repair', 'phone repair warkworth'],
    tagline: 'Samsung Galaxy, Google Pixel, Oppo, Huawei and more — we repair all the big Android brands.',
    intro: [
      'From Samsung Galaxy and Google Pixel to Oppo, Huawei and Motorola, our technicians repair every major Android brand. Curved Samsung screens and OLED panels are our specialty, fitted with quality parts that keep your display looking and feeling original.',
      'Whether it is a cracked screen, a battery that no longer lasts the day, or a charging port full of lint, we will diagnose it and give you an honest, up-front quote before any work begins.',
    ],
    fixes: [
      'Samsung Galaxy and curved-screen replacement',
      'Google Pixel and other Android screen repair',
      'Battery replacement and charging faults',
      'Charging port and USB-C repair',
      'Camera, speaker and button repair',
      'Water damage assessment and cleaning',
    ],
    faqs: [
      { q: 'Can you fix curved Samsung screens?', a: 'Yes — curved and edge displays are one of our specialties. We use quality OLED panels so your screen looks and responds like the original.' },
      { q: 'Which Android brands do you repair?', a: 'Samsung, Google Pixel, Oppo, Huawei, Motorola, Sony and more. If you are unsure, send us your model and we will confirm.' },
      { q: 'Is there a warranty?', a: 'Every Android repair comes with a 3-month warranty covering the parts and workmanship.' },
    ],
    related: ['iphone-repair', 'phone-screen-replacement', 'battery-replacement'],
  },
  {
    slug: 'ipad-tablet-repair',
    name: 'iPad & Tablet Repair',
    shortName: 'iPad & Tablet',
    category: 'Phone & Tablet Repairs',
    icon: 'tablet',
    image: '/images/lab/mobile-repair-small-1.webp',
    metaTitle: 'iPad & Tablet Repair Warkworth | Screen & Battery | NZ Tech Repairs',
    metaDescription:
      'iPad and tablet repair in Warkworth for all brands — cracked glass, battery, charging and more. Quality parts, fast turnaround and a 3-month warranty.',
    keywords: ['ipad repair warkworth', 'tablet repair near me', 'ipad screen replacement', 'samsung tablet repair', 'ipad battery replacement'],
    tagline: 'iPads and tablets take a beating — we bring cracked, dead and water-damaged tablets back to life.',
    intro: [
      'Tablets are easy to drop and expensive to replace, so a repair almost always makes sense. We fix all iPad models — including iPad Pro, Air and Mini — plus Samsung Galaxy Tab and other Android tablets.',
      'Cracked glass, unresponsive touch, weak batteries and charging issues are all routine for our technicians. We use quality parts and finish the job neatly so your tablet feels like new again.',
    ],
    fixes: [
      'iPad and tablet glass & digitiser replacement',
      'LCD / display replacement',
      'Battery replacement',
      'Charging port repair',
      'Home button and Touch ID repair',
      'Water damage assessment',
    ],
    faqs: [
      { q: 'Do you repair all iPad models?', a: 'Yes — iPad, iPad Air, iPad Mini and iPad Pro, plus Samsung and other Android tablets.' },
      { q: 'How long does an iPad repair take?', a: 'iPad screens are bonded with adhesive, so they usually take a few hours to a day to set properly. We will give you a clear timeframe up front.' },
      { q: 'Is it cheaper to repair than replace?', a: 'In almost every case, yes. A screen or battery repair is a fraction of the cost of a new tablet.' },
    ],
    related: ['iphone-repair', 'macbook-repair', 'phone-screen-replacement'],
  },
  {
    slug: 'phone-screen-replacement',
    name: 'Phone Screen Replacement',
    shortName: 'Screen Replacement',
    category: 'Phone & Tablet Repairs',
    icon: 'screen',
    image: '/images/lab/home-phone-cracked.webp',
    metaTitle: 'Phone Screen Replacement Warkworth | Cracked Screen Repair Near Me',
    metaDescription:
      'Cracked or smashed phone screen? Get a new phone screen fitted in Warkworth in about 30 minutes. Quality displays, fair prices and a 3-month warranty.',
    keywords: ['phone screen replacement near me', 'cracked screen repair warkworth', 'new phone screen', 'smashed phone screen repair', 'screen repair warkworth'],
    tagline: 'A cracked screen is the most common repair we do — and one of the fastest. New glass, fitted while you wait.',
    intro: [
      'A smashed or unresponsive screen does not just look bad — it lets in dust and moisture and can quickly get worse. Replacing it early protects the rest of your phone and keeps it worth fixing.',
      'We carry screens for the most popular iPhone and Samsung models in stock, so most screen replacements are completed in about 30 minutes. For other models we order the right part in quickly.',
    ],
    fixes: [
      'iPhone and Samsung screen replacement',
      'OLED and LCD display fitting',
      'Touch / digitiser replacement',
      'Glass-only repairs where available',
      'Screen plus battery bundle deals',
      'Free fitting of a screen protector with every screen repair',
    ],
    faqs: [
      { q: 'How much does a phone screen replacement cost?', a: 'It depends on your exact model. Send us your make and model and we will give you an up-front, no-obligation quote.' },
      { q: 'Will my new screen be as good as the original?', a: 'We fit quality OLED and LCD displays that match the original for brightness, colour and touch response, backed by a 3-month warranty.' },
      { q: 'Can you fix the glass only?', a: 'On some models, yes. If only the outer glass is cracked we can often do a cheaper glass-only repair — ask us about your model.' },
    ],
    related: ['iphone-repair', 'samsung-android-repair', 'screen-protectors'],
  },
  {
    slug: 'battery-replacement',
    name: 'Phone & Laptop Battery Replacement',
    shortName: 'Battery Replacement',
    category: 'Phone & Tablet Repairs',
    icon: 'battery',
    image: '/images/lab/mobile-repair-technician.webp',
    metaTitle: 'Battery Replacement Warkworth | Phone & Laptop Batteries | NZ Tech Repairs',
    metaDescription:
      'Phone and laptop battery replacement in Warkworth. Stop charging twice a day — get a fresh, high-capacity battery fitted fast with a 3-month warranty.',
    keywords: ['battery replacement near me', 'iphone battery replacement warkworth', 'phone battery replacement', 'laptop battery replacement', 'samsung battery replacement'],
    tagline: 'If your phone dies by lunchtime or swells up, a fresh battery makes it feel brand new again.',
    intro: [
      'Batteries wear out — it is normal. After a couple of years you will notice shorter life, sudden shutdowns, or in some cases a screen lifting from a swollen battery. A replacement is quick, affordable and instantly restores all-day life.',
      'We replace batteries in iPhones, Samsung and Android phones, iPads, MacBooks and laptops, using high-capacity cells that meet or beat the original specification.',
    ],
    fixes: [
      'iPhone battery replacement',
      'Samsung & Android battery replacement',
      'iPad and tablet batteries',
      'MacBook and laptop batteries',
      'Swollen battery removal and safe disposal',
      'Battery health check and advice',
    ],
    faqs: [
      { q: 'How do I know if I need a new battery?', a: 'Tell-tale signs are needing to charge more than once a day, sudden shutdowns at 20-40%, or the phone feeling warm or thicker than usual. We can run a quick battery health check.' },
      { q: 'How long does it take?', a: 'Phone batteries are usually replaced in about 30 minutes. Laptop batteries vary by model but are often same-day.' },
      { q: 'Is a swollen battery dangerous?', a: 'A swollen battery should be replaced as soon as possible. Bring it in carefully and we will remove and dispose of it safely.' },
    ],
    related: ['iphone-repair', 'charging-port-repair', 'laptop-computer-repair'],
  },
  {
    slug: 'charging-port-repair',
    name: 'Charging Port Repair',
    shortName: 'Charging Port',
    category: 'Phone & Tablet Repairs',
    icon: 'charging',
    image: '/images/lab/phone-port-repair.webp',
    metaTitle: 'Charging Port Repair Warkworth | Phone Won’t Charge | NZ Tech Repairs',
    metaDescription:
      'Phone not charging or cable feels loose? We clean and repair charging ports on iPhone, Samsung and Android in Warkworth. Fast fixes with a 3-month warranty.',
    keywords: ['charging port repair near me', 'phone wont charge warkworth', 'iphone charging port repair', 'usb-c port repair', 'loose charging port'],
    tagline: 'Have to wiggle the cable to charge? Often it is just lint — but we repair worn ports too.',
    intro: [
      'A phone that charges only at the perfect angle, or not at all, is one of the most common faults we see. Surprisingly often it is simply pocket lint packed into the port, which we can clean out on the spot.',
      'When the port itself is worn or damaged, we replace it so you can charge reliably again — no more propping the cable up with a book.',
    ],
    fixes: [
      'Charging port cleaning (lint and debris)',
      'iPhone Lightning port replacement',
      'USB-C and Micro-USB port replacement',
      'Loose or intermittent charging repair',
      'Charging IC and board-level diagnosis',
      'Wireless charging coil repair',
    ],
    faqs: [
      { q: 'Why won’t my phone charge?', a: 'Common causes are a lint-blocked port, a faulty cable, a worn port, or a battery at end of life. We will diagnose the exact cause before quoting.' },
      { q: 'Can you just clean the port?', a: 'Yes — a port clean is quick and inexpensive, and it solves a lot of "won’t charge" problems.' },
      { q: 'How long does a port replacement take?', a: 'Most charging port replacements are same-day; many are done while you wait.' },
    ],
    related: ['battery-replacement', 'iphone-repair', 'water-damage-repair'],
  },
  {
    slug: 'water-damage-repair',
    name: 'Water Damage Repair',
    shortName: 'Water Damage',
    category: 'Phone & Tablet Repairs',
    icon: 'water',
    image: '/images/lab/device-chip-repair.webp',
    metaTitle: 'Water Damage Phone Repair Warkworth | Liquid Damage | NZ Tech Repairs',
    metaDescription:
      'Dropped your phone in water? Bring it to NZ Tech Repairs in Warkworth fast. We clean, dry and repair liquid-damaged phones, tablets and laptops.',
    keywords: ['water damage phone repair near me', 'liquid damage repair warkworth', 'phone dropped in water', 'wet phone repair', 'water damaged iphone'],
    tagline: 'Phone took a swim? Act fast. The sooner we treat liquid damage, the better the chance of recovery.',
    intro: [
      'Water and electronics do not mix, but a quick response makes all the difference. Do not charge a wet device or leave it in rice — bring it to us as soon as you can so we can properly clean and dry the internals before corrosion sets in.',
      'We carefully disassemble, ultrasonically clean and dry liquid-damaged phones, tablets and laptops, then test and repair the components affected. Where data matters most, we focus on recovering your photos and files.',
    ],
    fixes: [
      'Liquid damage assessment and cleaning',
      'Corrosion removal and component drying',
      'Replacement of damaged parts',
      'Data recovery from water-damaged devices',
      'Battery and charging recovery',
      'Phones, tablets and laptops',
    ],
    faqs: [
      { q: 'What should I do right after water damage?', a: 'Turn the device off, do not try to charge it, and bring it in as soon as possible. Avoid the rice myth — it does not dry the inside and wastes valuable time.' },
      { q: 'Can my phone really be saved?', a: 'Many can, especially if treated quickly. We are upfront — after inspection we will tell you honestly what is recoverable before charging for repairs.' },
      { q: 'Can you still get my photos?', a: 'Even when a phone cannot be fully revived, we can often recover photos, contacts and files. Ask about our data recovery service.' },
    ],
    related: ['data-recovery', 'charging-port-repair', 'iphone-repair'],
  },
  {
    slug: 'macbook-repair',
    name: 'MacBook Repair',
    shortName: 'MacBook Repair',
    category: 'Computer & Laptop',
    icon: 'macbook',
    image: '/images/lab/service-bench-chip.webp',
    metaTitle: 'MacBook Repair Warkworth | Screen, Battery & Logic Board | NZ Tech Repairs',
    metaDescription:
      'Expert MacBook repair in Warkworth — screens, batteries, keyboards, charging and logic-board faults. Quality parts, honest quotes and a 3-month warranty.',
    keywords: ['macbook repair warkworth', 'macbook screen replacement near me', 'macbook battery replacement', 'macbook wont turn on', 'apple laptop repair'],
    tagline: 'From cracked screens to swollen batteries and liquid spills, we keep MacBooks running for years longer.',
    intro: [
      'MacBooks are built to last, and a repair almost always beats the cost of replacing one. Our technicians handle everything from screen and battery replacement to keyboard, trackpad, charging and more advanced logic-board faults.',
      'We give honest advice — if a repair is not worth it, we will tell you. Most repairs are completed quickly, with your data left exactly as you had it.',
    ],
    fixes: [
      'MacBook screen / display replacement',
      'Battery replacement (including swollen batteries)',
      'Keyboard and trackpad repair',
      'Liquid spill cleaning and recovery',
      'Charging and MagSafe / USB-C repair',
      'Logic-board level diagnostics',
      'macOS setup, slowdowns and storage upgrades',
    ],
    faqs: [
      { q: 'My MacBook won’t turn on — can you help?', a: 'Yes. A no-power MacBook can be anything from a charging fault to a board issue. We diagnose first and quote before doing any work.' },
      { q: 'Will I lose my data?', a: 'No — repairs are done with your data intact. If a drive is failing we will recommend a backup or recovery first.' },
      { q: 'Do you fix older MacBooks?', a: 'Yes, we repair both new and older MacBook, MacBook Air and MacBook Pro models.' },
    ],
    related: ['laptop-computer-repair', 'battery-replacement', 'data-recovery'],
  },
  {
    slug: 'laptop-computer-repair',
    name: 'Laptop & Computer Repair',
    shortName: 'Laptop & PC Repair',
    category: 'Computer & Laptop',
    icon: 'laptop',
    image: '/images/lab/service-bench-technician.webp',
    metaTitle: 'Laptop & Computer Repair Warkworth | PC Repairs Near Me | NZ Tech Repairs',
    metaDescription:
      'Laptop and computer repair in Warkworth — slow PCs, viruses, screens, power faults, upgrades and setups. Fast, friendly local service with honest quotes.',
    keywords: ['computer repair warkworth', 'laptop repair near me', 'pc repair warkworth', 'slow computer fix', 'virus removal warkworth'],
    tagline: 'Slow, crashing, virus-ridden or just won’t start? We get Windows and Mac computers running like new.',
    intro: [
      'Whether you work from home, run a small business or just want the family computer working again, we fix all makes of laptop and desktop. From a simple speed-up or virus clean to screen, power and hardware repairs, we do it all locally in Warkworth.',
      'We also handle upgrades that breathe new life into older machines — SSD storage, more memory and fresh software setups — usually for a fraction of the cost of a new computer.',
    ],
    fixes: [
      'Slow computer tune-ups and clean-ups',
      'Virus, malware and ransomware removal',
      'Laptop screen and hinge repair',
      'Power jack and no-power faults',
      'SSD and memory (RAM) upgrades',
      'Windows / macOS reinstall and setup',
      'Data transfer to a new computer',
    ],
    faqs: [
      { q: 'My computer is really slow — can you speed it up?', a: 'Almost always. A clean-up and an SSD upgrade can make an older laptop feel brand new. We will tell you the most cost-effective option.' },
      { q: 'Do you remove viruses?', a: 'Yes — we remove viruses, malware and ransomware, then secure your machine to help prevent it happening again.' },
      { q: 'Do you repair both Windows and Mac?', a: 'Yes, we service all major brands of Windows laptops and desktops as well as Apple Mac computers.' },
    ],
    related: ['macbook-repair', 'data-recovery', 'battery-replacement'],
  },
  {
    slug: 'tv-repair',
    name: 'TV Repair',
    shortName: 'TV Repair',
    category: 'TV & Wearables',
    icon: 'tv',
    image: '/images/lab/tv-repair-technician.webp',
    metaTitle: 'TV Repair Warkworth | LED, LCD & Smart TV Repairs | NZ Tech Repairs',
    metaDescription:
      'TV repair in Warkworth for LED, LCD and Smart TVs — no picture, no power, lines on screen, sound faults and more. Honest quotes and quality repairs.',
    keywords: ['tv repair warkworth', 'tv repair near me', 'smart tv repair', 'led tv repair', 'damaged tv repair'],
    tagline: 'No picture, no power, or lines across the screen? Before you bin it, let us take a look.',
    intro: [
      'A faulty TV is often far cheaper to repair than replace — and better for the planet too. We repair LED, LCD and Smart TVs from all the major brands, diagnosing power-supply, backlight, panel and software faults.',
      'Bring your TV in or ask about options for larger sets. We will assess it and give you an honest quote so you can decide with confidence.',
    ],
    fixes: [
      'No power / won’t turn on',
      'No picture or backlight faults',
      'Lines, blotches and dead areas on screen',
      'Sound and HDMI input faults',
      'Smart TV software and setup issues',
      'Power-board and component repair',
    ],
    faqs: [
      { q: 'Is it worth repairing my TV?', a: 'Often, yes — especially for power or backlight faults on a good-quality set. We will give you an honest assessment before you spend a cent.' },
      { q: 'Which TV brands do you repair?', a: 'All the major brands including Samsung, LG, Sony, Panasonic, TCL, Hisense and more.' },
      { q: 'Can a cracked TV panel be fixed?', a: 'A physically cracked panel is usually not economical to replace, but most other faults are very repairable. Send us a photo and we will advise.' },
    ],
    related: ['laptop-computer-repair', 'data-recovery', 'phone-accessories'],
  },
  {
    slug: 'apple-watch-repair',
    name: 'Apple Watch Repair',
    shortName: 'Apple Watch',
    category: 'TV & Wearables',
    icon: 'watch',
    image: '/images/lab/smart-watch.webp',
    metaTitle: 'Apple Watch Repair Warkworth | Screen & Battery | NZ Tech Repairs',
    metaDescription:
      'Apple Watch repair in Warkworth — cracked screens, batteries and charging faults for all Series. Precise, careful repairs with a 3-month warranty.',
    keywords: ['apple watch repair warkworth', 'iwatch screen repair near me', 'apple watch battery replacement', 'apple watch screen replacement', 'smartwatch repair'],
    tagline: 'Tiny device, big skills. We replace cracked Apple Watch screens and tired batteries with care.',
    intro: [
      'Apple Watch repairs need a steady hand and the right tools — both of which our technicians have. We replace cracked screens and worn batteries across all Apple Watch Series, restoring full function and appearance.',
      'If your Watch screen has lifted, cracked or stopped responding, or the battery no longer lasts the day, bring it in for a careful, precise repair.',
    ],
    fixes: [
      'Apple Watch screen / glass replacement',
      'Battery replacement',
      'Charging and pairing faults',
      'Water and impact damage assessment',
      'All Apple Watch Series supported',
    ],
    faqs: [
      { q: 'Can a cracked Apple Watch screen be replaced?', a: 'Yes — we replace cracked and lifted Apple Watch screens for all Series with careful, precise workmanship.' },
      { q: 'How long does it take?', a: 'Apple Watch repairs are detailed work; most are completed within a day depending on parts availability.' },
      { q: 'Is it covered by warranty?', a: 'Yes, our 3-month warranty applies to Apple Watch repairs just like every other job.' },
    ],
    related: ['iphone-repair', 'battery-replacement', 'phone-screen-replacement'],
  },
  {
    slug: 'data-recovery',
    name: 'Data Recovery & Backup',
    shortName: 'Data Recovery',
    category: 'Data & Software',
    icon: 'data',
    image: '/images/lab/technician-microscope-repair.webp',
    metaTitle: 'Data Recovery Warkworth | Photos & Files Recovered | NZ Tech Repairs',
    metaDescription:
      'Lost photos, files or a dead phone or hard drive? NZ Tech Repairs in Warkworth recovers data from phones, computers and drives. Bring it in for an assessment.',
    keywords: ['data recovery warkworth', 'data recovery near me', 'recover photos from phone', 'hard drive recovery', 'phone data recovery'],
    tagline: 'Precious photos and files on a dead device? Often we can get them back — and back up so it never happens again.',
    intro: [
      'Losing irreplaceable photos, messages or documents is stressful. Whether your phone has died, your laptop will not start, or a hard drive has failed, our data recovery service gives you the best chance of getting your memories and files back.',
      'We recover data from phones, tablets, computers, hard drives, SSDs, memory cards and USB sticks — and we will help you set up a reliable backup so it never happens again.',
    ],
    fixes: [
      'Recover photos, videos and contacts from phones',
      'Hard drive and SSD recovery',
      'Memory card and USB recovery',
      'Recovery from water-damaged devices',
      'Data transfer to a new device',
      'Cloud and local backup setup',
    ],
    faqs: [
      { q: 'My phone is dead — can you still get my photos?', a: 'Very often, yes. Even when a device will not turn on, the storage is frequently intact. Bring it in and we will assess what is recoverable.' },
      { q: 'Do you recover from failed hard drives?', a: 'Yes — we recover from failed laptops, desktops, external drives, SSDs, memory cards and USB sticks.' },
      { q: 'Will my data stay private?', a: 'Absolutely. Your data is handled confidentially and is never shared.' },
    ],
    related: ['water-damage-repair', 'laptop-computer-repair', 'macbook-repair'],
  },
  {
    slug: 'phone-unlocking',
    name: 'Phone Unlocking & Software',
    shortName: 'Unlocking & Software',
    category: 'Data & Software',
    icon: 'unlock',
    image: '/images/lab/unlocking-services.webp',
    metaTitle: 'Phone Unlocking Warkworth | Network Unlock & Software | NZ Tech Repairs',
    metaDescription:
      'Network unlocking and software help in Warkworth — unlock your phone for any carrier, fix software issues and update your device. Friendly local service.',
    keywords: ['phone unlocking warkworth', 'network unlock near me', 'unlock phone nz', 'phone software update', 'sim unlock warkworth'],
    tagline: 'Switching carriers or selling up? We unlock phones and sort out the software side too.',
    intro: [
      'Want to use your phone on a different network, or bought a phone that is locked to another carrier? Our unlocking service frees your phone to work with any compatible SIM, giving you the freedom to choose the best plan.',
      'We also help with the software side — updates, restores, setting up a new phone, transferring your data, and clearing stubborn software glitches.',
    ],
    fixes: [
      'Network / carrier unlocking',
      'Software updates and restores',
      'New phone setup and data transfer',
      'Software glitch and boot-loop fixes',
      'Account and password assistance',
    ],
    faqs: [
      { q: 'Can you unlock any phone?', a: 'Most phones can be unlocked. Tell us your make, model and current carrier and we will confirm what is possible.' },
      { q: 'Is unlocking legal?', a: 'Yes — unlocking a phone you own so it works on other networks is completely legal in New Zealand.' },
      { q: 'Can you set up my new phone?', a: 'Of course. We will transfer your photos, contacts and apps across and make sure everything works before you leave.' },
    ],
    related: ['data-recovery', 'phone-accessories', 'iphone-repair'],
  },
  {
    slug: 'screen-protectors',
    name: 'Screen Guards & Protectors',
    shortName: 'Screen Protectors',
    category: 'Accessories',
    icon: 'shield',
    image: '/images/lab/mobile-repair-small-2.webp',
    metaTitle: 'Screen Guard & Protector Fitting Warkworth | NZ Tech Repairs',
    metaDescription:
      'Tempered glass screen guards and protectors fitted in Warkworth for phones and tablets. Bubble-free fitting that protects your screen from cracks and scratches.',
    keywords: ['screen guard near me', 'screen protector warkworth', 'tempered glass fitting', 'phone screen protector', 'screen guard for phone'],
    tagline: 'The cheapest repair is the one you never need. A quality screen guard stops most cracks before they happen.',
    intro: [
      'A good tempered-glass screen guard absorbs the impact of everyday knocks and drops, taking the damage so your actual screen does not have to. It is the single best-value thing you can do to protect your phone.',
      'We stock screen guards for popular phones and tablets and fit them perfectly — bubble-free and lined up right — while you wait.',
    ],
    fixes: [
      'Tempered-glass screen guards for phones',
      'Tablet and iPad screen protectors',
      'Privacy and matte options',
      'Professional bubble-free fitting',
      'Free fitting with any screen repair',
    ],
    faqs: [
      { q: 'Do you fit the screen guard for me?', a: 'Yes — we fit it professionally so it is perfectly aligned and bubble-free, while you wait.' },
      { q: 'Will a screen guard really protect my phone?', a: 'A quality tempered-glass guard absorbs impact and scratches, preventing many cracked-screen repairs. It is the best-value protection you can buy.' },
      { q: 'Do you have guards for my model?', a: 'We stock the popular models and can order others in quickly. Just ask.' },
    ],
    related: ['phone-screen-replacement', 'phone-accessories', 'iphone-repair'],
  },
  {
    slug: 'phone-accessories',
    name: 'Phone Accessories',
    shortName: 'Accessories',
    category: 'Accessories',
    icon: 'accessories',
    image: '/images/lab/phone-port-clean.webp',
    metaTitle: 'Phone Accessories Warkworth | Cases, Chargers & Cables | NZ Tech Repairs',
    metaDescription:
      'Phone cases, chargers, cables and accessories in Warkworth. Quality gear for iPhone, Samsung and more — plus we buy and recycle old phones and laptops.',
    keywords: ['phone accessories warkworth', 'phone cases near me', 'phone charger warkworth', 'charging cables', 'sell my phone warkworth'],
    tagline: 'Cases, chargers, cables and more — quality accessories to protect and power your devices.',
    intro: [
      'Pop in for the everyday gear that keeps your devices safe and charged. We stock protective cases, fast chargers, quality cables, adapters and more for popular phones and tablets — and if we do not have it, we can usually get it in.',
      'We also buy and recycle old phones and laptops, so if you are upgrading, bring your old device in for cash or responsible recycling.',
    ],
    fixes: [
      'Protective cases and covers',
      'Fast chargers and wall adapters',
      'Quality charging and data cables',
      'Screen guards and accessories',
      'We buy phones and laptops',
      'Recycle old phones and laptops responsibly',
    ],
    faqs: [
      { q: 'Do you sell cases for my phone?', a: 'We stock cases and accessories for popular models, and can order others in quickly. Tell us your model and we will sort you out.' },
      { q: 'Do you buy old phones?', a: 'Yes — we buy phones and laptops, and responsibly recycle old devices. Bring yours in for a quote.' },
      { q: 'Do you sell genuine chargers?', a: 'We stock quality, reliable chargers and cables that are safe for your device — no dodgy gear.' },
    ],
    related: ['screen-protectors', 'phone-unlocking', 'iphone-repair'],
  },
];

/* Local-SEO location suffix used in service-page URLs, e.g. /services/iphone-repair-in-warkworth */
export const LOCATION_SUFFIX = '-in-warkworth';

/** Full public path for a service, including the location suffix. */
export const servicePath = (slug: string) => `/services/${slug}${LOCATION_SUFFIX}`;

/** Strip the location suffix from a route param back to the base slug. */
export const baseSlugFromParam = (param: string) =>
  param.endsWith(LOCATION_SUFFIX) ? param.slice(0, -LOCATION_SUFFIX.length) : param;

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const allSlugs = () => services.map((s) => s.slug);
/** Route params (base slug + location suffix) for generateStaticParams. */
export const allParamSlugs = () => services.map((s) => `${s.slug}${LOCATION_SUFFIX}`);
export const servicesByCategory = () =>
  CATEGORIES.map((category) => ({ category, items: services.filter((s) => s.category === category) }));

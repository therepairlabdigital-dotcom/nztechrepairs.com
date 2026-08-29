/**
 * Per-model iPhone repair pages.
 *
 * Every attribute below reflects the real hardware, because the hardware is what
 * makes one model's repair advice genuinely different from another's: an iPhone 7
 * (LCD, aluminium back, board-paired Touch ID, Lightning) needs different advice
 * from an iPhone 15 Pro (OLED, glass back, Face ID, USB-C).
 *
 * NOTE: there is no iPhone 9 — Apple went 8 -> X. Its absence is intentional.
 * NOTE: models with `photo: true` have a product shot in /public/images/devices.
 */

export type Display = 'LCD' | 'OLED';
export type Connector = 'Lightning' | 'USB-C';
export type Biometric = 'Touch ID' | 'Face ID';

export type DeviceModel = {
  slug: string;
  href: string;
  name: string;
  year: number;
  display: Display;
  connector: Connector;
  /** A glass back means back-glass replacement is a real repair, and wireless charging exists. */
  glassBack: boolean;
  biometric: Biometric;
  photo: boolean;
  /** Model-specific notes that genuinely change the repair. */
  quirks: string[];
};

type Row = [
  name: string,
  year: number,
  display: Display,
  connector: Connector,
  glassBack: boolean,
  biometric: Biometric,
  photo: boolean,
  quirks: string[],
];

const AGEING_BATTERY =
  'At this age the battery is almost always past its useful life, and replacing it is the single biggest improvement you can make to the phone.';
const PARTS_OLDER =
  'Parts for this model are still available but less common than for current phones, so we confirm stock before quoting you.';
const CERAMIC_SHIELD =
  'The Ceramic Shield front resists scratches well but still cracks on a hard corner impact — toughened glass is not unbreakable glass.';
const MAGSAFE =
  'MagSafe magnets sit behind the back glass, so rear-glass work has to be done carefully to keep wireless charging aligned.';
const DYNAMIC_ISLAND =
  'The Dynamic Island cutout houses the Face ID array, which has to be transferred across to any replacement screen or Face ID stops working.';
const OLED_AGEING =
  'OLED panels develop green lines, burn-in and pink tinting as they age. That is a display failure, not a software fault, and no amount of resetting will clear it.';
const USB_C_PORT =
  'The USB-C port is soldered to the board, so a worn or damaged port is a micro-soldering job rather than a plug-in part swap.';
const BOARD_PAIRED_HOME =
  'The Home button is paired to the logic board, so Touch ID cannot be restored if the original button is destroyed. We preserve it wherever the damage allows.';

const ROWS: Row[] = [
  ['iPhone 7', 2016, 'LCD', 'Lightning', false, 'Touch ID', true, [
    AGEING_BATTERY,
    BOARD_PAIRED_HOME,
    'This was the first iPhone without a headphone jack, so audio complaints are almost always the Lightning port or the loudspeaker rather than a socket.',
    'The aluminium back means there is no back-glass repair on this model, though bent frames from a pocket or a fall are common.',
  ]],
  ['iPhone 8', 2017, 'LCD', 'Lightning', true, 'Touch ID', true, [
    'The glass back introduced wireless charging, and also made back-glass replacement a routine repair on this model.',
    AGEING_BATTERY,
    BOARD_PAIRED_HOME,
  ]],
  ['iPhone 8 Plus', 2017, 'LCD', 'Lightning', true, 'Touch ID', true, [
    'Glass back and wireless charging mean rear cracks are frequent and very much repairable.',
    AGEING_BATTERY,
    'The larger battery in the Plus shows its age clearly — sudden shutdowns at 30% are the classic symptom.',
  ]],
  ['iPhone X', 2017, 'OLED', 'Lightning', true, 'Face ID', true, [
    'The first OLED iPhone and the first with Face ID. The Face ID array must be transferred to any replacement screen.',
    OLED_AGEING,
    AGEING_BATTERY,
  ]],
  ['iPhone XR', 2018, 'LCD', 'Lightning', true, 'Face ID', true, [
    'The XR uses an LCD rather than OLED, which makes its screen replacement noticeably more affordable than the XS of the same year.',
    AGEING_BATTERY,
    'One of the most common models still in daily use, so parts availability is reliable.',
  ]],
  ['iPhone XS', 2018, 'OLED', 'Lightning', true, 'Face ID', true, [OLED_AGEING, AGEING_BATTERY, PARTS_OLDER]],
  ['iPhone XS Max', 2018, 'OLED', 'Lightning', true, 'Face ID', false, [
    'The large OLED panel is expensive, so we always confirm the fault is the screen and not the board before recommending a replacement.',
    OLED_AGEING,
    AGEING_BATTERY,
  ]],
  ['iPhone 11', 2019, 'LCD', 'Lightning', true, 'Face ID', true, [
    'An LCD panel keeps screen replacement more affordable than on the 11 Pro of the same generation.',
    'This is one of the most-repaired phones we see, and parts supply is excellent.',
    AGEING_BATTERY,
  ]],
  ['iPhone 11 Pro', 2019, 'OLED', 'Lightning', true, 'Face ID', true, [
    OLED_AGEING,
    'The triple camera array sits under its own glass, which cracks independently of the main back glass.',
    AGEING_BATTERY,
  ]],
  ['iPhone 11 Pro Max', 2019, 'OLED', 'Lightning', true, 'Face ID', false, [
    'The largest OLED of its generation and a costly panel, so an accurate diagnosis matters before replacing anything.',
    OLED_AGEING,
    'A big battery in a heavy phone — a worn cell is very noticeable on this model.',
  ]],
  ['iPhone SE (2nd generation)', 2020, 'LCD', 'Lightning', true, 'Touch ID', false, [
    'Touch ID in a modern body, with a glass back that supports wireless charging.',
    'Shares much of its chassis with the iPhone 8, which keeps screen repairs quick and affordable.',
    AGEING_BATTERY,
  ]],
  ['iPhone 12', 2020, 'OLED', 'Lightning', true, 'Face ID', true, [CERAMIC_SHIELD, MAGSAFE, OLED_AGEING]],
  ['iPhone 12 mini', 2020, 'OLED', 'Lightning', true, 'Face ID', false, [
    'The mini packs a small battery into a small body, so battery life complaints on this model are usually genuine wear rather than software.',
    CERAMIC_SHIELD,
    MAGSAFE,
  ]],
  ['iPhone 12 Pro', 2020, 'OLED', 'Lightning', true, 'Face ID', true, [
    CERAMIC_SHIELD,
    MAGSAFE,
    'The LiDAR sensor sits in the rear camera array and needs care during any back-glass work.',
  ]],
  ['iPhone 12 Pro Max', 2020, 'OLED', 'Lightning', true, 'Face ID', true, [
    'The largest panel of its generation, and a heavy phone — corner impacts do more damage here than on the smaller models.',
    CERAMIC_SHIELD,
    MAGSAFE,
  ]],
  ['iPhone 13', 2021, 'OLED', 'Lightning', true, 'Face ID', true, [
    CERAMIC_SHIELD,
    MAGSAFE,
    'Face ID on the 13 series is tied to the original screen assembly, so it needs proper transfer work rather than a straight swap.',
  ]],
  ['iPhone 13 mini', 2021, 'OLED', 'Lightning', true, 'Face ID', true, [
    'The last of the mini models, and a compact battery that shows its age faster than its full-size siblings.',
    CERAMIC_SHIELD,
    MAGSAFE,
  ]],
  ['iPhone 13 Pro', 2021, 'OLED', 'Lightning', true, 'Face ID', true, [
    'The 120Hz ProMotion display is a more expensive panel, so we confirm the fault is the screen before quoting.',
    CERAMIC_SHIELD,
    MAGSAFE,
  ]],
  ['iPhone 13 Pro Max', 2021, 'OLED', 'Lightning', true, 'Face ID', true, [
    'A large ProMotion OLED and a heavy chassis — a drop on a corner usually takes the panel with it.',
    CERAMIC_SHIELD,
    MAGSAFE,
  ]],
  ['iPhone 14', 2022, 'OLED', 'Lightning', true, 'Face ID', true, [
    'The 14 was redesigned with a removable rear glass panel, which makes back-glass replacement far less invasive than on the 12 and 13.',
    CERAMIC_SHIELD,
    MAGSAFE,
  ]],
  ['iPhone 14 Plus', 2022, 'OLED', 'Lightning', true, 'Face ID', false, [
    'The Plus shares the 14 redesign, so back-glass work is comparatively straightforward for a phone this size.',
    CERAMIC_SHIELD,
    MAGSAFE,
  ]],
  ['iPhone 14 Pro', 2022, 'OLED', 'Lightning', true, 'Face ID', true, [DYNAMIC_ISLAND, CERAMIC_SHIELD, MAGSAFE]],
  ['iPhone SE (3rd generation)', 2022, 'LCD', 'Lightning', true, 'Touch ID', true, [
    'The last Touch ID iPhone, and the most affordable current-era screen repair we do.',
    'An LCD panel and a compact body keep this one quick to repair.',
  ]],
  ['iPhone 15', 2023, 'OLED', 'USB-C', true, 'Face ID', false, [
    'The 15 was the first standard iPhone with USB-C and the Dynamic Island.',
    USB_C_PORT,
    'Colour-infused back glass means a replacement panel has to match the original colour, not just the model.',
  ]],
  ['iPhone 15 Pro', 2023, 'OLED', 'USB-C', true, 'Face ID', true, [
    'The titanium frame is tougher than stainless steel but transfers shock to the panel, so screens still crack on a corner drop.',
    DYNAMIC_ISLAND,
    USB_C_PORT,
  ]],
  ['iPhone 16', 2024, 'OLED', 'USB-C', true, 'Face ID', false, [
    'The Action button and Camera Control add two more moving parts that can fail independently of the screen.',
    USB_C_PORT,
    CERAMIC_SHIELD,
  ]],
  ['iPhone 16 Pro', 2024, 'OLED', 'USB-C', true, 'Face ID', true, [
    'A larger ProMotion panel with slimmer bezels, which leaves less margin for error during a screen replacement.',
    DYNAMIC_ISLAND,
    USB_C_PORT,
  ]],
  ['iPhone 17', 2025, 'OLED', 'USB-C', true, 'Face ID', true, [
    'A current-generation phone, so parts are premium and we only fit panels that keep Face ID and True Tone working.',
    USB_C_PORT,
    CERAMIC_SHIELD,
  ]],
  ['iPhone 17 Pro', 2025, 'OLED', 'USB-C', true, 'Face ID', true, [
    'The Pro panel is the most expensive part on the phone, so we diagnose carefully before recommending a replacement.',
    USB_C_PORT,
    MAGSAFE,
  ]],
  ['iPhone Air', 2025, 'OLED', 'USB-C', true, 'Face ID', true, [
    'The thinnest iPhone Apple has built, which leaves very little internal clearance — this is not a phone to let an inexperienced tech open.',
    'A slim chassis means a smaller battery, so battery health matters more here than on the Pro models.',
    USB_C_PORT,
  ]],
  ['iPhone 17e', 2026, 'OLED', 'USB-C', true, 'Face ID', true, [
    'The budget model of the current generation, which makes repair especially good value against replacement.',
    USB_C_PORT,
    CERAMIC_SHIELD,
  ]],
];

const toSlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/\(([0-9])(?:st|nd|rd|th) generation\)/, '$1')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export const deviceModels: DeviceModel[] = ROWS.map(
  ([name, year, display, connector, glassBack, biometric, photo, quirks]) => {
    const slug = toSlug(name);
    return {
      slug,
      href: `/${slug}-repair-warkworth`,
      name,
      year,
      display,
      connector,
      glassBack,
      biometric,
      photo,
      quirks,
    };
  },
);

const bySlug = new Map(deviceModels.map((model) => [model.slug, model]));

/** Route param is "{slug}-repair-warkworth" — strip the tail back to the slug. */
export const DEVICE_SUFFIX = '-repair-warkworth';
export const getDeviceBySlug = (slug: string) => bySlug.get(slug);
export const getDeviceByParam = (param: string) =>
  param.endsWith(DEVICE_SUFFIX) ? bySlug.get(param.slice(0, -DEVICE_SUFFIX.length)) : undefined;

/** Nearest models by release year, for internal linking. */
export function relatedModels(model: DeviceModel, limit = 6) {
  return deviceModels
    .filter((entry) => entry.slug !== model.slug)
    .sort((a, b) => Math.abs(a.year - model.year) - Math.abs(b.year - model.year))
    .slice(0, limit);
}

/** The repairs we actually quote on, derived from the hardware. */
export function deviceRepairs(model: DeviceModel) {
  const repairs = [
    {
      title: 'Screen replacement',
      text: `${model.display === 'OLED' ? 'OLED' : 'LCD'} panel replacement for cracked glass, dead touch, black screens and lines. ${
        model.biometric === 'Face ID'
          ? 'The Face ID array is transferred from your original screen so it keeps working afterwards.'
          : 'Your original Touch ID button is preserved so fingerprint unlock keeps working.'
      }`,
    },
    {
      title: 'Battery replacement',
      text: `A fresh cell for a ${model.name} that shuts down early, drains overnight or has dropped below 80% battery health. ${
        model.year <= 2019 ? 'On a phone of this age it is usually the first thing worth doing.' : 'Typically about 30 minutes while you wait.'
      }`,
    },
    {
      title: 'Charging port repair',
      text:
        model.connector === 'USB-C'
          ? 'USB-C ports are soldered to the board, so a loose or dead port is micro-soldering work. We clean and test first — a packed port is far more common than a failed one.'
          : 'Lightning ports pack with pocket lint and beach sand, which stops the cable seating. We clean and test before recommending a replacement port.',
    },
    {
      title: 'Water damage recovery',
      text: `Ultrasonic cleaning and board-level work on a ${model.name} that has been in water. Bring it in switched off and off charge — corrosion keeps spreading until the board is cleaned.`,
    },
  ];

  if (model.glassBack) {
    repairs.push({
      title: 'Back glass replacement',
      text: `Cracked rear glass on the ${model.name}, replaced so the phone looks right and wireless charging still works.`,
    });
  }

  repairs.push({
    title: 'Camera, speaker & button repair',
    text: `Blurry or dead cameras, muffled calls, silent speakers and unresponsive buttons on the ${model.name} — all repaired here rather than sent away.`,
  });

  return repairs;
}

/**
 * Homepage content, laid out to mirror The Repair Lab's section order:
 * hero -> guarantees -> why intro -> service grid -> 4-step process ->
 * why choose us -> testimonials -> final CTA -> FAQ -> quote form.
 *
 * The numbers here are NZ Tech Repairs' own (1000+ repairs, 30 minutes,
 * 3-month warranty) — deliberately not the Lab's 8 years / 15K / 90-day.
 */

export const guarantees = [
  {
    title: 'No Fix, No Fee',
    text: 'If we cannot fix it, you do not pay for the repair. The assessment is free either way.',
  },
  {
    title: 'Honest, Up-Front Pricing',
    text: 'You get a fixed quote before we touch anything. No surprises when you collect.',
  },
  {
    title: '100% Locally Owned',
    text: 'A Warkworth business on Fairwater Road — not a franchise, and not a courier depot for an Auckland workshop.',
  },
  {
    title: 'Rodney-Wide Service',
    text: 'From Puhoi to Mangawhai, plus nationwide mail-in repair for anyone further afield.',
  },
];

export const processSteps = [
  {
    title: 'Get in Touch',
    text: 'Call us, walk into the Fairwater Road shop, or send a message. No appointment needed and nothing to pay to ask.',
    image: '/images/lab/howitworks-contact.webp',
  },
  {
    title: 'Free Assessment',
    text: 'We open the device and find the actual fault rather than guessing from the symptoms — so the quote reflects the real repair.',
    image: '/images/lab/howitworks-diagnosis.webp',
  },
  {
    title: 'Expert Repair',
    text: 'We repair it here on our own bench with quality parts. Most screens and batteries are done in about 30 minutes while you wait.',
    image: '/images/lab/howitworks-repair.webp',
  },
  {
    title: 'Tested & Collected',
    text: 'Every repair is fully tested before it goes back to you, and covered by our 3-month parts and workmanship warranty.',
    image: '/images/lab/howitworks-quality.webp',
  },
];

export const stats = [
  { value: '1000+', label: 'Repairs completed' },
  { value: '30 min', label: 'Average fix time' },
  { value: '5.0', label: 'Customer rating' },
];

/** Six headline services for the homepage grid, mirroring the Lab's layout. */
export const homeServices = [
  {
    title: 'Mobile Phone Repair',
    href: '/services/iphone-repair-in-warkworth',
    image: '/images/lab/mobile-repair-clean.webp',
    icon: 'phone',
    items: ['Screen replacement', 'Battery replacement', 'Charging port repair', 'Speaker & microphone repair', 'Water damage repair'],
  },
  {
    title: 'Laptop & MacBook Repair',
    href: '/services/macbook-repair-in-warkworth',
    image: '/images/lab/service-bench-chip.webp',
    icon: 'macbook',
    items: ['Cracked screen replacement', 'Battery and charging faults', 'Keyboard and trackpad', 'Overheating and fan noise', 'Will-not-boot diagnosis'],
  },
  {
    title: 'Data Recovery & Backup',
    href: '/services/data-recovery-in-warkworth',
    image: '/images/lab/technician-microscope-repair.webp',
    icon: 'data',
    items: ['Hard drive recovery', 'SSD recovery', 'USB and memory cards', 'Phone photo recovery', 'Backup set-up'],
  },
  {
    title: 'TV Repair',
    href: '/services/tv-repair-in-warkworth',
    image: '/images/lab/tv-repair-technician.webp',
    icon: 'tv',
    items: ['No power or no picture', 'Sound problems', 'Screen flickering', 'HDMI and connection faults', 'Backlight failure'],
  },
  {
    title: 'iPad & Tablet Repair',
    href: '/services/ipad-tablet-repair-in-warkworth',
    image: '/images/lab/mobile-repair-small-1.webp',
    icon: 'tablet',
    items: ['Glass and digitiser replacement', 'LCD replacement', 'Battery replacement', 'Charging port repair', 'Water damage assessment'],
  },
  {
    title: 'Phone Unlocking',
    href: '/services/phone-unlocking-in-warkworth',
    image: '/images/lab/unlocking-services.webp',
    icon: 'unlock',
    items: ['iPhone unlocking', 'Samsung unlocking', 'Android unlocking', 'International networks', 'Carrier lock checks'],
  },
];

export const whyFeatures = [
  { title: 'Repairs in ~30 Minutes', text: 'Most screens and batteries are done while you wait, not kept for days.', icon: 'clock' },
  { title: '3-Month Warranty', text: 'Every repair is covered on both the part and the workmanship.', icon: 'shield' },
  { title: 'Experienced Technicians', text: 'Board-level work, water damage and data recovery — not just parts swapping.', icon: 'tool' },
  { title: 'Free Assessment', text: 'We diagnose it and quote it before you commit to anything at all.', icon: 'star' },
];

export const homeFaqs = [
  { q: 'Do I need an appointment?', a: 'No. Walk in any time during opening hours. If you want to be certain we have your part in stock, ring 027-827-0002 first with the model — worth doing if you are driving in from out of town.' },
  { q: 'How long will my repair take?', a: 'Most phone screens and batteries are done in about 30 minutes while you wait. iPad screens need adhesive to cure so they take longer, and board-level work like HDMI ports takes a couple of days.' },
  { q: 'Will I lose my data?', a: 'No. Screen, battery, port, camera and speaker repairs do not touch your storage, so photos, apps and messages stay exactly as they were.' },
  { q: 'What does the warranty cover?', a: 'Every repair carries a 3-month warranty on the part we fitted and the workmanship. Accidental damage after the repair is not covered, but a faulty part is.' },
  { q: 'Do you charge to look at a device?', a: 'No. Assessment is free and you get a fixed quote before any work starts. If we cannot fix it, you do not pay.' },
  { q: 'Can you fix water damage?', a: 'Often, and speed matters more than anything. Keep the device switched off, do not put it on charge, and get it to us as fast as you can. Rice does nothing — the damage is corrosion, and only a proper clean stops it.' },
];

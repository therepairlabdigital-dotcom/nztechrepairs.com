/**
 * Photography for the expanded page set.
 *
 * These live in /public/images/lab and are shared across the location, matrix,
 * device and intent pages. The original /images/original photos stay where they
 * are — the existing service pages are untouched.
 */

const SERVICE_IMAGES: Record<string, string> = {
  'iphone-repair': '/images/lab/mobile-repair-open-clean.webp',
  'samsung-android-repair': '/images/lab/mobile-repair-phone-open.webp',
  'ipad-tablet-repair': '/images/lab/mobile-repair-small-1.webp',
  'phone-screen-replacement': '/images/lab/home-phone-cracked.webp',
  'battery-replacement': '/images/lab/mobile-repair-technician.webp',
  'charging-port-repair': '/images/lab/phone-port-repair.webp',
  'water-damage-repair': '/images/lab/device-chip-repair.webp',
  'macbook-repair': '/images/lab/service-bench-chip.webp',
  'laptop-computer-repair': '/images/lab/service-bench-technician.webp',
  'tv-repair': '/images/lab/tv-repair-flatscreen.webp',
  'apple-watch-repair': '/images/lab/smart-watch-repair-photo.webp',
  'data-recovery': '/images/lab/data-recovery.webp',
  'phone-unlocking': '/images/lab/unlocking-services.webp',
  'screen-protectors': '/images/lab/mobile-repair-small-2.webp',
  'phone-accessories': '/images/lab/phone-port-clean.webp',
};

export const FALLBACK_IMAGE = '/images/lab/service-bench-technician.webp';

export const serviceImage = (slug: string) => SERVICE_IMAGES[slug] ?? FALLBACK_IMAGE;

/** Wide photo used on suburb pages — a bench shot, never a storefront.
 *  NOTE: technician-microscope-repair.png is misnamed upstream; it is a
 *  hard-drive photo, so it belongs to data recovery rather than here. */
export const LOCATION_IMAGE = '/images/lab/mobile-repair-clean.webp';

// NOTE: home-hero-device.png is NOT a device — it is a Repair-Lab-orange
// "100% New Zealand" badge. Never use it as a device image.
export const DEVICE_FALLBACK = '/images/lab/home-cracked-phone.webp';

/** Per-model product shot, when we have one. */
export const deviceImage = (slug: string, hasPhoto: boolean) =>
  hasPhoto ? `/images/devices/${slug}.webp` : DEVICE_FALLBACK;

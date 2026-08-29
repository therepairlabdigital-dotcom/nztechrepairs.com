import type { MetadataRoute } from 'next';
import { deviceModels } from '@/lib/devices';
import { locations } from '@/lib/locations';
import { matrixPages } from '@/lib/matrix';
import { allParamSlugs } from '@/lib/services';
import { site } from '@/lib/site';

/** Hand-written pages, with the priority we actually want to signal. */
const STATIC_ROUTES: Array<[path: string, priority: number]> = [
  ['', 1],
  ['/services', 0.9],
  ['/service-areas', 0.9],
  ['/contact', 0.8],
  ['/book-a-repair', 0.8],
  ['/mail-in-repair-nz', 0.8],
  ['/about', 0.7],
  ['/faqs', 0.7],
  ['/iphone-models', 0.7],
  ['/winz-quotes-repair-warkworth', 0.7],
  ['/business-device-repair-warkworth', 0.7],
  ['/student-device-repair-warkworth', 0.7],
  ['/ps5-repair-warkworth', 0.7],
  ['/ps4-repair-warkworth', 0.7],
  ['/hdmi-port-repair-warkworth', 0.7],
  ['/drone-repair-warkworth', 0.7],
  ['/sell-your-phone-warkworth', 0.7],
  ['/buy-second-hand-phones-warkworth', 0.7],
  ['/make-a-payment', 0.5],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...STATIC_ROUTES.map(([path, priority]) => ({
      url: `${site.url}${path}`,
      lastModified,
      changeFrequency: (path === '' ? 'weekly' : 'monthly') as MetadataRoute.Sitemap[number]['changeFrequency'],
      priority,
    })),
    ...allParamSlugs().map((slug) => ({
      url: `${site.url}/services/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...locations.map((location) => ({
      url: `${site.url}${location.href}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...deviceModels.map((model) => ({
      url: `${site.url}${model.href}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...matrixPages.map((page) => ({
      url: `${site.url}${page.href}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
  ];
}

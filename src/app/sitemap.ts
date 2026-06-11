import type { MetadataRoute } from 'next';
import { allParamSlugs } from '@/lib/services';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/about', '/services', '/contact'].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const serviceRoutes = allParamSlugs().map((slug) => ({
    url: `${site.url}/services/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}

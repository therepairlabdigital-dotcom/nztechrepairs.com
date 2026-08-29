import { matrixLocations, type Location } from '@/lib/locations';
import { services, type Service } from '@/lib/services';

/**
 * Service x suburb pages.
 *
 * Each page draws from two independently varying sources: the service (its own
 * faults, fixes, FAQs and intro) and the suburb (its own route, parking,
 * landmarks and local note). Two pages differ meaningfully whenever either axis
 * differs, which is what keeps 285 pages from reading as one page repeated.
 *
 * Warkworth is deliberately absent from `matrixLocations` — those URLs already
 * exist at /services/{slug}-in-warkworth and duplicating them here would have
 * the two sets competing with each other.
 */

export type MatrixPage = {
  slug: string;
  href: string;
  service: Service;
  location: Location;
  suburb: string;
  metaTitle: string;
  metaDescription: string;
};

function build(): MatrixPage[] {
  const pages: MatrixPage[] = [];

  for (const service of services) {
    for (const location of matrixLocations) {
      const slug = `${service.slug}-in-${location.key}`;
      pages.push({
        slug,
        href: `/${slug}`,
        service,
        location,
        suburb: location.name,
        metaTitle: `${service.shortName} in ${location.name} | NZ Tech Repairs`,
        metaDescription: `${service.name} for ${location.name} — ${location.driveTime} from our Warkworth workshop. ${service.metaDescription.split('.')[0].replace(/^[^—]*— /, '')}. 3-month warranty.`,
      });
    }
  }

  return pages;
}

export const matrixPages: MatrixPage[] = build();

const bySlug = new Map(matrixPages.map((page) => [page.slug, page]));

export const getMatrixBySlug = (slug: string) => bySlug.get(slug);

/** Other suburbs for the same service — nearby suburbs float to the top. */
export function siblingSuburbs(page: MatrixPage, limit = 8) {
  const preferred = new Set(page.location.nearby);
  return matrixPages
    .filter((entry) => entry.service.slug === page.service.slug && entry.slug !== page.slug)
    .sort((a, b) => Number(preferred.has(b.location.key)) - Number(preferred.has(a.location.key)))
    .slice(0, limit);
}

/** Other services for the same suburb — the second internal-linking axis. */
export function siblingServices(page: MatrixPage, limit = 8) {
  return matrixPages
    .filter((entry) => entry.location.key === page.location.key && entry.slug !== page.slug)
    .slice(0, limit);
}

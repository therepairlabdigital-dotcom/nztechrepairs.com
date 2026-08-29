import type { DeviceModel } from '@/lib/devices';
import type { Location } from '@/lib/locations';
import type { MatrixPage } from '@/lib/matrix';
import { site } from '@/lib/site';

/** The LocalBusiness node every page points its provider/areaServed at. */
export const businessNode = {
  '@type': 'LocalBusiness',
  '@id': `${site.url}/#business`,
  name: site.name,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  priceRange: '$$',
  image: `${site.url}/images/original/nztr-logo.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postcode,
    addressCountry: site.address.countryCode,
  },
  geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
  openingHoursSpecification: site.openingHoursSpec.map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: h.days,
    opens: h.opens,
    closes: h.closes,
  })),
};

type Crumb = { name: string; item: string };

export const breadcrumbSchema = (crumbs: Crumb[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: crumb.item,
  })),
});

export const faqSchema = (faqs: Array<{ q: string; a: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export function locationSchema(location: Location) {
  return [
    {
      '@context': 'https://schema.org',
      ...businessNode,
      description: `Phone, tablet, computer and TV repair serving ${location.name}, ${site.address.region}, from our Warkworth workshop.`,
      areaServed: { '@type': 'Place', name: `${location.name}, New Zealand` },
    },
    breadcrumbSchema([
      { name: 'Home', item: site.url },
      { name: 'Service Areas', item: `${site.url}/service-areas` },
      { name: location.name, item: `${site.url}${location.href}` },
    ]),
  ];
}

export function matrixSchema(page: MatrixPage) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${page.service.name} in ${page.suburb}`,
      serviceType: page.service.name,
      description: page.metaDescription,
      url: `${site.url}${page.href}`,
      provider: businessNode,
      areaServed: { '@type': 'Place', name: `${page.suburb}, New Zealand` },
    },
    breadcrumbSchema([
      { name: 'Home', item: site.url },
      { name: page.suburb, item: `${site.url}${page.location.href}` },
      { name: page.service.shortName, item: `${site.url}${page.href}` },
    ]),
    faqSchema(page.service.faqs),
  ];
}

export function deviceSchema(model: DeviceModel, description: string) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${model.name} Repair`,
      serviceType: `${model.name} repair`,
      description,
      url: `${site.url}${model.href}`,
      provider: businessNode,
      areaServed: site.areasServed.map((name) => ({ '@type': 'Place', name })),
    },
    breadcrumbSchema([
      { name: 'Home', item: site.url },
      { name: 'iPhone Repair', item: `${site.url}/services/iphone-repair-in-warkworth` },
      { name: model.name, item: `${site.url}${model.href}` },
    ]),
  ];
}

/** Convenience for the hand-written intent pages. */
export function servicePageSchema({
  name,
  description,
  url,
  areaServed = site.areasServed,
  crumbs,
  faqs,
}: {
  name: string;
  description: string;
  url: string;
  areaServed?: readonly string[];
  crumbs: Crumb[];
  faqs?: Array<{ q: string; a: string }>;
}) {
  const nodes: object[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name,
      serviceType: name,
      description,
      url,
      provider: businessNode,
      areaServed: areaServed.map((place) => ({ '@type': 'Place', name: place })),
    },
    breadcrumbSchema(crumbs),
  ];
  if (faqs?.length) nodes.push(faqSchema(faqs));
  return nodes;
}

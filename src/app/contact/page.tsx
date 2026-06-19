import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Contact from '@/components/Contact';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact NZ Tech Repairs | Warkworth Repair Shop | 027-827-0002',
  description:
    'Contact NZ Tech Repairs in Warkworth — call 027-827-0002, email us, or visit 8/9 Fairwater Road. No appointment needed. Open Mon–Fri 9–6, Sat–Sun 10–5.',
  keywords: ['contact nz tech repairs', 'phone repair warkworth contact', 'repair shop warkworth', 'nz tech repairs phone number'],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact NZ Tech Repairs | Warkworth',
    description: 'Call, email or visit our Warkworth repair shop. No appointment needed.',
    url: `${site.url}/contact`,
    siteName: site.name,
    locale: 'en_NZ',
    type: 'website',
  },
};

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: site.name,
    image: `${site.url}/images/original/nztr-logo.png`,
    url: `${site.url}/contact`,
    telephone: site.phone,
    email: site.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postcode,
      addressCountry: site.address.countryCode,
    },
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    areaServed: site.areasServed.map((name) => ({ '@type': 'Place', name })),
    openingHoursSpecification: site.openingHoursSpec.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
  };

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Get In Touch"
          title="Contact NZ Tech Repairs"
          subtitle="Call, email or visit our Warkworth shop — no appointment needed. We’ll get back to you fast."
          crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
        />
        <Contact />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}

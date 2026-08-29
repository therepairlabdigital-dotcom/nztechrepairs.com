import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import {
  FAQPreview,
  FinalCTA,
  Guarantees,
  HomeHero,
  HomeWhyIntro,
  RepairProcess,
  ServiceGrid,
  WhyChooseUsSection,
} from '@/components/HomeSections';
import { site } from '@/lib/site';

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${site.url}/#business`,
    name: site.name,
    description: 'Fast, professional phone, computer, tablet and TV repair in Warkworth, New Zealand.',
    image: `${site.url}/images/original/nztr-logo.png`,
    url: site.url,
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
    sameAs: [site.social.facebook, site.social.instagram, site.social.youtube],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.url,
  },
];

export default function Home() {
  return (
    <>
      <Header />
      {/* Section order mirrors The Repair Lab homepage. */}
      <main>
        <HomeHero />
        <Guarantees />
        <HomeWhyIntro />
        <ServiceGrid />
        <RepairProcess />
        <WhyChooseUsSection />
        <Testimonials />
        <FinalCTA />
        <FAQPreview />
        <Contact />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}

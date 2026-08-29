import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import HeroBackdrop from '@/components/HeroBackdrop';
import { PinIcon } from '@/components/Icons';
import { Crumbs, FinalCta, TrustBand } from '@/components/LocalBits';
import { locations } from '@/lib/locations';
import { breadcrumbSchema, businessNode } from '@/lib/schema';
import { site } from '@/lib/site';
import styles from '@/components/local.module.css';

export const metadata: Metadata = {
  title: 'Service Areas | Phone & Computer Repair Across Rodney | NZ Tech Repairs',
  description:
    'We repair phones, tablets, laptops and TVs for Warkworth, Matakana, Snells Beach, Wellsford, Mangawhai, Orewa, Silverdale, Whangaparaoa and the wider Rodney district.',
  keywords: ['phone repair rodney', 'computer repair warkworth', 'device repair matakana', 'phone repair wellsford', 'repair shop hibiscus coast'],
  alternates: { canonical: '/service-areas' },
  openGraph: {
    title: 'Service Areas | NZ Tech Repairs',
    description: 'Device repair across Warkworth, the Matakana Coast, northern Rodney and the Hibiscus Coast.',
    url: `${site.url}/service-areas`,
    siteName: site.name,
    locale: 'en_NZ',
    type: 'website',
  },
};

/** Grouped by the direction you drive in from — more useful than alphabetical. */
const GROUPS = [
  {
    title: 'Warkworth & around',
    note: 'Our home patch. Most of these repairs are walk-in and wait.',
    keys: ['warkworth', 'kaipara-flats', 'sandspit'],
  },
  {
    title: 'Matakana Coast',
    note: 'North-east of Warkworth, out through the village to the beaches.',
    keys: ['matakana', 'point-wells', 'omaha', 'leigh'],
  },
  {
    title: 'Mahurangi East peninsula',
    note: 'We are the closest repair bench to the whole peninsula.',
    keys: ['snells-beach', 'algies-bay'],
  },
  {
    title: 'Northern Rodney',
    note: 'Straight down SH1 through the Dome Valley.',
    keys: ['wellsford', 'te-hana', 'kaiwaka', 'mangawhai'],
  },
  {
    title: 'Hibiscus Coast & south',
    note: 'A quick motorway run since the Pūhoi to Warkworth road opened.',
    keys: ['puhoi', 'waiwera', 'hatfields-beach', 'orewa', 'red-beach', 'millwater', 'silverdale', 'whangaparaoa'],
  },
];

export default function ServiceAreasPage() {
  const byKey = new Map(locations.map((location) => [location.key, location]));

  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}>
          <HeroBackdrop />
          <div className="container">
            <Crumbs trail={[{ name: 'Home', href: '/' }, { name: 'Service Areas' }]} />
            <span className={styles.badge}><PinIcon size={14} />Rodney &amp; Hibiscus Coast</span>
            <h1 className={styles.h1} style={{ maxWidth: '18ch' }}>
              Where we <em>repair</em>
            </h1>
            <p className={styles.lede}>
              Our bench is on Fairwater Road in Warkworth, and we are the closest proper repair workshop for most of the
              Rodney district. Pick your town below to see how to get here, what we fix, and how long the drive takes.
            </p>
            <div className={styles.actions}>
              <a href={site.phoneHref} className="btn">Call {site.phone}</a>
              <Link href="/mail-in-repair-nz" className="btn btn-outline">Too far? Post it in</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            {GROUPS.map((group) => (
              <div key={group.title} className={styles.areaGroup}>
                <h2 className={styles.areaGroupTitle}>{group.title}</h2>
                <p className={styles.areaGroupNote}>{group.note}</p>
                <div className={styles.areaGrid}>
                  {group.keys.map((key) => {
                    const location = byKey.get(key);
                    if (!location) return null;
                    return (
                      <Link key={key} href={location.href} className={styles.areaCard}>
                        <strong>{location.name}</strong>
                        <span>{location.driveTime.charAt(0).toUpperCase() + location.driveTime.slice(1)}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <TrustBand />

        <FinalCta
          title="Not on the list?"
          text="We still probably cover you. Give us a call and we will tell you honestly whether it is worth the drive, or post your device in from anywhere in New Zealand."
        />
      </main>
      <Footer />
      <JsonLd
        schema={[
          {
            '@context': 'https://schema.org',
            ...businessNode,
            areaServed: locations.map((location) => ({ '@type': 'Place', name: `${location.name}, New Zealand` })),
          },
          breadcrumbSchema([
            { name: 'Home', item: site.url },
            { name: 'Service Areas', item: `${site.url}/service-areas` },
          ]),
        ]}
      />
    </>
  );
}

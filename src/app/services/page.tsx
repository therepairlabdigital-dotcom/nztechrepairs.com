import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceIcon from '@/components/ServiceIcon';
import { servicesByCategory, servicePath } from '@/lib/services';
import { site } from '@/lib/site';
import styles from './services.module.css';

export const metadata: Metadata = {
  title: 'Repair Services Warkworth | Phone, Computer & TV Repair | NZ Tech Repairs',
  description:
    'All the repairs we offer in Warkworth — iPhone, Samsung, iPad, MacBook, laptop, TV, Apple Watch, data recovery, battery and screen replacement, unlocking and accessories.',
  keywords: ['phone repair warkworth', 'computer repair warkworth', 'tv repair near me', 'screen replacement warkworth', 'repair services warkworth'],
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Repair Services in Warkworth | NZ Tech Repairs',
    description: 'Phone, tablet, computer, TV and data repair services in Warkworth, New Zealand.',
    url: `${site.url}/services`,
    siteName: site.name,
    locale: 'en_NZ',
    type: 'website',
  },
};

export default function ServicesHub() {
  const groups = servicesByCategory();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services` },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <section className={styles.hubHero}>
          <div className="container">
            <span className="eyebrow">What We Do</span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', marginBottom: 18 }}>Repair Services in Warkworth</h1>
            <p style={{ color: 'var(--text-muted)', maxWidth: 640, margin: '0 auto', fontSize: 18 }}>
              From cracked phone screens to dead laptops and faulty TVs, our friendly local technicians fix it all —
              fast, affordably and with a 3-month warranty. Choose a service below to learn more.
            </p>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 64 }}>
          <div className="container">
            {groups.map((group) => (
              <div key={group.category} className={styles.catBlock}>
                <h2 className={styles.catTitle}>{group.category}</h2>
                <div className={styles.hubGrid}>
                  {group.items.map((s) => (
                    <Link key={s.slug} href={servicePath(s.slug)} className={styles.hubCard}>
                      <span className={styles.ic}><ServiceIcon name={s.icon} size={26} /></span>
                      <h3>{s.name}</h3>
                      <p>{s.tagline}</p>
                      <span className="more">Learn more →</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={`section ${styles.cta}`}>
          <div className="container">
            <h2>Not sure what you need?</h2>
            <p>Tell us what is wrong with your device and we will point you in the right direction with an honest, no-obligation quote.</p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className="btn">Get in Touch</Link>
              <a href={site.phoneHref} className="btn btn-outline">Call {site.phone}</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}

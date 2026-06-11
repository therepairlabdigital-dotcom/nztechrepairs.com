import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceIcon from '@/components/ServiceIcon';
import { getService, allParamSlugs, baseSlugFromParam, servicePath, type Service } from '@/lib/services';
import { site } from '@/lib/site';
import styles from '../services.module.css';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allParamSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(baseSlugFromParam(slug));
  if (!s) return { title: 'Service not found | NZ Tech Repairs' };
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    keywords: s.keywords,
    alternates: { canonical: servicePath(s.slug) },
    openGraph: {
      title: s.metaTitle,
      description: s.metaDescription,
      url: `${site.url}${servicePath(s.slug)}`,
      siteName: site.name,
      images: [s.image],
      locale: 'en_NZ',
      type: 'website',
    },
  };
}

const Check = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
);

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const s = getService(baseSlugFromParam(slug));
  if (!s) notFound();

  const related = s.related
    .map(getService)
    .filter((x): x is Service => Boolean(x));

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: s.name,
      serviceType: s.name,
      description: s.metaDescription,
      url: `${site.url}${servicePath(s.slug)}`,
      provider: {
        '@type': 'LocalBusiness',
        name: site.name,
        telephone: site.phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: site.address.street,
          addressLocality: site.address.locality,
          addressRegion: site.address.region,
          postalCode: site.address.postcode,
          addressCountry: site.address.countryCode,
        },
      },
      areaServed: site.areasServed.map((name) => ({ '@type': 'Place', name })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services` },
        { '@type': 'ListItem', position: 3, name: s.name, item: `${site.url}${servicePath(s.slug)}` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: s.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className="container">
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/services">Services</Link>
              <span aria-hidden="true">/</span>
              <span className="current">{s.name}</span>
            </nav>

            <div className={styles.heroGrid}>
              <div>
                <span className={styles.iconBadge}>
                  <ServiceIcon name={s.icon} size={18} />
                  {s.category}
                </span>
                <h1 className={styles.h1}>{s.name} in Warkworth</h1>
                <p className={styles.tagline}>{s.tagline}</p>
                <div className={styles.actions}>
                  <Link href="/contact" className="btn">Book a Repair</Link>
                  <a href={site.phoneHref} className="btn btn-outline">Call {site.phone}</a>
                </div>
                <div className={styles.heroTrust}>
                  <div><strong>30 min</strong><span>Most repairs</span></div>
                  <div><strong>3-month</strong><span>Warranty</span></div>
                  <div><strong>Walk-in</strong><span>No appointment</span></div>
                </div>
              </div>

              <div className={styles.heroMedia}>
                <div className={styles.heroShape} aria-hidden="true" />
                <div className={styles.heroFrame}>
                  <Image src={s.image} alt={`${s.name} at NZ Tech Repairs Warkworth`} fill sizes="(max-width: 900px) 100vw, 40vw" style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro + what we fix */}
        <section className="section">
          <div className="container">
            <div className={styles.lead}>
              {s.intro.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            <h2 className={styles.blockTitle} style={{ marginTop: '48px' }}>What we cover</h2>
            <div className={styles.fixesGrid}>
              {s.fixes.map((f) => (
                <div key={f} className={styles.fixItem}>
                  <span className={styles.check}><Check /></span>
                  {f}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust band */}
        <section className={styles.trustBand}>
          <div className="container">
            <div className={styles.trustInner}>
              <div className={styles.trustCard}>
                <span className={styles.ic}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 7 12 12 15 14" /></svg></span>
                <strong>~30 Minutes</strong><span>Most repairs done fast</span>
              </div>
              <div className={styles.trustCard}>
                <span className={styles.ic}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 3v6c0 5-3.4 8.5-8 11-4.6-2.5-8-6-8-11V5l8-3z" /><path d="M9 12l2 2 4-4" /></svg></span>
                <strong>3-Month Warranty</strong><span>On every repair</span>
              </div>
              <div className={styles.trustCard}>
                <span className={styles.ic}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg></span>
                <strong>No Appointment</strong><span>Walk in any time</span>
              </div>
              <div className={styles.trustCard}>
                <span className={styles.ic}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2-6.3-4.6L5.7 21l2.3-7.2-6-4.4h7.6z" /></svg></span>
                <strong>Genuine Quality Parts</strong><span>Honest, fair pricing</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container">
            <span className="eyebrow">FAQ</span>
            <h2 className={styles.blockTitle}>{s.shortName} — your questions answered</h2>
            <div className={styles.faqList}>
              {s.faqs.map((f) => (
                <details key={f.q} className={styles.faq}>
                  <summary>{f.q}</summary>
                  <div className={styles.answer}>{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="section" style={{ paddingTop: 0 }}>
            <div className="container">
              <h2 className={styles.blockTitle}>Related services</h2>
              <div className={styles.relatedGrid}>
                {related.map((r) => (
                  <Link key={r.slug} href={servicePath(r.slug)} className={styles.relatedCard}>
                    <span className={styles.ic}><ServiceIcon name={r.icon} size={24} /></span>
                    <strong>{r.name}</strong>
                    <span>{r.tagline}</span>
                    <span className="more">Learn more →</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className={`section ${styles.cta}`}>
          <div className="container">
            <h2>Ready to fix your {s.shortName.toLowerCase().includes('repair') ? 'device' : s.shortName.toLowerCase()}?</h2>
            <p>Pop into our Warkworth shop or get in touch for a fast, no-obligation quote. No appointment needed.</p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className="btn">Request a Quote</Link>
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

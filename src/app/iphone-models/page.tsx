import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import HeroBackdrop from '@/components/HeroBackdrop';
import { Crumbs, FinalCta, TrustBand } from '@/components/LocalBits';
import { deviceModels } from '@/lib/devices';
import { deviceImage } from '@/lib/imagery';
import { breadcrumbSchema } from '@/lib/schema';
import { site } from '@/lib/site';
import styles from '@/components/local.module.css';

export const metadata: Metadata = {
  title: 'iPhone Repair by Model | Warkworth | NZ Tech Repairs',
  description:
    'Find your iPhone model for repair details — screen, battery, charging port and back glass. Every model from iPhone 7 to the current generation, repaired in Warkworth with a 3-month warranty.',
  keywords: ['iphone repair warkworth', 'iphone screen replacement', 'iphone battery replacement', 'iphone model repair'],
  alternates: { canonical: '/iphone-models' },
  openGraph: {
    title: 'iPhone Repair by Model | NZ Tech Repairs',
    description: 'Screen, battery, charging port and back glass repair for every iPhone model, in Warkworth.',
    url: `${site.url}/iphone-models`,
    siteName: site.name,
    locale: 'en_NZ',
    type: 'website',
  },
};

export default function IphoneModelsPage() {
  const groups = [
    { title: 'Current generation', years: [2024, 2025, 2026] },
    { title: 'Recent models', years: [2021, 2022, 2023] },
    { title: 'Still going strong', years: [2016, 2017, 2018, 2019, 2020] },
  ];

  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}>
          <HeroBackdrop />
          <div className="container">
            <Crumbs
              trail={[
                { name: 'Home', href: '/' },
                { name: 'iPhone Repair', href: '/services/iphone-repair-in-warkworth' },
                { name: 'By model' },
              ]}
            />
            <span className={styles.badge}>{deviceModels.length} models</span>
            <h1 className={styles.h1} style={{ maxWidth: '20ch' }}>
              iPhone repair, <em>model by model</em>
            </h1>
            <p className={styles.lede}>
              Every iPhone generation repairs differently. Find your model below for what actually matters on that
              hardware — the panel type, the charging port, whether the back glass comes off, and what we can fix while
              you wait.
            </p>
            <div className={styles.actions}>
              <a href={site.phoneHref} className="btn">Call {site.phone}</a>
              <Link href="/services/iphone-repair-in-warkworth" className="btn btn-outline">iPhone repair overview</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            {groups.map((group) => {
              const items = deviceModels.filter((model) => group.years.includes(model.year));
              if (items.length === 0) return null;
              return (
                <div key={group.title} className={styles.areaGroup}>
                  <h2 className={styles.areaGroupTitle}>{group.title}</h2>
                  <p className={styles.areaGroupNote}>
                    {group.title === 'Still going strong'
                      ? 'Older models we repair every week — a battery or screen keeps these perfectly usable.'
                      : 'Parts kept on the shelf for the models we see most.'}
                  </p>
                  <div className={styles.areaGrid}>
                    {items.map((model) => (
                      <Link key={model.slug} href={model.href} className={styles.areaCard}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                          <span
                            style={{
                              position: 'relative',
                              width: 42,
                              height: 52,
                              flexShrink: 0,
                              borderRadius: 8,
                              overflow: 'hidden',
                              background: 'var(--bg-3)',
                            }}
                          >
                            <Image
                              src={deviceImage(model.slug, model.photo)}
                              alt=""
                              fill
                              sizes="42px"
                              style={{ objectFit: 'contain', padding: 4 }}
                            />
                          </span>
                          <span>
                            <strong>{model.name}</strong>
                            <span>{model.year} · {model.display} · {model.connector}</span>
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <TrustBand />

        <FinalCta
          title="Cannot see your model?"
          text="We repair Samsung, Google Pixel, Oppo, Huawei and every other major brand too. Call us with your model and the fault and we will tell you what is involved."
        />
      </main>
      <Footer />
      <JsonLd
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'iPhone models we repair',
            itemListElement: deviceModels.map((model, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: `${model.name} Repair`,
              url: `${site.url}${model.href}`,
            })),
          },
          breadcrumbSchema([
            { name: 'Home', item: site.url },
            { name: 'iPhone Repair', item: `${site.url}/services/iphone-repair-in-warkworth` },
            { name: 'By model', item: `${site.url}/iphone-models` },
          ]),
        ]}
      />
    </>
  );
}

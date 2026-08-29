import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import HeroBackdrop from '@/components/HeroBackdrop';
import { CheckList, Crumbs, FaqList, FinalCta, TrustBand } from '@/components/LocalBits';
import { site } from '@/lib/site';
import styles from './local.module.css';

export type IntentPageProps = {
  badge: React.ReactNode;
  /** Use <em> to highlight in accent yellow. */
  title: React.ReactNode;
  lede: string;
  image: string;
  imageAlt: string;
  crumbs: Array<{ name: string; href?: string }>;
  stats?: Array<{ value: string; label: string }>;
  primaryCta?: { label: string; href: string };
  /** Main body copy. */
  bodyTitle: React.ReactNode;
  body: string[];
  note?: string;
  checkTitle?: string;
  checks?: string[];
  /** Sidebar panel — falls back to a generic contact card. */
  aside?: React.ReactNode;
  cardsTitle?: React.ReactNode;
  cardsIntro?: string;
  cards?: Array<{ title: string; text: string; icon?: React.ReactNode }>;
  stepsTitle?: React.ReactNode;
  steps?: Array<{ title: string; text: string }>;
  faqs?: Array<{ q: string; a: string }>;
  chips?: { title: string; links: Array<{ label: string; href: string }> };
  ctaTitle: string;
  ctaText: string;
  schema: object | object[];
  showTrustBand?: boolean;
};

function DefaultAside() {
  return (
    <aside className={styles.aside}>
      <h3 className={styles.asideTitle}>Talk to a technician</h3>
      <p className={styles.asideRow} style={{ marginBottom: 24 }}>
        Tell us the device and what it is doing. We will give you a straight answer about what is involved before you
        commit to anything.
      </p>
      <ul className={styles.asideList}>
        <li>{site.address.full}</li>
        <li>{site.hours[0].days}: {site.hours[0].open} – {site.hours[0].close}</li>
        <li>{site.hours[1].days}: {site.hours[1].open} – {site.hours[1].close}</li>
      </ul>
      <div className={styles.asideCta}>
        <a href={site.phoneHref} className="btn">Call {site.phone}</a>
        <Link href="/contact" className="btn btn-outline">Send a message</Link>
        <p className={styles.asideNote}>Free assessment · 3-month warranty</p>
      </div>
    </aside>
  );
}

export default function IntentPage(props: IntentPageProps) {
  const {
    badge, title, lede, image, imageAlt, crumbs, stats, primaryCta,
    bodyTitle, body, note, checkTitle, checks, aside,
    cardsTitle, cardsIntro, cards, stepsTitle, steps, faqs, chips,
    ctaTitle, ctaText, schema, showTrustBand = true,
  } = props;

  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}>
          <HeroBackdrop />
          <div className="container">
            <Crumbs trail={crumbs} />
            <div className={styles.heroGrid}>
              <div>
                <span className={styles.badge}>{badge}</span>
                <h1 className={styles.h1}>{title}</h1>
                <p className={styles.lede}>{lede}</p>
                <div className={styles.actions}>
                  <Link href={primaryCta?.href ?? '/contact'} className="btn">{primaryCta?.label ?? 'Get a quote'}</Link>
                  <a href={site.phoneHref} className="btn btn-outline">Call {site.phone}</a>
                </div>
                {stats && (
                  <div className={styles.trustRow}>
                    {stats.map((stat) => (
                      <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>
                    ))}
                  </div>
                )}
              </div>

              <div className={styles.heroMedia}>
                  <div className={styles.heroFrame}>
                  <Image src={image} alt={imageAlt} fill sizes="(max-width: 980px) 100vw, 40vw"
                    priority style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={styles.split}>
              <div>
                <h2 className={styles.blockTitle}>{bodyTitle}</h2>
                <div className={styles.prose}>
                  {body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                {checks && (
                  <>
                    {checkTitle && <h3 className={styles.subTitle}>{checkTitle}</h3>}
                    <CheckList items={checks} />
                  </>
                )}
                {note && <p className={styles.note}>{note}</p>}
              </div>
              {aside ?? <DefaultAside />}
            </div>
          </div>
        </section>

        {cards && cards.length > 0 && (
          <section className={`section ${styles.bandAlt}`}>
            <div className="container">
              <div className={styles.headCentre}>
                <h2 className={styles.blockTitle} style={{ marginBottom: 0 }}>{cardsTitle}</h2>
                {cardsIntro && <p>{cardsIntro}</p>}
              </div>
              <div className={styles.cardGrid}>
                {cards.map((card) => (
                  <article key={card.title} className={styles.infoCard}>
                    {card.icon && <span className={styles.ic}>{card.icon}</span>}
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {steps && steps.length > 0 && (
          <section className="section">
            <div className="container">
              <div className={styles.headCentre}>
                <span className="eyebrow">How it works</span>
                <h2 className={styles.blockTitle} style={{ marginBottom: 0 }}>{stepsTitle}</h2>
              </div>
              <div className={styles.steps}>
                {steps.map((step) => (
                  <div key={step.title} className={styles.step}>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {showTrustBand && <TrustBand />}

        {faqs && faqs.length > 0 && (
          <section className="section">
            <div className="container">
              <div className={styles.headCentre}>
                <span className="eyebrow">FAQ</span>
                <h2 className={styles.blockTitle} style={{ marginBottom: 0 }}>Common questions</h2>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <FaqList faqs={faqs} />
              </div>
            </div>
          </section>
        )}

        {chips && (
          <section className="section" style={{ paddingTop: 0 }}>
            <div className="container">
              <h2 className={styles.chipTitle}>{chips.title}</h2>
              <div className={styles.chips}>
                {chips.links.map((link) => (
                  <Link key={link.href} href={link.href} className={styles.chip}>{link.label}</Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <FinalCta title={ctaTitle} text={ctaText} />
      </main>
      <Footer />
      <JsonLd schema={schema} />
    </>
  );
}

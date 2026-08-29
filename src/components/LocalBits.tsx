import React from 'react';
import Link from 'next/link';
import { CarIcon, CheckIcon, ClockIcon, ParkingIcon, PhoneIcon, PinIcon, ShieldIcon, StarIcon } from '@/components/Icons';
import { site } from '@/lib/site';
import styles from './local.module.css';

/** Breadcrumb trail shared by every expanded page. */
export function Crumbs({ trail }: { trail: Array<{ name: string; href?: string }> }) {
  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      {trail.map((crumb, i) => (
        <React.Fragment key={crumb.name}>
          {i > 0 && <span className={styles.sep} aria-hidden="true">/</span>}
          {crumb.href ? <Link href={crumb.href}>{crumb.name}</Link> : <span className={styles.current}>{crumb.name}</span>}
        </React.Fragment>
      ))}
    </nav>
  );
}

/** Tick list used for "what we fix" style content. */
export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className={styles.checkList}>
      {items.map((item) => (
        <li key={item} className={styles.checkItem}>
          <span className={styles.check}><CheckIcon /></span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** The "getting here" sidebar card on suburb and matrix pages. */
export function TravelCard({
  suburb,
  travel,
  parking,
  landmarks,
  footnote = 'Free assessment · No fix, no fee',
}: {
  suburb: string;
  travel: string;
  parking: string;
  landmarks: string[];
  footnote?: string;
}) {
  return (
    <aside className={styles.aside}>
      <h3 className={styles.asideTitle}>Getting here from {suburb}</h3>

      <p className={styles.asideRow}>
        <span className={styles.rowIc}><CarIcon /></span>
        <span>{travel}</span>
      </p>
      <p className={styles.asideRow}>
        <span className={styles.rowIc}><ParkingIcon /></span>
        <span>{parking}</span>
      </p>
      <p className={styles.asideRow}>
        <span className={styles.rowIc}><PinIcon /></span>
        <span>{site.address.full}</span>
      </p>

      <div className={styles.asideDivider} />

      <h4 className={styles.asideTitle} style={{ fontSize: '1rem', marginBottom: 16 }}>Near {suburb}</h4>
      <ul className={styles.asideList}>
        {landmarks.map((landmark) => (
          <li key={landmark}><CheckIcon size={15} />{landmark}</li>
        ))}
      </ul>

      <div className={styles.asideCta}>
        <a href={site.phoneHref} className="btn"><PhoneIcon size={16} />Call {site.phone}</a>
        <Link href="/contact" className="btn btn-outline">Request a quote</Link>
        <p className={styles.asideNote}>{footnote}</p>
        <p className={styles.asideNote}>
          {site.hours[0].days} {site.hours[0].open}–{site.hours[0].close} · {site.hours[1].days} {site.hours[1].open}–{site.hours[1].close}
        </p>
      </div>
    </aside>
  );
}

/** Four-up trust band reused across the expanded pages. */
export function TrustBand() {
  const items = [
    { icon: <ClockIcon />, title: '~30 minutes', text: 'Most screen and battery repairs' },
    { icon: <ShieldIcon />, title: '3-month warranty', text: 'Parts and workmanship' },
    { icon: <CheckIcon size={22} />, title: 'No appointment', text: 'Walk in during opening hours' },
    { icon: <StarIcon />, title: 'Quality parts', text: 'Honest, up-front pricing' },
  ];

  return (
    <section className={`section ${styles.bandAlt}`} style={{ paddingTop: 56, paddingBottom: 56 }}>
      <div className="container">
        <div className={styles.cardGrid}>
          {items.map((item) => (
            <div key={item.title} className={styles.infoCard} style={{ padding: '26px 24px' }}>
              <span className={styles.ic} style={{ width: 44, height: 44, marginBottom: 14 }}>{item.icon}</span>
              <h3 style={{ fontSize: '1.05rem', marginBottom: 6 }}>{item.title}</h3>
              <p style={{ fontSize: 14.5, margin: 0 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** How a repair actually runs — used on suburb and intent pages. */
export function RepairSteps({ suburb }: { suburb?: string }) {
  const steps = [
    {
      title: 'Bring it in or call',
      text: suburb
        ? `Drop the device in from ${suburb}, or ring 027-827-0002 first and we will tell you whether it is worth the trip.`
        : 'Walk in during opening hours, or call ahead so we can confirm your part is in stock.',
    },
    { title: 'Free assessment', text: 'We open it up, find the actual fault, and tell you what is wrong — not just what is easiest to sell you.' },
    { title: 'Honest quote', text: 'You get a fixed price before we start. If it is not worth repairing, we will say so.' },
    { title: 'Repair and test', text: 'Most screens and batteries are done in about 30 minutes, fully tested before you get it back.' },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className={styles.headCentre}>
          <span className="eyebrow">How it works</span>
          <h2 className={styles.blockTitle} style={{ marginBottom: 0 }}>
            {suburb ? <>A repair from <em>{suburb}</em>, start to finish</> : <>How a repair works</>}
          </h2>
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
  );
}

/** Closing call to action. */
export function FinalCta({ title, text }: { title: string; text: string }) {
  return (
    <section className={`section ${styles.cta}`}>
      <div className="container">
        <h2>{title}</h2>
        <p>{text}</p>
        <div className={styles.ctaActions}>
          <Link href="/contact" className="btn">Request a quote</Link>
          <a href={site.phoneHref} className="btn btn-outline">Call {site.phone}</a>
        </div>
      </div>
    </section>
  );
}

/** FAQ accordion. */
export function FaqList({ faqs }: { faqs: Array<{ q: string; a: string }> }) {
  return (
    <div className={styles.faqList}>
      {faqs.map((faq) => (
        <details key={faq.q} className={styles.faq}>
          <summary>{faq.q}</summary>
          <div className={styles.answer}>{faq.a}</div>
        </details>
      ))}
    </div>
  );
}

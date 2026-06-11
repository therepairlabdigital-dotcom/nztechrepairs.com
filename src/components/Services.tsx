import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ServiceIcon from './ServiceIcon';
import styles from './Services.module.css';

const SERVICES = [
  { slug: 'iphone-repair', icon: 'phone', img: '/images/original/service-phone.jpg', title: 'iPhone & Samsung Repair', desc: 'Cracked screens, batteries and charging faults — fixed in about 30 minutes.' },
  { slug: 'ipad-tablet-repair', icon: 'tablet', img: '/images/original/service-tablet.jpg', title: 'iPad & Tablet Repair', desc: 'Glass, display and battery repairs for iPads and Android tablets.' },
  { slug: 'macbook-repair', icon: 'macbook', img: '/images/original/service-macbook.webp', title: 'MacBook Repair', desc: 'Screens, batteries, keyboards and logic-board faults sorted by experts.' },
  { slug: 'apple-watch-repair', icon: 'watch', img: '/images/original/service-iwatch.webp', title: 'Apple Watch Repair', desc: 'Precise screen and battery repairs that restore your Watch like new.' },
  { slug: 'laptop-computer-repair', icon: 'laptop', img: '/images/original/service-computer.jpg', title: 'Computer & Laptop Repair', desc: 'Slow, crashing or virus-ridden? Windows and Mac running like new.' },
  { slug: 'tv-repair', icon: 'tv', img: '/images/original/service-tv.webp', title: 'TV Repair', desc: 'No picture, no power or lines on screen? Often cheaper to fix than replace.' },
  { slug: 'data-recovery', icon: 'data', img: '/images/original/service-data.png', title: 'Data Recovery & Backup', desc: 'Recover precious photos and files from dead phones, drives and PCs.' },
  { slug: 'phone-unlocking', icon: 'unlock', img: '/images/original/service-unlocking.png', title: 'Phone Unlocking & Software', desc: 'Network unlocking, software fixes, updates and new-phone setup.' },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What We Do</span>
          <h2>Our Repair Services</h2>
          <p>Get your device fixed today — fast, affordable and guaranteed. We also buy &amp; recycle old phones and laptops.</p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}-in-warkworth`} className={styles.card}>
              <div className={styles.imgWrap}>
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(max-width: 520px) 100vw, (max-width: 820px) 50vw, (max-width: 1100px) 33vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <span className={styles.overlay} aria-hidden="true" />
              <span className={styles.badge}>
                <ServiceIcon name={s.icon} size={20} />
              </span>
              <div className={styles.body}>
                <h3 className={styles.title}>{s.title}</h3>
                <p className={styles.desc}>{s.desc}</p>
                <span className={styles.more}>
                  Learn More
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.viewAll}>
          <Link href="/services" className="btn">View All Services</Link>
        </div>
      </div>
    </section>
  );
}

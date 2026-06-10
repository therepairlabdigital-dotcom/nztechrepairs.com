import React from 'react';
import Image from 'next/image';
import styles from './Services.module.css';

const SERVICES = [
  {
    num: '01',
    title: 'iPhone & Samsung Phone Repair',
    desc: 'Expert iPhone & Samsung phone repairs to get your device working like new again.',
    img: '/images/original/service-phone.jpg'
  },
  {
    num: '02',
    title: 'iPad & Tablet Repair',
    desc: 'Tablet repair services for all brands, ensuring your device is back in perfect working order.',
    img: '/images/original/service-tablet.jpg'
  },
  {
    num: '03',
    title: 'MacBook Repair',
    desc: 'Expert MacBook repair services to address all hardware and software issues efficiently.',
    img: '/images/original/service-macbook.webp'
  },
  {
    num: '04',
    title: 'iWatch & iMac Repair',
    desc: 'Precision repairs for your Apple Watch, restoring its functionality and appearance with expert care.',
    img: '/images/original/service-iwatch.webp'
  },
  {
    num: '05',
    title: 'Computer Repair',
    desc: 'Trusted computer repair services to resolve hardware and software issues swiftly.',
    img: '/images/original/service-computer.jpg'
  },
  {
    num: '06',
    title: 'TV Repair',
    desc: 'Professional TV repair services to restore picture and sound quality, ensuring you enjoy uninterrupted.',
    img: '/images/original/service-tv.webp'
  },
  {
    num: '07',
    title: 'Data Recovery & Backup',
    desc: 'Expert data recovery solutions to safeguard your valuable files and retrieve lost data.',
    img: '/images/original/service-data.png'
  },
  {
    num: '08',
    title: 'Phone Unlocking & Software Upgrade',
    desc: 'Unlock your phone for increased flexibility and enjoy seamless software upgrades.',
    img: '/images/original/service-unlocking.png'
  }
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What We Do</span>
          <h2>Our Repair Services</h2>
          <p>Get your device fixed today. We help you make your tech great again — and we also buy &amp; recycle old phones and laptops.</p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map(s => (
            <div key={s.num} className={styles.card}>
              <div className={styles.cardImage}>
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(max-width: 520px) 100vw, (max-width: 820px) 50vw, (max-width: 1100px) 33vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
                <span className={styles.cardNumber}>{s.num}</span>
              </div>
              <div className={styles.cardContent}>
                <h4 className={styles.cardTitle}>{s.title}</h4>
                <p className={styles.cardDesc}>{s.desc}</p>
                <a href="#contact" className={styles.readMore}>
                  Read More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

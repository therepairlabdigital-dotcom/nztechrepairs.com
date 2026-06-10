'use client';
import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <section className={styles.hero} id="home">
      <div className={styles.glow} aria-hidden="true"></div>
      <div className={`container ${styles.grid}`}>
        {/* Left: content */}
        <div className={styles.content}>
          <span className={styles.badge}>
            <span className={styles.dot} aria-hidden="true"></span>
            Warkworth&rsquo;s Trusted Repair Specialists
          </span>

          <h1 className={styles.title}>
            Fast &amp; Professional<br />
            <span className={styles.accent}>Device Repair</span>
          </h1>

          <p className={styles.subtitle}>
            iPhones, iPads, MacBooks, laptops, TVs &amp; data recovery — expertly fixed,
            often in just <strong>30 minutes</strong>. No appointment needed.
          </p>

          <div className={styles.actions}>
            <a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="btn">Book a Repair</a>
            <a href="tel:0278270002" className="btn btn-outline">Call 027-827-0002</a>
          </div>

          <ul className={styles.trust}>
            <li><strong>30 min</strong><span>Avg. fix time</span></li>
            <li><strong>3-month</strong><span>Warranty</span></li>
            <li><strong>Free</strong><span>Diagnostics</span></li>
          </ul>

          <div className={styles.payment}>
            <span>Pay later with</span>
            <Image src="/images/original/after-pay.png" alt="Afterpay" width={144} height={50} />
            <Image src="/images/original/zip-pay.png" alt="Zip Pay" width={144} height={50} />
          </div>
        </div>

        {/* Right: floating device + glow + rating card */}
        <div className={styles.media}>
          <div className={styles.mediaGlow} aria-hidden="true"></div>
          <div className={styles.mediaRing} aria-hidden="true"></div>
          <Image
            src="/images/hero-device.webp"
            alt="iPhone alongside a precision repair tool"
            width={488}
            height={600}
            className={styles.device}
            priority
          />
          <div className={styles.ratingCard}>
            <div className={styles.stars} aria-hidden="true">★★★★★</div>
            <strong>5.0 Rating</strong>
            <span>Loved by local customers</span>
          </div>
        </div>
      </div>
    </section>
  );
}

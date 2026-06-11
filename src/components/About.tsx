import React from 'react';
import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
  return (
    <section className="section" id="about">
      <div className={`container ${styles.inner}`}>
        <div className={styles.imageCol}>
          <div className={styles.imageFrame}>
            <Image
              src="/images/original/about-shop.webp"
              alt="NZ Tech Repairs Shop in Warkworth"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.experienceBadge}>
            <strong>1000+</strong>
            <span>Devices Repaired</span>
          </div>
        </div>

        <div className={styles.contentCol}>
          <span className="eyebrow">Who We Are</span>
          <h2 className={styles.title}>Your Local Tech Repair Specialists</h2>
          <p className={styles.text}>
            At <strong>NZ Tech Repairs</strong>, we are a team of dedicated technology repair
            specialists based in Warkworth, New Zealand. With years of experience and a passion
            for technology, we provide top-notch repair services for a wide range of devices —
            from iPhones and MacBooks to Samsung tablets and TVs.
          </p>
          <p className={styles.text}>
            We offer fast, reliable repairs with a <strong>30-minute</strong> turnaround for
            phones and a satisfaction warranty on all our services. At NZ Tech Repairs, your tech
            problems become our solutions.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <strong>30 Min</strong>
              <span>Phone turnaround</span>
            </div>
            <div className={styles.stat}>
              <strong>3 Month</strong>
              <span>Repair warranty</span>
            </div>
            <div className={styles.stat}>
              <strong>Genuine</strong>
              <span>Quality parts</span>
            </div>
          </div>

          <div className={styles.bottomRow}>
            <a href="#contact" className="btn">Read More</a>
            <p className={styles.address}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              8/9 Fairwater Road, Warkworth 0910, NZ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import styles from './WhyChooseUs.module.css';

const REASONS = [
  'No Appointment Needed',
  'Fixed in 30 Minutes',
  '3 Months Repair Warranty',
  'Affordable Prices & 100% Reliable Service',
  'Good Quality Replacement Parts',
];

export default function WhyChooseUs() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.leftCol}>
          <span className={styles.smallLabel}>Got Any Questions?</span>
          <p className={styles.leftTitle}>Talk To Our Repair Experts Today</p>
          <p className={styles.leftText}>
            If you have any question in your mind, please feel free to ask anything.
            We&apos;re always happy to help.
          </p>
          <a href="tel:0278270002" className={styles.callBtn}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            Call Our Expert
          </a>
        </div>

        <div className={styles.rightCol}>
          <span className="eyebrow">Fast · Affordable · Guaranteed</span>
          <h2 className={styles.rightTitle}>Why Choose Us</h2>
          <p className={styles.rightText}>
            We have an excellent team ready to repair all your devices at an affordable price.
          </p>

          <ul className={styles.list}>
            {REASONS.map((r) => (
              <li key={r}>
                <span className={styles.icon}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </span>
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

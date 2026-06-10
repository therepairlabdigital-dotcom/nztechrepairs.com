import React from 'react';
import styles from './Contact.module.css';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className={`container ${styles.inner}`}>

        {/* Left Column - Info */}
        <div className={styles.textCol}>
          <span className="eyebrow">Get In Touch</span>
          <h2 className={styles.title}>Bringing Your Tech Back to Life</h2>
          <p className={styles.desc}>
            Fill in your enquiry, feedback or suggestions and we&apos;ll get back to you fast.
            We are always keen to serve you.
          </p>

          <div className={styles.infoCards}>
            <a href="tel:0278270002" className={styles.infoCard}>
              <span className={styles.infoIcon} aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              </span>
              <div>
                <strong>Call Us</strong>
                <span>027-827-0002</span>
              </div>
            </a>
            <a href="mailto:nztechrepairs@gmail.com" className={styles.infoCard}>
              <span className={styles.infoIcon} aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              </span>
              <div>
                <strong>Email Us</strong>
                <span>nztechrepairs@gmail.com</span>
              </div>
            </a>
            <a
              href="https://maps.google.com/?q=8/9+Fairwater+Rd,+Warkworth+0910"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.infoCard}
            >
              <span className={styles.infoIcon} aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              </span>
              <div>
                <strong>Visit Us</strong>
                <span>8/9 Fairwater Rd, Warkworth 0910</span>
              </div>
            </a>
            <div className={styles.infoCard}>
              <span className={styles.infoIcon} aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 7 12 12 15 14" /></svg>
              </span>
              <div>
                <strong>Open Hours</strong>
                <span>Mon&ndash;Fri 9am&ndash;5:30pm &middot; Sat 9am&ndash;4pm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className={styles.formCol}>
          <h3 className={styles.formTitle}>Send us a message</h3>
          <ContactForm />
        </div>

      </div>

      <div className={`container ${styles.mapWrap}`}>
        <iframe
          title="Map showing NZ Tech Repairs at 8/9 Fairwater Rd, Warkworth"
          src="https://www.google.com/maps?q=8%2F9%20Fairwater%20Rd%2C%20Warkworth%200910%2C%20New%20Zealand&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

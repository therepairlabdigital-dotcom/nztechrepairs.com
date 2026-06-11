import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

const SERVICE_LINKS = [
  { label: 'iPhone Repair', href: '/services/iphone-repair-in-warkworth' },
  { label: 'Samsung & Android Repair', href: '/services/samsung-android-repair-in-warkworth' },
  { label: 'MacBook Repair', href: '/services/macbook-repair-in-warkworth' },
  { label: 'Laptop & Computer Repair', href: '/services/laptop-computer-repair-in-warkworth' },
  { label: 'Data Recovery & Backup', href: '/services/data-recovery-in-warkworth' },
  { label: 'TV Repair', href: '/services/tv-repair-in-warkworth' },
];

const COMPANY_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'All Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>

          {/* Brand / Contact */}
          <div className={styles.widget}>
            <Link href="/" aria-label="NZ Tech Repairs home">
              <Image src="/images/original/nztr-logo.png" alt="NZ Tech Repairs Logo" width={333} height={70} className={styles.logo} />
            </Link>
            <p className={styles.contactItem}>
              Fast, professional device repair in Warkworth — phones, tablets, laptops, TVs &amp; data recovery.
            </p>
            <p className={styles.contactItem}>
              <strong>Address:</strong> 8/9 Fairwater Rd, Warkworth, NZ, 0910
            </p>
            <p className={styles.contactItem}>
              <strong>Email:</strong> <a href="mailto:nztechrepairs@gmail.com">nztechrepairs@gmail.com</a>
            </p>
            <p className={styles.contactItem}>
              <strong>Phone:</strong> <a href="tel:0278270002">027-827-0002</a>
            </p>
          </div>

          {/* Services */}
          <div className={styles.widget}>
            <h4 className={styles.widgetTitle}>Our Services</h4>
            <ul className={styles.linkList}>
              {SERVICE_LINKS.map((s) => (
                <li key={s.href}><Link href={s.href}>{s.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className={styles.widget}>
            <h4 className={styles.widgetTitle}>Company</h4>
            <ul className={styles.linkList}>
              {COMPANY_LINKS.map((c) => (
                <li key={c.href}><Link href={c.href}>{c.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Payment + Social */}
          <div className={styles.widget}>
            <h4 className={styles.widgetTitle}>Payment Methods</h4>
            <div className={styles.paymentMethods}>
              <Image src="/images/original/after-pay.png" alt="Afterpay" width={144} height={50} />
              <Image src="/images/original/zip-pay.png" alt="Zip Pay" width={144} height={50} />
            </div>

            <h4 className={`${styles.widgetTitle} ${styles.followTitle}`}>Follow Us</h4>
            <div className={styles.socialIcons}>
              <a href="https://www.facebook.com/profile.php?id=61560878084984" target="_blank" rel="noopener noreferrer" className={styles.icon} aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.icon} aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.icon} aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.8-1.8C19.3 5 12 5 12 5s-7.3 0-8.8.5A2.5 2.5 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.8 1.8C4.7 19 12 19 12 19s7.3 0 8.8-.5a2.5 2.5 0 0 0 1.8-1.8C23 15.2 23 12 23 12Zm-13 3V9l5 3-5 3Z"/></svg>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className={styles.icon} aria-label="Pinterest">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.1-2 .1-2.9l1.1-4.7s-.3-.6-.3-1.4c0-1.3.8-2.3 1.7-2.3.8 0 1.2.6 1.2 1.3 0 .8-.5 2-.8 3.2-.2.9.5 1.7 1.4 1.7 1.7 0 2.9-2.2 2.9-4.7 0-1.9-1.3-3.4-3.7-3.4a4.3 4.3 0 0 0-4.5 4.3c0 .8.3 1.5.6 1.8.1.1.1.2.1.3l-.2.9c0 .2-.2.2-.4.1-1.1-.5-1.7-2-1.7-3.2 0-2.6 1.9-5 5.5-5 2.9 0 5.1 2 5.1 4.8 0 2.9-1.8 5.2-4.3 5.2-.8 0-1.6-.4-1.9-.9l-.5 2c-.2.7-.7 1.6-1 2.1A10 10 0 1 0 12 2Z"/></svg>
              </a>
            </div>
          </div>

        </div>

        <div className={styles.bottom}>
          <p>&copy; 2024–25 NZTechRepairs.com — All Rights Reserved.</p>
          <p>Warkworth, New Zealand</p>
        </div>
      </div>
    </footer>
  );
}

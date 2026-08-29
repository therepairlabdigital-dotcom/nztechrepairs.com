'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const NAV_SERVICES = [
  { slug: 'iphone-repair', label: 'iPhone Repair' },
  { slug: 'samsung-android-repair', label: 'Samsung & Android Repair' },
  { slug: 'ipad-tablet-repair', label: 'iPad & Tablet Repair' },
  { slug: 'macbook-repair', label: 'MacBook Repair' },
  { slug: 'laptop-computer-repair', label: 'Laptop & Computer Repair' },
  { slug: 'tv-repair', label: 'TV Repair' },
  { slug: 'data-recovery', label: 'Data Recovery & Backup' },
  { slug: 'phone-unlocking', label: 'Phone Unlocking' },
];

const NAV_AREAS = [
  { slug: 'warkworth', label: 'Warkworth' },
  { slug: 'matakana', label: 'Matakana' },
  { slug: 'snells-beach', label: 'Snells Beach' },
  { slug: 'sandspit', label: 'Sandspit' },
  { slug: 'omaha', label: 'Omaha' },
  { slug: 'wellsford', label: 'Wellsford' },
  { slug: 'mangawhai', label: 'Mangawhai' },
  { slug: 'orewa', label: 'Orewa' },
  { slug: 'silverdale', label: 'Silverdale' },
];

const NAV_MORE = [
  { href: '/book-a-repair', label: 'Book a Repair' },
  { href: '/iphone-models', label: 'iPhone Repair by Model' },
  { href: '/mail-in-repair-nz', label: 'Mail-In Repair (NZ wide)' },
  { href: '/winz-quotes-repair-warkworth', label: 'WINZ Quotes' },
  { href: '/business-device-repair-warkworth', label: 'Business Repair' },
  { href: '/student-device-repair-warkworth', label: 'Student & School Repair' },
  { href: '/ps5-repair-warkworth', label: 'PS5 Repair' },
  { href: '/ps4-repair-warkworth', label: 'PS4 Repair' },
  { href: '/hdmi-port-repair-warkworth', label: 'HDMI Port Repair' },
  { href: '/drone-repair-warkworth', label: 'Drone Repair' },
  { href: '/sell-your-phone-warkworth', label: 'Sell Your Phone' },
  { href: '/buy-second-hand-phones-warkworth', label: 'Second-Hand Phones' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/make-a-payment', label: 'Payments' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const close = () => setIsMobileMenuOpen(false);
  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.logoWrapper}>
            <Link href="/" onClick={close} aria-label="NZ Tech Repairs home">
              <Image src="/images/original/nztr-logo.png" alt="NZ Tech Repairs Logo" width={333} height={70} className={styles.logo} priority />
            </Link>
          </div>

          <nav id="primary-nav" className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
            <ul className={styles.menu}>
              <li><Link href="/" onClick={close} className={isActive('/') ? styles.active : ''}>Home</Link></li>
              <li><Link href="/about" onClick={close} className={isActive('/about') ? styles.active : ''}>About Us</Link></li>
              <li className={styles.hasSubmenu}>
                <Link href="/services" onClick={close} className={isActive('/services') ? styles.active : ''}>
                  Repair Services <span aria-hidden="true">▾</span>
                </Link>
                <ul className={styles.submenu}>
                  {NAV_SERVICES.map((s) => (
                    <li key={s.slug}><Link href={`/services/${s.slug}-in-warkworth`} onClick={close}>{s.label}</Link></li>
                  ))}
                  <li><Link href="/services" onClick={close} className={styles.submenuAll}>View all services →</Link></li>
                </ul>
              </li>
              <li className={styles.hasSubmenu}>
                <Link href="/service-areas" onClick={close} className={isActive('/service-areas') ? styles.active : ''}>
                  Areas <span aria-hidden="true">▾</span>
                </Link>
                <ul className={styles.submenu}>
                  {NAV_AREAS.map((a) => (
                    <li key={a.slug}><Link href={`/phone-repair-${a.slug}`} onClick={close}>{a.label}</Link></li>
                  ))}
                  <li><Link href="/service-areas" onClick={close} className={styles.submenuAll}>All service areas →</Link></li>
                </ul>
              </li>
              <li className={styles.hasSubmenu}>
                <Link href="/book-a-repair" onClick={close} className={isActive('/book-a-repair') ? styles.active : ''}>
                  More <span aria-hidden="true">▾</span>
                </Link>
                <ul className={styles.submenu}>
                  {NAV_MORE.map((m) => (
                    <li key={m.href}><Link href={m.href} onClick={close}>{m.label}</Link></li>
                  ))}
                </ul>
              </li>
              <li><Link href="/contact" onClick={close} className={isActive('/contact') ? styles.active : ''}>Contact</Link></li>
              <li className={styles.mobileCta}>
                <a href="tel:0278270002" className="btn">Call 027-827-0002</a>
              </li>
            </ul>
          </nav>

          <a href="tel:0278270002" className={`btn ${styles.headerCta}`}>Call Us</a>

          <button
            className={styles.hamburger}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="primary-nav"
          >
            <span className={styles.bar} aria-hidden="true"></span>
            <span className={styles.bar} aria-hidden="true"></span>
            <span className={styles.bar} aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </header>
  );
}

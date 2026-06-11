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

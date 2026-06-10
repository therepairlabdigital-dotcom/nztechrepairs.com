'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.logoWrapper}>
            <a href="#" onClick={(e) => scrollTo(e, 'home')}>
              <Image src="/images/original/nztr-logo.png" alt="NZ Tech Repairs Logo" width={333} height={70} className={styles.logo} priority />
            </a>
          </div>

          <nav id="primary-nav" className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
            <ul className={styles.menu}>
              <li><a href="#" onClick={(e) => scrollTo(e, 'home')}>Home</a></li>
              <li><a href="#" onClick={(e) => scrollTo(e, 'about')}>About Us</a></li>
              <li className={styles.hasSubmenu}>
                <a href="#" onClick={(e) => scrollTo(e, 'services')}>Repair Services <span aria-hidden="true">▾</span></a>
                <ul className={styles.submenu}>
                  <li><a href="#" onClick={(e) => scrollTo(e, 'services')}>iPhone & Samsung Phone Repair</a></li>
                  <li><a href="#" onClick={(e) => scrollTo(e, 'services')}>MacBook Repair</a></li>
                  <li><a href="#" onClick={(e) => scrollTo(e, 'services')}>iPad / Tablet Repair</a></li>
                  <li><a href="#" onClick={(e) => scrollTo(e, 'services')}>iWatch & iMac Repair</a></li>
                  <li><a href="#" onClick={(e) => scrollTo(e, 'services')}>Computer Repair</a></li>
                  <li><a href="#" onClick={(e) => scrollTo(e, 'services')}>Data Recovery & Backup</a></li>
                  <li><a href="#" onClick={(e) => scrollTo(e, 'services')}>Phone Unlocking</a></li>
                  <li><a href="#" onClick={(e) => scrollTo(e, 'services')}>TV Repair</a></li>
                </ul>
              </li>
              <li><a href="#" onClick={(e) => scrollTo(e, 'testimonials')}>Testimonials</a></li>
              <li><a href="#" onClick={(e) => scrollTo(e, 'contact')}>Contact</a></li>
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

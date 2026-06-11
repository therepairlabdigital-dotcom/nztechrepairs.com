import React from 'react';
import Link from 'next/link';
import styles from './PageHero.module.css';

type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs = [],
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className="container">
        {crumbs.length > 0 && (
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            {crumbs.map((c, i) => (
              <React.Fragment key={c.label}>
                {i > 0 && <span aria-hidden="true">/</span>}
                {c.href ? <Link href={c.href}>{c.label}</Link> : <span className={styles.current}>{c.label}</span>}
              </React.Fragment>
            ))}
          </nav>
        )}
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </section>
  );
}

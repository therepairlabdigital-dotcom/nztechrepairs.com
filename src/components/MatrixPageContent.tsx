import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceIcon from '@/components/ServiceIcon';
import JsonLd from '@/components/JsonLd';
import HeroBackdrop from '@/components/HeroBackdrop';
import { PinIcon } from '@/components/Icons';
import { CheckList, Crumbs, FaqList, FinalCta, TravelCard, TrustBand } from '@/components/LocalBits';
import { serviceImage } from '@/lib/imagery';
import { siblingServices, siblingSuburbs, type MatrixPage } from '@/lib/matrix';
import { matrixSchema } from '@/lib/schema';
import { servicePath } from '@/lib/services';
import { site } from '@/lib/site';
import styles from './local.module.css';

export default function MatrixPageContent({ page }: { page: MatrixPage }) {
  const { service, location, suburb } = page;
  const otherSuburbs = siblingSuburbs(page);
  const otherServices = siblingServices(page);

  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}>
          <HeroBackdrop />
          <div className="container">
            <Crumbs
              trail={[
                { name: 'Home', href: '/' },
                { name: location.name, href: location.href },
                { name: service.shortName },
              ]}
            />
            <div className={styles.heroGrid}>
              <div>
                <span className={styles.badge}>
                  <ServiceIcon name={service.icon} size={14} />
                  {service.shortName} · {suburb}
                </span>
                <h1 className={styles.h1}>
                  {service.name} in <em>{suburb}</em>
                </h1>
                <p className={styles.lede}>
                  {service.tagline} We look after {suburb} from our Warkworth workshop — {location.driveTime} down the road,
                  with a free assessment and a 3-month warranty.
                </p>
                <div className={styles.actions}>
                  <Link href="/contact" className="btn">Get a quote</Link>
                  <a href={site.phoneHref} className="btn btn-outline">Call {site.phone}</a>
                </div>
                <div className={styles.trustRow}>
                  <div><strong>{location.driveTime.replace(/^about /, '')}</strong><span>From {suburb}</span></div>
                  <div><strong>~30 min</strong><span>Most repairs</span></div>
                  <div><strong>Walk-in</strong><span>No appointment</span></div>
                </div>
              </div>

              <div className={styles.heroMedia}>
                  <div className={styles.heroFrame}>
                  <Image
                    src={serviceImage(service.slug)}
                    alt={`${service.name} for customers in ${suburb}`}
                    fill
                    sizes="(max-width: 980px) 100vw, 40vw"
                    priority
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={styles.split}>
              <div>
                <h2 className={styles.blockTitle}>
                  {service.shortName} for <em>{suburb}</em>
                </h2>
                <div className={styles.prose}>
                  {service.intro.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <h3 className={styles.subTitle}>What we cover</h3>
                <CheckList items={service.fixes} />

                <p className={styles.note}>{location.localNote}</p>
              </div>

              <TravelCard
                suburb={suburb}
                travel={location.travel}
                parking={location.parking}
                landmarks={location.landmarks}
              />
            </div>
          </div>
        </section>

        <TrustBand />

        <section className="section">
          <div className="container">
            <div className={styles.headCentre}>
              <span className="eyebrow">FAQ</span>
              <h2 className={styles.blockTitle} style={{ marginBottom: 0 }}>
                {service.shortName} in {suburb} — your questions answered
              </h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <FaqList faqs={service.faqs} />
            </div>
          </div>
        </section>

        <section className={`section ${styles.bandAlt}`}>
          <div className="container">
            <div className={styles.linkCols}>
              <div>
                <h2 className={styles.chipTitle}>{service.shortName} in nearby areas</h2>
                <div className={styles.chips}>
                  {otherSuburbs.map((entry) => (
                    <Link key={entry.slug} href={entry.href} className={styles.chip}>
                      <PinIcon size={15} />
                      {entry.suburb}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h2 className={styles.chipTitle}>Other repairs we do for {suburb}</h2>
                <div className={styles.chips}>
                  {otherServices.map((entry) => (
                    <Link key={entry.slug} href={entry.href} className={styles.chip}>
                      {entry.service.shortName}
                    </Link>
                  ))}
                  <Link href={location.href} className={styles.chip}>All {suburb} repairs →</Link>
                </div>
              </div>
            </div>

            <p style={{ marginTop: 36, fontSize: 15 }}>
              Prefer the full service breakdown? Read our{' '}
              <Link href={servicePath(service.slug)}>{service.name} page</Link>.
            </p>
          </div>
        </section>

        <FinalCta
          title={`${service.shortName} for ${suburb} — sorted today`}
          text={`Call ahead with your model and we will confirm the part is in stock before you make the ${location.driveTime.replace(/^about /, '')} drive.`}
        />
      </main>
      <Footer />
      <JsonLd schema={matrixSchema(page)} />
    </>
  );
}

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceIcon from '@/components/ServiceIcon';
import JsonLd from '@/components/JsonLd';
import HeroBackdrop from '@/components/HeroBackdrop';
import { PinIcon } from '@/components/Icons';
import { Crumbs, FinalCta, RepairSteps, TravelCard, TrustBand } from '@/components/LocalBits';
import { LOCATION_IMAGE } from '@/lib/imagery';
import { getLocationByKey, HOME_KEY, type Location } from '@/lib/locations';
import { services, servicePath } from '@/lib/services';
import { locationSchema } from '@/lib/schema';
import { site } from '@/lib/site';
import styles from './local.module.css';

export default function LocationPageContent({ location }: { location: Location }) {
  const nearby = location.nearby.map(getLocationByKey).filter((x): x is Location => Boolean(x));
  const isHome = location.key === HOME_KEY;

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
                { name: 'Service Areas', href: '/service-areas' },
                { name: location.name },
              ]}
            />
            <div className={styles.heroGrid}>
              <div>
                <span className={styles.badge}><PinIcon size={14} />{location.eyebrow}</span>
                <h1 className={styles.h1}>
                  Phone &amp; Device Repair in <em>{location.name}</em>
                </h1>
                <p className={styles.lede}>{location.description}</p>
                <div className={styles.actions}>
                  <Link href="/contact" className="btn">Book a repair</Link>
                  <a href={site.phoneHref} className="btn btn-outline">Call {site.phone}</a>
                </div>
                <div className={styles.trustRow}>
                  <div><strong>{location.driveTime.replace(/^about /, '')}</strong><span>From {location.name}</span></div>
                  <div><strong>~30 min</strong><span>Most repairs</span></div>
                  <div><strong>3-month</strong><span>Warranty</span></div>
                </div>
              </div>

              <div className={styles.heroMedia}>
                  <div className={styles.heroFrame}>
                  <Image
                    src={LOCATION_IMAGE}
                    alt={`NZ Tech Repairs technician working on a device for a customer from ${location.name}`}
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
                  Your local repair workshop for <em>{location.name}</em>
                </h2>
                <div className={styles.prose}>
                  {location.intro.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <p className={styles.note}>{location.localNote}</p>
              </div>

              <TravelCard
                suburb={location.name}
                travel={location.travel}
                parking={location.parking}
                landmarks={location.landmarks}
              />
            </div>
          </div>
        </section>

        <section className={`section ${styles.bandAlt}`}>
          <div className="container">
            <div className={styles.headCentre}>
              <span className="eyebrow">What we fix</span>
              <h2 className={styles.blockTitle} style={{ marginBottom: 0 }}>
                Repairs we complete for <em>{location.name}</em>
              </h2>
              <p>
                Every repair below is carried out on our own bench in Warkworth — nothing is sent away to Auckland —
                with a free assessment and a 3-month parts and workmanship warranty.
              </p>
            </div>

            {/* Titles only, deliberately: repeating each service description here would
                duplicate several hundred words across all 20 suburb pages. */}
            <div className={styles.tileGrid}>
              {services.map((service) => (
                <Link
                  key={service.slug}
                  /* Warkworth is excluded from the matrix (lib/matrix.ts) so it cannot
                     duplicate the existing service pages — link those directly instead. */
                  href={isHome ? servicePath(service.slug) : `/${service.slug}-in-${location.key}`}
                  className={styles.tile}
                >
                  <span className={styles.tileIc}><ServiceIcon name={service.icon} size={22} /></span>
                  <span>{service.name} in {location.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <TrustBand />
        <RepairSteps suburb={location.name} />

        {nearby.length > 0 && (
          <section className="section" style={{ paddingTop: 0 }}>
            <div className="container">
              <h2 className={styles.chipTitle}>We also serve nearby</h2>
              <div className={styles.chips}>
                {nearby.map((entry) => (
                  <Link key={entry.key} href={entry.href} className={styles.chip}>
                    <PinIcon size={15} />
                    {entry.name}
                  </Link>
                ))}
                <Link href="/service-areas" className={styles.chip}>All service areas →</Link>
              </div>
            </div>
          </section>
        )}

        <FinalCta
          title={`Need a repair in ${location.name}?`}
          text={`Call us before you drive in and we will confirm we have your part on the shelf. ${location.driveTime.charAt(0).toUpperCase() + location.driveTime.slice(1)} from Fairwater Road, Warkworth.`}
        />
      </main>
      <Footer />
      <JsonLd schema={locationSchema(location)} />
    </>
  );
}

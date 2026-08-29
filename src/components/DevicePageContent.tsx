import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import HeroBackdrop from '@/components/HeroBackdrop';
import { CheckList, Crumbs, FaqList, FinalCta, TrustBand } from '@/components/LocalBits';
import { deviceRepairs, relatedModels, type DeviceModel } from '@/lib/devices';
import { deviceImage } from '@/lib/imagery';
import { deviceSchema } from '@/lib/schema';
import { site } from '@/lib/site';
import styles from './local.module.css';

export function deviceIntro(model: DeviceModel) {
  return `${model.name} repair in Warkworth — screen, battery, charging port and water damage, done on our own bench with quality parts and a 3-month warranty.`;
}

export default function DevicePageContent({ model }: { model: DeviceModel }) {
  const repairs = deviceRepairs(model);
  const related = relatedModels(model);

  const faqs = [
    {
      q: `How long does a ${model.name} screen repair take?`,
      a: `Most ${model.name} screen and battery repairs are done in about 30 minutes while you wait. If we need to order a part in, we will tell you up front rather than keeping your phone for days.`,
    },
    {
      q: `Do you have ${model.name} parts in stock?`,
      a: `We keep the common parts for popular models on the shelf. Ring ${site.phone} with your model before you drive in and we will confirm stock — especially worth doing if you are coming from out of town.`,
    },
    {
      q: `Is it worth repairing a ${model.name} from ${model.year}?`,
      a:
        model.year <= 2019
          ? `Usually, yes. A screen or battery on a phone this age still costs a fraction of a replacement handset, and these models are perfectly capable for everyday use. We will tell you honestly if the board damage makes it uneconomic.`
          : `Almost always. A ${model.name} is a current-era phone with years of use left in it, and a repair costs far less than replacing the handset.`,
    },
    {
      q: `Will ${model.biometric} still work after a screen replacement?`,
      a:
        model.biometric === 'Face ID'
          ? `Yes. The Face ID array is transferred from your original screen onto the replacement — that is the step cheap repairs skip, and it is why Face ID stops working after them.`
          : `Yes. Your original Touch ID button is paired to the logic board and cannot be replaced with a generic one, so we always preserve and refit the original.`,
    },
    {
      q: `What is the warranty on a ${model.name} repair?`,
      a: 'Every repair carries a 3-month warranty covering both the part and the workmanship. Accidental damage after the repair is not covered, but a faulty part is.',
    },
  ];

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
                { name: 'iPhone Repair', href: '/services/iphone-repair-in-warkworth' },
                { name: model.name },
              ]}
            />
            <div className={styles.heroGrid}>
              <div>
                <span className={styles.badge}>{model.year} · {model.display} · {model.connector}</span>
                <h1 className={styles.h1}>
                  <em>{model.name}</em> Repair in Warkworth
                </h1>
                <p className={styles.lede}>
                  Cracked screen, dying battery or a charging port that will not hold a cable? We repair the {model.name}{' '}
                  on site in Warkworth, usually in about 30 minutes, with a 3-month warranty on the part and the work.
                </p>
                <div className={styles.actions}>
                  <Link href="/contact" className="btn">Get a quote</Link>
                  <a href={site.phoneHref} className="btn btn-outline">Call {site.phone}</a>
                </div>
                <div className={styles.trustRow}>
                  <div><strong>~30 min</strong><span>Screen &amp; battery</span></div>
                  <div><strong>3-month</strong><span>Warranty</span></div>
                  <div><strong>Free</strong><span>Assessment</span></div>
                </div>
              </div>

              <div className={styles.heroMedia}>
                <div className={styles.deviceFrame}>
                  <Image
                    src={deviceImage(model.slug, model.photo)}
                    alt={`${model.name} repair at NZ Tech Repairs Warkworth`}
                    fill
                    sizes="(max-width: 980px) 80vw, 32vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <dl className={styles.specStrip}>
              <div className={styles.spec}><dt>Released</dt><dd>{model.year}</dd></div>
              <div className={styles.spec}><dt>Display</dt><dd>{model.display}</dd></div>
              <div className={styles.spec}><dt>Charging</dt><dd>{model.connector}</dd></div>
              <div className={styles.spec}><dt>Unlock</dt><dd>{model.biometric}</dd></div>
              <div className={styles.spec}><dt>Back panel</dt><dd>{model.glassBack ? 'Glass' : 'Aluminium'}</dd></div>
            </dl>

            <h2 className={styles.blockTitle} style={{ marginTop: 56 }}>
              What matters on the <em>{model.name}</em>
            </h2>
            <div className={styles.prose} style={{ maxWidth: '78ch' }}>
              <p>
                Every iPhone generation repairs a little differently, and knowing the difference is what separates a repair
                that lasts from one that fails in a month. Here is what is specific to this model:
              </p>
            </div>
            <CheckList items={model.quirks} />
          </div>
        </section>

        <section className={`section ${styles.bandAlt}`}>
          <div className="container">
            <div className={styles.headCentre}>
              <span className="eyebrow">Repairs</span>
              <h2 className={styles.blockTitle} style={{ marginBottom: 0 }}>
                {model.name} repairs we quote on
              </h2>
              <p>All carried out in-house at our Warkworth workshop, never sent away to a third party.</p>
            </div>
            <div className={styles.cardGrid3}>
              {repairs.map((repair) => (
                <article key={repair.title} className={styles.infoCard}>
                  <h3>{repair.title}</h3>
                  <p>{repair.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <TrustBand />

        <section className="section">
          <div className="container">
            <div className={styles.headCentre}>
              <span className="eyebrow">FAQ</span>
              <h2 className={styles.blockTitle} style={{ marginBottom: 0 }}>{model.name} repair questions</h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <FaqList faqs={faqs} />
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <h2 className={styles.chipTitle}>Other iPhone models we repair</h2>
            <div className={styles.chips}>
              {related.map((entry) => (
                <Link key={entry.slug} href={entry.href} className={styles.chip}>{entry.name}</Link>
              ))}
              <Link href="/iphone-models" className={styles.chip}>All iPhone models →</Link>
            </div>
          </div>
        </section>

        <FinalCta
          title={`Get your ${model.name} fixed today`}
          text="Walk in during opening hours or call ahead so we can have the part ready. Free assessment, honest quote, no obligation."
        />
      </main>
      <Footer />
      <JsonLd schema={deviceSchema(model, deviceIntro(model))} />
    </>
  );
}

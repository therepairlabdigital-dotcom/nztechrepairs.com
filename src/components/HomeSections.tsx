import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeroBackdrop from '@/components/HeroBackdrop';
import ServiceIcon from '@/components/ServiceIcon';
import { FaqList } from '@/components/LocalBits';
import {
  BuildingIcon, CheckIcon, ClockIcon, PhoneIcon, PinIcon, ShieldIcon, StarIcon, ToolIcon, WalletIcon,
} from '@/components/Icons';
import { guarantees, homeFaqs, homeServices, processSteps, stats, whyFeatures } from '@/lib/home-data';
import { site } from '@/lib/site';
import styles from './home.module.css';
import local from './local.module.css';

/* ---------------- Hero ---------------- */

export function HomeHero() {
  return (
    <section className={styles.hero} id="home">
      <HeroBackdrop />
      <div className={`container ${styles.heroGrid}`}>
        <div>
          <span className={styles.eyebrow}>Welcome to NZ Tech Repairs</span>
          <h1 className={styles.title}>
            Warkworth&rsquo;s One-Stop Shop for Device Repairs<span className={styles.accent}>.</span>
          </h1>
          <p className={styles.subtitle}>
            NZ Tech Repairs offers fast, affordable and trusted device repair in Warkworth. Our technicians repair
            phones, tablets, laptops, TVs and consoles using quality parts, with most repairs completed in about
            30 minutes while you wait.
          </p>

          <h2 className={styles.payTitle}>Payment Methods Available</h2>
          <div className={styles.payRow}>
            <Image src="/images/original/after-pay.png" alt="Afterpay payment option" width={144} height={50} priority />
            <Image src="/images/original/zip-pay.png" alt="Zip Pay payment option" width={144} height={50} priority />
          </div>

          <div className={styles.heroActions}>
            <a href={site.phoneHref} className="btn"><PhoneIcon size={18} />Call Now</a>
            <Link href="/contact" className="btn btn-outline">Get a Free Quote</Link>
          </div>
        </div>

        <div className={styles.heroPhone}>
          <Image
            src="/images/lab/home-cracked-phone.webp"
            alt="Cracked phone screen needing repair"
            width={379}
            height={724}
            priority
          />
        </div>

        <aside className={styles.heroAside}>
          <div className={styles.asideStat}>
            <strong>1000+</strong>
            <span>Repairs completed locally</span>
          </div>
          {/* Despite the filename, this asset is a row of customer portraits. */}
          <Image src="/images/lab/home-new-zealand.webp" alt="Customers who trust NZ Tech Repairs" width={420} height={70} className={styles.asideNz} priority />
          <p className={styles.asideText}>
            Our technicians will assess your device completely free. <strong>Get a quote!</strong>
          </p>
          <Link href="/services" className={styles.asideLink}>
            Get Repair Services <span aria-hidden="true">→</span>
          </Link>
          {/* The Lab's "100% New Zealand" badge is baked in their orange, so it is
              left out rather than clashing with the yellow brand. */}
          <div className={styles.asideBadges}>
            <Image src="/images/lab/winz-quotes.webp" alt="WINZ quotes available" width={305} height={165} className={styles.onWhite} priority />
          </div>
        </aside>
      </div>
    </section>
  );
}

/* ---------------- Guarantees band ---------------- */

export function Guarantees() {
  const icons = [<ShieldIcon key="s" />, <WalletIcon key="w" />, <BuildingIcon key="b" />, <PinIcon key="p" />];

  return (
    <section className={styles.guarantees}>
      <div className="container">
        <p className={styles.slogan}>{site.tagline}</p>
        <div className={styles.guaranteeGrid}>
          {guarantees.map((item, i) => (
            <div key={item.title} className={styles.guarantee}>
              <span className={styles.gIc}>{icons[i % icons.length]}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why intro ---------------- */

export function HomeWhyIntro() {
  return (
    <section className={styles.whyIntro}>
      <div className="container">
        <div className={styles.centreHead}>
          <h2 className={styles.bigTitle}>
            Why Warkworth Chooses
            <span className={styles.block}>NZ Tech Repairs</span>
          </h2>
        </div>

        <div className={styles.whyIntroGrid}>
          <div>
            <p className={styles.whyLabel}>Why choose us</p>
            <div className={styles.whyBody}>
              <p>
                When your device stops working, you need someone you can trust to tell you the truth about it.
                NZ Tech Repairs provides professional, honest and fast repairs for families, tradespeople and small
                businesses across Warkworth and the wider Rodney district.
              </p>
              <p>
                We focus on accurate diagnosis, quality parts and repairs that last, which helps people avoid
                replacing a device that did not need replacing. Whether it is a cracked phone screen, a laptop that
                will not boot or a TV with no picture, we can help.
              </p>
            </div>
            <div className={styles.heroActions}>
              <a href={site.phoneHref} className="btn"><PhoneIcon size={18} />Call Now</a>
              <Link href="/contact" className="btn btn-outline">Get a Free Quote</Link>
            </div>
          </div>

          <div className={styles.circleImage}>
            <Image src="/images/lab/about-devices.webp" alt="A technician repairing a device at NZ Tech Repairs" width={520} height={520} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Service grid ---------------- */

export function ServiceGrid() {
  return (
    <section className={`section ${local.bandAlt}`}>
      <div className="container">
        <div className={styles.centreHead}>
          <h2 className={styles.bigTitle}>
            Our <span className="accent">Repair Services</span>
          </h2>
          <p style={{ marginTop: 20, fontSize: 18, lineHeight: 1.75 }}>
            We repair all major brands including Apple, Samsung, Google Pixel, Oppo, Huawei and more.
          </p>
        </div>

        <div className={styles.serviceGrid}>
          {homeServices.map((service) => (
            <Link key={service.title} href={service.href} className={styles.serviceCard}>
              <div className={styles.serviceMedia}>
                <Image src={service.image} alt={service.title} fill sizes="(max-width: 900px) 100vw, 33vw" />
              </div>
              <div className={styles.serviceBody}>
                <div className={styles.serviceHead}>
                  <span className={styles.sIc}><ServiceIcon name={service.icon} size={30} /></span>
                  <h3>{service.title}</h3>
                </div>
                <ul className={styles.serviceList}>
                  {service.items.map((item) => (
                    <li key={item}><CheckIcon size={18} />{item}</li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 4-step process ---------------- */

export function RepairProcess() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.centreHead}>
          <span className={styles.pill}>How it works</span>
          <h2 className={styles.bigTitle}>
            Simple 4-Step <span className="accent">Repair Process</span>
          </h2>
          <p style={{ marginTop: 20, fontSize: 18, lineHeight: 1.75 }}>
            Getting your device repaired has never been easier. Walk in or call ahead — we take care of the rest.
          </p>
        </div>

        <div className={styles.steps}>
          {processSteps.map((step, i) => (
            <div key={step.title} className={`${styles.step} ${i % 2 === 1 ? styles.stepReverse : ''}`}>
              <div className={styles.stepMedia}>
                <Image src={step.image} alt={`${step.title} at NZ Tech Repairs`} fill sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className={styles.stepBody}>
                <span className={styles.stepNum}>{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why choose us ---------------- */

export function WhyChooseUsSection() {
  const icons: Record<string, React.ReactNode> = {
    clock: <ClockIcon size={25} />,
    shield: <ShieldIcon size={25} />,
    tool: <ToolIcon size={25} />,
    star: <StarIcon size={25} />,
  };

  return (
    <section className={`section ${local.bandAlt}`}>
      <div className={`container ${styles.whyGrid}`}>
        <div>
          <h2 className={styles.bigTitle}>
            Rodney&rsquo;s Trusted
            <span className={styles.block}>Device Repair Shop</span>
          </h2>
          <p className={styles.whyLead}>
            NZ Tech Repairs is Warkworth&rsquo;s local workshop for fast, reliable device repair. We combine real
            technical knowledge with genuine care for every customer who walks through the door.
          </p>
          <div className={styles.whyParas}>
            <p>
              From cracked screens and tired batteries to laptop faults, TV problems, data recovery and unlocking,
              our Fairwater Road team handles repairs with clear communication from start to finish.
            </p>
            <p>
              Every device is checked properly before any work begins, so you understand the options, the expected
              turnaround and the cost before you decide anything.
            </p>
          </div>
          <ul className={styles.whyList}>
            {['Free assessment and quote', 'Quality parts, honestly described', 'Same-day service wherever possible', 'A real Warkworth workshop'].map((item) => (
              <li key={item}><CheckIcon size={18} />{item}</li>
            ))}
          </ul>
          <div className={styles.statRow}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.featureGrid}>
          {whyFeatures.map((item) => (
            <div key={item.title} className={styles.featureCard}>
              <span className={styles.fIc}>{icons[item.icon]}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */

export function FinalCTA() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.finalCta}>
          <h2>Ready to Get Your Device Fixed?</h2>
          <p>
            Walk into our Warkworth shop or call for a free quote. Most repairs are completed the same day and
            carry our 3-month warranty.
          </p>
          <div className={styles.finalActions}>
            <a href={site.phoneHref} className={styles.ctaLight}><PhoneIcon size={19} />Call Now</a>
            <Link href="/book-a-repair" className={styles.ctaDarkOutline}>Get a Free Quote</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ preview ---------------- */

export function FAQPreview() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.centreHead} style={{ marginBottom: 44 }}>
          <h2 className={styles.bigTitle}>
            Frequently Asked <span className="accent">Questions</span>
          </h2>
          <p style={{ marginTop: 20, fontSize: 18, lineHeight: 1.75 }}>
            Got questions? We have answers. Cannot find what you are looking for? Give us a call.
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <FaqList faqs={homeFaqs} />
        </div>
        <p style={{ textAlign: 'center', marginTop: 32 }}>
          <Link href="/faqs">Read all FAQs →</Link>
        </p>
      </div>
    </section>
  );
}

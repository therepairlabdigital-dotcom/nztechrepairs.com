import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import HeroBackdrop from '@/components/HeroBackdrop';
import { Crumbs, FaqList, FinalCta, TrustBand } from '@/components/LocalBits';
import { breadcrumbSchema, faqSchema } from '@/lib/schema';
import { site } from '@/lib/site';
import styles from '@/components/local.module.css';

const URL = `${site.url}/faqs`;

const GROUPS = [
  {
    title: 'Before you come in',
    faqs: [
      { q: 'Do I need an appointment?', a: 'No. Walk in any time during opening hours. If you want to be sure we have your part in stock, ring 027-827-0002 first with the model — especially worth doing if you are driving in from out of town.' },
      { q: 'Where are you?', a: '8/9 Fairwater Road, Warkworth 0910. We are on the Woodcocks Road side of town rather than in the Queen Street shops, with parking right outside.' },
      { q: 'What are your opening hours?', a: 'Monday to Friday 9:00am – 6:00pm, and Saturday and Sunday 10:00am – 5:00pm.' },
      { q: 'Do you charge to look at a device?', a: 'No. Assessment is free, and you get a fixed quote before we do any work. If we cannot fix it, you do not pay.' },
      { q: 'I am too far away to drive in. Can I post it?', a: 'Yes. We run a mail-in service for the whole of New Zealand — same technicians, same warranty. See our mail-in repair page for how to pack and send it.' },
    ],
  },
  {
    title: 'About the repair',
    faqs: [
      { q: 'How long will my repair take?', a: 'Most phone screens and batteries are done in about 30 minutes while you wait. iPad screens need adhesive to cure so they usually take longer, and board-level work like HDMI ports takes a couple of days.' },
      { q: 'Do you use genuine parts?', a: 'We use high-quality parts that match original performance, and we tell you what we are fitting. Where there is a choice between a premium and a budget option, we will explain the difference and let you decide.' },
      { q: 'Will I lose my data?', a: 'No. Screen, battery, port, camera and speaker repairs do not touch your storage, so photos, apps and messages stay exactly as they were. If a drive or a board has actually failed, we will talk you through the recovery options before doing anything.' },
      { q: 'Should I back up first?', a: 'Always a good idea before any repair, on any device, anywhere. It takes a few minutes and means an unexpected complication is an inconvenience rather than a disaster.' },
      { q: 'Can you fix water damage?', a: 'Often, and speed matters more than anything else. Keep the device switched off, do not put it on charge, and get it to us as fast as you can. Rice does nothing useful — the damage is corrosion, and only a proper clean stops it.' },
      { q: 'What if you cannot fix it?', a: 'Then you do not pay for the attempt. We will tell you what we found and what your options are, including whether the device is worth replacing.' },
    ],
  },
  {
    title: 'Warranty and payment',
    faqs: [
      { q: 'What does the warranty cover?', a: 'Every repair carries a 3-month warranty covering the part we fitted and the workmanship. If the part fails, we sort it. Accidental damage after the repair — a new drop, a new crack — is not covered.' },
      { q: 'Does a repair void my manufacturer warranty?', a: 'A third-party repair can affect a manufacturer warranty. If your device is still in warranty and the fault is not accidental damage, it is usually worth going to the manufacturer first, and we will tell you so.' },
      { q: 'How can I pay?', a: 'We take the usual in-store payment methods. See our payments page for the current options, or just ask when you drop the device off.' },
      { q: 'Do you do quotes for Work and Income?', a: 'Yes, free of charge and usually the same day. See our WINZ quotes page for what is included and how the process works.' },
      { q: 'Can you invoice my business?', a: 'Yes. We can invoice rather than take payment at the counter, which is useful when a staff member is dropping a device off. See our business repair page.' },
    ],
  },
  {
    title: 'What we work on',
    faqs: [
      { q: 'Which brands do you repair?', a: 'Apple, Samsung, Google Pixel, Oppo, Huawei, Motorola, Sony and the rest of the major brands, across phones, tablets, laptops and TVs. If you are unsure, send us the model and we will confirm.' },
      { q: 'Do you repair game consoles?', a: 'Yes — PlayStation 5, PS4 and Xbox. Overheating, HDMI ports, disc drives and controller drift are the four we see most.' },
      { q: 'Do you repair drones?', a: 'Yes, mostly DJI. Gimbals, cameras, cracked arms and water damage after a bad landing.' },
      { q: 'Do you sell phones as well as repair them?', a: 'We do both. We buy phones — including damaged ones — and sell refurbished second-hand devices with a 3-month warranty.' },
      { q: 'Do you unlock phones?', a: 'Yes, network unlocking for most carriers and models. Bring the phone in and we will confirm what is possible.' },
    ],
  },
];

const allFaqs = GROUPS.flatMap((group) => group.faqs);

export const metadata: Metadata = {
  title: 'FAQs | Repair Questions Answered | NZ Tech Repairs Warkworth',
  description:
    'Answers to the questions we get asked most — turnaround times, warranty, data safety, water damage, parts quality, payment and what we repair. NZ Tech Repairs, Warkworth.',
  keywords: ['phone repair faq', 'how long does phone repair take', 'phone repair warranty nz', 'will i lose my data phone repair', 'nz tech repairs questions'],
  alternates: { canonical: '/faqs' },
  openGraph: {
    title: 'Frequently Asked Questions | NZ Tech Repairs',
    description: 'Turnaround, warranty, data, water damage and payment — answered plainly.',
    url: URL,
    siteName: site.name,
    images: ['/images/lab/faqs-hero.webp'],
    locale: 'en_NZ',
    type: 'website',
  },
};

export default function FaqsPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}>
          <HeroBackdrop />
          <div className="container">
            <Crumbs trail={[{ name: 'Home', href: '/' }, { name: 'FAQs' }]} />
            <span className={styles.badge}>Straight answers</span>
            <h1 className={styles.h1} style={{ maxWidth: '16ch' }}>
              Questions, <em>answered</em>
            </h1>
            <p className={styles.lede}>
              The things people ask us at the counter every week — how long it takes, what the warranty covers, whether
              your photos are safe, and what to do the moment a phone goes in the water.
            </p>
            <div className={styles.actions}>
              <a href={site.phoneHref} className="btn">Call {site.phone}</a>
              <Link href="/contact" className="btn btn-outline">Send a message</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            {GROUPS.map((group) => (
              <div key={group.title} style={{ marginBottom: 56 }}>
                <h2 className={styles.chipTitle}>{group.title}</h2>
                <FaqList faqs={group.faqs} />
              </div>
            ))}
          </div>
        </section>

        <TrustBand />

        <FinalCta
          title="Still not sure?"
          text={`Ring ${site.phone} and describe what the device is doing. We can usually name the fault over the phone and tell you whether it is worth bringing in.`}
        />
      </main>
      <Footer />
      <JsonLd
        schema={[
          faqSchema(allFaqs),
          breadcrumbSchema([
            { name: 'Home', item: site.url },
            { name: 'FAQs', item: URL },
          ]),
        ]}
      />
    </>
  );
}

import type { Metadata } from 'next';
import IntentPage from '@/components/IntentPage';
import { BookIcon, ClockIcon, ShieldIcon, ToolIcon } from '@/components/Icons';
import { servicePageSchema } from '@/lib/schema';
import { site } from '@/lib/site';

const URL = `${site.url}/book-a-repair`;

const faqs = [
  {
    q: 'Do I actually need to book?',
    a: 'No. We are a walk-in workshop and you can turn up any time during opening hours. Booking is worth doing for two reasons only: to make sure your part is in stock, and to reserve time if you are driving a long way.',
  },
  {
    q: 'What information should I give you?',
    a: 'The exact model, what is wrong with it, and when it happened. "iPhone 13 Pro, cracked screen, dropped yesterday" tells us everything we need to check stock and give you a realistic answer.',
  },
  {
    q: 'How soon can you look at it?',
    a: 'Usually the same day. Most screen and battery repairs are done in about 30 minutes while you wait, so there is often no waiting at all.',
  },
  {
    q: 'I am coming from out of town. Can you hold a part?',
    a: 'Yes, and please do ask. Call ahead with your model and we will make sure the part is on the shelf before you drive in from Mangawhai, Whangaparaoa or anywhere else that is not five minutes away.',
  },
  {
    q: 'Can I drop it off and come back later?',
    a: 'Of course. Plenty of people leave a device with us and collect it after work or the next day. We will ring you once it is assessed and again when it is ready.',
  },
  {
    q: 'What if I cannot get to Warkworth at all?',
    a: 'Post it. Our mail-in service covers all of New Zealand, with the same technicians, the same free assessment and the same 3-month warranty.',
  },
];

export const metadata: Metadata = {
  title: 'Book a Repair | Warkworth Phone & Computer Repair | NZ Tech Repairs',
  description:
    'Book a repair at NZ Tech Repairs in Warkworth, or just walk in. Tell us your model and fault and we will confirm the part is in stock — most repairs done in about 30 minutes.',
  keywords: ['book phone repair warkworth', 'repair appointment warkworth', 'phone repair booking nz', 'walk in phone repair', 'device repair warkworth'],
  alternates: { canonical: '/book-a-repair' },
  openGraph: {
    title: 'Book a Repair | NZ Tech Repairs Warkworth',
    description: 'Walk in or book ahead. Free assessment, quote before work, 3-month warranty.',
    url: URL,
    siteName: site.name,
    images: ['/images/lab/book-hero.webp'],
    locale: 'en_NZ',
    type: 'website',
  },
};

export default function BookARepairPage() {
  return (
    <IntentPage
      badge={<><BookIcon size={14} />Walk in or book ahead</>}
      title={<>Book a repair, <em>or just turn up</em></>}
      lede="We are a walk-in workshop — no appointment needed. But if you want your part on the shelf before you arrive, or you are driving in from the far end of Rodney, a quick call ahead saves you a wasted trip."
      image="/images/lab/book-hero.webp"
      imageAlt="A customer dropping a device in for repair at NZ Tech Repairs Warkworth"
      crumbs={[{ name: 'Home', href: '/' }, { name: 'Book a Repair' }]}
      stats={[
        { value: 'No appointment', label: 'Walk in any time' },
        { value: '~30 min', label: 'Most repairs' },
        { value: 'Free', label: 'Assessment' },
      ]}
      primaryCta={{ label: 'Send us the details', href: '/contact' }}
      bodyTitle={<>The fastest way to <em>get it fixed</em></>}
      body={[
        'Most repairs do not need a booking at all. Walk in during opening hours, we look at it while you wait, and screens and batteries are usually back in your hand inside half an hour.',
        'Where booking genuinely helps is stock. We keep the common parts for popular models on the shelf, but we cannot hold every part for every device. One phone call with your exact model means we can check before you set off — which matters a great deal if you are coming from Mangawhai, Leigh or the Hibiscus Coast.',
        'Either way, the assessment is free and you get a fixed quote before we start. Nothing gets repaired on the assumption that you will say yes.',
      ]}
      checkTitle="Tell us this and we can help immediately"
      checks={[
        'The exact model — "iPhone 13 Pro", not just "an iPhone"',
        'What is wrong with it, in your own words',
        'When it happened and what caused it',
        'Whether it has been wet at any point',
        'Whether anyone has tried to repair it before',
        'When you need it back by',
      ]}
      note="If your device has been in water, do not wait for a booking. Keep it switched off, do not put it on charge, and bring it straight in — with water damage every hour genuinely counts, and we will always make room for one."
      stepsTitle={<>What happens <em>when you come in</em></>}
      steps={[
        { title: 'Drop in or call', text: `Walk into 8/9 Fairwater Road, Warkworth, or ring ${site.phone} first if you want the part confirmed in stock.` },
        { title: 'Free assessment', text: 'We find the actual fault rather than guessing from the symptoms, so the quote reflects the real repair.' },
        { title: 'Fixed quote', text: 'A clear price before any work starts. If it is not worth repairing, we will tell you that instead.' },
        { title: 'Repaired and tested', text: 'Most repairs are done while you wait, fully tested, and covered by our 3-month warranty.' },
      ]}
      cardsTitle={<>Three ways to <em>get to us</em></>}
      cards={[
        { icon: <ClockIcon />, title: 'Walk in', text: 'No appointment, no queue system. Monday to Friday 9am–6pm, Saturday and Sunday 10am–5pm.' },
        { icon: <BookIcon />, title: 'Call ahead', text: `Ring ${site.phone} with your model and we will confirm the part is here before you drive in. Recommended if you are more than twenty minutes away.` },
        { icon: <ToolIcon />, title: 'Drop and collect', text: 'Leave it with us and get on with your day. We call once it is assessed, and again when it is ready.' },
        { icon: <ShieldIcon />, title: 'Or post it in', text: 'Too far to drive? Our mail-in service covers all of New Zealand with the same warranty.' },
      ]}
      faqs={faqs}
      chips={{
        title: 'Popular repairs',
        links: [
          { label: 'iPhone repair', href: '/services/iphone-repair-in-warkworth' },
          { label: 'Screen replacement', href: '/services/phone-screen-replacement-in-warkworth' },
          { label: 'Battery replacement', href: '/services/battery-replacement-in-warkworth' },
          { label: 'Laptop repair', href: '/services/laptop-computer-repair-in-warkworth' },
          { label: 'Mail-in repair', href: '/mail-in-repair-nz' },
          { label: 'All services', href: '/services' },
        ],
      }}
      ctaTitle="Ready when you are"
      ctaText={`Call ${site.phone}, send us a message, or just come into 8/9 Fairwater Road, Warkworth during opening hours.`}
      schema={servicePageSchema({
        name: 'Book a Device Repair',
        description:
          'Book a phone, tablet, laptop or TV repair at NZ Tech Repairs in Warkworth, or walk in without an appointment. Free assessment and a 3-month warranty.',
        url: URL,
        crumbs: [
          { name: 'Home', item: site.url },
          { name: 'Book a Repair', item: URL },
        ],
        faqs,
      })}
    />
  );
}

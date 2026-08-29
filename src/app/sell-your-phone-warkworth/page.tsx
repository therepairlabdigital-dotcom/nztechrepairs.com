import type { Metadata } from 'next';
import IntentPage from '@/components/IntentPage';
import { ClockIcon, ShieldIcon, TagIcon, WalletIcon } from '@/components/Icons';
import { servicePageSchema } from '@/lib/schema';
import { site } from '@/lib/site';

const URL = `${site.url}/sell-your-phone-warkworth`;

const faqs = [
  {
    q: 'Will you buy a phone with a cracked screen?',
    a: 'Often yes. We repair phones for a living, so damage that would put off a private buyer is not automatically a problem for us. Bring it in and we will assess it honestly.',
  },
  {
    q: 'What do I need to bring?',
    a: 'The phone, the charger if you have it, and photo ID. Most importantly, sign out of iCloud or your Google account first — a phone still locked to your account cannot be resold and we cannot buy it.',
  },
  {
    q: 'How do you decide what it is worth?',
    a: 'Model, storage, battery health, screen and body condition, and whether it is carrier locked. We check the phone in front of you and explain what is affecting the number.',
  },
  {
    q: 'Is my data wiped?',
    a: 'Yes. Every device we take in is fully factory reset before it goes anywhere. We would still recommend backing up and wiping it yourself first as good practice.',
  },
  {
    q: 'Do you take Android as well as iPhone?',
    a: 'Yes — Samsung Galaxy, Google Pixel, Oppo and other major Android brands, as well as iPhones and iPads.',
  },
  {
    q: 'How quickly do I get paid?',
    a: 'On the spot, once we have assessed the phone and you have accepted the offer. No waiting for a courier, a listing to sell, or a bank transfer from a stranger.',
  },
];

export const metadata: Metadata = {
  title: 'Sell Your Phone Warkworth | Cash for Phones & iPads | NZ Tech Repairs',
  description:
    'Sell your old or damaged phone in Warkworth. We buy iPhones, Samsungs, Pixels and iPads — cracked screens considered — assessed in front of you and paid on the spot.',
  keywords: ['sell my phone warkworth', 'cash for phones nz', 'sell iphone warkworth', 'sell broken phone', 'phone buyback rodney'],
  alternates: { canonical: '/sell-your-phone-warkworth' },
  openGraph: {
    title: 'Sell Your Phone in Warkworth | NZ Tech Repairs',
    description: 'We buy phones and tablets — including damaged ones. Assessed in front of you, paid on the spot.',
    url: URL,
    siteName: site.name,
    images: ['/images/lab/mobile-repair-small-1.webp'],
    locale: 'en_NZ',
    type: 'website',
  },
};

export default function SellYourPhonePage() {
  return (
    <IntentPage
      badge={<><TagIcon size={14} />We buy devices</>}
      title={<>Sell your phone, <em>no messing about</em></>}
      lede="That drawer full of old phones is worth something. Bring them in and we will assess them in front of you and make an offer on the spot — including phones with cracked screens that a private buyer would not touch."
      image="/images/lab/mobile-repair-small-1.webp"
      imageAlt="Phones being assessed for buyback at NZ Tech Repairs in Warkworth"
      crumbs={[{ name: 'Home', href: '/' }, { name: 'Sell Your Phone' }]}
      stats={[
        { value: 'On the spot', label: 'Assessed and paid' },
        { value: 'Damaged OK', label: 'We repair anyway' },
        { value: 'Wiped', label: 'Every device' },
      ]}
      primaryCta={{ label: 'Ask what yours is worth', href: '/contact' }}
      bodyTitle={<>Better than <em>an online listing</em></>}
      body={[
        'Selling a phone privately means photographing it, writing a listing, fielding lowball offers, and then meeting a stranger in a car park to hand over a device and hope the payment is real. For most people that is not worth the money involved.',
        'We assess the phone while you stand there. You see exactly what we are checking — battery health, screen condition, whether it is carrier locked or still signed into an account — and you get a number straight away. Accept it and you are paid before you leave.',
        'Because we are a repair workshop rather than a reseller, damage is not the dealbreaker it would be for a private buyer. A cracked screen or a tired battery is a job we do every day, so it does not automatically make the phone worthless.',
      ]}
      checkTitle="What we buy"
      checks={[
        'iPhones — current models and several generations back',
        'Samsung Galaxy, Google Pixel, Oppo and other Android brands',
        'iPads and Android tablets',
        'Apple Watch and other smartwatches',
        'Phones with cracked screens or worn batteries',
        'Devices that are working but simply no longer used',
      ]}
      note="Before you come in, sign out of iCloud on an iPhone or remove your Google account on Android, and bring photo ID. A device still locked to someone's account cannot be legitimately resold, so we are not able to buy it — and that is the single most common reason we have to turn a phone away."
      stepsTitle={<>How <em>selling to us</em> works</>}
      steps={[
        { title: 'Bring it in', text: 'Walk in with the phone, the charger if you still have it, and photo ID. No appointment needed.' },
        { title: 'Assessed in front of you', text: 'We check the model, storage, battery health, screen, body and lock status, and explain what affects the value.' },
        { title: 'Offer on the spot', text: 'You get a number there and then, with the reasoning behind it. No obligation to accept.' },
        { title: 'Paid, and wiped', text: 'Accept and you are paid immediately. The device is fully factory reset before it goes anywhere.' },
      ]}
      cardsTitle={<>Why sell it <em>here</em></>}
      cards={[
        { icon: <ClockIcon />, title: 'No listing, no waiting', text: 'No photos to take, no messages to answer, no meeting strangers. In and out in one visit.' },
        { icon: <WalletIcon />, title: 'Paid immediately', text: 'You are not waiting on a courier, a marketplace payout or a bank transfer that may or may not arrive.' },
        { icon: <TagIcon />, title: 'Damage does not scare us', text: 'We fix phones every day. A cracked screen is a repair job to us, not a reason to walk away from the deal.' },
        { icon: <ShieldIcon />, title: 'Properly wiped', text: 'Every device is factory reset before resale, so your data does not leave with the phone.' },
      ]}
      faqs={faqs}
      chips={{
        title: 'Related',
        links: [
          { label: 'Buy a second-hand phone', href: '/buy-second-hand-phones-warkworth' },
          { label: 'iPhone repair', href: '/services/iphone-repair-in-warkworth' },
          { label: 'Battery replacement', href: '/services/battery-replacement-in-warkworth' },
          { label: 'Phone unlocking', href: '/services/phone-unlocking-in-warkworth' },
          { label: 'iPhone models', href: '/iphone-models' },
        ],
      }}
      ctaTitle="Got a phone sitting in a drawer?"
      ctaText={`Bring it into 8/9 Fairwater Road, Warkworth, or call ${site.phone} with the model and condition and we will give you an idea before you come in.`}
      schema={servicePageSchema({
        name: 'Phone Buyback',
        description:
          'We buy phones, tablets and smartwatches in Warkworth — including damaged devices. Assessed in front of you, paid on the spot, and fully wiped.',
        url: URL,
        crumbs: [
          { name: 'Home', item: site.url },
          { name: 'Sell Your Phone', item: URL },
        ],
        faqs,
      })}
    />
  );
}

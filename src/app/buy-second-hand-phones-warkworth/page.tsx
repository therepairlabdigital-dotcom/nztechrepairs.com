import type { Metadata } from 'next';
import IntentPage from '@/components/IntentPage';
import { ShieldIcon, TagIcon, ToolIcon, WalletIcon } from '@/components/Icons';
import { servicePageSchema } from '@/lib/schema';
import { site } from '@/lib/site';

const URL = `${site.url}/buy-second-hand-phones-warkworth`;

const faqs = [
  {
    q: 'Do your second-hand phones come with a warranty?',
    a: 'Yes. Every device we sell carries our 3-month warranty, which is 3 months more than you get buying privately off a marketplace.',
  },
  {
    q: 'How do I know it is not stolen?',
    a: 'Everything we sell has been checked and fully reset, and we only buy from people who can show ID and prove the device is signed out of their account. That is exactly the assurance a private sale cannot give you.',
  },
  {
    q: 'What condition are the phones in?',
    a: 'It varies, and we tell you plainly. Some are near-new trade-ins, others have been refurbished by us with a new screen or battery. We will show you the marks rather than hide them.',
  },
  {
    q: 'What stock do you have right now?',
    a: 'Stock changes constantly because it depends on what has come in. Ring us with the model and budget you are after and we will tell you what we have, or let you know when something suitable arrives.',
  },
  {
    q: 'Are the phones unlocked?',
    a: 'Most are network unlocked and will take any New Zealand SIM. We will always confirm the lock status before you buy — and if a phone is locked, we can usually unlock it for you.',
  },
  {
    q: 'Can I trade my old phone in against one?',
    a: 'Yes. We buy phones as well as sell them, so bring your old device in and we can put its value straight towards the replacement.',
  },
];

export const metadata: Metadata = {
  title: 'Second-Hand Phones Warkworth | Refurbished iPhones & Android | NZ Tech Repairs',
  description:
    'Buy a quality second-hand phone in Warkworth. Checked, reset and refurbished by our own technicians, with a 3-month warranty — not a car-park marketplace gamble.',
  keywords: ['second hand phones warkworth', 'refurbished iphone nz', 'used phones warkworth', 'cheap phones rodney', 'buy used phone warkworth'],
  alternates: { canonical: '/buy-second-hand-phones-warkworth' },
  openGraph: {
    title: 'Second-Hand Phones in Warkworth | NZ Tech Repairs',
    description: 'Refurbished, checked and warranted second-hand phones from a real repair workshop.',
    url: URL,
    siteName: site.name,
    images: ['/images/lab/mobile-repair-clean.webp'],
    locale: 'en_NZ',
    type: 'website',
  },
};

export default function BuySecondHandPhonesPage() {
  return (
    <IntentPage
      badge={<><TagIcon size={14} />Refurbished stock</>}
      title={<>Second-hand phones, <em>checked by the people who fix them</em></>}
      lede="A used phone from a marketplace is a gamble. A used phone from a repair workshop has been opened, tested, reset and warranted by the same technicians who repair them all day. Same saving, none of the risk."
      image="/images/lab/mobile-repair-clean.webp"
      imageAlt="Refurbished second-hand phones checked and ready for sale at NZ Tech Repairs Warkworth"
      crumbs={[{ name: 'Home', href: '/' }, { name: 'Second-Hand Phones' }]}
      stats={[
        { value: '3-month', label: 'Warranty included' },
        { value: 'Tested', label: 'By our technicians' },
        { value: 'Reset', label: 'And account-free' },
      ]}
      primaryCta={{ label: 'Ask what we have in', href: '/contact' }}
      bodyTitle={<>The problem with <em>buying privately</em></>}
      body={[
        'Everyone knows someone who bought a phone off a marketplace and discovered a problem a week later. A battery at 78% health. A screen that had already been replaced badly. A device still signed into somebody else\'s iCloud account and therefore useless. And no way to get their money back.',
        'We sell the same kind of phones, but they have been through our bench first. Battery health is checked and the cell replaced if it is not good enough. Screens, cameras, speakers, buttons and charging ports are all tested. The device is fully reset and confirmed free of any previous owner\'s account.',
        'Then it comes with our 3-month warranty. If something goes wrong, you bring it back to a shop on Fairwater Road rather than messaging a stranger who has stopped replying.',
      ]}
      checkTitle="What we check before anything goes on the shelf"
      checks={[
        'Battery health, and replacement if it is below par',
        'Screen condition, touch response and display faults',
        'Front and rear cameras',
        'Speakers, microphone and earpiece',
        'Charging port and wireless charging',
        'Buttons, Face ID or Touch ID',
        'Network lock status',
        'Full factory reset and account removal',
      ]}
      note="Stock depends entirely on what has come in recently, so it changes week to week. Tell us the model and roughly what you want to spend and we will either show you what we have or let you know when the right device turns up."
      cardsTitle={<>Why buy from a <em>repair shop</em></>}
      cards={[
        { icon: <ToolIcon />, title: 'Opened and tested, not just wiped', text: 'We check the parts that actually fail. A reseller looks at the outside; we look at battery health and component function.' },
        { icon: <ShieldIcon />, title: 'A real warranty', text: 'Three months on the device. A private seller offers you nothing once the money has changed hands.' },
        { icon: <WalletIcon />, title: 'Trade-in accepted', text: 'Bring your old phone and put its value straight towards the replacement, in a single visit.' },
        { icon: <TagIcon />, title: 'Honest about condition', text: 'We point out the marks and the wear rather than photographing around them. You know exactly what you are buying.' },
      ]}
      faqs={faqs}
      chips={{
        title: 'Related',
        links: [
          { label: 'Sell your phone', href: '/sell-your-phone-warkworth' },
          { label: 'Phone unlocking', href: '/services/phone-unlocking-in-warkworth' },
          { label: 'Battery replacement', href: '/services/battery-replacement-in-warkworth' },
          { label: 'Screen protectors', href: '/services/screen-protectors-in-warkworth' },
          { label: 'Phone accessories', href: '/services/phone-accessories-in-warkworth' },
        ],
      }}
      ctaTitle="Looking for a phone?"
      ctaText={`Call ${site.phone} or pop into 8/9 Fairwater Road, Warkworth and tell us what you are after. Stock moves fast, so it is worth asking even if you do not see what you want.`}
      schema={servicePageSchema({
        name: 'Second-Hand Phone Sales',
        description:
          'Refurbished second-hand phones in Warkworth, tested and reset by our own technicians and sold with a 3-month warranty.',
        url: URL,
        crumbs: [
          { name: 'Home', item: site.url },
          { name: 'Second-Hand Phones', item: URL },
        ],
        faqs,
      })}
    />
  );
}

import type { Metadata } from 'next';
import IntentPage from '@/components/IntentPage';
import { BuildingIcon, ClockIcon, ShieldIcon, ToolIcon } from '@/components/Icons';
import { servicePageSchema } from '@/lib/schema';
import { site } from '@/lib/site';

const URL = `${site.url}/business-device-repair-warkworth`;

const faqs = [
  {
    q: 'Do you invoice businesses?',
    a: 'Yes. We can invoice your business rather than taking payment at the counter, which keeps your bookkeeping tidy and means whoever drops the device off does not need to pay for it.',
  },
  {
    q: 'Can you prioritise a device we are trading on?',
    a: 'Tell us it is holding up your work and we will treat it that way. A till iPad or a tradie\'s phone gets moved up the queue over a device that can wait until tomorrow.',
  },
  {
    q: 'Do you repair Windows laptops as well as MacBooks?',
    a: 'Both. Screens, keyboards, batteries, charging ports, fans, storage upgrades and no-boot faults across Windows laptops and MacBooks alike.',
  },
  {
    q: 'What about data on a business device?',
    a: 'We treat business data as confidential and only access what we need to test the repair. If a drive has failed we will talk through the recovery options and what they realistically cost before doing anything.',
  },
  {
    q: 'Can you look after several devices at once?',
    a: 'Yes. If you have a batch — a set of tills, a few staff laptops, a fleet of phones — bring them in together and we will work through them and quote as one job.',
  },
  {
    q: 'Do you come to us?',
    a: 'We are a workshop rather than a mobile service, so repairs happen on our bench in Warkworth. For a batch of devices, drop them off and we will call you when they are ready.',
  },
];

export const metadata: Metadata = {
  title: 'Business Device Repair Warkworth | Laptops, Tills & Phones | NZ Tech Repairs',
  description:
    'Business device repair in Warkworth — staff laptops, MacBooks, till iPads and work phones. Priority turnaround on anything you are trading on, invoicing available, 3-month warranty.',
  keywords: ['business computer repair warkworth', 'business laptop repair', 'commercial device repair rodney', 'till ipad repair', 'business it support warkworth'],
  alternates: { canonical: '/business-device-repair-warkworth' },
  openGraph: {
    title: 'Business Device Repair in Warkworth | NZ Tech Repairs',
    description: 'Priority repair for the devices your business trades on. Invoicing available.',
    url: URL,
    siteName: site.name,
    images: ['/images/lab/service-bench-technician.webp'],
    locale: 'en_NZ',
    type: 'website',
  },
};

export default function BusinessRepairPage() {
  return (
    <IntentPage
      badge={<><BuildingIcon size={14} />For local business</>}
      title={<>Business device repair, <em>without the downtime</em></>}
      lede="When a till iPad dies or a staff laptop stops booting, you are not inconvenienced — you are losing money. We prioritise anything a business is trading on, and we invoice so whoever drops it off does not have to pay for it."
      image="/images/lab/service-bench-technician.webp"
      imageAlt="A technician repairing a business laptop at NZ Tech Repairs in Warkworth"
      crumbs={[{ name: 'Home', href: '/' }, { name: 'Business Repair' }]}
      stats={[
        { value: 'Priority', label: 'On trading devices' },
        { value: 'Invoiced', label: 'Not counter payment' },
        { value: '3-month', label: 'Warranty' },
      ]}
      primaryCta={{ label: 'Talk to us about your fleet', href: '/contact' }}
      bodyTitle={<>Local businesses, <em>local bench</em></>}
      body={[
        'Warkworth, Matakana and the wider Rodney district run on small business — cafes, cellar doors, trades, clinics, contractors and retailers. All of them depend on a handful of devices that nobody thinks about until one stops working.',
        'Sending that device to Auckland means losing it for a week. We are on Fairwater Road, we assess it the day it arrives, and most of the time you have it back the same day. That is the whole argument for using a local workshop.',
        'For anything you are actively trading on — the till, the booking iPad, the laptop your quoting lives on — tell us when you drop it off and it goes to the front of the queue.',
      ]}
      checkTitle="What we look after for local businesses"
      checks={[
        'Staff laptops and MacBooks — screens, keyboards, batteries, no-boot faults',
        'Till and booking iPads, including cracked glass and charging faults',
        'Work phones for trades and field staff',
        'Desktop PCs and all-in-ones',
        'Storage upgrades and slow-machine tune-ups',
        'Data recovery from failed drives and dead devices',
      ]}
      note="If you are down and it is costing you, say so when you call. We would rather reshuffle the bench than have you closed for an afternoon — and we will tell you straight away if it is something we cannot turn around fast."
      cardsTitle={<>Built around <em>business reality</em></>}
      cards={[
        { icon: <ClockIcon />, title: 'Priority on trading devices', text: 'A till or a booking system is not the same as a home laptop. Tell us it is holding up trade and it gets moved up the queue.' },
        { icon: <ToolIcon />, title: 'Diagnosis before spend', text: 'You get a fixed quote before any work, so you can weigh repair against replacement with real numbers rather than a guess.' },
        { icon: <BuildingIcon />, title: 'Invoiced, not paid at the counter', text: 'We can invoice the business so staff can drop a device off without needing a company card or an expense claim.' },
        { icon: <ShieldIcon />, title: 'Batches handled as one job', text: 'Several devices at once — staff phones, a set of tills, a pile of laptops — assessed together and quoted as a single job.' },
      ]}
      faqs={faqs}
      chips={{
        title: 'Business repairs we do most',
        links: [
          { label: 'Laptop & computer repair', href: '/services/laptop-computer-repair-in-warkworth' },
          { label: 'MacBook repair', href: '/services/macbook-repair-in-warkworth' },
          { label: 'iPad & tablet repair', href: '/services/ipad-tablet-repair-in-warkworth' },
          { label: 'Data recovery', href: '/services/data-recovery-in-warkworth' },
          { label: 'Battery replacement', href: '/services/battery-replacement-in-warkworth' },
          { label: 'Charging port repair', href: '/services/charging-port-repair-in-warkworth' },
        ],
      }}
      ctaTitle="Keep your business trading"
      ctaText={`Call ${site.phone} and tell us what is down. We will tell you honestly how fast we can turn it around before you drive over.`}
      schema={servicePageSchema({
        name: 'Business Device Repair',
        description:
          'Priority repair of business laptops, MacBooks, till iPads and work phones in Warkworth, with invoicing and a 3-month warranty.',
        url: URL,
        crumbs: [
          { name: 'Home', item: site.url },
          { name: 'Business Repair', item: URL },
        ],
        faqs,
      })}
    />
  );
}

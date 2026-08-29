import type { Metadata } from 'next';
import IntentPage from '@/components/IntentPage';
import { MailIcon, ShieldIcon, ToolIcon, TruckIcon } from '@/components/Icons';
import { servicePageSchema } from '@/lib/schema';
import { site } from '@/lib/site';

const URL = `${site.url}/mail-in-repair-nz`;

const faqs = [
  {
    q: 'How do I send my device in?',
    a: 'Call or message us first with the device and the fault so we can confirm we can help. Then post it tracked, packed well, with a note inside giving your name, phone number and a short description of the problem. We will contact you as soon as it lands.',
  },
  {
    q: 'How should I pack it?',
    a: 'Wrap the device in bubble wrap or a thick layer of clothing, put it in a rigid box rather than a soft courier bag, and make sure it cannot move around inside. Do not send chargers, cases or SIM cards unless we have asked for them.',
  },
  {
    q: 'Do I pay before you look at it?',
    a: 'No. We assess it first and call you with a quote. Nothing is repaired until you say yes, and if it turns out not to be worth fixing we will tell you that instead of talking you into it.',
  },
  {
    q: 'Should I remove my passcode or Find My iPhone?',
    a: 'Leave your data alone, but do turn off Find My iPhone or Android device protection, and let us know your passcode if you are comfortable doing so. We need to be able to power the device up and test it properly after the repair.',
  },
  {
    q: 'How long does the whole process take?',
    a: 'Typically two to four working days door to door within New Zealand — a day each way for courier, and same-day or next-day on the bench. We will tell you if a part has to be ordered in.',
  },
  {
    q: 'Is my data safe?',
    a: 'Yes. We do not browse your device, and we only access what we need to test the repair. If the job involves data recovery we will discuss exactly what we are doing before we start.',
  },
];

export const metadata: Metadata = {
  title: 'Mail-In Repair NZ | Post Your Phone or Laptop to Us | NZ Tech Repairs',
  description:
    'Too far to drive? Post your phone, tablet or laptop to our Warkworth workshop from anywhere in New Zealand. Free assessment, a quote before any work, and a 3-month warranty.',
  keywords: ['mail in phone repair nz', 'send phone for repair', 'postal repair service nz', 'mail in laptop repair', 'phone repair by post'],
  alternates: { canonical: '/mail-in-repair-nz' },
  openGraph: {
    title: 'Mail-In Device Repair Anywhere in New Zealand | NZ Tech Repairs',
    description: 'Post your device to our Warkworth bench. Free assessment, quote before work, 3-month warranty.',
    url: URL,
    siteName: site.name,
    images: ['/images/lab/book-hero.webp'],
    locale: 'en_NZ',
    type: 'website',
  },
};

export default function MailInRepairPage() {
  return (
    <IntentPage
      badge={<><MailIcon size={14} />Nationwide</>}
      title={<>Mail-in repair, <em>anywhere in New Zealand</em></>}
      lede="Not everyone is a short drive from Warkworth. Post your phone, tablet, laptop or console to our bench and get the same technicians, the same parts and the same 3-month warranty as a walk-in customer."
      image="/images/lab/book-hero.webp"
      imageAlt="A device packed and ready to be posted to NZ Tech Repairs for a mail-in repair"
      crumbs={[{ name: 'Home', href: '/' }, { name: 'Mail-In Repair' }]}
      stats={[
        { value: '2–4 days', label: 'Typical turnaround' },
        { value: 'Free', label: 'Assessment' },
        { value: '3-month', label: 'Warranty' },
      ]}
      primaryCta={{ label: 'Start a mail-in repair', href: '/contact' }}
      bodyTitle={<>Same bench, <em>just by courier</em></>}
      body={[
        'Plenty of people who need a proper repair are nowhere near a proper repair shop. Mangawhai, the Kaipara, the Coromandel, the South Island — if you can get it to a courier, we can fix it and send it back.',
        'A mail-in job is not a lesser service. It goes on the same bench, gets the same free assessment, and comes back with the same 3-month warranty on the part and the workmanship. The only difference is that we call you with the quote instead of walking out to the counter.',
        'We will always tell you honestly if a repair is not worth doing. There is no point posting a phone across the country to be told the board is dead, so we would rather have that conversation on the phone before you send it.',
      ]}
      checkTitle="What we take by post"
      checks={[
        'iPhone, Samsung and Android phones',
        'iPads and Android tablets',
        'MacBooks and Windows laptops',
        'Apple Watch and wearables',
        'PlayStation and Xbox consoles',
        'Hard drives and USB storage for data recovery',
      ]}
      note="One thing worth knowing: if your device has been in water, posting it is a race against corrosion. Get it to a local technician the same day if you possibly can — and if you cannot, keep it switched off, do not charge it, and tell us in the note so we prioritise it the moment it arrives."
      stepsTitle={<>How a <em>mail-in repair</em> works</>}
      steps={[
        { title: 'Get in touch first', text: `Call ${site.phone} or send us a message with your device and the fault. We will confirm we can help and give you a ballpark before you spend anything on postage.` },
        { title: 'Pack and post it', text: 'Rigid box, plenty of padding, tracked courier. Put a note inside with your name, number and the problem so it does not get separated from the device.' },
        { title: 'We assess and quote', text: 'We open it up, find the real fault, and ring you with a fixed price. Nothing gets repaired until you approve it.' },
        { title: 'Repaired and returned', text: 'Once you have approved and paid, we repair, test and courier it straight back to you, tracked.' },
      ]}
      cardsTitle={<>Why post it to <em>us</em></>}
      cardsIntro="A repair workshop rather than a parts-swapping counter — which matters most when the fault is not the obvious one."
      cards={[
        { icon: <ToolIcon />, title: 'Real diagnosis, not guesswork', text: 'We open the device and find the actual fault. A phone that will not charge is usually a packed port, not a dead battery, and we are not going to sell you the wrong repair.' },
        { icon: <ShieldIcon />, title: 'Quote before any work', text: 'You get a fixed price up front and you decide. No surprise charges, and no work started on the assumption you will say yes.' },
        { icon: <TruckIcon />, title: 'Tracked both ways', text: 'Your device is tracked to us and tracked back. We will send you the return tracking number as soon as it goes out the door.' },
        { icon: <MailIcon />, title: 'You are dealing with the technician', text: 'The person who calls you with the quote is the person doing the repair — not a call centre reading from a script.' },
      ]}
      faqs={faqs}
      chips={{
        title: 'Prefer to drive in?',
        links: [
          { label: 'All service areas', href: '/service-areas' },
          { label: 'Warkworth', href: '/phone-repair-warkworth' },
          { label: 'Wellsford', href: '/phone-repair-wellsford' },
          { label: 'Mangawhai', href: '/phone-repair-mangawhai' },
          { label: 'Orewa', href: '/phone-repair-orewa' },
          { label: 'Book a repair', href: '/book-a-repair' },
        ],
      }}
      ctaTitle="Send us your device"
      ctaText={`Message us with the model and the fault and we will tell you exactly what to do next — and whether it is worth posting in the first place. Or call ${site.phone}.`}
      schema={servicePageSchema({
        name: 'Mail-In Device Repair',
        description:
          'Post your phone, tablet, laptop or console to NZ Tech Repairs in Warkworth from anywhere in New Zealand. Free assessment, a quote before any work, and a 3-month warranty.',
        url: URL,
        areaServed: ['New Zealand'],
        crumbs: [
          { name: 'Home', item: site.url },
          { name: 'Mail-In Repair', item: URL },
        ],
        faqs,
      })}
    />
  );
}

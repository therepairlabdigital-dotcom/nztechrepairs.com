import type { Metadata } from 'next';
import IntentPage from '@/components/IntentPage';
import { BookIcon, CheckIcon, ClockIcon, ShieldIcon } from '@/components/Icons';
import { servicePageSchema } from '@/lib/schema';
import { site } from '@/lib/site';

const URL = `${site.url}/winz-quotes-repair-warkworth`;

const faqs = [
  {
    q: 'Do you provide written quotes for Work and Income?',
    a: 'Yes. We provide a free written quote on our letterhead with the device, the fault, the itemised repair cost and our business details — the format Work and Income asks for. There is no charge for the quote and no obligation to go ahead.',
  },
  {
    q: 'How long does it take to get the quote?',
    a: 'Usually the same day. Bring the device in, we assess it, and you walk out with the written quote. If we need to order a part to price it accurately we will tell you and follow up within a day or two.',
  },
  {
    q: 'What do I need to bring?',
    a: 'Just the device. It helps if you can tell us what happened and when, because Work and Income sometimes asks. You do not need your client number to get a quote from us.',
  },
  {
    q: 'What if Work and Income declines the repair?',
    a: 'Nothing is lost — the quote was free and you were never committed. If it helps, we can also quote a lower-cost option, for example a screen repair only rather than screen and battery together.',
  },
  {
    q: 'How does payment work if it is approved?',
    a: 'Work and Income will usually either pay us directly or issue you a payment card. Bring whatever paperwork they give you and we will work with it. Ring us if you are not sure and we will talk you through it.',
  },
  {
    q: 'Will the quote still be valid later?',
    a: 'Parts pricing does move, so we date every quote. If a few weeks have passed by the time it is approved, check in with us and we will confirm or reissue it — usually without any change.',
  },
];

export const metadata: Metadata = {
  title: 'WINZ Repair Quotes Warkworth | Free Written Quotes | NZ Tech Repairs',
  description:
    'Free written repair quotes for Work and Income (WINZ) in Warkworth. Same-day quotes on phones, laptops and tablets, laid out the way WINZ asks for, with no obligation.',
  keywords: ['winz quote warkworth', 'winz phone repair quote', 'work and income repair quote', 'free repair quote warkworth', 'winz laptop repair'],
  alternates: { canonical: '/winz-quotes-repair-warkworth' },
  openGraph: {
    title: 'WINZ Repair Quotes in Warkworth | NZ Tech Repairs',
    description: 'Free, same-day written repair quotes for Work and Income applications.',
    url: URL,
    siteName: site.name,
    images: ['/images/lab/winz-quotes.webp'],
    locale: 'en_NZ',
    type: 'website',
  },
};

export default function WinzQuotesPage() {
  return (
    <IntentPage
      badge={<><BookIcon size={14} />Free written quotes</>}
      title={<>WINZ repair quotes, <em>same day</em></>}
      lede="Work and Income need a written quote before they will help with a repair. We do them free, usually while you wait, laid out with everything WINZ asks for — and there is no obligation to go ahead with us afterwards."
      image="/images/lab/winz-quotes.webp"
      imageAlt="A written repair quote being prepared at NZ Tech Repairs in Warkworth"
      crumbs={[{ name: 'Home', href: '/' }, { name: 'WINZ Quotes' }]}
      stats={[
        { value: 'Free', label: 'No cost for the quote' },
        { value: 'Same day', label: 'Usually while you wait' },
        { value: 'No', label: 'Obligation' },
      ]}
      primaryCta={{ label: 'Request a quote', href: '/contact' }}
      bodyTitle={<>A quote that <em>gets accepted</em></>}
      body={[
        'A phone or a laptop is not a luxury. It is how you apply for jobs, book appointments, talk to your kids and get paid. When one breaks and the money is not there, Work and Income can often help — but only with a proper written quote in hand.',
        'We write these regularly, so we know what gets knocked back. A quote that just says "phone repair — $X" tends to cause questions. Ours names the exact device, describes the fault, itemises parts and labour separately, and carries our business details and the date.',
        'Bring the device in and we will assess it for free. Most of the time you will walk out with the quote the same visit, and you are under no obligation to use us if you would rather take it elsewhere.',
      ]}
      checkTitle="What is on every quote we write"
      checks={[
        'Device make, model and identifying details',
        'A plain-English description of the fault',
        'Parts and labour itemised separately',
        'The total cost, clearly stated',
        'Our business name, address, phone and GST details where applicable',
        'The date the quote was issued',
      ]}
      note="If cost is the sticking point, say so. There is often a cheaper path — repairing the screen now and leaving the battery for later, or fitting a quality aftermarket part instead of a premium one. We would rather find you a workable option than watch a quote get declined for being too high."
      stepsTitle={<>From <em>broken device</em> to approved repair</>}
      steps={[
        { title: 'Bring it in', text: 'Walk in during opening hours with the device. No appointment and no paperwork needed at this stage.' },
        { title: 'Free assessment', text: 'We find the actual fault so the quote reflects the real repair, not a guess from looking at the outside.' },
        { title: 'Written quote, same day', text: 'You leave with a dated, itemised quote on our letterhead to take to Work and Income.' },
        { title: 'Approved? Bring it back', text: 'Once WINZ approves it, bring the device and their paperwork back and we get straight on with the repair.' },
      ]}
      cardsTitle={<>Why people come to <em>us</em> for WINZ quotes</>}
      cards={[
        { icon: <ClockIcon />, title: 'No waiting weeks', text: 'Most quotes are done the same visit. You are not stuck waiting on an email that never arrives while your application sits idle.' },
        { icon: <CheckIcon size={22} />, title: 'Written the way WINZ wants', text: 'Itemised, dated and on letterhead. We have written enough of these to know what causes a query.' },
        { icon: <ShieldIcon />, title: 'No pressure to proceed', text: 'The quote is free and yours to take anywhere. We are not going to chase you about it.' },
        { icon: <BookIcon />, title: 'We explain the options', text: 'If there is a cheaper way to get you working again, we will put that on the table too rather than only quoting the premium fix.' },
      ]}
      faqs={faqs}
      chips={{
        title: 'Common WINZ repairs',
        links: [
          { label: 'iPhone repair', href: '/services/iphone-repair-in-warkworth' },
          { label: 'Samsung & Android', href: '/services/samsung-android-repair-in-warkworth' },
          { label: 'Screen replacement', href: '/services/phone-screen-replacement-in-warkworth' },
          { label: 'Battery replacement', href: '/services/battery-replacement-in-warkworth' },
          { label: 'Laptop repair', href: '/services/laptop-computer-repair-in-warkworth' },
          { label: 'iPad & tablet repair', href: '/services/ipad-tablet-repair-in-warkworth' },
        ],
      }}
      ctaTitle="Need a quote for Work and Income?"
      ctaText={`Bring the device into 8/9 Fairwater Road, Warkworth during opening hours, or call ${site.phone} first if you want to check we can help.`}
      schema={servicePageSchema({
        name: 'WINZ Repair Quotes',
        description:
          'Free written repair quotes for Work and Income applications, issued same-day in Warkworth for phones, tablets and laptops.',
        url: URL,
        crumbs: [
          { name: 'Home', item: site.url },
          { name: 'WINZ Quotes', item: URL },
        ],
        faqs,
      })}
    />
  );
}

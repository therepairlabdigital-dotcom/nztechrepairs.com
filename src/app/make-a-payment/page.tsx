import type { Metadata } from 'next';
import IntentPage from '@/components/IntentPage';
import { ClockIcon, ShieldIcon, ToolIcon, WalletIcon } from '@/components/Icons';
import { servicePageSchema } from '@/lib/schema';
import { site } from '@/lib/site';

const URL = `${site.url}/make-a-payment`;

const faqs = [
  {
    q: 'When do I pay for a repair?',
    a: 'On collection, once the repair is done and you have seen the device working. The only exception is a part we have to order specially for an unusual model, where we may ask for the part cost up front.',
  },
  {
    q: 'Do I pay anything for the assessment?',
    a: 'No. Assessment is free and the quote is free. You only pay if you approve the repair and we complete it.',
  },
  {
    q: 'Can I pay in instalments?',
    a: 'We offer interest-free instalment options in store. Ask us when you drop the device off and we will confirm what is available for the repair you need.',
  },
  {
    q: 'Can you invoice my business?',
    a: 'Yes. We can invoice the business rather than take payment at the counter, so whoever drops the device off does not need a company card. See our business repair page.',
  },
  {
    q: 'What about Work and Income payments?',
    a: 'Work and Income will usually either pay us directly or issue you a payment card. Bring whatever paperwork they give you and we will work with it — see our WINZ quotes page.',
  },
  {
    q: 'Do I get a receipt?',
    a: 'Always, and keep it. Your receipt is your proof of the 3-month warranty on the parts and the workmanship.',
  },
];

export const metadata: Metadata = {
  title: 'Payments | How to Pay for Your Repair | NZ Tech Repairs Warkworth',
  description:
    'How payment works at NZ Tech Repairs in Warkworth — free assessment, a fixed quote before work, and payment on collection. Card, EFTPOS, cash, business invoicing and instalment options.',
  keywords: ['nz tech repairs payment', 'phone repair payment options warkworth', 'pay for repair', 'repair invoice warkworth'],
  alternates: { canonical: '/make-a-payment' },
  openGraph: {
    title: 'Payments | NZ Tech Repairs Warkworth',
    description: 'Free assessment, fixed quote before any work, and payment on collection.',
    url: URL,
    siteName: site.name,
    images: ['/images/lab/payment-hero.webp'],
    locale: 'en_NZ',
    type: 'website',
  },
};

export default function MakeAPaymentPage() {
  return (
    <IntentPage
      badge={<><WalletIcon size={14} />Payments</>}
      title={<>Pay when it is <em>fixed</em></>}
      lede="No deposit to get a quote, no charge for the assessment, and nothing to pay until the repair is done and you have seen the device working. Here is exactly how it runs."
      image="/images/lab/payment-hero.webp"
      imageAlt="Paying for a completed repair at the counter of NZ Tech Repairs in Warkworth"
      crumbs={[{ name: 'Home', href: '/' }, { name: 'Payments' }]}
      stats={[
        { value: 'Free', label: 'Assessment & quote' },
        { value: 'On collection', label: 'When you pay' },
        { value: 'No fix', label: 'No fee' },
      ]}
      primaryCta={{ label: 'Get a quote first', href: '/contact' }}
      bodyTitle={<>No surprises at <em>the counter</em></>}
      body={[
        'The thing people worry about with repairs is the bill going up while the device is out of their hands. So we do it the other way round: you get a fixed quote before any work starts, and that is the number you pay.',
        'If we open a device and find something the quote did not cover — board damage behind a screen, corrosion under a port — we stop and ring you. You decide whether to go ahead at the revised price or take the device back as it is. We never just carry on and add it to the bill.',
        'And if we cannot fix it, you do not pay for the attempt. The assessment was free and it stays free.',
      ]}
      checkTitle="Ways to pay"
      checks={[
        'EFTPOS and debit card in store',
        'Credit card in store',
        'Cash',
        'Bank transfer on request',
        'Interest-free instalment options — ask in store',
        'Business invoicing for commercial customers',
        'Work and Income payment cards and direct payment',
      ]}
      note="Keep your receipt. It is your proof of the 3-month warranty on both the part we fitted and the workmanship, and it is the quickest way for us to look up exactly what was done if you ever bring the device back."
      stepsTitle={<>How the <em>money side</em> works</>}
      steps={[
        { title: 'Free assessment', text: 'We open the device and find the real fault. This costs nothing and commits you to nothing.' },
        { title: 'Fixed quote', text: 'A clear price for parts and labour, before any work begins. You decide whether to go ahead.' },
        { title: 'We repair it', text: 'If anything unexpected turns up, we stop and call you rather than pressing on and adding to the bill.' },
        { title: 'Pay on collection', text: 'You see the device working, then you pay. Receipt issued, warranty starts from that date.' },
      ]}
      cardsTitle={<>What you are <em>never</em> charged for</>}
      cards={[
        { icon: <ToolIcon />, title: 'Looking at it', text: 'Assessment and diagnosis are free, whether or not you go ahead with the repair.' },
        { icon: <WalletIcon />, title: 'A quote', text: 'Free and written where you need it — including quotes for Work and Income applications.' },
        { icon: <ClockIcon />, title: 'A repair that did not work', text: 'No fix, no fee. If we cannot solve it, you are not paying for the time we spent trying.' },
        { icon: <ShieldIcon />, title: 'Warranty work', text: 'If a part we fitted fails inside 3 months, sorting it out is on us.' },
      ]}
      faqs={faqs}
      chips={{
        title: 'Related',
        links: [
          { label: 'Book a repair', href: '/book-a-repair' },
          { label: 'WINZ quotes', href: '/winz-quotes-repair-warkworth' },
          { label: 'Business repair', href: '/business-device-repair-warkworth' },
          { label: 'FAQs', href: '/faqs' },
          { label: 'Contact us', href: '/contact' },
        ],
      }}
      ctaTitle="Want a price first?"
      ctaText={`Call ${site.phone} with your model and the fault, or bring it into 8/9 Fairwater Road, Warkworth for a free assessment and a fixed quote.`}
      schema={servicePageSchema({
        name: 'Repair Payments',
        description:
          'Payment information for NZ Tech Repairs in Warkworth — free assessment and quote, fixed pricing, payment on collection, and business invoicing.',
        url: URL,
        crumbs: [
          { name: 'Home', item: site.url },
          { name: 'Payments', item: URL },
        ],
        faqs,
      })}
    />
  );
}

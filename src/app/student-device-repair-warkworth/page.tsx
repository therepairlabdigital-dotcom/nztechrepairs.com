import type { Metadata } from 'next';
import IntentPage from '@/components/IntentPage';
import { ClockIcon, GraduationIcon, ShieldIcon, WalletIcon } from '@/components/Icons';
import { servicePageSchema } from '@/lib/schema';
import { site } from '@/lib/site';

const URL = `${site.url}/student-device-repair-warkworth`;

const faqs = [
  {
    q: 'Can you repair a school-issued Chromebook or iPad?',
    a: 'Usually yes — cracked screens, charging ports and broken hinges are all repairable. Check with the school first, because some devices are leased and the school may have its own repair arrangement that you should use instead.',
  },
  {
    q: 'How fast can you turn around a school device?',
    a: 'Most screen and charging port repairs are done the same day. If a student needs it back for class the next morning, tell us and we will work to that.',
  },
  {
    q: 'Is repairing cheaper than replacing a school laptop?',
    a: 'Almost always, and usually by a wide margin. A cracked screen or a worn-out battery costs a fraction of a new device, and the rest of the machine is generally fine.',
  },
  {
    q: 'Will a repair wipe the student\'s work?',
    a: 'A screen, battery, port or hinge repair does not touch storage, so files and logins stay exactly as they were. If a drive itself has failed we will talk through recovery options before doing anything.',
  },
  {
    q: 'Do you repair gaming laptops too?',
    a: 'Yes. Overheating and fan noise are the two we see most — a gaming laptop clogged with dust will throttle badly, and a proper clean and repaste usually transforms it.',
  },
  {
    q: 'What if the device is out of warranty?',
    a: 'That is most of what we do. Manufacturer warranties do not cover accidental damage anyway, so a cracked screen is a repair job whether the device is a month old or four years old.',
  },
];

export const metadata: Metadata = {
  title: 'Student & School Device Repair Warkworth | Laptops & iPads | NZ Tech Repairs',
  description:
    'Student laptop, Chromebook and iPad repair in Warkworth. Cracked screens, dead batteries, broken hinges and charging faults fixed fast — usually same day, with a 3-month warranty.',
  keywords: ['student laptop repair warkworth', 'school chromebook repair', 'school ipad repair', 'cracked chromebook screen', 'student device repair rodney'],
  alternates: { canonical: '/student-device-repair-warkworth' },
  openGraph: {
    title: 'Student & School Device Repair in Warkworth | NZ Tech Repairs',
    description: 'Fast, affordable repair for student laptops, Chromebooks and school iPads.',
    url: URL,
    siteName: site.name,
    images: ['/images/lab/service-bench-technician.webp'],
    locale: 'en_NZ',
    type: 'website',
  },
};

export default function StudentRepairPage() {
  return (
    <IntentPage
      badge={<><GraduationIcon size={14} />Students &amp; schools</>}
      title={<>Student device repair, <em>back by tomorrow</em></>}
      lede="A cracked Chromebook or a dead laptop battery in the middle of term is a genuine problem. We repair student devices fast and cheaply — usually the same day, always for a fraction of what replacing it would cost."
      image="/images/lab/service-bench-technician.webp"
      imageAlt="A student laptop being repaired on the bench at NZ Tech Repairs Warkworth"
      crumbs={[{ name: 'Home', href: '/' }, { name: 'Student Repair' }]}
      stats={[
        { value: 'Same day', label: 'Most repairs' },
        { value: 'Cheaper', label: 'Than replacing' },
        { value: '3-month', label: 'Warranty' },
      ]}
      primaryCta={{ label: 'Get a repair quote', href: '/contact' }}
      bodyTitle={<>Devices that live in <em>school bags</em></>}
      body={[
        'School devices take more punishment than anything else we see. They get dropped, sat on, jammed into full bags, and charged with whatever cable is nearest. Cracked screens, snapped hinges and worn-out charging ports are the three faults that account for most of what comes through the door.',
        'Almost all of it is repairable, and almost all of it is cheaper to repair than to replace. A Chromebook with a cracked screen is otherwise a perfectly good machine — there is no sense buying a new one because of one broken part.',
        'We know the timing matters. If a student needs the device back for class tomorrow, tell us when you drop it in and we will work to that rather than the usual queue.',
      ]}
      checkTitle="What breaks on student devices"
      checks={[
        'Cracked laptop and Chromebook screens',
        'Snapped or loose hinges and lids',
        'Batteries that no longer last a school day',
        'Charging ports worn out from daily plugging',
        'Missing or broken keyboard keys',
        'Overheating and fan noise on gaming laptops',
        'iPads with cracked glass or dead touch',
        'Phones with smashed screens and flat batteries',
      ]}
      note="If the device came from the school, check with them first — some are leased, and the school may have its own repair channel you are meant to use. If it is the family's own device, bring it straight in."
      cardsTitle={<>Why parents bring them <em>here</em></>}
      cards={[
        { icon: <WalletIcon />, title: 'Far cheaper than replacing', text: 'A screen or a battery is a fraction of the cost of a new laptop, and the rest of the machine is usually in perfectly good shape.' },
        { icon: <ClockIcon />, title: 'Back for class', text: 'Most repairs are same-day. Tell us the deadline and we will tell you honestly whether we can hit it.' },
        { icon: <ShieldIcon />, title: 'Their work stays put', text: 'Screen, battery, hinge and port repairs do not touch storage, so files, logins and browser tabs are exactly where they left them.' },
        { icon: <GraduationIcon />, title: 'Straight advice', text: 'If a device is genuinely at the end of its life we will say so rather than take your money for a repair that buys you two months.' },
      ]}
      faqs={faqs}
      chips={{
        title: 'Related repairs',
        links: [
          { label: 'Laptop & computer repair', href: '/services/laptop-computer-repair-in-warkworth' },
          { label: 'MacBook repair', href: '/services/macbook-repair-in-warkworth' },
          { label: 'iPad & tablet repair', href: '/services/ipad-tablet-repair-in-warkworth' },
          { label: 'Battery replacement', href: '/services/battery-replacement-in-warkworth' },
          { label: 'Screen replacement', href: '/services/phone-screen-replacement-in-warkworth' },
          { label: 'Charging port repair', href: '/services/charging-port-repair-in-warkworth' },
        ],
      }}
      ctaTitle="Broken school device?"
      ctaText={`Bring it into 8/9 Fairwater Road, Warkworth, or call ${site.phone} and we will tell you what it will take to get it working again.`}
      schema={servicePageSchema({
        name: 'Student & School Device Repair',
        description:
          'Repair of student laptops, Chromebooks, school iPads and phones in Warkworth — cracked screens, hinges, batteries and charging ports, usually same day.',
        url: URL,
        crumbs: [
          { name: 'Home', item: site.url },
          { name: 'Student Repair', item: URL },
        ],
        faqs,
      })}
    />
  );
}

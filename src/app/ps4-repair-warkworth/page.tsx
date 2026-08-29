import type { Metadata } from 'next';
import IntentPage from '@/components/IntentPage';
import { CableIcon, ClockIcon, GamepadIcon, ToolIcon } from '@/components/Icons';
import { servicePageSchema } from '@/lib/schema';
import { site } from '@/lib/site';

const URL = `${site.url}/ps4-repair-warkworth`;

const faqs = [
  {
    q: 'My PS4 sounds like a jet engine. Can that be fixed?',
    a: 'Yes, and it is the single most common PS4 job we do. Years of dust in the heatsink plus dried-out thermal paste makes the fan run flat out. A strip, clean and repaste normally makes the console quiet again.',
  },
  {
    q: 'The console turns on then shuts down straight away.',
    a: 'Usually overheating protection, sometimes a failing power supply. Both are repairable. We diagnose which one it is before quoting rather than guessing.',
  },
  {
    q: 'No picture on the TV but the console is on.',
    a: 'Almost always a damaged HDMI port. It is a micro-soldering repair and we do it in-house. Do not keep forcing the cable in — that risks turning a port repair into board damage.',
  },
  {
    q: 'Can you fix the disc drive?',
    a: 'Yes — discs not being taken in, ejecting on their own, or grinding without reading. All common on a console of this age and all repairable.',
  },
  {
    q: 'Is a PS4 still worth repairing?',
    a: 'For most people, yes. A repair costs far less than moving to a current console, and the games library still works. We will tell you if the fault is serious enough that it is not worth it.',
  },
  {
    q: 'Will my games and saves survive?',
    a: 'Fan, thermal, HDMI and disc drive repairs do not touch the hard drive, so everything stays put. If the drive itself has failed we will talk you through the options first.',
  },
];

export const metadata: Metadata = {
  title: 'PS4 Repair Warkworth | Overheating, HDMI & Disc Drive | NZ Tech Repairs',
  description:
    'PlayStation 4 repair in Warkworth — loud fans and overheating, HDMI port replacement, disc drive faults, power problems and controller drift. 3-month warranty on every repair.',
  keywords: ['ps4 repair warkworth', 'ps4 loud fan fix', 'ps4 hdmi port repair', 'ps4 not turning on', 'playstation repair rodney'],
  alternates: { canonical: '/ps4-repair-warkworth' },
  openGraph: {
    title: 'PS4 Repair in Warkworth | NZ Tech Repairs',
    description: 'Overheating, HDMI port, disc drive and power repairs for the PlayStation 4.',
    url: URL,
    siteName: site.name,
    images: ['/images/lab/console-repair.webp'],
    locale: 'en_NZ',
    type: 'website',
  },
};

export default function Ps4RepairPage() {
  return (
    <IntentPage
      badge={<><GamepadIcon size={14} />PlayStation 4</>}
      title={<>PS4 repair, <em>quiet again</em></>}
      lede="Most PS4s that come to us are not broken so much as choked. Years of dust, dried thermal paste and a fan working twice as hard as it should. We strip, clean and repaste them — and fix the HDMI ports, disc drives and power faults too."
      image="/images/lab/console-repair.webp"
      imageAlt="A PlayStation 4 stripped down for cleaning and repair at NZ Tech Repairs Warkworth"
      crumbs={[{ name: 'Home', href: '/' }, { name: 'PS4 Repair' }]}
      stats={[
        { value: 'Same day', label: 'Most cleans' },
        { value: 'Saves kept', label: 'Drive untouched' },
        { value: '3-month', label: 'Warranty' },
      ]}
      primaryCta={{ label: 'Get a console quote', href: '/contact' }}
      bodyTitle={<>An ageing console with <em>predictable faults</em></>}
      body={[
        'The PS4 has been around long enough that its failures are thoroughly understood. Nearly every one we see is heat, the HDMI port, the disc drive or the power supply — and all four are fixable for far less than replacing the console.',
        'Heat is the headline. The heatsink fills with dust, the thermal paste goes hard, and the fan compensates by screaming. Left alone the console starts shutting itself down mid-game. A proper strip and clean, with fresh paste, usually transforms it.',
        'The other classic is no picture on the TV with the console clearly running. That is the HDMI port, damaged by a knock to a plugged-in cable. It is fine soldering work and we do it here rather than sending it away.',
      ]}
      checkTitle="PS4 repairs we do"
      checks={[
        'Full strip, dust clean and thermal paste renewal',
        'Loud fan and overheating shutdowns',
        'HDMI port replacement (no picture)',
        'Disc drive not reading, not taking or auto-ejecting discs',
        'Power supply faults and consoles that will not start',
        'Blue light of death diagnosis',
        'DualShock 4 controller stick drift',
        'Controller charging port repair',
      ]}
      note="Standing a PS4 in a cabinet with no airflow is the fastest way to kill one. After we clean it, give it space to breathe on all sides — it will stay quiet far longer."
      cardsTitle={<>What you get from <em>a proper service</em></>}
      cards={[
        { icon: <ToolIcon />, title: 'A real strip-down', text: 'Not a squirt of canned air through the vents. We take it apart, clean the heatsink properly and replace the thermal paste.' },
        { icon: <CableIcon />, title: 'HDMI ports in-house', text: 'Micro-soldering on our own bench with a microscope, rather than a two-week trip to Auckland and back.' },
        { icon: <ClockIcon />, title: 'Usually same day', text: 'A clean and repaste is normally a same-day job. Soldering work takes longer and we will say so up front.' },
        { icon: <GamepadIcon />, title: 'Controllers sorted too', text: 'Drifting sticks and dead charging ports on DualShock 4 controllers, repaired rather than replaced.' },
      ]}
      faqs={faqs}
      chips={{
        title: 'Related repairs',
        links: [
          { label: 'PS5 repair', href: '/ps5-repair-warkworth' },
          { label: 'HDMI port repair', href: '/hdmi-port-repair-warkworth' },
          { label: 'TV repair', href: '/services/tv-repair-in-warkworth' },
          { label: 'Laptop & computer repair', href: '/services/laptop-computer-repair-in-warkworth' },
          { label: 'All services', href: '/services' },
        ],
      }}
      ctaTitle="Loud, hot or dead PS4?"
      ctaText={`Drop it into 8/9 Fairwater Road, Warkworth, or call ${site.phone} and tell us what it is doing.`}
      schema={servicePageSchema({
        name: 'PS4 Repair',
        description:
          'PlayStation 4 repair in Warkworth — overheating and fan noise, HDMI port replacement, disc drive and power faults, with a 3-month warranty.',
        url: URL,
        crumbs: [
          { name: 'Home', item: site.url },
          { name: 'PS4 Repair', item: URL },
        ],
        faqs,
      })}
    />
  );
}

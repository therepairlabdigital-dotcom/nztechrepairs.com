import type { Metadata } from 'next';
import IntentPage from '@/components/IntentPage';
import { ClockIcon, DroneIcon, ShieldIcon, ToolIcon } from '@/components/Icons';
import { servicePageSchema } from '@/lib/schema';
import { site } from '@/lib/site';

const URL = `${site.url}/drone-repair-warkworth`;

const faqs = [
  {
    q: 'What drone brands do you repair?',
    a: 'Mostly DJI — Mini, Air, Mavic and Phantom series — plus other consumer brands. Tell us the model and the fault and we will confirm whether we can help before you drive over.',
  },
  {
    q: 'My gimbal is wobbling or showing an error.',
    a: 'Gimbals take the worst of any hard landing. Bent arms, stripped motors and torn ribbon cables are all common, and most are repairable. Do not keep power-cycling it hoping the error clears — that can strain the motor further.',
  },
  {
    q: 'Can you fix a drone that has been in salt water?',
    a: 'Sometimes, and speed is everything. Do not power it on and do not charge the battery. Get it to us as fast as you can — salt water corrodes a board continuously until it is properly cleaned.',
  },
  {
    q: 'Do you replace cracked or broken propeller arms?',
    a: 'Yes. Cracked arms and damaged shells are among the most common repairs after a bad landing, and they are usually straightforward.',
  },
  {
    q: 'Is it worth repairing rather than buying new?',
    a: 'Usually. Drones are expensive, and the common faults — gimbals, arms, cameras, ports — are individual parts rather than the whole aircraft. We will tell you honestly if the damage runs deeper than that.',
  },
  {
    q: 'How long does a drone repair take?',
    a: 'It depends on parts. Some are on the shelf and it is a same-week job; specialist gimbal parts may need ordering. We will give you a realistic timeframe once we have assessed it.',
  },
];

export const metadata: Metadata = {
  title: 'Drone Repair Warkworth | DJI Gimbal, Camera & Crash Damage | NZ Tech Repairs',
  description:
    'Drone repair in Warkworth for DJI and other consumer drones — gimbal faults, camera damage, cracked arms, water damage and charging problems. Free assessment, 3-month warranty.',
  keywords: ['drone repair warkworth', 'dji drone repair nz', 'drone gimbal repair', 'mavic repair', 'drone crash repair'],
  alternates: { canonical: '/drone-repair-warkworth' },
  openGraph: {
    title: 'Drone Repair in Warkworth | NZ Tech Repairs',
    description: 'Gimbal, camera, arm and water damage repair for DJI and consumer drones.',
    url: URL,
    siteName: site.name,
    images: ['/images/lab/drone-repair.webp'],
    locale: 'en_NZ',
    type: 'website',
  },
};

export default function DroneRepairPage() {
  return (
    <IntentPage
      badge={<><DroneIcon size={14} />DJI &amp; consumer drones</>}
      title={<>Drone repair, <em>after the bad landing</em></>}
      lede="Gimbal errors, a camera that will not focus, cracked arms, a drone that came down in the water. We assess and repair DJI and other consumer drones in Warkworth rather than writing them off."
      image="/images/lab/drone-repair.webp"
      imageAlt="A drone being assessed for gimbal and crash damage repair at NZ Tech Repairs Warkworth"
      crumbs={[{ name: 'Home', href: '/' }, { name: 'Drone Repair' }]}
      stats={[
        { value: 'Free', label: 'Assessment' },
        { value: 'DJI', label: 'And other brands' },
        { value: '3-month', label: 'Warranty' },
      ]}
      primaryCta={{ label: 'Get a drone quote', href: '/contact' }}
      bodyTitle={<>The coast is <em>hard on drones</em></>}
      body={[
        'This part of the country is a magnet for drone flying — Omaha, Goat Island, the Mahurangi coastline, Mangawhai Heads. It is also full of the things that break drones: sea breeze, salt spray, unforgiving rocks and water that does not care how expensive the aircraft was.',
        'A crash rarely destroys everything. The gimbal takes the impact, an arm cracks, the camera cover shatters — but the flight controller, the battery and the shell are usually fine. That is what makes drone repair worth doing rather than replacing the whole aircraft.',
        'We assess the damage properly and tell you what it will actually take. If the board is gone, we will say so rather than quoting you a partial repair that leaves you with an aircraft you cannot trust in the air.',
      ]}
      checkTitle="Drone faults we work on"
      checks={[
        'Gimbal errors, wobble and stuck motors',
        'Camera damage, focus faults and cracked lens covers',
        'Cracked or snapped propeller arms',
        'Damaged shells and body panels',
        'Charging faults and battery issues',
        'Water and salt damage cleaning',
        'Ribbon cable and connector repairs',
        'Post-crash diagnostics before you fly again',
      ]}
      note="If it has been in salt water, do not switch it on and do not charge the battery. Corrosion keeps working on the board every minute it stays wet, and powering it up while contaminated is what turns a cleanable drone into a dead one. Get it to us the same day if you possibly can."
      cardsTitle={<>What a proper <em>drone assessment</em> covers</>}
      cards={[
        { icon: <ToolIcon />, title: 'Full damage assessment', text: 'We look past the obvious break. A cracked arm often comes with a strained motor or a pinched cable, and finding that now is cheaper than finding it mid-flight.' },
        { icon: <DroneIcon />, title: 'Gimbal specialists', text: 'Gimbals are the most common casualty and the most delicate assembly on the aircraft. They need patient, careful work rather than force.' },
        { icon: <ShieldIcon />, title: 'Honest airworthiness call', text: 'If we do not think the aircraft will be reliable in the air after a repair, we will tell you. Nobody benefits from a drone that fails at altitude.' },
        { icon: <ClockIcon />, title: 'Clear on parts and timing', text: 'Some parts are on the shelf, some have to be ordered. We tell you which before you commit to anything.' },
      ]}
      faqs={faqs}
      chips={{
        title: 'Other specialist repairs',
        links: [
          { label: 'Water damage repair', href: '/services/water-damage-repair-in-warkworth' },
          { label: 'Data recovery', href: '/services/data-recovery-in-warkworth' },
          { label: 'PS5 repair', href: '/ps5-repair-warkworth' },
          { label: 'Apple Watch repair', href: '/services/apple-watch-repair-in-warkworth' },
          { label: 'All services', href: '/services' },
        ],
      }}
      ctaTitle="Crashed or waterlogged drone?"
      ctaText={`Call ${site.phone} with the model and what happened. We will tell you whether it is worth bringing in before you make the trip.`}
      schema={servicePageSchema({
        name: 'Drone Repair',
        description:
          'DJI and consumer drone repair in Warkworth — gimbal faults, camera damage, cracked arms and water damage, with a free assessment and 3-month warranty.',
        url: URL,
        crumbs: [
          { name: 'Home', item: site.url },
          { name: 'Drone Repair', item: URL },
        ],
        faqs,
      })}
    />
  );
}

import type { Metadata } from 'next';
import IntentPage from '@/components/IntentPage';
import { CableIcon, ClockIcon, GamepadIcon, ToolIcon } from '@/components/Icons';
import { servicePageSchema } from '@/lib/schema';
import { site } from '@/lib/site';

const URL = `${site.url}/ps5-repair-warkworth`;

const faqs = [
  {
    q: 'My PS5 has no picture but the light is on. What is wrong?',
    a: 'That is nearly always the HDMI port. The pins inside are fragile, and bumping a plugged-in cable is enough to damage them. It is a micro-soldering repair, not a replacement console — bring it in and we will confirm before quoting.',
  },
  {
    q: 'The fan is roaring and it keeps shutting down.',
    a: 'Overheating, and usually dust. A PS5 pulls a lot of air and the heatsink packs up over a couple of years. A full strip, clean and fresh thermal paste normally brings temperatures and noise right back down.',
  },
  {
    q: 'Can you fix a controller that drifts?',
    a: 'Yes. Stick drift on a DualSense is one of the most common repairs we do, and it is far cheaper than a new controller. We replace the worn analogue module rather than just cleaning it.',
  },
  {
    q: 'Will I lose my games and saves?',
    a: 'No. HDMI port, fan, thermal and disc drive repairs do not touch the internal storage. If the storage itself has failed we will discuss it with you before doing anything.',
  },
  {
    q: 'How long does a PS5 repair take?',
    a: 'A clean and repaste is usually same day or next day. HDMI port work takes longer because it is careful soldering — normally a couple of days, and we will give you a realistic timeframe up front.',
  },
  {
    q: 'Is it worth repairing rather than replacing?',
    a: 'Nearly always. A console repair costs a fraction of a new PS5, and apart from the one failed part the machine is usually in good order.',
  },
];

export const metadata: Metadata = {
  title: 'PS5 Repair Warkworth | HDMI Port, Overheating & Disc Drive | NZ Tech Repairs',
  description:
    'PlayStation 5 repair in Warkworth — HDMI port replacement, overheating and fan noise, disc drive faults and controller stick drift. Board-level work with a 3-month warranty.',
  keywords: ['ps5 repair warkworth', 'playstation 5 hdmi port repair', 'ps5 overheating fix', 'ps5 no display', 'dualsense drift repair'],
  alternates: { canonical: '/ps5-repair-warkworth' },
  openGraph: {
    title: 'PS5 Repair in Warkworth | NZ Tech Repairs',
    description: 'HDMI port, overheating, disc drive and controller repair for the PlayStation 5.',
    url: URL,
    siteName: site.name,
    images: ['/images/lab/console-repair.webp'],
    locale: 'en_NZ',
    type: 'website',
  },
};

export default function Ps5RepairPage() {
  return (
    <IntentPage
      badge={<><GamepadIcon size={14} />PlayStation 5</>}
      title={<>PS5 repair, <em>done properly</em></>}
      lede="No picture, roaring fans, a disc drive that will not take a game, or a controller that drifts on its own. We repair the PlayStation 5 at board level in Warkworth — including the HDMI port work most shops will not touch."
      image="/images/lab/console-repair.webp"
      imageAlt="A PlayStation 5 opened up for repair at NZ Tech Repairs Warkworth"
      crumbs={[{ name: 'Home', href: '/' }, { name: 'PS5 Repair' }]}
      stats={[
        { value: 'Board-level', label: 'Micro-soldering' },
        { value: 'Saves kept', label: 'Storage untouched' },
        { value: '3-month', label: 'Warranty' },
      ]}
      primaryCta={{ label: 'Get a console quote', href: '/contact' }}
      bodyTitle={<>The four faults we see <em>again and again</em></>}
      body={[
        'The PS5 is a well-built machine, but it fails in predictable ways. Nearly everything that comes through our door is one of four things, and all four are repairable.',
        'The big one is the HDMI port. Console on, light on, nothing on the television. The port sits on the board with fine pins, and knocking a plugged-in cable — a foot, a pet, a rearranged shelf — bends them. Replacing it is micro-soldering under a microscope, which is why most shops send it away. We do it here.',
        'The rest is heat, discs and controllers. Dust chokes the heatsink and the fan gets loud before the console starts shutting itself down. Disc drives stop gripping or grinding. And DualSense sticks drift, which is a worn module rather than a console problem at all.',
      ]}
      checkTitle="PS5 repairs we do"
      checks={[
        'HDMI port replacement (no picture, no signal)',
        'Overheating, fan noise and thermal paste renewal',
        'Full internal dust clean and service',
        'Disc drive not reading or not accepting discs',
        'Power faults and consoles that will not turn on',
        'Liquid damage assessment and board cleaning',
        'DualSense controller stick drift',
        'Controller charging port and button repair',
      ]}
      note="If your console has no picture, do not keep swapping cables and TVs hoping it fixes itself — and do not force a bent HDMI plug back in, because that turns a port repair into board damage. Unplug it and bring it in."
      cardsTitle={<>Why bring a console <em>here</em></>}
      cards={[
        { icon: <CableIcon />, title: 'We do HDMI ports in-house', text: 'Most repairers send HDMI port jobs away because it is fine soldering work. We have the microscope and the gear to do it on our own bench.' },
        { icon: <ToolIcon />, title: 'We fix, not replace', text: 'A failed port or a clogged heatsink does not mean a new console. We repair the actual fault and leave the rest of the machine alone.' },
        { icon: <ClockIcon />, title: 'Honest timeframes', text: 'A clean is quick. Soldering is not. We tell you which one you are in for before you leave the device with us.' },
        { icon: <GamepadIcon />, title: 'Controllers too', text: 'Stick drift, dead triggers and broken charging ports on DualSense controllers — far cheaper than buying another one.' },
      ]}
      faqs={faqs}
      chips={{
        title: 'Other console and TV repairs',
        links: [
          { label: 'PS4 repair', href: '/ps4-repair-warkworth' },
          { label: 'HDMI port repair', href: '/hdmi-port-repair-warkworth' },
          { label: 'TV repair', href: '/services/tv-repair-in-warkworth' },
          { label: 'Data recovery', href: '/services/data-recovery-in-warkworth' },
          { label: 'All services', href: '/services' },
        ],
      }}
      ctaTitle="PS5 not working?"
      ctaText={`Bring it into 8/9 Fairwater Road, Warkworth, or call ${site.phone} and describe what it is doing — we can usually name the fault over the phone.`}
      schema={servicePageSchema({
        name: 'PS5 Repair',
        description:
          'PlayStation 5 repair in Warkworth — HDMI port replacement, overheating, disc drive faults and DualSense controller drift, with a 3-month warranty.',
        url: URL,
        crumbs: [
          { name: 'Home', item: site.url },
          { name: 'PS5 Repair', item: URL },
        ],
        faqs,
      })}
    />
  );
}

import type { Metadata } from 'next';
import IntentPage from '@/components/IntentPage';
import { CableIcon, ClockIcon, ShieldIcon, ToolIcon } from '@/components/Icons';
import { servicePageSchema } from '@/lib/schema';
import { site } from '@/lib/site';

const URL = `${site.url}/hdmi-port-repair-warkworth`;

const faqs = [
  {
    q: 'How do I know it is the HDMI port and not the TV?',
    a: 'Try a different cable and a different TV first. If the console powers on — fan spinning, light on — and still gives no signal on a known-good TV and cable, the port is the most likely culprit. We confirm it properly before quoting.',
  },
  {
    q: 'Can the port be repaired, or do I need a new console?',
    a: 'Repaired, in almost every case. The port is a component soldered to the board and it can be removed and replaced. A new console is rarely the right answer for this fault.',
  },
  {
    q: 'Why will not other shops do it?',
    a: 'It is micro-soldering. The port has many fine pins packed closely together and it needs a microscope, hot air and a steady hand. Most repairers subcontract it. We do it on our own bench.',
  },
  {
    q: 'What causes HDMI ports to fail?',
    a: 'Nearly always physical force on a plugged-in cable — someone trips on it, a pet pulls it, or the console gets moved with the cable still in. The plug levers against the port and bends or lifts the pins.',
  },
  {
    q: 'How long does it take?',
    a: 'Typically a couple of days. It is careful work and we would rather do it properly than rush it. We will give you a realistic timeframe when you drop it in.',
  },
  {
    q: 'Will I lose my data, games or saves?',
    a: 'No. HDMI port work is on the board connector only and does not touch the storage drive.',
  },
];

export const metadata: Metadata = {
  title: 'HDMI Port Repair Warkworth | PS5, PS4, Xbox & Laptops | NZ Tech Repairs',
  description:
    'HDMI port replacement in Warkworth for PS5, PS4, Xbox, laptops and TVs. Console on but no picture? That is the port — micro-soldering done in-house with a 3-month warranty.',
  keywords: ['hdmi port repair warkworth', 'ps5 hdmi port replacement', 'ps4 no display fix', 'xbox hdmi repair', 'console no picture'],
  alternates: { canonical: '/hdmi-port-repair-warkworth' },
  openGraph: {
    title: 'HDMI Port Repair in Warkworth | NZ Tech Repairs',
    description: 'Micro-soldered HDMI port replacement for consoles, laptops and TVs.',
    url: URL,
    siteName: site.name,
    images: ['/images/lab/console-hdmi-repair.webp'],
    locale: 'en_NZ',
    type: 'website',
  },
};

export default function HdmiPortRepairPage() {
  return (
    <IntentPage
      badge={<><CableIcon size={14} />Micro-soldering</>}
      title={<>HDMI port repair, <em>done in-house</em></>}
      lede="Console powers on, fan spins, light comes on — and nothing on the TV. Nine times out of ten that is a damaged HDMI port, and it is repairable. We replace them under a microscope on our own bench in Warkworth."
      image="/images/lab/console-hdmi-repair.webp"
      imageAlt="Micro-soldering an HDMI port on a console board at NZ Tech Repairs Warkworth"
      crumbs={[{ name: 'Home', href: '/' }, { name: 'HDMI Port Repair' }]}
      stats={[
        { value: 'In-house', label: 'Not sent away' },
        { value: 'Repairable', label: 'Not a new console' },
        { value: '3-month', label: 'Warranty' },
      ]}
      primaryCta={{ label: 'Get a quote', href: '/contact' }}
      bodyTitle={<>The fault that <em>looks</em> like a dead console</>}
      body={[
        'It is an alarming symptom. The console is clearly alive — fans, lights, the noise of it booting — but the television insists there is no signal. People assume the whole machine is dead and start pricing replacements.',
        'It is usually just the port. HDMI connectors have a row of very fine pins soldered onto the board, and they are only as strong as that solder. Trip over a plugged-in cable, drag the console across a shelf with it still connected, or let a pet swipe at it, and the plug levers against the port. The pins bend, lift, or crack their joints, and the signal path is broken.',
        'Replacing the port means desoldering the damaged connector, cleaning the pads and fitting a new one, all under a microscope with hot air. It is genuinely skilled work, which is why most shops send it away. We do it here.',
      ]}
      checkTitle="Devices we replace HDMI ports on"
      checks={[
        'PlayStation 5 and PS5 Digital',
        'PlayStation 4, PS4 Slim and PS4 Pro',
        'Xbox Series X, Series S and Xbox One',
        'Nintendo Switch dock HDMI faults',
        'Laptops with a dead HDMI output',
        'TVs and monitors with damaged input ports',
      ]}
      note="Important: if the plug feels loose or crooked, stop pushing it in. Forcing a bent connector is what turns a straightforward port replacement into damaged board pads — which is a far bigger and more expensive repair. Unplug it and bring it in as it is."
      stepsTitle={<>How the <em>repair</em> runs</>}
      steps={[
        { title: 'Confirm the fault', text: 'We test with known-good cables and displays so we are certain it is the port and not the board, the PSU or your TV input.' },
        { title: 'Quote before work', text: 'You get a fixed price up front. If we find board damage behind the port we tell you before going any further.' },
        { title: 'Desolder and replace', text: 'The damaged port comes off under hot air, the pads are cleaned, and a new connector goes on under the microscope.' },
        { title: 'Test on real hardware', text: 'We run the device on a display before it goes back to you, so you are not finding out at home whether it worked.' },
      ]}
      cardsTitle={<>Why this is <em>worth repairing</em></>}
      cards={[
        { icon: <ToolIcon />, title: 'One part, not one console', text: 'The rest of the machine is fine. Replacing the whole console over a single failed connector is an expensive way to solve a small problem.' },
        { icon: <CableIcon />, title: 'Proper equipment', text: 'Microscope, hot air station and the right connectors. This is not a job for a soldering iron and hope.' },
        { icon: <ShieldIcon />, title: 'Warranted work', text: 'The repair carries our 3-month warranty on the part and the workmanship, same as anything else we do.' },
        { icon: <ClockIcon />, title: 'Straight answers', text: 'If there is board damage that makes it uneconomic, we will tell you rather than quietly running up the bill.' },
      ]}
      faqs={faqs}
      chips={{
        title: 'Related repairs',
        links: [
          { label: 'PS5 repair', href: '/ps5-repair-warkworth' },
          { label: 'PS4 repair', href: '/ps4-repair-warkworth' },
          { label: 'TV repair', href: '/services/tv-repair-in-warkworth' },
          { label: 'Laptop & computer repair', href: '/services/laptop-computer-repair-in-warkworth' },
          { label: 'Charging port repair', href: '/services/charging-port-repair-in-warkworth' },
        ],
      }}
      ctaTitle="No picture from your console?"
      ctaText={`Bring it into 8/9 Fairwater Road, Warkworth, or call ${site.phone} first and we will help you rule out the cable and the TV before you drive over.`}
      schema={servicePageSchema({
        name: 'HDMI Port Repair',
        description:
          'Micro-soldered HDMI port replacement in Warkworth for PS5, PS4, Xbox, laptops and TVs, with a 3-month warranty.',
        url: URL,
        crumbs: [
          { name: 'Home', item: site.url },
          { name: 'HDMI Port Repair', item: URL },
        ],
        faqs,
      })}
    />
  );
}

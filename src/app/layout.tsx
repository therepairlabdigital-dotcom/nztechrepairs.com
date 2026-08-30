import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Noto_Sans } from 'next/font/google';
import { site } from '@/lib/site';
import './globals.css';

// The Repair Lab design system is Noto Sans throughout — headings included.
// Its semibold headline weight is what gives the system its airy feel; a
// heavier display face fights that.
const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-body',
});

const notoSansHeading = Noto_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-heading',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // Matches --bg, so mobile browser chrome blends into the dark page
  themeColor: '#0b0b0c',
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  alternates: { canonical: '/' },
  title: 'NZ Tech Repairs | Warkworth Mobile Phone & PC Repair Specialists',
  description: 'Fast, professional repair services for iPhones, iPads, MacBooks, Apple Watches, laptops, and TVs in Warkworth. 30-minute average turnaround and a 3-month repair warranty.',
  keywords: 'phone repair warkworth, ipad repair, macbook repair warkworth, computer repair, screen replacement warkworth, data recovery nz, tv repair, nz tech repairs, the grange warkworth',
  openGraph: {
    title: 'NZ Tech Repairs | Warkworth Mobile Phone & PC Repair Specialists',
    description: 'Fast, professional repair services for iPhones, iPads, MacBooks, Apple Watches, Laptops, and TVs in Warkworth. 30-minute average turnaround, 3-month warranty.',
    url: 'https://nztechrepairs.com/',
    siteName: 'NZ Tech Repairs',
    locale: 'en_NZ',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${notoSansHeading.variable} ${notoSans.variable}`}>
      <body>
        {children}
        {/* Tawk.to live chat — loaded in production only (its perf-beacon CORS
            warning is harmless but clutters the dev console) */}
        {process.env.NODE_ENV === 'production' && (
          <Script id="tawk-to" strategy="lazyOnload">
            {`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/668e19ebc3fb85929e3d7e70/1i2dhag52';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();`}
          </Script>
        )}
      </body>
    </html>
  );
}

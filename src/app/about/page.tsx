import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About NZ Tech Repairs | Warkworth Phone & Computer Repair Shop',
  description:
    'Meet NZ Tech Repairs — Warkworth’s trusted local team for fast phone, computer and TV repairs. Years of experience, quality parts and a 3-month warranty on every job.',
  keywords: ['nz tech repairs', 'about us', 'warkworth repair shop', 'local phone repair warkworth'],
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About NZ Tech Repairs | Warkworth',
    description: 'Warkworth’s trusted local repair specialists for phones, computers, TVs and more.',
    url: `${site.url}/about`,
    siteName: site.name,
    locale: 'en_NZ',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="About Us"
          title="Your Local Warkworth Repair Team"
          subtitle="Friendly, honest and fast — bringing your tech back to life since day one."
          crumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
        />
        <About />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

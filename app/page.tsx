import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import FeaturedGallery from '@/components/sections/FeaturedGallery';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ServicesPreview from '@/components/sections/ServicesPreview';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import InstagramGrid from '@/components/sections/InstagramGrid';
import CTABanner from '@/components/sections/CTABanner';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedGallery />
      <WhyChooseUs />
      <ServicesPreview />
      <TestimonialsSection />
      <InstagramGrid />
      <CTABanner />
    </>
  );
}

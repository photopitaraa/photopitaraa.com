'use client';

import { Box } from '@mui/material';
import HomePageGutterTheme from '@/components/landing/HomePageGutterTheme';
import HeroSection from '@/components/sections/HeroSection';
import TrustBadges from '@/components/landing/TrustBadges';
import HomePortfolioPreview from '@/components/landing/HomePortfolioPreview';
import ServicesPreview from '@/components/sections/ServicesPreview';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import FilmsTeaser from '@/components/landing/FilmsTeaser';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import InstagramGrid from '@/components/sections/InstagramGrid';
import CTABanner from '@/components/sections/CTABanner';
import ShowcaseMosaic from '@/components/sections/ShowcaseMosaic';
import HeroSlideshow from '@/components/sections/HeroSlideshow';

export default function HomePage() {
  return (
    <HomePageGutterTheme>
      <Box component="div">
        <HeroSection />
        <TrustBadges />
        <HeroSlideshow />
        <HomePortfolioPreview />
        <ShowcaseMosaic />
        <Box sx={{ bgcolor: 'background.default' }}>
          <ServicesPreview />
        </Box>
        <WhyChooseUs />
        <FilmsTeaser />
        <TestimonialsSection />
        <InstagramGrid />
        <CTABanner />
      </Box>
    </HomePageGutterTheme>
  );
}

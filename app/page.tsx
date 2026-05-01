import type { Metadata } from 'next';
import HomePage from '@/components/landing/HomePage';
import HeroImagePreloads from '@/components/landing/HeroImagePreloads';
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

export default function Page() {
  return (
    <>
      <HeroImagePreloads />
      <HomePage />
    </>
  );
}

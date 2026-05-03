import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Box, Container, Grid, Typography } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import GoldDivider from '@/components/ui/GoldDivider';
import AnimatedButton from '@/components/ui/AnimatedButton';
import PortfolioStoryHero from '@/components/portfolio/PortfolioStoryHero';
import CTABanner from '@/components/sections/CTABanner';
import { galleryItems } from '@/data/gallery';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return galleryItems
    .filter((g) => g.story && g.slug)
    .map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = galleryItems.find((g) => g.slug === params.slug);
  if (!item) return {};
  return {
    title: `${item.title} — ${item.location}`,
    description: item.story?.slice(0, 160) ?? '',
    openGraph: {
      images: [{ url: item.coverImage, width: item.width, height: item.height }],
    },
  };
}

export default function PortfolioStoryPage({ params }: Props) {
  const item = galleryItems.find((g) => g.slug === params.slug);
  if (!item) notFound();

  const allStories = galleryItems.filter((g) => g.story);
  const currentIndex = allStories.findIndex((g) => g.slug === params.slug);
  const prev = currentIndex > 0 ? allStories[currentIndex - 1] : null;
  const next = currentIndex < allStories.length - 1 ? allStories[currentIndex + 1] : null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: item.title,
    description: item.story,
    url: `https://www.photopitaraa.com/portfolio/${item.slug}`,
    image: item.images.map((src) => ({ '@type': 'ImageObject', url: src })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PortfolioStoryHero item={item} />

      {/* Story */}
      <Box py={{ xs: 8, md: 12 }} sx={{ bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          {item.venue && (
            <Typography
              variant="overline"
              sx={{ display: 'block', color: 'gold.main', fontSize: '0.65rem', letterSpacing: '0.2em', mb: 2 }}
            >
              {item.venue}
            </Typography>
          )}
          <Typography
            variant="h3"
            sx={{
              fontStyle: 'italic',
              color: 'text.primary',
              mb: 4,
              fontSize: { xs: '1.4rem', md: '1.9rem' },
              lineHeight: 1.5,
              maxWidth: 760,
            }}
          >
            &ldquo;{item.story}&rdquo;
          </Typography>
          <GoldDivider my={6} />

          {/* Gallery grid */}
          <Grid container spacing={2}>
            {item.images.map((src, i) => (
              <Grid item xs={12} sm={i === 0 ? 12 : 6} key={src}>
                <Box
                  sx={{
                    position: 'relative',
                    aspectRatio: i === 0 ? '16/9' : '4/3',
                    borderRadius: '4px',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={src}
                    alt={`${item.title} — image ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Booking CTA */}
          <Box sx={{ textAlign: 'center', mt: 10, mb: 2 }}>
            <Typography
              variant="h4"
              sx={{ mb: 2, fontSize: { xs: '1.5rem', md: '2rem' } }}
            >
              Inspired by This Story?
            </Typography>
            <Typography sx={{ fontFamily: 'Inter, sans-serif', color: 'text.secondary', mb: 4 }}>
              Your love story deserves this same care. Let&apos;s talk about how we can tell it.
            </Typography>
            <AnimatedButton variant="filled" href="/contact">
              Book a Consultation
            </AnimatedButton>
          </Box>
        </Container>
      </Box>

      {/* Prev / Next navigation */}
      <Box py={6} sx={{ backgroundColor: '#012233' }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, flexWrap: 'wrap' }}>
            {prev ? (
              <Link href={`/portfolio/${prev.slug}`}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, color: 'rgba(235,245,251,0.6)', '&:hover': { color: 'gold.main' }, transition: 'color 0.2s ease' }}>
                  <ArrowBack sx={{ fontSize: 18 }} />
                  <Box>
                    <Typography sx={{ fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.5 }}>Previous Story</Typography>
                    <Typography sx={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.1rem', fontWeight: 700, color: '#EBF5FB' }}>{prev.title}</Typography>
                  </Box>
                </Box>
              </Link>
            ) : <Box />}

            {next && (
              <Link href={`/portfolio/${next.slug}`}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, textAlign: 'right', color: 'rgba(235,245,251,0.6)', '&:hover': { color: 'gold.main' }, transition: 'color 0.2s ease' }}>
                  <Box>
                    <Typography sx={{ fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.5 }}>Next Story</Typography>
                    <Typography sx={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.1rem', fontWeight: 700, color: '#EBF5FB' }}>{next.title}</Typography>
                  </Box>
                  <ArrowForward sx={{ fontSize: 18 }} />
                </Box>
              </Link>
            )}
          </Box>
        </Container>
      </Box>

      <CTABanner />
    </>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Container, Grid, Typography } from '@mui/material';
import { AccessTime } from '@mui/icons-material';
import SectionHeading from '@/components/ui/SectionHeading';
import GoldDivider from '@/components/ui/GoldDivider';
import Badge from '@/components/ui/Badge';
import CTABanner from '@/components/sections/CTABanner';
import { blogPosts } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Blog — Wedding Photography Tips & Stories',
  description:
    'Photography insights, wedding tips, and behind-the-scenes stories from Photo Pitaara. Written by working photographers for couples and creatives.',
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      {/* Hero */}
      <Box
        sx={{
          pt: { xs: 16, md: 20 },
          pb: { xs: 8, md: 12 },
          backgroundColor: '#012233',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box aria-hidden="true" sx={{ position: 'absolute', inset: 0, backgroundImage: 'url(/noise.png)', backgroundSize: '200px', opacity: 0.04 }} />
        <Container maxWidth="xl">
          <SectionHeading
            eyebrow="The Journal"
            title="Stories, Insight & Craft"
            subtitle="From practical wedding photography tips to the philosophy behind our work — written by photographers who are genuinely in love with what they do."
            light
          />
        </Container>
      </Box>

      <Box py={{ xs: 8, md: 14 }} sx={{ backgroundColor: '#FAF8F5' }}>
        <Container maxWidth="xl">
          {/* Featured post */}
          <Link href={`/blog/${featured.slug}`}>
            <Box
              sx={{
                mb: 10,
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: 0,
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid rgba(255,183,3,0.15)',
                '&:hover .featured-img': { transform: 'scale(1.04)' },
                cursor: 'pointer',
              }}
              data-cursor-grow
            >
              <Box sx={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <Image
                  src={featured.coverImage}
                  alt={featured.title}
                  fill
                  className="featured-img"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                  priority
                />
              </Box>
              <Box
                sx={{
                  p: { xs: 4, md: 6 },
                  backgroundColor: '#023047',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 3 }}>
                  <Badge variant="gold" label={featured.category} />
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <AccessTime sx={{ fontSize: 14, color: 'rgba(235,245,251,0.4)' }} />
                    <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: 'rgba(235,245,251,0.4)' }}>
                      {featured.readTime}
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  variant="h3"
                  sx={{
                    color: '#EBF5FB',
                    mb: 2.5,
                    fontSize: { xs: '1.4rem', md: '1.9rem' },
                    lineHeight: 1.3,
                  }}
                >
                  {featured.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.9rem',
                    color: 'rgba(235,245,251,0.55)',
                    lineHeight: 1.8,
                    mb: 4,
                  }}
                >
                  {featured.excerpt}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.8rem', fontWeight: 500, color: 'gold.main' }}>
                    {featured.author}
                  </Typography>
                  <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: 'rgba(235,245,251,0.35)' }}>
                    {featured.date}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Link>

          <GoldDivider my={6} />

          {/* Rest of posts */}
          <Grid container spacing={4}>
            {rest.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <Link href={`/blog/${post.slug}`}>
                  <Box
                    data-cursor-grow
                    sx={{
                      height: '100%',
                      backgroundColor: '#fff',
                      border: '1px solid rgba(255,183,3,0.15)',
                      borderRadius: '6px',
                      overflow: 'hidden',
                      transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 12px 40px rgba(2,48,71,0.1)',
                        transform: 'translateY(-4px)',
                      },
                      '&:hover .blog-img': { transform: 'scale(1.05)' },
                      cursor: 'pointer',
                    }}
                  >
                    <Box sx={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="blog-img"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{ objectFit: 'cover', transition: 'transform 0.55s ease' }}
                      />
                    </Box>
                    <Box sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
                        <Badge variant="gold" label={post.category} />
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <AccessTime sx={{ fontSize: 12, color: 'text.secondary' }} />
                          <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', color: 'text.secondary' }}>
                            {post.readTime}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          mb: 1.5,
                          fontSize: '1rem',
                          lineHeight: 1.4,
                          color: 'text.primary',
                        }}
                      >
                        {post.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '0.84rem',
                          color: 'text.secondary',
                          lineHeight: 1.7,
                          mb: 2.5,
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {post.excerpt}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, pt: 2, borderTop: '1px solid rgba(255,183,3,0.1)' }}>
                        <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: '0.78rem', color: 'text.primary' }}>
                          {post.author}
                        </Typography>
                        <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', color: 'text.secondary' }}>
                          {post.date}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <CTABanner />
    </>
  );
}

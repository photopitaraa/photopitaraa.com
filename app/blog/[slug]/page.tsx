import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Box, Container, Grid, Typography } from '@mui/material';
import { ArrowBack, AccessTime } from '@mui/icons-material';
import GoldDivider from '@/components/ui/GoldDivider';
import Badge from '@/components/ui/Badge';
import CTABanner from '@/components/sections/CTABanner';
import { blogPosts, type BlogBlock } from '@/data/blog';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
      type: 'article',
    },
  };
}

function BlockRenderer({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <Typography
          sx={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.05rem',
            lineHeight: 1.9,
            color: 'text.secondary',
            mb: 3,
          }}
        >
          {block.text}
        </Typography>
      );
    case 'heading':
      return (
        <Typography
          variant="h4"
          sx={{ mb: 2, mt: 5, fontSize: { xs: '1.3rem', md: '1.6rem' } }}
        >
          {block.text}
        </Typography>
      );
    case 'image':
      return (
        <Box sx={{ my: 5 }}>
          <Box sx={{ position: 'relative', aspectRatio: '16/9', borderRadius: '6px', overflow: 'hidden' }}>
            <Image src={block.src} alt={block.alt} fill sizes="(max-width: 768px) 100vw, 70vw" style={{ objectFit: 'cover' }} />
          </Box>
          {block.caption && (
            <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: 'text.secondary', textAlign: 'center', mt: 1.5, fontStyle: 'italic' }}>
              {block.caption}
            </Typography>
          )}
        </Box>
      );
    case 'quote':
      return (
        <Box
          sx={{
            my: 5,
            pl: 4,
            borderLeft: '3px solid',
            borderColor: 'gold.main',
            py: 1,
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontStyle: 'italic',
              fontSize: '1.3rem',
              lineHeight: 1.6,
              color: 'text.primary',
              mb: block.attribution ? 1 : 0,
            }}
          >
            &ldquo;{block.text}&rdquo;
          </Typography>
          {block.attribution && (
            <Typography sx={{ fontFamily: 'Cinzel, serif', fontSize: '0.68rem', letterSpacing: '0.1em', color: 'gold.dark', textTransform: 'uppercase' }}>
              — {block.attribution}
            </Typography>
          )}
        </Box>
      );
    default:
      return null;
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    author: { '@type': 'Person', name: post.author },
    datePublished: post.date,
    publisher: {
      '@type': 'Organization',
      name: 'Photo Pitaara',
      url: 'https://www.photopitaara.com',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '50svh', md: '65svh' },
          overflow: 'hidden',
        }}
      >
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(2,30,50,0.85) 0%, rgba(2,30,50,0.2) 70%, transparent 100%)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: { xs: 32, md: 56 },
            left: { xs: 24, md: 56 },
            right: { xs: 24, md: 56 },
            maxWidth: 720,
          }}
        >
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
            <Badge variant="gold" label={post.category} />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <AccessTime sx={{ fontSize: 14, color: 'rgba(235,245,251,0.5)' }} />
              <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: 'rgba(235,245,251,0.5)' }}>
                {post.readTime}
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '1.8rem', md: '3rem' },
              color: '#EBF5FB',
              lineHeight: 1.2,
            }}
          >
            {post.title}
          </Typography>
        </Box>
      </Box>

      {/* Article content */}
      <Box py={{ xs: 8, md: 12 }} sx={{ backgroundColor: '#EBF5FB' }}>
        <Container maxWidth="lg">
          {/* Back link */}
          <Link href="/blog">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                mb: 6,
                color: 'text.secondary',
                '&:hover': { color: 'gold.main' },
                transition: 'color 0.2s ease',
              }}
            >
              <ArrowBack sx={{ fontSize: 16 }} />
              <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.82rem', fontWeight: 500 }}>
                Back to Journal
              </Typography>
            </Box>
          </Link>

          {/* Author + date */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 5 }}>
            <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '0.9rem' }}>
              {post.author}
            </Typography>
            <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: 'text.secondary' }}>
              {post.date}
            </Typography>
          </Box>

          {/* Excerpt lead */}
          <Typography
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontStyle: 'italic',
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              lineHeight: 1.6,
              color: 'text.primary',
              mb: 5,
              borderLeft: '3px solid',
              borderColor: 'gold.main',
              pl: 3,
            }}
          >
            {post.excerpt}
          </Typography>

          {/* Content blocks */}
          {post.content.map((block, i) => (
            <BlockRenderer key={i} block={block} />
          ))}

          <GoldDivider my={8} />

          {/* Tags */}
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 8 }}>
            {post.tags.map((tag) => (
              <Badge key={tag} variant="gold" label={tag} />
            ))}
          </Box>

          {/* Related posts */}
          {related.length > 0 && (
            <>
              <Typography variant="h4" sx={{ mb: 4, fontSize: { xs: '1.4rem', md: '1.8rem' } }}>
                More from the Journal
              </Typography>
              <Grid container spacing={3}>
                {related.map((rel) => (
                  <Grid item xs={12} sm={4} key={rel.id}>
                    <Link href={`/blog/${rel.slug}`}>
                      <Box
                        sx={{
                          '&:hover .rel-img': { transform: 'scale(1.04)' },
                        }}
                      >
                        <Box sx={{ position: 'relative', aspectRatio: '16/9', borderRadius: '4px', overflow: 'hidden', mb: 2 }}>
                          <Image
                            src={rel.coverImage}
                            alt={rel.title}
                            fill
                            className="rel-img"
                            sizes="33vw"
                            style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                          />
                        </Box>
                        <Badge variant="gold" label={rel.category} sx={{ mb: 1 }} />
                        <Typography sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 600, fontSize: '0.95rem', lineHeight: 1.4, color: 'text.primary' }}>
                          {rel.title}
                        </Typography>
                      </Box>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </>
          )}
        </Container>
      </Box>

      <CTABanner />
    </>
  );
}

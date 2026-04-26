import type { Metadata } from 'next';
import Image from 'next/image';
import { Box, Container, Grid, Typography } from '@mui/material';
import SectionHeading from '@/components/ui/SectionHeading';
import GoldDivider from '@/components/ui/GoldDivider';
import AnimatedButton from '@/components/ui/AnimatedButton';
import CTABanner from '@/components/sections/CTABanner';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Meet the team behind Photo Pitaara — Mumbai\'s award-winning wedding photography studio. 8 years, 500+ weddings, and a relentless passion for visual storytelling.',
};

const milestones = [
  { year: '2016', title: 'Studio Founded', description: 'Photo Pitaara opens its doors in Bandra, Mumbai — a one-person operation with one camera and a deep belief that wedding photography could be something more.' },
  { year: '2018', title: 'First Award', description: 'Recognised at the India Wedding Industry Awards as Best Wedding Photographer of the Year. The first of twelve.' },
  { year: '2020', title: '100th Wedding', description: 'We photograph our 100th wedding — a quiet destination event in Coorg — and release our first cinematic film to 200,000 YouTube views.' },
  { year: '2022', title: 'Studio Expansion', description: 'The team grows to six: two lead photographers, two cinematographers, and two editors. Every couple still gets personal, dedicated attention.' },
  { year: '2024', title: '500+ Weddings', description: 'Half a thousand love stories captured. We celebrate quietly, because the work is the celebration.' },
];

const team = [
  {
    name: 'Aryan Sharma',
    role: 'Founder & Lead Photographer',
    bio: 'Aryan started Photo Pitaara after spending three years shooting street photography in Mumbai. He believes the best wedding images are stolen, not staged.',
    image: '/images/team-1.jpg',
  },
  {
    name: 'Riya Kapoor',
    role: 'Lead Cinematographer',
    bio: 'Riya spent five years in documentary filmmaking before discovering that weddings were the greatest human stories she could tell. Her films make people cry in the best way.',
    image: '/images/team-2.jpg',
  },
  {
    name: 'Dev Mehta',
    role: 'Senior Photographer',
    bio: "Dev has an instinct for the unguarded moment — the laughter between the formal shots, the quiet glance across a room. He's captured 200+ weddings and counting.",
    image: '/images/team-3.jpg',
  },
];

const pressLogos = ['Vogue Weddings', 'The Knot', 'WeddingWire', 'Times of India', 'Brides Today'];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <Box
        sx={{
          pt: { xs: 16, md: 20 },
          pb: { xs: 10, md: 14 },
          backgroundColor: '#012233',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          aria-hidden="true"
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/noise.png)',
            backgroundSize: '200px',
            opacity: 0.04,
            pointerEvents: 'none',
          }}
        />
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 700 }}>
            <Typography
              variant="overline"
              sx={{ color: 'gold.main', display: 'block', mb: 2, fontSize: '0.68rem', letterSpacing: '0.22em' }}
            >
              Our Story
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.6rem', md: '4rem' },
                color: '#EBF5FB',
                mb: 3,
                lineHeight: 1.1,
                '& em': { fontStyle: 'italic', color: 'gold.light' },
              }}
            >
              We Photograph What <em>Matters Most</em>
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.05rem',
                color: 'rgba(235,245,251,0.65)',
                lineHeight: 1.85,
                maxWidth: 560,
              }}
            >
              Photo Pitaara was built on a single belief: that every wedding holds moments of such private, particular beauty that they deserve a photographer who is genuinely paying attention.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Founder story — split layout */}
      <Box py={{ xs: 10, md: 14 }} sx={{ backgroundColor: '#EBF5FB' }}>
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  aspectRatio: '4/5',
                  boxShadow: '24px 24px 0 rgba(255,183,3,0.15)',
                }}
              >
                <Image
                  src="/images/about-founder.jpg"
                  alt="Aryan Sharma — Founder of Photo Pitaara"
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography
                variant="overline"
                sx={{ color: 'gold.main', display: 'block', mb: 2, fontSize: '0.68rem', letterSpacing: '0.22em' }}
              >
                The Founder
              </Typography>
              <Typography variant="h2" sx={{ mb: 3, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
                Hi, I&apos;m Aryan.
              </Typography>
              <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.85, color: 'text.secondary', mb: 3 }}>
                I picked up a camera at nineteen because I was afraid of forgetting things. The feeling of a particular afternoon, the way my grandmother laughed, the light in the kitchen at six o&apos;clock. I didn&apos;t want to lose any of it.
              </Typography>
              <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.85, color: 'text.secondary', mb: 3 }}>
                Fifteen years later, I lead a team of six people who share the same quiet obsession. We show up to weddings not as vendors, but as witnesses. We pay attention the way family pays attention — with love, with stakes, with the knowledge that some moments only happen once.
              </Typography>
              <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.85, color: 'text.secondary', mb: 5 }}>
                Photo Pitaara is the studio I needed when I got married and couldn&apos;t find. Everything we do is built around the question: if these were my photographs, would I be proud?
              </Typography>
              <AnimatedButton variant="outlined" href="/contact">
                Work with Aryan
              </AnimatedButton>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats */}
      <Box py={{ xs: 8, md: 10 }} sx={{ backgroundColor: '#023047' }}>
        <Container maxWidth="xl">
          <Grid container spacing={4} justifyContent="center">
            {siteConfig.stats.map((stat) => (
              <Grid item xs={6} md={3} key={stat.label} sx={{ textAlign: 'center' }}>
                <Typography
                  variant="h2"
                  sx={{ fontSize: { xs: '2.4rem', md: '3.2rem' }, color: 'gold.main', lineHeight: 1 }}
                >
                  {stat.value}{stat.suffix}
                </Typography>
                <Typography
                  variant="overline"
                  sx={{ color: 'rgba(235,245,251,0.5)', fontSize: '0.65rem', letterSpacing: '0.15em' }}
                >
                  {stat.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Timeline */}
      <Box py={{ xs: 10, md: 14 }} sx={{ backgroundColor: '#EBF5FB' }}>
        <Container maxWidth="lg">
          <SectionHeading
            eyebrow="Our Journey"
            title="Eight Years in the Making"
            subtitle="Every milestone was earned — one wedding, one story, one trusted couple at a time."
          />
          <GoldDivider my={6} />

          <Box sx={{ position: 'relative' }}>
            {/* Vertical line */}
            <Box
              aria-hidden="true"
              sx={{
                position: 'absolute',
                left: { xs: 20, md: '50%' },
                top: 0,
                bottom: 0,
                width: '1px',
                backgroundColor: 'rgba(255,183,3,0.25)',
              }}
            />

            {milestones.map((m, i) => (
              <Box
                key={m.year}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'row', md: i % 2 === 0 ? 'row' : 'row-reverse' },
                  gap: { xs: 3, md: 6 },
                  mb: 6,
                  position: 'relative',
                }}
              >
                {/* Dot */}
                <Box
                  aria-hidden="true"
                  sx={{
                    position: 'absolute',
                    left: { xs: 12, md: 'calc(50% - 8px)' },
                    top: 8,
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    backgroundColor: 'gold.main',
                    border: '2px solid #EBF5FB',
                    boxShadow: '0 0 0 4px rgba(255,183,3,0.2)',
                    zIndex: 1,
                  }}
                />

                <Box sx={{ flex: 1, pl: { xs: 6, md: 0 }, textAlign: { xs: 'left', md: i % 2 === 0 ? 'right' : 'left' } }}>
                  <Typography
                    sx={{
                      fontFamily: 'Cinzel, serif',
                      fontSize: '0.75rem',
                      letterSpacing: '0.15em',
                      color: 'gold.main',
                      mb: 0.5,
                    }}
                  >
                    {m.year}
                  </Typography>
                  <Typography variant="h5" sx={{ mb: 1, fontSize: '1.1rem' }}>{m.title}</Typography>
                  <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: 'text.secondary', lineHeight: 1.75 }}>
                    {m.description}
                  </Typography>
                </Box>
                <Box sx={{ flex: { xs: 0, md: 1 }, display: { xs: 'none', md: 'block' } }} />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Team */}
      <Box py={{ xs: 10, md: 14 }} sx={{ backgroundColor: '#012233' }}>
        <Container maxWidth="xl">
          <SectionHeading
            eyebrow="The Team"
            title="The People Behind the Lens"
            subtitle="Small by design. Every member of the Photo Pitaara team has been chosen for obsession, not just skill."
            light
          />
          <GoldDivider my={6} />

          <Grid container spacing={4} justifyContent="center">
            {team.map((member) => (
              <Grid item xs={12} sm={6} md={4} key={member.name}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      position: 'relative',
                      width: 180,
                      height: 180,
                      borderRadius: '50%',
                      overflow: 'hidden',
                      mx: 'auto',
                      mb: 3,
                      border: '3px solid rgba(255,183,3,0.4)',
                    }}
                  >
                    <Image src={member.image} alt={member.name} fill style={{ objectFit: 'cover' }} />
                  </Box>
                  <Typography variant="h5" sx={{ color: '#EBF5FB', mb: 0.5, fontSize: '1.1rem' }}>
                    {member.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Cinzel, serif',
                      fontSize: '0.65rem',
                      letterSpacing: '0.15em',
                      color: 'gold.main',
                      textTransform: 'uppercase',
                      mb: 2,
                    }}
                  >
                    {member.role}
                  </Typography>
                  <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>
                    {member.bio}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Press strip */}
      <Box py={{ xs: 6, md: 8 }} sx={{ backgroundColor: '#EBF5FB', borderTop: '1px solid rgba(255,183,3,0.15)' }}>
        <Container maxWidth="xl">
          <Typography
            variant="overline"
            sx={{ display: 'block', textAlign: 'center', color: 'text.secondary', mb: 4, fontSize: '0.65rem', letterSpacing: '0.2em' }}
          >
            As Featured In
          </Typography>
          <Box sx={{ display: 'flex', gap: { xs: 4, md: 8 }, justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
            {pressLogos.map((logo) => (
              <Typography
                key={logo}
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 700,
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                  color: 'rgba(2,48,71,0.25)',
                  letterSpacing: '-0.01em',
                }}
              >
                {logo}
              </Typography>
            ))}
          </Box>
        </Container>
      </Box>

      <CTABanner />
    </>
  );
}

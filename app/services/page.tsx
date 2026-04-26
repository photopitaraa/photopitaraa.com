import type { Metadata } from 'next';
import Image from 'next/image';
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { CheckCircle, Favorite, Videocam, CameraAlt, Cake, ChildCare, PregnantWoman, BusinessCenter, MenuBook } from '@mui/icons-material';
import type { SvgIconComponent } from '@mui/icons-material';
import SectionHeading from '@/components/ui/SectionHeading';
import GoldDivider from '@/components/ui/GoldDivider';
import AnimatedButton from '@/components/ui/AnimatedButton';
import CTABanner from '@/components/sections/CTABanner';
import { services, Service } from '@/data/services';

const iconMap: Record<string, SvgIconComponent> = {
  Favorite,
  Videocam,
  CameraAlt,
  Cake,
  ChildCare,
  PregnantWoman,
  BusinessCenter,
  MenuBook,
};

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Wedding photography, cinematic films, pre-wedding shoots, maternity, birthdays, and more — Photo Pitaara covers every chapter of your story.',
};

function ServiceCard({ service, reverse }: { service: Service; reverse?: boolean }) {
  const IconComponent = (iconMap[service.icon] ?? CameraAlt) as React.ElementType;

  return (
    <Box
      id={service.slug}
      sx={{
        py: { xs: 8, md: 12 },
        borderBottom: '1px solid rgba(255,183,3,0.12)',
        '&:last-of-type': { borderBottom: 'none' },
      }}
    >
      <Grid
        container
        spacing={{ xs: 6, md: 10 }}
        alignItems="center"
        direction={{ xs: 'column', md: reverse ? 'row-reverse' : 'row' }}
      >
        {/* Image */}
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              position: 'relative',
              aspectRatio: '4/3',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: reverse
                ? '-20px 20px 0 rgba(255,183,3,0.12)'
                : '20px 20px 0 rgba(255,183,3,0.12)',
            }}
          >
            <Image
              src={service.coverImage}
              alt={service.title}
              fill
              sizes="(max-width: 768px) 100vw, 42vw"
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Grid>

        {/* Content */}
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              width: 52,
              height: 52,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255,183,3,0.1)',
              borderRadius: '50%',
              mb: 3,
            }}
          >
            <IconComponent sx={{ color: 'gold.main', fontSize: 24 }} />
          </Box>

          <Typography
            variant="overline"
            sx={{ display: 'block', color: 'gold.main', fontSize: '0.65rem', letterSpacing: '0.2em', mb: 1.5 }}
          >
            {service.category}
          </Typography>
          <Typography variant="h3" sx={{ mb: 2.5, fontSize: { xs: '1.6rem', md: '2.1rem' } }}>
            {service.title}
          </Typography>
          <Typography
            sx={{ fontFamily: 'Inter, sans-serif', fontSize: '0.97rem', color: 'text.secondary', lineHeight: 1.85, mb: 4 }}
          >
            {service.description}
          </Typography>

          <List dense disablePadding sx={{ mb: 4 }}>
            {service.features.map((f) => (
              <ListItem key={f} disableGutters disablePadding sx={{ mb: 1 }}>
                <ListItemIcon sx={{ minWidth: 28 }}>
                  <CheckCircle sx={{ color: 'gold.main', fontSize: 16 }} />
                </ListItemIcon>
                <ListItemText
                  primary={f}
                  primaryTypographyProps={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.88rem',
                    color: 'text.primary',
                  }}
                />
              </ListItem>
            ))}
          </List>

          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
            <AnimatedButton variant="filled" href="/contact">
              Enquire Now
            </AnimatedButton>
            {service.startingPrice && (
              <Typography
                sx={{
                  fontFamily: 'Cinzel, serif',
                  fontSize: '0.72rem',
                  letterSpacing: '0.1em',
                  color: 'text.secondary',
                  textTransform: 'uppercase',
                }}
              >
                From {service.startingPrice}
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default function ServicesPage() {
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
            eyebrow="What We Offer"
            title="Photography for Every Moment That Matters"
            subtitle="From wedding dawns to birthday evenings — every service we offer is built on the same foundation: genuine attention, artistic intention, and care for the people in front of our lens."
            light
          />
        </Container>
      </Box>

      {/* Services list */}
      <Box sx={{ backgroundColor: '#EBF5FB' }}>
        <Container maxWidth="xl">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} reverse={i % 2 !== 0} />
          ))}
        </Container>
      </Box>

      {/* Quick nav cards */}
      <Box py={{ xs: 8, md: 10 }} sx={{ backgroundColor: '#EBF5FB' }}>
        <Container maxWidth="xl">
          <SectionHeading
            eyebrow="Quick Enquiry"
            title="Not Sure What You Need?"
            subtitle="Tell us about your event and we'll suggest the right package — no obligation, just honest advice."
          />
          <GoldDivider my={6} />
          <Box sx={{ textAlign: 'center' }}>
            <AnimatedButton variant="filled" href="/contact">
              Start a Conversation
            </AnimatedButton>
          </Box>
        </Container>
      </Box>

      <CTABanner />
    </>
  );
}

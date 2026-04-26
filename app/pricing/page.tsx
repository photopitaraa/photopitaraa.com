import type { Metadata } from 'next';
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { CheckCircle, RadioButtonUnchecked, Star } from '@mui/icons-material';
import SectionHeading from '@/components/ui/SectionHeading';
import GoldDivider from '@/components/ui/GoldDivider';
import AnimatedButton from '@/components/ui/AnimatedButton';
import CTABanner from '@/components/sections/CTABanner';
import { packages } from '@/data/packages';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Transparent, flexible wedding photography packages — Essential, Signature, and Royal. Every package is fully customisable. Starting from ₹75,000.',
};

const colorMap = {
  silver: {
    headerBg: '#F5F5F5',
    border: 'rgba(2,48,71,0.12)',
    badge: 'rgba(2,48,71,0.06)',
    badgeText: 'text.secondary',
  },
  gold: {
    headerBg: '#023047',
    border: '#FFB703',
    badge: 'rgba(255,183,3,0.1)',
    badgeText: 'gold.main',
  },
  platinum: {
    headerBg: '#0E0E0E',
    border: 'rgba(200,200,200,0.3)',
    badge: 'rgba(200,200,200,0.08)',
    badgeText: 'rgba(200,200,200,0.8)',
  },
};

export default function PricingPage() {
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
            eyebrow="Investment"
            title="Honest Pricing. Complete Transparency."
            subtitle="We believe great wedding photography shouldn't feel like a negotiation. Every package below is a starting point — we customise every quote to your specific event."
            light
          />
        </Container>
      </Box>

      {/* Package cards */}
      <Box py={{ xs: 10, md: 14 }} sx={{ backgroundColor: '#EBF5FB' }}>
        <Container maxWidth="xl">
          <Grid container spacing={3} alignItems="stretch">
            {packages.map((pkg) => {
              const colors = colorMap[pkg.color];
              const isGold = pkg.color === 'gold';

              return (
                <Grid item xs={12} md={4} key={pkg.id}>
                  <Box
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      border: `2px solid ${isGold ? '#FFB703' : colors.border}`,
                      borderRadius: '8px',
                      overflow: 'hidden',
                      boxShadow: isGold ? '0 24px 64px rgba(255,183,3,0.2)' : '0 4px 24px rgba(0,0,0,0.06)',
                      position: 'relative',
                      transform: isGold ? { md: 'scale(1.04)' } : 'none',
                      zIndex: isGold ? 2 : 1,
                    }}
                  >
                    {/* Popular badge */}
                    {pkg.isPopular && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5,
                          px: 1.5,
                          py: 0.5,
                          backgroundColor: 'gold.main',
                          borderRadius: '2px',
                        }}
                      >
                        <Star sx={{ fontSize: 12, color: '#fff' }} />
                        <Typography sx={{ fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.1em', color: '#fff', textTransform: 'uppercase' }}>
                          Most Popular
                        </Typography>
                      </Box>
                    )}

                    {/* Header */}
                    <Box
                      sx={{
                        p: 4,
                        backgroundColor: isGold ? '#023047' : '#fff',
                        borderBottom: `1px solid ${isGold ? 'rgba(255,183,3,0.2)' : 'rgba(2,48,71,0.08)'}`,
                      }}
                    >
                      <Typography
                        variant="overline"
                        sx={{
                          display: 'block',
                          color: isGold ? 'gold.main' : 'text.secondary',
                          fontSize: '0.65rem',
                          letterSpacing: '0.2em',
                          mb: 1,
                        }}
                      >
                        {pkg.idealFor}
                      </Typography>
                      <Typography
                        variant="h3"
                        sx={{
                          color: isGold ? '#EBF5FB' : 'text.primary',
                          mb: 1,
                          fontSize: '1.8rem',
                        }}
                      >
                        {pkg.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: '"Cormorant Garamond", serif',
                          fontStyle: 'italic',
                          fontSize: '1rem',
                          color: isGold ? 'rgba(235,245,251,0.6)' : 'text.secondary',
                          mb: 3,
                        }}
                      >
                        {pkg.tagline}
                      </Typography>
                      <Typography
                        variant="h2"
                        sx={{
                          color: isGold ? 'gold.main' : 'text.primary',
                          fontSize: '2.2rem',
                          lineHeight: 1,
                          mb: 0.5,
                        }}
                      >
                        {pkg.startingPrice}
                      </Typography>
                      <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: isGold ? 'rgba(235,245,251,0.4)' : 'text.secondary' }}>
                        {pkg.priceNote}
                      </Typography>
                    </Box>

                    {/* Features */}
                    <Box sx={{ p: 4, flex: 1, backgroundColor: isGold ? '#023047' : '#fff' }}>
                      <List dense disablePadding>
                        {pkg.features.map((feature) => (
                          <ListItem key={feature.text} disableGutters sx={{ mb: 1.5, alignItems: 'flex-start' }}>
                            <ListItemIcon sx={{ minWidth: 26, mt: '2px' }}>
                              {feature.included ? (
                                <CheckCircle sx={{ fontSize: 16, color: 'gold.main' }} />
                              ) : (
                                <RadioButtonUnchecked sx={{ fontSize: 16, color: 'rgba(2,48,71,0.2)' }} />
                              )}
                            </ListItemIcon>
                            <ListItemText
                              primary={feature.text}
                              primaryTypographyProps={{
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '0.85rem',
                                color: feature.included
                                  ? isGold ? 'rgba(235,245,251,0.85)' : 'text.primary'
                                  : 'rgba(2,48,71,0.3)',
                                lineHeight: 1.6,
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Box>

                    {/* Footer CTA */}
                    <Box sx={{ p: 4, backgroundColor: isGold ? '#023047' : '#fff', borderTop: `1px solid ${isGold ? 'rgba(255,183,3,0.15)' : 'rgba(2,48,71,0.08)'}` }}>
                      <Box sx={{ mb: 1.5, textAlign: 'center' }}>
                        <Typography sx={{ fontFamily: 'Cinzel, serif', fontSize: '0.65rem', letterSpacing: '0.12em', color: isGold ? 'rgba(235,245,251,0.4)' : 'text.secondary', textTransform: 'uppercase' }}>
                          Delivery in {pkg.deliveryTimeline}
                        </Typography>
                      </Box>
                      <AnimatedButton
                        variant={isGold ? 'filled' : 'outlined'}
                        href="/contact"
                        sx={{ width: '100%', textAlign: 'center' }}
                      >
                        Get Custom Quote
                      </AnimatedButton>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>

          <GoldDivider my={10} />

          {/* FAQs */}
          <Box sx={{ maxWidth: 720, mx: 'auto', textAlign: 'center' }}>
            <Typography variant="overline" sx={{ display: 'block', color: 'gold.main', fontSize: '0.65rem', letterSpacing: '0.2em', mb: 2 }}>
              Good to Know
            </Typography>
            <Typography variant="h4" sx={{ mb: 4, fontSize: { xs: '1.5rem', md: '2rem' } }}>
              All Packages Are Fully Customisable
            </Typography>
            <Typography sx={{ fontFamily: 'Inter, sans-serif', color: 'text.secondary', lineHeight: 1.85, mb: 4 }}>
              Every wedding is different — different venues, different days, different numbers of events. The prices above are starting points. We&apos;ll put together a specific quote for your event with no pressure and no surprises. Travel, accommodation for destination weddings, and additional coverage hours are quoted separately.
            </Typography>
            <AnimatedButton variant="filled" href="/contact">
              Start Your Custom Quote
            </AnimatedButton>
          </Box>
        </Container>
      </Box>

      <CTABanner />
    </>
  );
}

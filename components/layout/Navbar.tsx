'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  Stack,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import { Close, Menu } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { navbarVariants, drawerLinkVariants, easeOut } from '@/lib/motion';
import { siteConfig } from '@/data/siteConfig';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const MotionAppBar = motion.create(AppBar);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrollTrigger({ threshold: 80, disableHysteresis: true });

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <MotionAppBar
        position="fixed"
        variants={navbarVariants}
        animate={scrolled ? 'solid' : 'transparent'}
        initial="transparent"
        transition={{ duration: 0.4, ease: easeOut }}
        sx={{ zIndex: 1100 }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              py: { xs: 1.5, md: scrolled ? 1 : 2 },
              transition: 'padding 0.4s ease',
            }}
          >
            {/* Logo */}
            <Link href="/" aria-label={`${siteConfig.name} — Home`}>
              <Typography
                variant="h5"
                component="span"
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                  color: scrolled ? 'charcoal' : '#fff',
                  transition: 'color 0.4s ease',
                  fontSize: { xs: '1.4rem', md: '1.7rem' },
                }}
              >
                Photo{' '}
                <Box component="span" sx={{ color: 'gold.main' }}>
                  Pitaara
                </Box>
              </Typography>
            </Link>

            {/* Desktop nav */}
            <Stack
              direction="row"
              spacing={0.5}
              sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center' }}
            >
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Typography
                    component="span"
                    sx={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '0.82rem',
                      fontWeight: 500,
                      letterSpacing: '0.04em',
                      px: 1.5,
                      py: 0.75,
                      color: scrolled ? 'text.primary' : 'rgba(255,255,255,0.9)',
                      transition: 'color 0.3s ease',
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 0,
                        height: '1.5px',
                        backgroundColor: 'gold.main',
                        transition: 'width 0.3s ease',
                      },
                      '&:hover': {
                        color: 'gold.main',
                        '&::after': { width: '60%' },
                      },
                    }}
                  >
                    {link.label}
                  </Typography>
                </Link>
              ))}

              {/* Book Now CTA */}
              <Link href="/contact">
                <Box
                  component="span"
                  sx={{
                    ml: 2,
                    display: 'inline-block',
                    px: 3,
                    py: 1,
                    border: '1.5px solid',
                    borderColor: 'gold.main',
                    borderRadius: '2px',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '0.78rem',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    color: 'gold.main',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'gold.main',
                      color: '#023047',
                    },
                  }}
                >
                  Book Now
                </Box>
              </Link>
            </Stack>

            {/* Mobile hamburger */}
            <IconButton
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              sx={{
                display: { xs: 'flex', lg: 'none' },
                color: scrolled ? 'charcoal' : '#fff',
              }}
            >
              <Menu />
            </IconButton>
          </Box>
        </Container>
      </MotionAppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: '100vw',
            maxWidth: 420,
            backgroundColor: '#023047',
            color: '#EBF5FB',
            p: 4,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
          <IconButton
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation menu"
            sx={{ color: '#EBF5FB' }}
          >
            <Close />
          </IconButton>
        </Box>

        <Typography
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '2rem',
            fontWeight: 700,
            mb: 6,
            color: 'gold.main',
          }}
        >
          Photo Pitaara
        </Typography>

        <AnimatePresence>
          {mobileOpen && (
            <Stack spacing={3}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  custom={i}
                  variants={drawerLinkVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <Link href={link.href} onClick={() => setMobileOpen(false)}>
                    <Typography
                      sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '1.4rem',
                        fontWeight: 500,
                        color: '#EBF5FB',
                        letterSpacing: '0.02em',
                        '&:hover': { color: 'gold.main' },
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {link.label}
                    </Typography>
                  </Link>
                </motion.div>
              ))}

              <motion.div
                custom={navLinks.length}
                variants={drawerLinkVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  <Box
                    sx={{
                      display: 'inline-block',
                      mt: 2,
                      px: 4,
                      py: 1.5,
                      border: '1.5px solid',
                      borderColor: 'gold.main',
                      borderRadius: '2px',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      color: 'gold.main',
                      '&:hover': {
                        backgroundColor: 'gold.main',
                        color: '#023047',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Book Your Date
                  </Box>
                </Link>
              </motion.div>
            </Stack>
          )}
        </AnimatePresence>

        <Box sx={{ position: 'absolute', bottom: 40, left: 32 }}>
          <Typography
            sx={{
              fontFamily: 'Cinzel, serif',
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
            }}
          >
            {siteConfig.phone}
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}

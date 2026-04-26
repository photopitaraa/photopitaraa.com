'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Container, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { galleryItems } from '@/data/gallery';

// ── Slide data ────────────────────────────────────────────────────────────────
const slides = galleryItems
  .filter((g) => g.category === 'Weddings' || g.category === 'Pre-Wedding')
  .slice(0, 6)
  .map((g) => ({ id: g.id, src: g.coverImage, title: g.title, location: g.location }));

const HOLD_MS   = 7000;
const ANIM_S    = 1.2;
const EASE: [number, number, number, number] = [0.4, 0, 0.2, 1];

// ── Framer variants ───────────────────────────────────────────────────────────
const clipVariants = {
  enter: { clipPath: 'inset(100% 0 0 0)' },
  center: {
    clipPath: 'inset(0% 0 0 0)',
    transition: { duration: ANIM_S, ease: EASE },
  },
  exit: {
    clipPath: 'inset(0% 0 0 0)',
    transition: { duration: 0 },
  },
};

const imageVariants = {
  enter: { scale: 1.14 },
  center: {
    scale: 1,
    transition: { duration: ANIM_S * 1.6, ease: EASE },
  },
  exit: { scale: 1, transition: { duration: 0 } },
};

const captionVariants = {
  enter:  { opacity: 0, y: 72 },
  center: { opacity: 1, y: 0,  transition: { duration: 0.9, ease: EASE, delay: 0.5 } },
  exit:   { opacity: 0, y: -40, transition: { duration: 0.4, ease: EASE } },
};

const subVariants = {
  enter:  { opacity: 0, y: 40 },
  center: { opacity: 1, y: 0,  transition: { duration: 0.7, ease: EASE, delay: 0.7 } },
  exit:   { opacity: 0, transition: { duration: 0.3 } },
};

// ── Arrow SVG ─────────────────────────────────────────────────────────────────
function Arrow({ dir }: { dir: 'prev' | 'next' }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      {dir === 'next' ? (
        <path d="M12.6 9L4 17.3L4.7 18l8.5-8.3L14 9l-.7-.7L4.7 0 4 .7 12.6 9z" fill="currentColor" />
      ) : (
        <path d="M14 .7L13.3 0 4.7 8.3 4 9l.7.7 8.5 8.3.7-.7L5.4 9 14 .7z" fill="currentColor" />
      )}
    </svg>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function HeroSlideshow() {
  const [current, setCurrent]   = useState(0);
  const [progress, setProgress] = useState(0);
  const [locked, setLocked]     = useState(false);
  const [paused, setPaused]     = useState(false);
  const rafRef  = useRef<number>(0);
  const startTs = useRef<number>(0);

  const go = useCallback(
    (idx: number) => {
      if (locked) return;
      setLocked(true);
      setProgress(0);
      setCurrent((idx + slides.length) % slides.length);
      setTimeout(() => setLocked(false), ANIM_S * 1000 + 100);
    },
    [locked],
  );

  const next = useCallback(() => go(current + 1), [go, current]);
  const prev = useCallback(() => go(current - 1), [go, current]);

  // Progress bar + autoplay
  useEffect(() => {
    if (paused) return;
    startTs.current = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTs.current;
      const pct = Math.min(elapsed / HOLD_MS, 1);
      setProgress(pct);
      if (pct < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        next();
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [current, paused, next]);

  return (
    <Box
      component="section"
      aria-label="Featured work slideshow"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      sx={{
        position: 'relative',
        height: '92svh',
        minHeight: 520,
        overflow: 'hidden',
        backgroundColor: '#111111',
        color: '#fff',
        cursor: 'default',
      }}
    >
      {/* ── Slides ── */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          variants={clipVariants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
            zIndex: 2,
          }}
        >
          {/* Zooming image */}
          <motion.div
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{ position: 'absolute', inset: '-8%' }}
          >
            <Image
              src={slides[current].src}
              alt={slides[current].title}
              fill
              priority
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
          </motion.div>

          {/* Gradient overlay */}
          <Box
            aria-hidden
            sx={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(135deg, rgba(17,17,17,0.72) 0%, rgba(17,17,17,0.3) 60%, rgba(17,17,17,0.15) 100%)',
            }}
          />
          <Box
            aria-hidden
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(17,17,17,0.55) 0%, transparent 45%)',
            }}
          />

          {/* Caption */}
          <Container
            maxWidth="xl"
            sx={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              pb: { xs: 14, md: 16 },
              overflow: 'hidden',
            }}
          >
            <motion.div variants={subVariants} initial="enter" animate="center" exit="exit">
              <Typography
                variant="overline"
                sx={{
                  display: 'block',
                  color: 'rgba(200,164,106,0.9)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.28em',
                  mb: 1.5,
                }}
              >
                {slides[current].location}
              </Typography>
            </motion.div>

            <Box sx={{ overflow: 'hidden' }}>
              <motion.div variants={captionVariants} initial="enter" animate="center" exit="exit">
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.4rem', sm: '3.5rem', md: '5rem', lg: '6rem' },
                    fontWeight: 700,
                    lineHeight: 1,
                    mb: 3,
                    maxWidth: { xs: '100%', md: '65%' },
                    textShadow: '0 2px 24px rgba(17,17,17,0.4)',
                  }}
                >
                  {slides[current].title}
                </Typography>
              </motion.div>
            </Box>

            <motion.div variants={subVariants} initial="enter" animate="center" exit="exit">
              <Link href={`/portfolio/${slides[current].id}`} style={{ display: 'inline-block' }}>
                <Typography
                  component="span"
                  sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '0.7rem',
                    fontWeight: 500,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.85)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1.5,
                    '&::before': {
                      content: '""',
                      display: 'inline-block',
                      width: 28,
                      height: 1,
                      backgroundColor: '#C8A46A',
                      transition: 'transform 0.3s ease',
                      transformOrigin: 'left',
                    },
                    '&:hover::before': { transform: 'scaleX(1.65)' },
                    '&:hover': { color: '#C8A46A' },
                    transition: 'color 0.3s ease',
                  }}
                >
                  View gallery
                </Typography>
              </Link>
            </motion.div>
          </Container>
        </motion.div>
      </AnimatePresence>

      {/* ── UI overlay ── */}
      <Box sx={{ position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none' }}>

        {/* Slide counter — top right */}
        <Box
          sx={{
            position: 'absolute',
            top: 32,
            right: { xs: 20, md: 40 },
            fontFamily: 'Poppins, sans-serif',
            fontSize: '0.68rem',
            letterSpacing: '0.14em',
            color: 'rgba(255,255,255,0.55)',
            display: 'flex',
            alignItems: 'center',
            gap: 0.75,
          }}
        >
          <Box component="span" sx={{ color: '#C8A46A', fontSize: '0.82rem', fontWeight: 600 }}>
            {String(current + 1).padStart(2, '0')}
          </Box>
          <Box component="span" sx={{ width: 20, height: 1, backgroundColor: 'rgba(255,255,255,0.25)' }} />
          <Box component="span">{String(slides.length).padStart(2, '0')}</Box>
        </Box>

        {/* Arrow buttons + dot pagination — bottom */}
        <Box
          sx={{
            position: 'absolute',
            bottom: { xs: 32, md: 40 },
            left: 0,
            right: 0,
            px: { xs: 3, md: 5 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            pointerEvents: 'auto',
          }}
        >
          {/* Arrows */}
          <Box sx={{ display: 'flex' }}>
            {(['prev', 'next'] as const).map((dir) => (
              <Box
                key={dir}
                component="button"
                type="button"
                onClick={dir === 'prev' ? prev : next}
                disabled={locked}
                aria-label={dir === 'prev' ? 'Previous slide' : 'Next slide'}
                sx={{
                  width: { xs: 46, md: 54 },
                  height: { xs: 46, md: 54 },
                  border: '1px solid rgba(255,255,255,0.45)',
                  borderLeft: dir === 'next' ? 'none' : undefined,
                  background: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.25s ease, color 0.25s ease',
                  '&:hover': { background: 'rgba(200,164,106,0.15)', color: '#C8A46A', borderColor: '#C8A46A' },
                  '&:disabled': { opacity: 0.4, cursor: 'default' },
                }}
              >
                <Arrow dir={dir} />
              </Box>
            ))}
          </Box>

          {/* Dot pagination */}
          <Box sx={{ display: 'flex', gap: { xs: 1, md: 1.25 }, alignItems: 'center' }}>
            {slides.map((_, i) => (
              <Box
                key={i}
                component="button"
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                sx={{
                  width: 9,
                  height: 9,
                  border: '1px solid rgba(255,255,255,0.7)',
                  borderRadius: 0,
                  background: i === current ? '#C8A46A' : 'transparent',
                  borderColor: i === current ? '#C8A46A' : 'rgba(255,255,255,0.55)',
                  cursor: 'pointer',
                  transition: 'background 0.25s ease, border-color 0.25s ease',
                  '&:hover': { background: 'rgba(200,164,106,0.45)' },
                  padding: 0,
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>

      {/* ── Progress bar ── */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 2,
          backgroundColor: 'rgba(255,255,255,0.1)',
          zIndex: 11,
        }}
      >
        <Box
          sx={{
            height: '100%',
            backgroundColor: '#C8A46A',
            width: `${progress * 100}%`,
            transition: paused ? 'none' : 'width 0.1s linear',
          }}
        />
      </Box>
    </Box>
  );
}

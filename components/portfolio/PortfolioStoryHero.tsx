'use client';

import { Box, Typography } from '@mui/material';
import { LocationOn, CalendarMonth } from '@mui/icons-material';
import Badge from '@/components/ui/Badge';
import ResponsiveGalleryCoverImage from '@/components/gallery/ResponsiveGalleryCoverImage';
import type { GalleryItem } from '@/data/gallery';
import { galleryCategoryLabel } from '@/lib/featuredGalleryOrder';

export default function PortfolioStoryHero({ item }: { item: GalleryItem }) {
  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '60svh', md: '80svh' },
        overflow: 'hidden',
      }}
    >
      <ResponsiveGalleryCoverImage
        item={item}
        sizes="100vw"
        fill
        priority
        alt={`${item.title} — ${item.location}`}
        style={{ objectFit: 'cover' }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(2,30,50,0.75) 0%, rgba(2,30,50,0.2) 60%, transparent 100%)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: 32, md: 56 },
          left: { xs: 24, md: 56 },
        }}
      >
        <Badge variant="gold" label={galleryCategoryLabel(item.category)} sx={{ mb: 2 }} />
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.2rem', md: '4rem' },
            color: '#EBF5FB',
            mb: 1.5,
            lineHeight: 1.1,
          }}
        >
          {item.title}
        </Typography>
        <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
            <LocationOn sx={{ color: 'gold.main', fontSize: 16 }} />
            <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: 'rgba(235,245,251,0.75)' }}>
              {item.location}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
            <CalendarMonth sx={{ color: 'gold.main', fontSize: 16 }} />
            <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: 'rgba(235,245,251,0.75)' }}>
              {item.date}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

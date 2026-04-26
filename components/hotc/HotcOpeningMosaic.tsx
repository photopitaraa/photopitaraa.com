import Image from 'next/image';
import { Box } from '@mui/material';
import { galleryItems } from '@/data/gallery';
import { picsumUrl, SHOWCASE_DUMMY_SEEDS } from '@/lib/mediaPlaceholders';

const fromGallery = galleryItems.flatMap((g) => g.images);
const filler = SHOWCASE_DUMMY_SEEDS.slice(0, 20).map((seed, i) =>
  picsumUrl(seed, 640, 720 + (i % 4) * 40)
);
const mosaicSrcs = [...fromGallery, ...filler].slice(0, 30);

/**
 * Full-bleed image wall (no gutters) — first fold like HOTC home.
 */
export default function HotcOpeningMosaic() {
  return (
    <Box
      component="section"
      aria-label="Featured photography"
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(2, 1fr)',
          sm: 'repeat(3, 1fr)',
          md: 'repeat(5, 1fr)',
          lg: 'repeat(6, 1fr)',
        },
        gap: 0,
        minHeight: { xs: '92vh', md: '100vh' },
        pt: { xs: '56px', md: '64px' },
      }}
    >
      {mosaicSrcs.map((src, i) => (
        <Box
          key={`${src}-${i}`}
          sx={{
            position: 'relative',
            minHeight: { xs: '22vh', md: '24vh' },
            overflow: 'hidden',
          }}
        >
          <Image src={src} alt="" fill sizes="(max-width:768px) 50vw, 16vw" style={{ objectFit: 'cover' }} />
        </Box>
      ))}
    </Box>
  );
}

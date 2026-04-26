import Image from 'next/image';
import { Box } from '@mui/material';
import { galleryItems } from '@/data/gallery';
import { picsumUrl, SHOWCASE_DUMMY_SEEDS } from '@/lib/mediaPlaceholders';

const imgs = [
  ...galleryItems.map((g) => g.coverImage),
  ...SHOWCASE_DUMMY_SEEDS.slice(10, 28).map((seed, i) => picsumUrl(seed, 700, 520 + (i % 3) * 60)),
].slice(0, 18);

export default function HotcSecondWall() {
  return (
    <Box
      component="section"
      aria-label="Selected weddings"
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(6, 1fr)' },
        gap: 0,
      }}
    >
      {imgs.map((src, i) => (
        <Box key={`${src}-${i}`} sx={{ position: 'relative', aspectRatio: '1', overflow: 'hidden' }}>
          <Image src={src} alt="" fill sizes="(max-width:768px) 50vw, 16vw" style={{ objectFit: 'cover' }} />
        </Box>
      ))}
    </Box>
  );
}

import { Box } from '@mui/material';
import HotcOpeningMosaic from '@/components/hotc/HotcOpeningMosaic';
import HotcIntro from '@/components/hotc/HotcIntro';
import HotcFeaturedGrid from '@/components/hotc/HotcFeaturedGrid';
import HotcPhotographyBlog from '@/components/hotc/HotcPhotographyBlog';
import HotcAwardFilms from '@/components/hotc/HotcAwardFilms';
import HotcManifesto from '@/components/hotc/HotcManifesto';
import HotcSecondWall from '@/components/hotc/HotcSecondWall';
import HotcSignature from '@/components/hotc/HotcSignature';

/**
 * Home layout modelled after House On The Clouds — image wall, editorial copy, featured grid, blog, films, manifesto, second wall, signature.
 */
export default function HotcLanding() {
  return (
    <Box sx={{ bgcolor: '#fff', color: '#111', fontFamily: '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif' }}>
      <HotcOpeningMosaic />
      <HotcIntro />
      <HotcFeaturedGrid />
      <HotcPhotographyBlog />
      <HotcAwardFilms />
      <HotcManifesto />
      <HotcSecondWall />
      <HotcSignature />
    </Box>
  );
}

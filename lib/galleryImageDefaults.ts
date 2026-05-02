/** Next/Image `sizes` for ~3-column masonry / portfolio grids at `xl`. */
export const GALLERY_GRID_COVER_SIZES =
  '(max-width: 600px) 100vw, (max-width: 900px) 50vw, min(400px, 30vw)';

/**
 * Home portfolio preview (`HomePortfolioPreview`) — 1/2/3 column grid with `xl` container.
 * Avoid a low `min(...px)` cap: that tells the browser cells are narrower than they are, so Next serves
 * tiny widths and portraits look soft on retina while barely saving bytes incorrectly.
 */
export const HOME_PREVIEW_COVER_SIZES =
  '(max-width: 600px) 100vw, (max-width: 900px) 50vw, (max-width: 1280px) 42vw, 36vw';

/** Encode quality for home preview only — sharper than bulk grids; still far below lightbox fullscreen. */
export const HOME_PREVIEW_COVER_QUALITY = 74;

/** Showcase mosaic cells — many small thumbnails per row. */
export const SHOWCASE_MOSAIC_SIZES = '(max-width: 600px) 45vw, (max-width: 1200px) 20vw, 17vw';

/** Grid thumbnails — balanced weight vs clarity (lightbox uses higher quality). */
export const GALLERY_GRID_COVER_QUALITY = 62;

/** Full-screen lightbox slides. */
export const LIGHTBOX_SLIDE_QUALITY = 82;

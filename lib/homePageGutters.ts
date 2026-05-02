import type { SxProps, Theme } from '@mui/material/styles';

/**
 * Homepage only: keep phone gutters at the default Container width; double horizontal inset from `sm` (tablet) up.
 */
export const homePageContainerGutterSx: SxProps<Theme> = {
  px: { xs: 2, sm: 4 },
};

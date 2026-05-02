'use client';

import { useMemo } from 'react';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';

function homePageContainerOverrides(theme: Theme) {
  return {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
  };
}

/** Doubles default MuiContainer horizontal gutters from `sm` up for homepage sections only. */
export default function HomePageGutterTheme({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const homeTheme = useMemo(
    () =>
      createTheme(theme, {
        components: {
          MuiContainer: {
            styleOverrides: {
              root: ({ theme: t }: { theme: Theme }) => homePageContainerOverrides(t),
            },
          },
        },
      }),
    [theme],
  );

  return <ThemeProvider theme={homeTheme}>{children}</ThemeProvider>;
}

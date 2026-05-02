'use client';

import * as React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider as NextThemesProvider, useTheme as useNextThemes } from 'next-themes';
import { lightTheme, darkTheme } from './theme';

function MuiThemeBridge({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useNextThemes();
  const muiTheme = resolvedTheme === 'dark' ? darkTheme : lightTheme;

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <MuiThemeBridge>{children}</MuiThemeBridge>
      </AppRouterCacheProvider>
    </NextThemesProvider>
  );
}

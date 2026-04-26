import { createTheme, alpha } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    gold: { main: string; light: string; dark: string; contrastText: string };
    ivory: { main: string };
    blush: { main: string };
    charcoal: string;
    surface: { elevated: string; modal: string };
    wine: { main: string };
  }
  interface PaletteOptions {
    gold?: { main: string; light?: string; dark?: string; contrastText?: string };
    ivory?: { main: string };
    blush?: { main: string };
    charcoal?: string;
    surface?: { elevated?: string; modal?: string };
    wine?: { main: string };
  }
}

// ── Core palette (from CSS variables) ────────────────────────────────────────
const BG          = '#111111';   // --bg
const SURFACE     = '#1E1E1E';   // --surface
const TEXT        = '#F8F8F8';   // --text
const MUTED       = '#BDBDBD';   // --muted
const ACCENT      = '#C8A46A';   // --accent
const ACCENT_SOFT = '#D7B28A';   // --accent-soft
const ROMANTIC    = '#D9A8A1';   // --romantic

// ── Derived tokens ────────────────────────────────────────────────────────────
const ACCENT_BRIGHT = '#E8CAAA'; // lighter accent for shimmer / highlights
const ACCENT_DIM    = '#8A6535'; // deeper accent for borders, muted gold use
const SURFACE_2     = '#252525'; // modal / secondary elevated surface
const BORDER        = '#2A2A2A'; // subtle dark dividers

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: ACCENT,
      light: ACCENT_SOFT,
      dark: ACCENT_DIM,
      contrastText: BG,
    },
    secondary: {
      main: ROMANTIC,
      light: ACCENT_SOFT,
      dark: ACCENT_DIM,
      contrastText: TEXT,
    },
    background: {
      default: BG,
      paper: SURFACE,
    },
    text: {
      primary: TEXT,
      secondary: MUTED,
    },
    gold: {
      main: ACCENT,
      light: ACCENT_BRIGHT,
      dark: ACCENT_DIM,
      contrastText: BG,
    },
    ivory:   { main: TEXT },
    blush:   { main: ROMANTIC },
    charcoal: SURFACE_2,
    surface:  { elevated: SURFACE, modal: SURFACE_2 },
    wine:    { main: ROMANTIC },
    divider: alpha(ACCENT, 0.15),
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.1,
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      letterSpacing: '-0.01em',
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      letterSpacing: '-0.005em',
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      lineHeight: 1.35,
    },
    h5: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      lineHeight: 1.45,
    },
    subtitle1: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: '0.01em',
    },
    subtitle2: {
      fontFamily: 'Cinzel, serif',
      fontWeight: 400,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      fontSize: '0.75rem',
    },
    body1: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 400,
      lineHeight: 1.75,
    },
    body2: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 400,
      lineHeight: 1.65,
      fontSize: '0.9rem',
    },
    button: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 500,
      letterSpacing: '0.06em',
      textTransform: 'none',
    },
    caption: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '0.78rem',
      letterSpacing: '0.04em',
    },
    overline: {
      fontFamily: 'Cinzel, serif',
      fontWeight: 400,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      fontSize: '0.7rem',
    },
  },
  shape: { borderRadius: 4 },
  spacing: 8,
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: auto; }
        body {
          background-color: ${BG};
          color: ${TEXT};
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          overflow-x: hidden;
        }
        ::selection {
          background: ${alpha(ACCENT, 0.35)};
          color: ${BG};
        }
        :focus-visible {
          outline: 2px solid ${ACCENT};
          outline-offset: 3px;
        }
        img { max-width: 100%; }
        a { color: inherit; text-decoration: none; }
      `,
    },
    MuiButton: {
      defaultProps: { disableElevation: true, disableRipple: false },
      styleOverrides: {
        root: {
          borderRadius: 2,
          padding: '12px 32px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
          fontSize: '0.85rem',
          letterSpacing: '0.08em',
          textTransform: 'none',
          transition: 'all 0.3s ease',
          position: 'relative',
          overflow: 'hidden',
          '&:active': { transform: 'scale(0.97)' },
        },
        containedPrimary: {
          background: `linear-gradient(135deg, ${ACCENT_DIM} 0%, ${ACCENT} 50%, ${ACCENT_SOFT} 100%)`,
          backgroundSize: '200% 100%',
          backgroundPosition: '100% 0',
          color: BG,
          '&:hover': {
            backgroundPosition: '0% 0',
          },
        },
        outlinedPrimary: {
          borderColor: ACCENT,
          color: ACCENT,
          borderWidth: '1.5px',
          '&:hover': {
            borderColor: ACCENT_SOFT,
            color: ACCENT_SOFT,
            backgroundColor: alpha(ACCENT, 0.08),
            borderWidth: '1.5px',
          },
        },
      },
    },
    MuiAppBar: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          background: 'transparent',
          backdropFilter: 'none',
        },
      },
    },
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          background: SURFACE,
          border: `1px solid ${BORDER}`,
          borderRadius: 8,
          overflow: 'hidden',
          transition: 'box-shadow 0.35s ease, transform 0.35s ease, border-color 0.35s ease',
          '&:hover': {
            borderColor: alpha(ACCENT, 0.4),
            boxShadow: `0 12px 48px ${alpha(ACCENT, 0.08)}`,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
          fontSize: '0.72rem',
          letterSpacing: '0.05em',
          borderRadius: 2,
        },
      },
    },
    MuiTextField: {
      defaultProps: { variant: 'outlined' },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            fontFamily: 'Inter, sans-serif',
            borderRadius: 4,
            '& fieldset': { borderColor: BORDER },
            '&:hover fieldset': { borderColor: alpha(ACCENT, 0.5) },
            '&.Mui-focused fieldset': { borderColor: ACCENT },
          },
          '& .MuiInputLabel-root.Mui-focused': { color: ACCENT },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter, sans-serif',
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: ACCENT },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: BORDER },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontFamily: 'Poppins, sans-serif',
          fontSize: '0.75rem',
          backgroundColor: SURFACE_2,
          border: `1px solid ${BORDER}`,
          borderRadius: 4,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: SURFACE_2,
          borderRadius: 12,
          border: `1px solid ${BORDER}`,
          boxShadow: `0 24px 80px ${alpha(BG, 0.8)}`,
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(BG, 0.9),
          backdropFilter: 'blur(4px)',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          backgroundColor: alpha(ACCENT, 0.12),
        },
        bar: { backgroundColor: ACCENT },
      },
    },
  },
});

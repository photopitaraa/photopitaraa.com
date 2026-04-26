import { createTheme, alpha } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    gold: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    ivory: { main: string };
    blush: { main: string };
    charcoal: string;
  }
  interface PaletteOptions {
    gold?: {
      main: string;
      light: string;
      dark: string;
      contrastText?: string;
    };
    ivory?: { main: string };
    blush?: { main: string };
    charcoal?: string;
  }
}

const AMBER       = '#FFB703';
const AMBER_LIGHT = '#FFD060';
const AMBER_DARK  = '#FB8500';
const CERULEAN    = '#219EBC';
const PRUSSIAN    = '#023047';
const ICE         = '#EBF5FB';
const SKY         = '#8ECAE6';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: CERULEAN,
      light: SKY,
      dark: PRUSSIAN,
      contrastText: '#fff',
    },
    secondary: {
      main: AMBER,
      light: AMBER_LIGHT,
      dark: AMBER_DARK,
      contrastText: PRUSSIAN,
    },
    background: {
      default: ICE,
      paper: '#FFFFFF',
    },
    text: {
      primary: PRUSSIAN,
      secondary: '#2E6B8A',
    },
    gold: {
      main: AMBER,
      light: AMBER_LIGHT,
      dark: AMBER_DARK,
      contrastText: PRUSSIAN,
    },
    ivory: { main: ICE },
    blush: { main: SKY },
    charcoal: PRUSSIAN,
    divider: alpha(CERULEAN, 0.2),
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
  shape: {
    borderRadius: 4,
  },
  spacing: 8,
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: auto; }
        body {
          background-color: ${ICE};
          color: ${PRUSSIAN};
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          overflow-x: hidden;
        }
        ::selection {
          background: ${alpha(AMBER, 0.3)};
          color: ${PRUSSIAN};
        }
        :focus-visible {
          outline: 2px solid ${CERULEAN};
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
          background: `linear-gradient(135deg, ${PRUSSIAN} 0%, ${CERULEAN} 50%, ${SKY} 100%)`,
          backgroundSize: '200% 100%',
          backgroundPosition: '100% 0',
          color: '#fff',
          '&:hover': {
            backgroundPosition: '0% 0',
          },
        },
        outlinedPrimary: {
          borderColor: CERULEAN,
          color: CERULEAN,
          borderWidth: '1.5px',
          '&:hover': {
            borderColor: PRUSSIAN,
            color: PRUSSIAN,
            backgroundColor: alpha(CERULEAN, 0.06),
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
          border: `1px solid ${alpha(CERULEAN, 0.15)}`,
          borderRadius: 8,
          overflow: 'hidden',
          transition: 'box-shadow 0.35s ease, transform 0.35s ease',
          '&:hover': {
            boxShadow: `0 12px 48px ${alpha(PRUSSIAN, 0.12)}`,
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
            '& fieldset': { borderColor: alpha(PRUSSIAN, 0.2) },
            '&:hover fieldset': { borderColor: CERULEAN },
            '&.Mui-focused fieldset': { borderColor: CERULEAN },
          },
          '& .MuiInputLabel-root.Mui-focused': { color: CERULEAN },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter, sans-serif',
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: CERULEAN },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: alpha(CERULEAN, 0.2),
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontFamily: 'Poppins, sans-serif',
          fontSize: '0.75rem',
          backgroundColor: PRUSSIAN,
          borderRadius: 4,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 12,
          boxShadow: `0 24px 80px ${alpha(PRUSSIAN, 0.25)}`,
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(PRUSSIAN, 0.85),
          backdropFilter: 'blur(4px)',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          backgroundColor: alpha(AMBER, 0.15),
        },
        bar: { backgroundColor: AMBER },
      },
    },
  },
});

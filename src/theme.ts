import { createTheme } from '@mui/material/styles';
import { Colors } from '../constants/Colors';

declare module '@mui/material/styles/createTypography' {
  interface Typography {
    p: TypographyStyleOptions | undefined;

  }

  interface TypographyOptions {
    p: TypographyStyleOptions | undefined;
  }
}

declare module '@mui/material/Typography/Typography' {
  interface TypographyPropsVariantOverrides {
    p: true;

  }
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    ultraWide: true;
    mobileScreen: true;
    smallerScreen: true;
    mediumTablet: true;
    extraSmallScreen: true;
    small480: true;
    small380: true;
  }
}

const media = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 650,
      md: 900,
      lg: 1200,
      xl: 1536,

      // custom breakpoints
      small380: 380,
      smallerScreen: 430,
      extraSmallScreen: 450,
      small480: 480,
      mobileScreen: 530,
      mediumTablet: 800,
      ultraWide: 1900,

    }
  }
})

export const theme = createTheme({
  ...media,
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: Colors.lightPurple,
          color: Colors.darkPurple,
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: '1.25rem',
          fontSize: '1.5rem',
          padding: '0.5rem 1.5rem',
          transition: 'background-color 0.5s ease-in-out',
          height: '4.8rem',
          '&:hover': {
            backgroundColor: Colors.darkPurple,
            color: Colors.lightPurple,
          },
        },

      },
    },
  },
  typography: {
    fontFamily: 'Roboto Flex',
    //thin: 100 regular: 300 bold: 400

    h1: {
      fontSize: '100px',
      fontWeight: '300',
      color: Colors.white,
      [media.breakpoints.up('ultraWide')]: {
        fontSize: '10rem',
      },
      [media.breakpoints.down('mediumTablet')]: {
        fontSize: '4rem',
      },
      [media.breakpoints.down('extraSmallScreen')]: {
        fontSize: '3rem',
      }
    },
    h2: {
      fontSize: '60px',
      fontWeight: '300',
      color: Colors.white,
      [media.breakpoints.up('ultraWide')]: {
        fontSize: '5rem'
      }
    },
    h3: {
      fontSize: '32px',
      fontWeight: '300',
      color: Colors.white,
      [media.breakpoints.up('ultraWide')]: {
        fontSize: '3.5rem'
      }
    },
    h4: {
      fontSize: '28px',
      fontWeight: '300',
      color: Colors.white,
      [media.breakpoints.up('ultraWide')]: {
        fontSize: '3rem'
      }
    },
    h5: {
      fontSize: '20px',
      fontWeight: '300',
      color: Colors.white,
      [media.breakpoints.up('ultraWide')]: {
        fontSize: '2rem'
      }
    },
    h6: {
      fontSize: '18px',
      fontWeight: '300',
      color: Colors.white
    },
    p: {
      fontSize: '12px',
    },
  },


});



export default theme;
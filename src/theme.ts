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
      extraSmallScreen: 450,
      smallerScreen: 430,
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
          //css here

        },
        outlined: {
          //css here

        },
        outlinedInfo: {
          //css here

        },
        text: {
          //css here

        },
      },
    },
  },
  typography: {
    fontFamily: 'Roboto Flex',
    //thin: 100 regular: 300 bold: 400

    h1: {
      fontSize: '100px',
      fontWeight: '700',
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
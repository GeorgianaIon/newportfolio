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

export const theme = createTheme({
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
      color: Colors.white
    },
    h2: {
      fontSize: '60px',
      fontWeight: '300',
      color: Colors.white
    },
    h3: {
      fontSize: '32px',
      fontWeight: '300',
      color: Colors.white
    },
    h4: {
      fontSize: '28px',
      fontWeight: '300',
      color: Colors.white
    },
    h5: {
      fontSize: '20px',
      fontWeight: '300',
      color: Colors.white
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
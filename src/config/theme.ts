import { createTheme } from '@mui/material/styles';

import { primaryColor, errorColor, warningColor, successColor, greyColor } from './colors';

const theme = createTheme({
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: greyColor,
    },
    error: {
      main: errorColor,
    },
    warning: {
      main: warningColor,
    },
    success: {
      main: successColor,
    },
  },
});

export default theme;

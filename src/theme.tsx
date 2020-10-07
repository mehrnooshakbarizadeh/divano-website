import { createMuiTheme } from '@material-ui/core';

const createTheme = (rtl: boolean) => createMuiTheme({
  direction: rtl ? 'rtl' : 'ltr',
  palette: {
    
  },
  overrides: {
    MuiPopover: {
      root:{
        flip: false,
        direction: rtl ? 'rtl' : 'ltr',
      },
    },
    MuiCssBaseline: {
      '@global': {
        html: {
          // backgroundColor: COLORS.background,
        },
        'html *': {
          // fontFamily: 'Yekan Bakh',
        },
      },
    },
  },
});

export default createTheme;
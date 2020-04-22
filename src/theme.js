import { createMuiTheme } from '@material-ui/core';

const createTheme = (rtl) => createMuiTheme({
  direction: rtl ? 'rtl' : 'ltr',
});

export default createTheme;
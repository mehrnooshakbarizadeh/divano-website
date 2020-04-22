import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {
  MuiThemeProvider,
  CssBaseline,
 } from '@material-ui/core';
import createTheme from '../src/theme';
import Direction from '../components/Direction';

export default function DivanoApp(props) {
  const { Component, pageProps } = props;

  const rtl = false;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Divano - Accounting application</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Direction rtl={rtl}>
        <MuiThemeProvider theme={createTheme(rtl)}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </MuiThemeProvider>
      </Direction>
    </React.Fragment>
  );
}

DivanoApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
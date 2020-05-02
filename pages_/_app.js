import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {
  MuiThemeProvider,
  CssBaseline,
 } from '@material-ui/core';
import createTheme from '../src/theme';
import Direction from '../components/Direction';
import { DeviceContext } from '../helpers/device';

export default function DivanoApp(props) {
  const { Component, pageProps, router, isMobileView } = props;
  const rtl = !isRouteLtr(router.route);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <DeviceContext.Provider value={{isMobileView}}>
        <Direction rtl={rtl}>
          <MuiThemeProvider theme={createTheme(rtl)}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </MuiThemeProvider>
        </Direction>
      </DeviceContext.Provider>
    </>
  );
}

DivanoApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  // pageProps: PropTypes.object.isRequired,
};

DivanoApp.getInitialProps = ({ ctx }) => {
  const isMobileView = (ctx.req
    ? ctx.req.headers['user-agent']
    : navigator.userAgent).match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    );

    return {
      isMobileView: Boolean(isMobileView)
    }
}

function isRouteLtr(route) {
  if(route && (route==='/en' || route.startsWith('/en/')))
    return true;
  // else if(route && (route==='/es' || route.startsWith('/es/')))
  //   return true;
  else return false;
}
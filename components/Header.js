import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import {colors} from '../helpers/theme';
import MenuAnchor from './MenuAnchor'
import { useRouter } from 'next/router'
// import Link from 'next/link';
import Link from 'next-translate/Link';
import useTranslation from 'next-translate/useTranslation';
import i18nConfig from '../i18n.json';

const { allLanguages } = i18nConfig;

const useStyles = makeStyles (theme => ({
  root: {
    position: 'fixed',
    display: 'flex',
    fallbacks: [
      { display: '-webkit-box' },
      { display: '-moz-box' },
      { display: '-ms-flexbox' },
      { display: '-webkit-flex' }
    ],
    height: 40,
    width: '100%',
    '&:after': {
      position: 'absolute',
      boxSizing: 'border-box',
      display: 'block',
      width: '100%',
      backgroundColor: 'rgb(0, 0, 255, 0)',
      content: '""',
      bottom: 0,
      left: 0,
      right: 0,
      height: 1,
      // transform: 'translateX(-110%)',
      transition: 'background-color 0.2s cubic-bezier(0.455,0.03,0.515,0.955)',
    },
  },

  spacer: {
    flexGrow: 1,
  },
  
  scrolled: {
    '&:after': {
      backgroundColor: colors.headerBorder,
    }
  },
  logo: {
    height:30,
    width: 30,
    // float: 'left',
  },
}));

export default function Header({scrolled, ...rest}) {
  const router = useRouter();
  const classes = useStyles();
  const { t, lang } = useTranslation();

  React.useEffect(()=>{
    if(document){
      document.title = t('common:title');
    }
  }, [t]);


  return <div className={classes.root + (!scrolled ? '' : ' ' + classes.scrolled)}>
    
    <MenuAnchor href="/features"><b>{t('common:features')}</b></MenuAnchor>
    <MenuAnchor href="/features"><b>Mitears</b></MenuAnchor>
    <MenuAnchor href="/features"><b>pitears</b></MenuAnchor>
    
    <div className={classes.spacer}>
      {allLanguages.filter(l => l!==lang).map( l => (
        <Link key={l} href={stripLang(router.route, lang)} lang={l}>
          <a>{l}</a>
        </Link> 
      ))}
    </div>
  
    <div>
      <Link href="/">
        <a>
         <img src="/static/images/logo.png" alt="logo" className={classes.logo}/>
        </a>  
      </Link> 
    </div>
  </div>
  
};

function stripLang(route, lang){
  if(route === `/${lang}`) return '/';
  if(route.startsWith(`/${lang}`)) return route.substring(lang.length + 1);
  return route;
}
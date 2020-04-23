import React from 'react';
import { 
  makeStyles,
  Typography,
 } from '@material-ui/core';
import {colors} from '../helpers/theme';
import MenuAnchor from './MenuAnchor'
import { useRouter } from 'next/router'
import Link from 'next-translate/Link';
import useTranslation from 'next-translate/useTranslation';
import i18nConfig from '../i18n.json';
import Logo from '../images/logo.svg';

const { allLanguages } = i18nConfig;

const useStyles = makeStyles (theme => ({
  root: {
    position: 'fixed',
    zIndex: 1,
    display: 'flex',
    fallbacks: [
      { display: '-webkit-box' },
      { display: '-moz-box' },
      { display: '-ms-flexbox' },
      { display: '-webkit-flex' }
    ],
    alignItems: 'center',
    height: 64,
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
    backgroundColor: '#fff',
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
    height: 64,
    width: 64,
    padding: 8,
    // float: 'left',
  },
  currentLang:{
    margin: '0 8px',
    padding: '5px',
    overflow: 'hidden',
    textAlign: 'center',
    verticalAlign: 'middle',
    textDecoration: 'none',
    height: 30,
    color: 'black',
  },
  lang:{
    display: 'block',
    // width: 100,
    margin: '0 8px',
    padding: '5px',
    overflow: 'hidden',
    textAlign: 'center',
    verticalAlign: 'middle',
    textDecoration: 'none',
    height: 30,
    color: 'blue',
  },
}));

export default function Header({}) {
  const router = useRouter();
  const classes = useStyles();
  const { t, lang } = useTranslation();

  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = ()=>{
    // console.log(window.scrollY)
    if(!scrolled && window.scrollY > 5) {
      setScrolled(true);
    }
    if(scrolled && window.scrollY < 5) {
      setScrolled(false);
    }
  }

  React.useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  })

  React.useEffect(()=>{
    if(document){
      document.title = t('common:title');
    }
  }, [t]);


  return <div className={classes.root + (!scrolled ? '' : ' ' + classes.scrolled)}>
    
    <MenuAnchor href="/features"><b>{t('common:features')}</b></MenuAnchor>
    <MenuAnchor href="/features"><b>Mitears</b></MenuAnchor>
    <MenuAnchor href="/features"><b>pitears</b></MenuAnchor>
    
    <div className={classes.spacer}/>
    {allLanguages.map( l => {
      if(l===lang){
        return <div key={l} className={classes.currentLang}><Typography>{t(`common:${l}`)}</Typography></div>
      }
      return (
        <Link key={l} href={stripLang(router.route, lang)} lang={l}>
          <a className={classes.lang}><Typography>{t(`common:${l}`)}</Typography></a>
        </Link> 
    )})}
  
    <div>
      <Link href="/">
        <a>
         <Logo className={classes.logo}/>
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
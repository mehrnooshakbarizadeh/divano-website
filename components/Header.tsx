import React, { useContext } from 'react';
import { 
  makeStyles,
  Typography,
  IconButton,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
 } from '@material-ui/core';
import {colors} from '../helpers/theme';
import MenuAnchor from './MenuAnchor'
import { useRouter } from 'next/router'
import Link from 'next-translate/Link';
import useTranslation from 'next-translate/useTranslation';
import i18nConfig from '../i18n.json';
import Logo from '../images/logo.svg';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { DeviceContext } from '../helpers/device';

const { allLanguages } = i18nConfig;

const useStyles = makeStyles (theme => ({
 
  topMargin: {
    height: 64,
  },
  root: {
    position: 'fixed',
    top: 0,
    height: 64,
    width: '100%',
    zIndex: 1,
    display: 'flex',
    fallbacks: [
      { display: '-webkit-box' },
      { display: '-moz-box' },
      { display: '-ms-flexbox' },
      { display: '-webkit-flex' }
    ],
    alignItems: 'center',
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
  menuButton: {
    marginLeft: theme.spacing(1),
  },
  hide: {
    display: 'none',
  },
  list: {
    width: 250,
  },
}));

export default function Header({}) {
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();
  const {isMobileView} = useContext(DeviceContext);
  const small = isMobileView || useMediaQuery(theme.breakpoints.down('xs'));

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

  return <>
    <div className={classes.topMargin}></div>
    <div className={clsx(classes.root, scrolled && classes.scrolled)}>
      
      {!small && <Menu/>}

      {small && <HamberMenu/>}


      <div>
        <Link href="/">
          <a>
          <Logo className={classes.logo}/>
          </a>  
        </Link> 
      </div>
    </div>
  </>
};


function Menu({}) {
  const router = useRouter();
  const classes = useStyles();
  const { t, lang } = useTranslation();

  return (
    <>
      <MenuAnchor href="/features"><b>{t('common:features')}</b></MenuAnchor>
      <MenuAnchor href="/meatures"><b>{t('common:meatures')}</b></MenuAnchor>
      <MenuAnchor href="/peatures"><b>{t('common:peatures')}</b></MenuAnchor>
      
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
    </>
  )
}

function HamberMenu({}) {
  const router = useRouter();
  const classes = useStyles();
  const { t, lang } = useTranslation();

  const [open, setOpen] = React.useState(false);
  const anchor = 'left';

  const openDrawer = ()=>{ setOpen(true); };
  const closeDrawer = ()=>{ setOpen(false); };

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={openDrawer}
        edge="start"
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <div className={classes.spacer}/>
      <Drawer anchor={anchor} open={open} onClose={closeDrawer}>
        <div
          className={classes.list}
          role="presentation"
          onClick={closeDrawer}
          onKeyDown={closeDrawer}
        >
          <List>
            <ListItem button key={'features'}>
              <Link href="/features">
                <ListItemText primary={t('common:features')} />
              </Link>
            </ListItem>
            <ListItem button key={'meatures'}>
              <Link href="/meatures">
                <ListItemText primary={t('common:meatures')} />
              </Link>
            </ListItem>
            <ListItem button key={'peatures'}>
              <Link href="/peatures">
                <ListItemText primary={t('common:peatures')} />
              </Link>
            </ListItem>
          </List>
          <Divider />
          <List>
            {allLanguages.map( l => {
              if(l===lang){
                return (
                  <ListItem disabled button key={l}>
                    <ListItemText primary={t(`common:${l}`)} />
                  </ListItem>
                )
              }
              return (
                <Link key={l} href={stripLang(router.route, lang)} lang={l}>
                  <ListItem button key={l}>
                    <ListItemText primary={t(`common:${l}`)} />
                  </ListItem>
                </Link> 
            )})}
          </List>
        </div>
      </Drawer>
    </>
  );
}

function stripLang(route: string, lang: string){
  if(route === `/${lang}`) return '/';
  if(route.startsWith(`/${lang}`)) return route.substring(lang.length + 1);
  return route;
}
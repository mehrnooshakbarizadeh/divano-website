import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Link from 'next/link';
import Link from 'next-translate/Link'


const useStyles = makeStyles (theme => ({
  menu : {
    position: 'relative',
    boxSizing: 'border-box',
    display: 'block',
    // width: 100,
    margin: '0 30px',
    padding: '5px',
    overflow: 'hidden',
    textAlign: 'center',
    verticalAlign: 'middle',
    textDecoration: 'none',
    height: 30,
    color: 'blue',
    '&:hover': {
      '&:after': {
        transform: 'translateX(0%)',
      },
    },
    '&:after': {
      position: 'absolute',
      boxSizing: 'border-box',
      display: 'block',
      width: '100%',
      color: 'red',
      content: '""',
      background: 'red',
      bottom: 0,
      left: 0,
      right: 0,
      height: 2,
      transform: 'translateX(-110%)',
      transition: 'transform 0.2s cubic-bezier(0.455,0.03,0.515,0.955)',
    },
}
}));

export default function MenuAnchor({href, children}) {
  const classes = useStyles();
  return (
  <Link href={href}>
    <a className={classes.menu}>
    {children}
    </a>
  </Link>
  
  )}

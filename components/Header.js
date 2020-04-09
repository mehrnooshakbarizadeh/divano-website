import React from 'react';
import { makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
import {colors} from '../helpers/theme';

const useStyles = makeStyles (theme => ({
  root: {
    // background: ,
    borderBottom: `2px solid ${colors.headerBorder}`,
    height: 40,
    fontWeight: 20,
    fontSize: 20,
  },
}));

export default function Header() {
  const classes = useStyles();
  return <div className={classes.root}>Hook</div>;
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {colors} from '../helpers/theme';

const useStyles = makeStyles (theme => ({
  root: {
    // background: ,
    borderBottom: `1px solid ${colors.headerBorder}`,
    height: 40,
  },
}));

export default function Header() {
  const classes = useStyles();
  return <div className={classes.root}>Hook</div>;
}
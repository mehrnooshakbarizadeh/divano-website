import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyle (theme => ({
  root: {
    
  }
}));

export default function Header() {
  const classes = useStyles();
  return <Button className={classes.root}>Hook</Button>;
}
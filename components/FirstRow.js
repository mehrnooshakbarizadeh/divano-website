import {
  makeStyles,
  Paper,
} from '@material-ui/core';
import { lightGreen } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 300,
    paddingTop: 60,
    paddingLeft: 100,
    // flip: false,
  },
  content: {
    backgroundColor: lightGreen[100],
    height: '100%',
  },

}));



export default function FirstRow() {

  const classes = useStyles();
    
  return <div className={classes.root}>
    <div className={classes.content}>

      first
    </div>
    
  </div>
}
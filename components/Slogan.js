import {
  makeStyles,
  Paper,
} from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import imgSlogan from '../images/sloganIcon.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 150,
    width: '60vw',
    margin: '-50px auto 0 auto',
  },
  sloganFirst:{
    color:'blue',
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: '10px',
 },
  sloganSec: {
    color: 'grey',
    fontSize: '15',
    textAlign: 'center',
  },
  imgSlogan:{
    background:'red',
    position:'absolute'
  },

}));

export default function Slogan() {

  const classes = useStyles();
    
  return (
    <Paper className={classes.root} elevation= {3}>
      <p className={classes.sloganFirst}>Here is just for showing Divano Slogan.</p>
      <p className={classes.sloganSec}>Here is just for showing Divano Slogan.</p>
      <div>
      <imgSlogan className={classes.imgSlogan} /> 
      </div>
  </Paper>
  )
}
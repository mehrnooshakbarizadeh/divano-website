import {
  makeStyles,
  Paper,
} from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import ImgSlogan from '../images/sloganIcon.svg';
import SloganSec from '../images/sloganSec.svg';
import SloganThi from '../images/sloganThi.svg';
import SloganFou from '../images/sloganFo.svg';
import SloganFif from '../images/sloganFif.svg';


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
    float:'left',
    marginTop:'10px',
    marginRight:'50px',
  },
  

}));

export default function Slogan() {

  const classes = useStyles();
    
  return (
    <Paper className={classes.root} elevation= {3}>
      <p className={classes.sloganFirst}>Here is just for showing Divano Slogan.</p>
      <p className={classes.sloganSec}>Here is just for showing Divano Slogan.</p>
      <div>
      <ImgSlogan className={classes.imgSlogan} /> 
      <SloganSec className={classes.imgSlogan}/>
      <SloganThi className={classes.imgSlogan}/>
      <SloganFou className={classes.imgSlogan} />
      <SloganFif className={classes.imgSlogan} />

      </div>
  </Paper>
  )
}
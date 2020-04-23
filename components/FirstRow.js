import {
  makeStyles,
  Paper,
  Button,
} from '@material-ui/core';
import { lightGreen, lightBlue } from '@material-ui/core/colors';
import MainImg from '../images/divano_main_landing.svg';
import Link from 'next/link';


const useStyles = makeStyles((theme) => ({
  root: {
    height: 500,
    //paddingTop: 60,
    paddingTop: '4.6875rem',
    paddingLeft: 10,
    // flip: false,
  },
  content: {
    height: '100%',
    paddingTop:'80px',
    backgroundImage: 'linear-gradient(-90deg,white,blue)',
    paddingLeft: '255px',
    //position: 'relative',
  },
  mainImg:{
    position: 'absolute',
    right: 0,
    transform: `scaleX(${theme.direction==='rtl'?'-1':'1'})`,
  },
  firstRowBtm: {
    position:'absolute',
    paddingTop:'10px',
    
  },
}));

export default function FirstRow() {
  const classes = useStyles();
    
  return <div className={classes.root}>
    <div className={classes.content}>
     
        <MainImg height="280px" className={classes.mainImg}/>
        <Button variant="contained" className={classes.firstRowBtm}>Divano</Button>
      

      
    </div>
    
  </div>
}
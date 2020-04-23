import {
  makeStyles,
  Container,
  Paper,
  Grid,
} from '@material-ui/core';
import ImgSlogan from '../images/sloganIcon.svg';
import SloganSec from '../images/sloganSec.svg';
import SloganThi from '../images/sloganThi.svg';
import SloganFou from '../images/sloganFo.svg';
import SloganFif from '../images/sloganFif.svg';
import useTranslation from 'next-translate/useTranslation';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 150,
    // width: '60vw',
    // margin: '-50px auto 0 auto',
    padding: 16,
    margin: '-64px 48px 0 48px',
    [theme.breakpoints.down('xs')]: {
      margin: '-50px 8px 0 8px',
    },
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
    marginTop:'10px',
    marginRight:'50px',
  },
  

}));

export default function Slogan() {
  const classes = useStyles();
  const { t } = useTranslation();
    
  return (
    <Container maxWidth="lg">
      <Paper className={classes.root} elevation= {3}>
        <Grid container>
          <Grid item xs={12}>
            <p className={classes.sloganFirst}>{t('home:slogan.title')}</p>
          </Grid>
          <Grid item xs={12}>
            <p className={classes.sloganSec}>{t('home:slogan.content')}</p>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} container justify="center" alignItems="center">
            <ImgSlogan className={classes.imgSlogan} /> 
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} container justify="center" alignItems="center">
            <SloganSec className={classes.imgSlogan}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} container justify="center" alignItems="center">
            <SloganThi className={classes.imgSlogan}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} container justify="center" alignItems="center">
            <SloganFou className={classes.imgSlogan} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} container justify="center" alignItems="center">
            <SloganFif className={classes.imgSlogan} />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}
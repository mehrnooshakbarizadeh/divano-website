import {
  makeStyles,
  Grid,
  Link,
  Button,
  Typography,
} from '@material-ui/core';
import MainImg from '../images/divano_main_landing.svg';
// import Link from 'next/link';
import { colors } from '../helpers/theme';
import useTranslation from 'next-translate/useTranslation';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 300,
    //paddingTop: 60,
    // marginTop: '4.6875rem',
    // marginLeft: 10,
    // paddingTop:'80px',
    backgroundImage: 
      `linear-gradient(
          ${theme.direction === 'rtl' ? '':'-'}${theme.breakpoints.down('xs') ? '45':'90'}deg,
          white,
          blue
      )`,
    // paddingLeft: '255px',
    // flip: false,
  },
  mainImg:{
    // position: 'absolute',
    // right: 0,
    width: 400,
    paddingBottom: 40,
    [theme.breakpoints.down('xs')]: {
      width: 200,
      // paddingBottom: 140,
    },
    transform: `scaleX(${theme.direction==='rtl'?'-1':'1'})`,
  },
  appContainer: {
    paddingLeft: 64,
    paddingBottom: 72,
    [theme.breakpoints.down('xs')]: {
      paddingTop: 24,
      paddingLeft: 8,
    },
  },
  appText: {
    color: colors.brightTextColor,
    paddingBottom: theme.spacing(2),
  },
  firstRowBtm: {
    // position:'absolute',
    // paddingTop:'10px',
    textTransform: 'unset',
    color: colors.brightTextColor,
    backgroundColor: colors.actionColor,
    borderColor: colors.actionColor,
    '&:hover': {
      backgroundColor: colors.actionHoverColor,
    },
  },
}));

export default function FirstRow() {
  const classes = useStyles();
  const { t } = useTranslation();
    
  return <Grid container className={classes.root}>
      <Grid item xs={12} sm={6} container justify="flex-start" alignItems="flex-end">
        <div className={classes.appContainer}>
          <Typography variant="h4" className={classes.appText}>
            {t('common:appText')}
          </Typography>
          <Link
            href="https://app.divano.ir"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className={classes.firstRowBtm}>
              {t('common:divanoAppLink')}
            </Button>
          </Link>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} container justify="center" alignItems="flex-end">
        <MainImg className={classes.mainImg}/>
      </Grid>
    </Grid>
}
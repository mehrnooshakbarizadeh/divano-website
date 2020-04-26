import {
  makeStyles,
  Grid,
  Container,
  Link,
  Button,
  Typography,
} from '@material-ui/core';
import { colors } from '../helpers/theme';
import useTranslation from 'next-translate/useTranslation';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: 
      `linear-gradient(
          ${theme.direction === 'rtl' ? '':'-'}${theme.breakpoints.down('xs') ? '25':'90'}deg,
          blue,
          white
      )`,
   height: 300,
   paddingTop:6,
  },
  firstCol: {
    fontWeight: 'bold',
    color: 'darkBlue',
    marginLeft: 6,
    paddingTop: 10,
  },
  forthCol: {
    borderLeft: '5px solid red',
    paddingLeft: 5,
    backgroundColor: 'yellow',
    borderRadius: 5,
    alignItems: 'center',
  },
  DlAppBtn: {
    textTransform: 'unset',
    marginLeft: '15vh',
    color: colors.brightTextColor,
    backgroundColor: colors.actionColor,
    borderColor: colors.actionColor,
    '&:hover': {
      backgroundColor: colors.actionHoverColor,
  }
},
appText: {
  color: colors.brightTextColor,
  paddingBottom: theme.spacing(2),
  
},
appContainer: {
  paddingLeft: 64,
  paddingBottom: 145,
  marginTop: 'auto',
  [theme.breakpoints.down('xs')]: {
    paddingTop: 24,
    paddingLeft: 8,
  },
},
  
}));

export default function Footer() {
  const classes = useStyles();
  const {t} = useTranslation() ;

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={3} container>
          <Link href='#'>
              <a  className={classes.firstCol}>first Col</a>
          </Link>
      </Grid>
      <Grid item xs={12} sm={3} container >    
          <Link href='#'>
              <a  className={classes.firstCol}>Second Col</a>
          </Link>
      </Grid>
      <Grid item xs={12} sm={3} container>
          <Link href='#'>
           <a  className={classes.firstCol}>third Col</a>
          </Link> 
      </Grid>
      <Grid item xs={12} sm={3} container >
        <div className={classes.appContainer}>
          <Typography variant="h6" className={classes.appText}>
            {t('common:appText')}
          </Typography>
          <Link
            href="https://app.divano.ir"
            target="_blank"
          >
            <Button className={classes.DlAppBtn}>
              {t('common:divanoAppLink')}
            </Button>
          </Link>
        </div>
      </Grid>
    </Grid>
  )
  
}


import {
  makeStyles,
  Grid,
  List,
  ListItem,
  ListItemText,
  Button,
  Typography,
} from '@material-ui/core';
import { colors } from '../helpers/theme';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next-translate/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    // position: 'absolute',
    padding:'70px 70px',
    backgroundImage: 
      `linear-gradient(
          ${theme.direction === 'rtl' ? '':'-'}${theme.breakpoints.down('xs') ? '25':'90'}deg,
          blue,
          white
      )`,
  },
  firstCol: {
    fontWeight: 'bold',
    color: 'darkBlue',
    // marginLeft: 6,
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
    // marginLeft: '15vh',
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
  // paddingLeft: 64,
  // paddingBottom: 45,
  // marginTop: 'auto',
  // [theme.breakpoints.down('xs')]: {
    // paddingTop: 24,
    // paddingLeft: 8,
  // },
},
fooProdLs: {
  // position: 'absolute',
  paddingTop: 30,
  fontSize: 20,
  '& li':{
    padding: 0,
  }
},
  
}));

export default function Footer() {
  const classes = useStyles();
  const {t} = useTranslation() ;
  
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={3} container direction="column">
        <Link href='#'>
          <a  className={classes.firstCol} > 
            {t('common:Products')}
          </a>
        </Link>
        <List className={classes.fooProdLs}>
          <ListItem>
            <Link href='/features'>
              <a>
                <ListItemText primary={t('common:features')} />                 
              </a>
            </Link>
          </ListItem>  
          <ListItem>
            <Link href='/meatures'>
              <a>
                <ListItemText primary={t('common:meatures')} />                 
              </a>
            </Link>
          </ListItem> 
          <ListItem>
            <Link href='/peatures'>
              <a>
                <ListItemText primary={t('common:peatures')} />
              </a>
            </Link>
          </ListItem> 
        </List>            
      </Grid>
      <Grid item xs={12} sm={3} container >    
          <Link href='#'>
              <a  className={classes.firstCol} > 
                {t('common:Enterprise')}
              </a>
          </Link>
      </Grid>
      <Grid item xs={12} sm={3} container>
          <Link href='#'>
           <a  className={classes.firstCol}>
            {t('common:Support')}
           </a>
          </Link> 
      </Grid>
      <Grid item xs={12} sm={3} container >
        <div className={classes.appContainer}>
          <Typography variant="h6" className={classes.appText}>
            {t('common:appText')}
          </Typography>
          <a href="https://app.divano.ir" target="_blank" rel="noopener noreferrer">
            <Button className={classes.DlAppBtn}>
              {t('common:divanoAppLink')}
            </Button>
          </a>
        </div>
      </Grid>
    </Grid>
  )
  
}


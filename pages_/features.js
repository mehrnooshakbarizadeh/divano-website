import React from 'react'
import {
  CssBaseline,
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core';
import Direction from '../components/Direction';
import Header from '../components/Header';
import Slogan from '../components/Slogan';
import FirstRow from '../components/FirstRow';



const Home = () => {
  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = ()=>{
    console.log(window.scrollY)
    if(!scrolled && window.scrollY > 5) {
      setScrolled(true);
    }
    if(scrolled && window.scrollY < 5) {
      setScrolled(false);
    }
  }

  React.useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  })
  
  return (
    <>
      <Header scrolled={scrolled}/>
      <FirstRow/>
      Features2
    </>
)}

export default Home

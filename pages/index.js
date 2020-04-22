import React from 'react'
// import Direction from '../components/Direction';
import Header from '../components/Header';
import Slogan from '../components/Slogan';
import FirstRow from '../components/FirstRow';

const Home = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [rtl, setRtl] = React.useState(false);

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
      <Header scrolled={scrolled} onChangeRtl={()=> setRtl(!rtl)}/>
      <FirstRow/>
      <Slogan />
    </>
)}

export default Home

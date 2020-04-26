import React from 'react'
import Header from '../components/Header';
import Slogan from '../components/Slogan';
import FirstRow from '../components/FirstRow';
import useTranslation from 'next-translate/useTranslation';
import Footer from '../components/Footer';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header/>
      <FirstRow/>
      <Slogan />
      <p>
        {t('home:content')}
      </p>
      <Footer />
    </>
)}

export default Home

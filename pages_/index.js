import React from 'react'
import Header from '../components/Header';
import Slogan from '../components/Slogan';
import FirstRow from '../components/FirstRow';
import useTranslation from 'next-translate/useTranslation';

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
    </>
)}

export default Home

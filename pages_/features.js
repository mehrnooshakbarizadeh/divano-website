import React from 'react'
import Header from '../components/Header';
import FirstRow from '../components/FirstRow';
import useTranslation from 'next-translate/useTranslation';

const Features = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <Header/>
      <p>
        {t('features:content')}
      </p>
    </>
)}

export default Features

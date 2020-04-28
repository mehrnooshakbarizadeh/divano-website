import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import useTranslation from 'next-translate/useTranslation';

const Peatures = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <Header/>
      <p>
        {t('features:content')}
      </p>
      <Footer />
    </>
)}

export default Peatures

import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); 
  };

  return (
    <div className='lang-div'>
      <button className='lang-btn' onClick={() => changeLanguage('en')}>Eng</button>
      <button className='lang-btn' onClick={() => changeLanguage('ru')}>Рус</button>
    </div>
  );
};

export default LanguageSwitcher;

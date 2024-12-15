import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import '../images/poster-jjk.jpg'; // Your image import

const Infinity = () => {
  const { t } = useTranslation(); // Get the translation function

  return (
    <div className='scroll-container'>
      <div className='scroll-content'>
        <p className='scroll-p'>{t('inspiration')}</p> <br />
        <p className='scroll-p'>{t('akutami_inspiration')}</p> <br />
        <p className='scroll-p'>{t('bleach')}</p> <br />
        <p className='scroll-p'>{t('hunterxhunter')}</p> <br />
        <p className='scroll-p'>{t('combat_system')}</p> <br />
        <p className='scroll-p'>{t('energy')}</p> <br />
        <p className='scroll-p'>...</p> <br />
        <p className='scroll-p'>{t('story_version')}</p> <br />
        <p className='scroll-p'>{t('prequel')}</p> <br />
        <p className='scroll-p'>{t('magic_battle')}</p> <br />
        <p className='scroll-p'>{t('tokyo_metro')}</p> <br />
        <p className='scroll-p'>{t('movie_adaptation')}</p> <br />
        <p className='scroll-p'>{t('movie_hit')}</p> <br />
      </div>
      <div>
        <img className='image-poster' src='https://i.pinimg.com/736x/60/c6/ab/60c6ab2f9073e44c3931306b74d08e58.jpg' alt="" />
      </div>
    </div>
  );
};

export default Infinity;

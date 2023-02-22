import React from 'react'
import i18next from "i18next";
import {useTranslation } from "react-i18next";
const Features = () => {
    const { t } = useTranslation();

  return (
    <div className='features'>
                              <h1 className='about_title'>{t('features_title')}</h1>
    <div className="features_top">
        <div className="features_top_block">
            <h2 className='features_title'>{t('main_mentor')}</h2>
            <p>{t('features_subtitle1')}</p>
            <button className='features_btn'>{t('features_addit')}</button>
        </div>
        <div className="features_top_block">
            <h2 className='features_title'>{t('main_trening')}</h2>
            <p>{t('features_subtitle2')}</p>
            <button className='features_btn'>{t('features_addit')}</button>
        </div>
    </div>
    <div className="features_bottom">
        <div className="features_bottom_block">
            <h2 className='features_title'>{t('main_video')}</h2>
            <p>{t('features_subtitle3')}</p>
            <button className='features_btn'>{t('features_addit')}</button>
        </div>
        <div className="features_bottom_block">
            <h2 className='features_title'>ОНЛАЙН {t('main_shop')}</h2>
            <p>{t('features_subtitle4')}</p>
            <button className='features_btn'>{t('features_addit')}</button>
        </div>
    </div>
    </div>
  )
}

export default Features
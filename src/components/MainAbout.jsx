import React from 'react'
import i18next from "i18next";
import {useTranslation } from "react-i18next";
import mainImg from '../images/main_img.png'
const MainAbout = () => {
  const { t } = useTranslation();

  return (
    
    <div className='about'>
              <h1 className='about_title'>{t('about_title')}</h1>

              <div className="about_top">
                <div className="about_top_block">
                  <p className='about_top_block_text'>{t('about_top1')}</p>
                </div>
                <div className="about_top_block">
                  <p className='about_top_block_text'>{t('about_top2')}</p>
                </div>
              </div>

              <div className="about_bottom">
                <div className="about_bottom_block">
<h3 className='about_bottom_title_first'>Миссия</h3>
<p className='about_bottom_subtitle_first'>{t('about_top1')}</p>
                </div>
                <div className="about_bottom_block">
                  <h3 className='about_bottom_title'>{t("about_bottom_title")}</h3>
                  <p className='about_bottom_subtitle'>{t('about_bottom_subtitle')}</p>
                  </div>
                  <div className="about_bottom_block">
                  
                  </div>
              </div>
    </div>
  )
}

export default MainAbout
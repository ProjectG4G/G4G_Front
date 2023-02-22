import React, {useState,useEffect} from 'react'
import i18next from "i18next";
import {useTranslation } from "react-i18next";
import mainImg from '../images/main_img.png'
const MainContent = () => {
    const { t } = useTranslation();

  return (
    <div className='main_container'>
    
    <div className="main_text">
    <h1 className='main_title'>{t('slogan')}</h1>
    <button className='main_scroll_btn'>{t('main_scroll')}</button>
    </div>
    <div className="main_img">
    </div>
    </div>
  )
}

export default MainContent
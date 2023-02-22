import React from 'react'
import i18next from "i18next";
import inst from '../images/ftr_inst.png'
import tg from '../images/ftr_tg.png'

import logo from '../images/logo.png'

import {useTranslation } from "react-i18next";
const Footer = () => {
    const { t } = useTranslation();

  return (
    <div className='footer'>
    <div  className='footer_navbar' >
    <img className='main_logo' src={logo} alt="logo" />

<ul>
<li><a href="">{t('main_title')}</a></li>
<li><a href=""> {t('main_mentor')}</a></li>
<li><a href="">{t('main_trening')}</a></li>
<li><a href="">{t('main_video')}</a></li>
<li><a href="">{t('main_shop')}</a></li>
</ul>
<a className='social' href="">
    <img className='social_img' src={inst} alt="instagram" />
</a>
<a className='social'  href="">
    <img className='social_img' src={tg} alt="telegram" />
</a>
    </div>

</div>
  )
}

export default Footer
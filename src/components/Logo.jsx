import React from 'react'

import logo from '../images/logo.png'
import logo_img from '../images/logo_img.png'
import {useTranslation } from "react-i18next";
import { useForm } from 'react-hook-form';

const Logo = () => {
    const { t } = useTranslation();

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
    } = useForm();

  return (
    <div className='logo_container'>
<img className='logo_name' src={logo} alt="logo Image" />
<img className='logo_img' src={logo_img} alt="logo Image" />
<h3 className='logo_title'>{t('slogan')}</h3>

    </div>
  )
}

export default Logo
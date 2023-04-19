import React from 'react'

import logo from '../../assets/images/logo.png'
import logo_img from '../../assets/images/logo_img.png'
import {useTranslation } from "react-i18next";
import { useForm } from 'react-hook-form';
import styles from './Logo.module.scss'

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
    <div className='logo'>
    <div className={styles.logo_container}>
<img className={styles.logo_name} src={logo} alt="logo Image" />
<img className={styles.logo_img} src={logo_img} alt="logo Image" />
<h3 className={styles.logo_title}>{t('slogan')}</h3>

    </div>
    </div>

  )
}

export default Logo
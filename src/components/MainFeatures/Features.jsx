import React from 'react'
import {useTranslation } from "react-i18next";
import styles from './Features.module.scss'
const Features = () => {


    const { t } = useTranslation();

  return (
    <section className={styles.features}>
                              <h1 className='heading'>{t('features_title')}</h1>
                              <div className={styles.features_container}>

    <div className={styles.features_top}>
        <div className={styles.features_top_block}>
            <h2 className={styles.features_title}>{t('main_mentor')}</h2>
            <p className={styles.features_subtitle}>{t('features_subtitle1')}</p>
            <button className={styles.features_btn}>{t('features_addit')}</button>
        </div>
        <div className={styles.features_top_block}>
            <h2 className={styles.features_title_video}>{t('main_trening')}</h2>
            <p  className={styles.features_subtitle_video}>{t('features_subtitle2')}</p>
            <button className={styles.features_btn}>{t('features_addit')}</button>

        </div>
    </div>
    <div className={styles.features_bottom}>
        <div className={styles.features_bottom_block}>
            <h2 className={styles.features_title}>{t('main_video')}</h2>
            <p className={styles.features_subtitle}>{t('features_subtitle3')}</p>
            <button className={styles.features_btn}>{t('features_addit')}</button>

        </div>
        <div className={styles.features_bottom_block}>
            <h2 className={styles.features_title}>ОНЛАЙН {t('main_shop')}</h2>
            <p className={styles.features_subtitle}>{t('features_subtitle4')}</p>
            <button className={styles.features_btn}>{t('features_addit')}</button>
        </div>
    </div>
    </div>

    </section>
  )
}

export default Features
import React from 'react'
import {useTranslation } from "react-i18next";
import styles from './MainAbout.module.scss'
const MainAbout = () => {
  const { t } = useTranslation();

  return (
    
    <section  className={styles.about}>
              <h1 className='heading'>{t('about_title')}</h1>
            <div className={styles.about_container}>

              <div className={styles.about_top}>

                  <div className={styles.about_top_block}>
                  <div className={styles.main_back_purple}></div>

                    <p className={styles.about_top_block_title}>{t('our_mission')}</p>
                    <p className={styles.about_top_block_subtitle}>{t('about_top2')}</p>
                  </div>
                  <div className={styles.about_top_block_right}>
              
                  </div>


              </div>

              <div className={styles.about_middle}>
                <div className={styles.about_middle_block_left}></div>
                <div className={styles.about_middle_block}>
                <div className={styles.main_back_purple}></div>

                <p className={styles.about_top_block_title}>{t("our_vision")}</p>
                    <p className={styles.about_top_block_subtitle}>{t('about_bottom_text')}</p>
                </div>
              </div>

         
              </div>

    </section>
  )
}

export default MainAbout
import React from 'react'
import MainHeader from '../MainHeader/MainHeader'
import { useTranslation } from 'react-i18next'
import styles from './MainVIdeo.module.scss'
import Back  from '../../assets/images/will_updata.png'
const MainVideo = () => {
    const {t} = useTranslation()
  return (
    <section className={styles.container}>
        <MainHeader/>

        <h1 className={styles.title}>{t('will_update')}</h1>

        <div className={styles.back_container}>
        <img className={styles.back_img} src={Back} alt="" />

        </div>

    </section>
  )
}

export default MainVideo
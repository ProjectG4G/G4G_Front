import React from 'react'
import styles from './Sidebar.module.scss'
import { useTranslation } from 'react-i18next';

const Sidebar = () => {
    const { t } = useTranslation();

  return (
    <div className={styles.sidebar}>
    <p className={styles.dropdown_items_settings}>Модерация</p>
    <span className={styles.underline}></span>
    <ul className={styles.dropdown}>
  <li className={styles.dropdown_items}>{t('main_title')}</li>
  <li className={styles.dropdown_items}>{t('mentorship')}</li>
  <li className={styles.dropdown_items}>{t('main_shop')}</li>
  <li className={styles.dropdown_items}>Профиль</li>
    </ul>
       </div>  )
}

export default Sidebar
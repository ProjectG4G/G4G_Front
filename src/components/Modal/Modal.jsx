import React, {useState, useEffect} from 'react'
import styles from './Modal.module.css'
import logo from '../../assets/images/logo-white.png'
import back from '../../assets/images/black-back.png'

import { useTranslation } from "react-i18next";

const Modal = () => {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(true);

  useEffect(() => {
    document.body.style.overflow = openModal ? 'hidden' : 'visible';
    const navbar = document.querySelector('.navbar');

    if (navbar) {
      navbar.style.display = openModal ? 'none' : 'flex';
    }
    return () => {
      document.body.style.overflow = 'visible';
    
    };
  }, [openModal]);
  

  const handleButtonClick = () => {
    setOpenModal(false);
  }

  return (
      <div className={styles.container} style={{display: openModal ? 'block' : 'none'}}>
        <img className={styles.main_logo} src={logo} alt="logo" />
        <div className={styles.centre}>
          <button className={styles.btn} onClick={handleButtonClick}>{t('main_black')}</button>
          <img className={styles.back}  src={back} alt="background" />
        </div>
      </div>
  )
}

export default Modal

import React, { useTransition } from 'react'
import MainHeader from '../MainHeader/MainHeader'
import back from '../../assets/images/back-btn.png'
import styles from './MentorForm.module.scss'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import icon from '../../assets/images/equer.svg'
import Footer from '../Footer/Footer'

const MentorForm = () => {
    let navigate = useNavigate();
    const { t } = useTranslation();
  return (
    <div>

<MainHeader/>
<img onClick={() => navigate(-1)} className={styles.back_btn} src={back} alt="" />

<div className={styles.form}>
    <h1 className={styles.mentroship_title}  >{t('mentorship_invite')} Girls for Girls!</h1>
    <div className={styles.mentorship_container}>
    <div className={styles.form_left}>
    <div className={styles.equer_block}>
        <img className={styles.equer_img} src={icon} alt="" />
        <p className={styles.equer_text}>{t('equer_1')}</p>
    </div>
    <div className={styles.equer_block}>
        <img className={styles.equer_img} src={icon} alt="" />
        <p className={styles.equer_text}>{t('equer_2')}</p>
    </div>
    <div className={styles.equer_block_last}>
        <div className={styles.equer_last_block}>
        <img className={styles.equer_img} src={icon} alt="" />
        <p className={styles.equer_text_purpe}>{t('req')}</p>
        </div>
    
        <p  className={styles.equer_text_last}>{t('req_text')}</p>
    </div>
    </div>
    <div className={styles.form_right}>
    <div className={styles.equer_block_last}>
        <div className={styles.equer_block}>
        <img className={styles.equer_img} src={icon} alt="" />
        <p className={styles.equer_text_purpe}>{t('req_last')}</p>
        </div>
    
        <p  className={styles.equer_text_last}>{t('req_last_date')}</p>
    </div> 
    <div className={styles.equer_block}>
        <img className={styles.equer_img} src={icon} alt="" />
        <p className={styles.equer_text}>{t(' not_for_all')}</p>
    </div>

    <button onClick={()=> {
        navigate('/mentor-form-submit')
    }} className={styles.submit}> {t('conf')}</button>
       </div>
    </div>

  
  

   
</div>

<Footer/>

    </div>
  )
}

export default MentorForm
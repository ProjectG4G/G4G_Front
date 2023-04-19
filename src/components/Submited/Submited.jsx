import React from 'react'
import MainHeader from '../MainHeader/MainHeader'
import back from '../../assets/images/back-btn.png'
import { useNavigate } from 'react-router-dom'
import styles from './Submited.module.scss'


const Submited = () => {
    let navigate = useNavigate();
  return (
    <div>
        <MainHeader/>

        <img onClick={() => navigate(-1)} className={styles.back_btn} src={back} alt="" />

        <div className={styles.submit}>


        </div>


    </div>
  )
}

export default Submited
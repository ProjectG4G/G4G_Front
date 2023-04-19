import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './MainTrainings.module.scss'
import MainHeader from '../MainHeader/MainHeader'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllTrainings } from '../../api/tranings'
import { format } from 'date-fns';
import Footer from '../Footer/Footer'

const MainTrainings = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { trainings, loading, error } = useSelector((state) => state.trainings);

    const selectedLanguage = localStorage.getItem('selectedLanguage');



    useEffect(() => {
      dispatch(fetchAllTrainings());
    }, [dispatch]);
  
  
  return (
    <>
    <MainHeader/>
    <div className={styles.main_tranings}>
            <div className={styles.tranings_container}>
            <h1 className={styles.title}>{t('main_tranings')}</h1>
            <p className={styles.incoming}>{t('incoming_tranings')}</p>
            <div className={styles.trainings}>
            {trainings.map((traning) => (
          <div className={styles.trainings_block} key={traning.id}    >
            <div className={styles.trainings_header}>
            <p className={styles.trainings_title}> {traning.translations.ru.title} </p>
            
            <p className={styles.data}>дата: {format(new Date(traning.created_at), 'yyyy-MM-dd')}</p>
            </div>

            <div className={styles.training_centre}>
              <button className={styles.trainings_btn}>{t('trainings_btn')}</button>
            <img src={traning.images[0].image} className={styles.trainings_img} alt="" />

            </div>
           
         </div>
        ))}
            </div>
      
            </div>
         
<Footer/>
    </div>
    </>

  )
}

export default MainTrainings
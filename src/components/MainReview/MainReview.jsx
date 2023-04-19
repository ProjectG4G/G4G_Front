import React from 'react'
import { useTranslation } from "react-i18next";
import styles from "./MainReview.module.scss";
import review1 from '../../assets/images/review1.jpg'
import review2 from '../../assets/images/review2.jpg'
import review3 from '../../assets/images/review3.jpg'

const MainReview = () => {
    const { t } = useTranslation();

  return (
    <section className={styles.main_review}>
                                      <h1 className='heading'>{t('our_girls_review')}</h1>

    <div className={styles.main_review_container}>
        <div className={styles.main_review_centre}>
        <div className={styles.main_review_block}>
            <div className={styles.main_review_top}>
                <img src={review1} alt="review_photo1" />
                <div className={styles.main_review_name}>Айдай Кадыровна</div>
            </div>
            <p className={styles.main_review_text}>{t('review_1')}</p>
        </div>
        <div className={styles.main_review_block}>
            <div className={styles.main_review_top}>
                <img src={review2} alt="review_photo2" />
                <div className={styles.main_review_name}>Акмарал Кайратовна</div>
            </div>
            <p className={styles.main_review_text}>{t('review_2')}</p>

        </div>
        <div className={styles.main_review_block}>
            <div className={styles.main_review_top}>
                <img src={review3} alt="review_photo3" />
                <div className={styles.main_review_name}>Аяна Ташматова</div>
            </div>
            <p className={styles.main_review_text}>{t('review_3')}</p>

        </div>
        </div>
   
    </div>

    </section>
  )
}

export default MainReview
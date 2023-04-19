import React from 'react'
import styles from './Adventages.module.scss'
const Adventages = () => {
  return (
    <section className={styles.advantages}>
    <div className={styles.advantages_container}>
        <div className={styles.advantages_card}>
            <div className={styles.advantages_card_description}>
                <span className={styles.advantages_card_title}>150+</span>
                <span className={styles.advantages_card_subtitle}>участниц</span>
            </div>
        </div>
        <div className={styles.advantages_card}>

                
            <div className={styles.advantages_card_description}>
                <span className={styles.advantages_card_title}>7+ </span>
                <span className={styles.advantages_card_subtitle}>областей</span>
            </div>
        </div>
        <div className={styles.advantages_card}>

                
            <div className={styles.advantages_card_description}>
                <span className={styles.advantages_card_title}>10+</span>
                <span className={styles.advantages_card_subtitle}>тренингов   </span>
                </div>
        </div>
    </div>
</section>
  )
}

export default Adventages
import React from "react";
import styles from "./Us.module.scss";
import { useTranslation } from "react-i18next";

const Us = () => {
    const { t } = useTranslation();

    return (
        <section className={styles.us}>
            <h1 className="heading">{t("possibilities_title")}</h1>

            <div className={styles.container}>
            <div className={styles.main_back_purple}></div>

              <div className={styles.left}>
                <div className={styles.left_block}>
                  <div className={styles.left_block_num}>1</div>
                  <p className={styles.left_block_text}>{t('possibilities_text1')}</p>
                </div>
                <div className={styles.left_block}>
                  <span className={styles.left_block_num}>2</span>
                  <p className={styles.left_block_text}>{t('possibilities_text2')}</p>
                </div>
                <div className={styles.left_block}>
                  <span className={styles.left_block_num}>3</span>
                  <p className={styles.left_block_text}>{t('possibilities_text3')}</p>
                </div>
                <div className={styles.left_block}>
                  <span className={styles.left_block_num}>4</span>
                  <p className={styles.left_block_text}>{t('possibilities_text4')}</p>
                </div>
                <div className={styles.left_block}>
                  <span className={styles.left_block_num}>5</span>
                  <p className={styles.left_block_text}>{t('possibilities_text5')}</p>
                </div>
              </div>


            </div>
        </section>
    );
};

export default Us;

import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Goals.module.scss";

const Goals = () => {
    const { t } = useTranslation();

    return (
        <section className={styles.goals}>
            <h1 className="heading">{t("our_targets")}</h1>
            <div className={styles.goals_container}>

              <div className={styles.goals_block}>
              <div className={styles.main_back_purple}></div>

              <p className={styles.goals_block_text}>{t('goals_subtitle2')}</p>
              <p className={styles.goals_block_text}>{t('goals_subtitle3')}</p>
              <p className={styles.goals_block_text}>{t('goals_subtitle4')}</p>
              <p className={styles.goals_block_text}>{t('goals_subtitle6')}</p>

              </div>

            </div>
        </section>
    );
};

export default Goals;

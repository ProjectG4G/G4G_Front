import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./MainContent.module.scss";
import { Link } from "react-scroll";
import bottom1 from '../../assets/images/bottom_1.jpg'
import bottom2 from '../../assets/images/bottom_2.jpg'
import bottom3 from '../../assets/images/bottom_3.jpg'

const MainContent = () => {
    const { t } = useTranslation();

    return (
        <main className={styles.main}>
            <div className={styles.main_container}>
                <div className={styles.main_text}>
                    <h1 className={styles.main_title}>{t("slogan")}</h1>
                    <Link
                        style={{ margin: "0 auto" }}
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        <button className={styles.main_scroll_btn}>
                            {t("main_scroll")}
                        </button>
                    </Link>
                </div>
                <div className={styles.main_img}>
                  <div className={styles.main_back_purple}></div>
                  <div className={styles.main_back_purple}></div>

                </div>
                <div className={styles.main_bottom}>

                  <p  className={styles.main_bottom_title}>{t('main_text1')}</p>
                  <p  className={styles.main_bottom_subtitle}>{t('main_text2')}</p>
                </div>

                <div className={styles.main_bottom_three}>
                  <img src={bottom1} alt="" />
                  <img src={bottom2} alt="" />
                  <img src={bottom3} alt="" />
                </div>
            </div>
        </main>
    );
};

export default MainContent;

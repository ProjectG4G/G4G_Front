import React from "react";
import { Link } from "react-router-dom";

import styles from "./Footer.module.scss";

import logo from "../../assets/images/logo.png";
import back from '../../assets/images/footer_back.svg.png'

import { useTranslation } from "react-i18next";
const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className={styles.footer}>
        <div className={styles.footer_container}>
          <div className={styles.footer_left}>
            <img src={logo} alt="logo" className={styles.footer_logo_img} />
            <p className={styles.footer_text}>{t('footer_text')}</p>
            <img src={back} alt="back_icon" className={styles.footer_back} />
          </div>

          <div className={styles.footer_navbar}>
          <ul>
<li>
    <Link to={'/'}>{t("main_title")}</Link>
</li>
<li>
    <Link to={'/mentors'}> {t("main_mentor")}</Link>
</li>
<li>
    <Link to={'/tranings'}>{t("main_trening")}</Link>
</li>
<li>
    <a href="">{t("main_video")}</a>
</li>
<li>
    <a href="">{t("main_shop")}</a>
</li>
</ul>
          </div>

          <div className={styles.footer_right}>
            <p>GirlsforGirls@gmail.com</p>
            <div className={styles.share}>

            <a target='_blank' href="https://www.instagram.com/girlsforgirls_kg/" className="fab fa-instagram"></a>
            <a target='_blank' href="https://www.instagram.com/girlsforgirls_kg/" className="fab fa-telegram"></a>

<a target='_blank'  href="https://www.youtube.com/@girlsforgirls_kg" className="fab fa-youtube"></a>
            </div>
          </div>


        </div>
        </footer>
    );
};

export default Footer;





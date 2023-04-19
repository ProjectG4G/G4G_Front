import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Link, useNavigate } from "react-router-dom";
import Backbtn from "../../../../assets/images/back-btn.png";

import styles from './ResMessage.module.scss'

export const ResMessage = ({toStep}) => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const {
        
        handleSubmit,
    
    } = useForm({
        mode: "onChange",
    });

    const [selectedLanguage, setSelectedLanguage] = useState(
        localStorage.getItem("selectedLanguage") || "ky"
    );

    useEffect(() => {
        i18next.changeLanguage(selectedLanguage);
        localStorage.setItem("selectedLanguage", selectedLanguage);
    }, [selectedLanguage]);

    const onChangeLangHandler = (event) => {
        setSelectedLanguage(event.target.value);
    };

    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
        navigate("login-country");
    };
    return (
        <div className="reg">
            <img
                className={styles.back_btn}
                onClick={() => toStep(4)}
                src={Backbtn}
                alt="back btn"
            />

            <div className={styles.reg_btns}>
                <div className={styles.reg_light}></div>
                <div className={styles.reg_light_active}></div>
                <div className={styles.reg_light}></div>
            </div>

            <form className={styles.reg_form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.block9}></div>

                <div className={styles.block2}>
                    <h1 className={styles.restore_email}>{t("restore_sendEmail")}</h1>
                </div>
                <div></div>

                <div className={styles.block5}>
                    <p>
                        {t("key_recall")}{" "}
                        <Link
                            onClick={()=> toStep(3)}
                            style={{
                                textDecoration: "none",
                                color: "#7F3A85",
                                cursor: "pointer",
                            }}
                        >
                            {t("reg_login")}
                        </Link>
                    </p>
                </div>
                <div className={styles.block6}>
                    <p>
                        {t("auth_acc")}{" "}
                        <Link
                            to={"/"}
                            style={{
                                textDecoration: "none",
                                color: "#7F3A85",
                                cursor: "pointer",
                            }}
                        >
                            {t("reg_submit")}
                        </Link>
                    </p>
                </div>

                <div className={styles.block7}>
                    <select
                        className={styles.select_css}
                        name="language"
                        id="language"
                        onChange={onChangeLangHandler}
                        value={selectedLanguage}
                    >
                        <option id="ky" value="ky">
                            кыргызча
                        </option>
                        <option id="ru" value="ru">
                            русский
                        </option>
                    </select>
                </div>
            </form>
        </div>
    );
};


import React, { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Link, useNavigate } from "react-router-dom";
import Backbtn from '../../../../assets/images/back-btn.png';
import styles from './Restore.module.scss'

const Restore = ({toStep}) => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(
      localStorage.getItem("selectedLanguage") || "ru"
    );
  
    useEffect(() => {
      i18next.changeLanguage(selectedLanguage);
      localStorage.setItem("selectedLanguage", selectedLanguage);
    }, [selectedLanguage]);
  
    const onChangeLangHandler = (event) => {
      setSelectedLanguage(event.target.value);
    };

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
       
    } = useForm({ 
       
        mode: "onChange" });

    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
    };
    return (
        <div className="reg">
                  <img className={styles.back_btn} onClick={()=> toStep(3)} src={Backbtn} alt="back btn" />

            <div className={styles.reg_btns}>
                <div className={styles.reg_light_active}></div>
                <div className={styles.reg_light}></div>
                <div className={styles.reg_light}></div>

            </div>

            <form className={styles.reg_form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.block9}>
              <h1 className={styles.restore_title}>{t('auth_restore_title')}</h1>
                  
                </div>

                <div className={styles.block2}>
            
                <input
                        placeholder="E-mail"
                        className={styles.password_confirm}
                        {...register("email", {
                            required: "поле обязательно к заполнению",
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "напишите правильный email",
                            },
                        })}
                    />
                           

         
                </div>
                {errors?.email && (
                        <p
                            style={{
                                color: "red",
                                marginTop: "10px",
                                paddingLeft: "15px",
                            }}
                        >
                            {errors?.email?.message}
                        </p>
                    )}

                <div>
                </div>

                <div className={styles.block4}>
                    <button
                        className={styles.reg_submit}
                        disabled={!isValid}
                        onClick={()=> {
                          toStep(5)
                        }}
                        type="submit"
                    >
                        {t("auth_newPass")}
                    </button>
                </div>

                <div className={styles.block5}>
                    <p>
                        {t("key_recall")}{" "}
                        <Link onClick={()=> toStep(3)}
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
                        <Link onClick={() => toStep(1)}
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
                        <option
                            id="ky"
                            value="ky"
                        >
                            кыргызча
                        </option>

                        <option
                         id="ru"
                            value="ru"
                        >
                            русский
                        </option>
                    </select>
                </div>

            </form>
        </div>
    );
};

export default Restore;

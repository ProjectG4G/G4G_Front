import React, { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { useData } from "../DataContext";
import Backbtn from '../images/back-btn.png';
import Email from "./Email";

const Restore = () => {
    const navigate = useNavigate();
    const {data,setValues} = useData();
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
        reset,
        watch,
        getValues,
    } = useForm({ 
        defaultValues: {
            firstName : data.firstName,
             lastName:data.lastName,
             email: data.email,
              password: data.password, 
              passwordСonfirm: data.passwordСonfirm
        },
        mode: "onChange" });

    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
        setValues(data);
    };
    return (
        <div className="reg three">
                  <img className="back_btn" onClick={()=> navigate(-1)} src={Backbtn} alt="back btn" />

            <div className="reg_btns">
                <div className="reg_light active"></div>
                <div className="reg_light "></div>
                <div className="reg_light"></div>

            </div>

            <form className="reg_form" onSubmit={handleSubmit(onSubmit)}>
                <div className="block9">
              <h1 className="restore_title">{t('auth_restore_title')}</h1>
                  
                </div>

                <div className="block2">
            
                <input
                        placeholder="E-mail"
                        className="password_confirm"
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

                <div className="block4">
                    <button
                        className="reg_submit btn"
                        disabled={!isValid}
                        onClick={()=> {
                          navigate('email')
                        }}
                        type="submit"
                    >
                        {t("auth_newPass")}
                    </button>
                </div>

                <div className="block5">
                    <p>
                        {t("key_recall")}{" "}
                        <Link to={'/auth'}
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
                <div className="block6">
                    <p>
                        {t("auth_acc")}{" "}
                        <Link to={'/'}
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

                <div className="block7">
                    <select
                        className="select-css"
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

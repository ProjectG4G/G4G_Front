import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useSelector,useDispatch } from "react-redux";
import {Link, useNavigate } from "react-router-dom";
import styles from './Login.module.scss'
import { login } from "../../../../features/auth/authSlice";

const Login = ({toStep}) => {
    const navigate = useNavigate();
    let dispatch = useDispatch();
    const { t } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(
        localStorage.getItem("selectedLanguage") || "ky"
    );
  
    const { isLoggedIn } = useSelector((state) => state.auth);
    const [loading, setLoading] = useState(false);

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
      
        mode: "onChange",
    });

    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
        const { email, password } = data;
        setLoading(true);
    
        dispatch(login({ email, password }))
          .unwrap()
          .then(() => {
            // navigate("/");
          })
          .catch(() => {
            setLoading(false);
          });
    };

    return (
        <div className="reg">
            <div className={styles.reg_btns}>
                <div className={styles.reg_light_active}></div>
                <div className={styles.reg_light}></div>
            </div>

            <form className={styles.reg_form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.block1}>
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
                <div className={styles.block2}>
                    <input
                        type="password"
                        placeholder={t("reg_password")}
                        className={styles.password_confirm}
                        {...register("password", {
                            required: "поле обязательно к заполнению",
                            minLength: {
                                value: 4,
                                message: "минимум 4 символа",
                            },
                        })}
                    />
                </div>
                <div>
                    {errors?.password && (
                        <p
                            style={{
                                color: "red",
                                marginTop: "10px",
                                paddingLeft: "15px",
                            }}
                        >
                            {errors?.password?.message}
                        </p>
                    )}
                </div>
                <div></div>

                <div className={styles.block4}>
                    <button
                        className={styles.reg_submit}
                        disabled={!isValid}
                        type="submit"
                        
                    >
                        {t("reg_login")}
                    </button>
                </div>

                <div className={styles.block5}>
                    <p>
                        {t("auth_forgotPass")}{" "}
                        <Link
                            onClick={()=> toStep(4)}
                            style={{
                                textDecoration: "none",
                                color: "#7F3A85",
                                cursor: "pointer",
                            }}
                        >
                            {t("auth_newPass")}
                        </Link>
                    </p>
                </div>
                <div className={styles.block6}>
                    <p>
                        {t("auth_acc")}{" "}
                        <Link
                           onClick={()=> toStep(1)}
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

export default Login;

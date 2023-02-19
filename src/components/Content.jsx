import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Content = () => {
    const { t } = useTranslation();
   const onChangeHandler = (e) => {
      const index = e.target.selectedIndex;
      const el = e.target.childNodes[index]
      const option =  el.getAttribute('id');  
      i18next.changeLanguage(option)
    }
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
        watch,
        getValues,
    } = useForm({ mode: "onChange" });

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset();
    };
    return (
        <div className="reg">
            <div className="reg_btns">
                <div className="reg_light active"></div>
                <div className="reg_light"></div>
            </div>

            <form className="reg_form" onSubmit={handleSubmit(onSubmit)}>
                <div className="block1">
                    <input
                        placeholder={t("reg_name")}
                        className="firstname"
                        {...register("firstName", {
                            required: "поле обязательно к заполнению",
                        })}
                    />

                    <input
                        placeholder={t("reg_surname")}
                        className="lastname"
                        {...register("lastName", {
                            required: "поле обязательно к заполнению",
                        })}
                    />
                </div>
                <div style={{ position: "relative" }}>
                    {errors?.lastName && (
                        <p
                            style={{
                                color: "red",
                                position: "absolute",
                                left: "52%",
                            }}
                        >
                            {errors?.lastName?.message || "Error"}
                        </p>
                    )}
                    {errors?.firstName && (
                        <p
                            style={{
                                color: "red",
                                marginTop: "10px",
                                paddingLeft: "15px",
                            }}
                        >
                            {errors?.firstName?.message || "Error"}
                        </p>
                    )}
                </div>

                <div className="block2">
                    <input
                        placeholder="e-mail"
                        className="email"
                        {...register("email", {
                            required: "поле обязательно к заполнению",
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "напишите правильный email",
                            },
                        })}
                    />

                    <input
                        type="password"
                        placeholder={t("reg_password")}
                        className="password"
                        {...register("password", {
                            required: "поле обязательно к заполнению",
                            minLength: {
                                value: 4,
                                message: "минимум 4 буквы",
                            },
                        })}
                    />
                </div>
                <div style={{ position: "relative" }}>
                    {errors?.password && (
                        <p
                            style={{
                                color: "red",
                                position: "absolute",
                                left: "52%",
                            }}
                        >
                            {errors?.password?.message || "Error"}
                        </p>
                    )}
                    {errors?.email && (
                        <p
                            style={{
                                color: "red",
                                marginTop: "10px",
                                paddingLeft: "15px",
                            }}
                        >
                            {errors?.email?.message || "Error"}
                        </p>
                    )}
                </div>
                <div className="block3">
                    <input
                        type="password"
                        placeholder={t("reg_password_confirm")}
                        className="password_confirm"
                        {...register("passwordСonfirm", {
                            required: "поле обязательно к заполнению",
                            validate: (val) => {
                                const { password } = getValues();
                                if (watch("password") != val) {
                                    return (
                                        password == val || "пароли не совпадают"
                                    );
                                }
                            },
                        })}
                    />
                </div>
                <div>
                    {" "}
                    {errors.passwordСonfirm && (
                        <p
                            style={{
                                color: "red",
                                marginTop: "10px",
                                paddingLeft: "15px",
                            }}
                        >
                            {errors.passwordСonfirm.message}
                        </p>
                    )}
                </div>

                <div className="block4">
                    <button
                        className="reg_submit btn"
                        disabled={!isValid}
                        type="submit"
                    >
                        {t("reg_submit")}
                    </button>
                </div>

                <div className="block5">
                    <p>
                        {t("reg_checkReg")}{" "}
                        <a
                            style={{
                                textDecoration: "none",
                                color: "#7F3A85",
                                cursor: "pointer",
                            }}
                            href=""
                        >
                            {t("reg_login")}
                        </a>{" "}
                    </p>
                </div>
                <div className="block6">
                    <div className="round">
                        <input
                            className="checkbox"
                            type="checkbox"
                            id="checkbox"
                            {...register("confirm", {
                                required: true,
                            })}
                        />
                        <label htmlFor="checkbox"></label>
                    </div>
                    <p>
                        я согласен с условиями{" "}
                        <a
                            target="_blank"
                            style={{
                                textDecoration: "none",
                                color: "#7F3A85",
                                cursor: "pointer",
                            }}
                            href="https://eshop.elit.ua/imgbank/file/%D0%9F%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B5%20%D1%81%D0%BE%D0%B3%D0%BB%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%B5.pdf"
                        >
                            пользовательского соглашения
                        </a>{" "}
                    </p>
                </div>
                <div className="block7">
                    <select
                        className="select-css"
                        name="language"
                        id="language"
                        onChange={onChangeHandler}
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

export default Content;

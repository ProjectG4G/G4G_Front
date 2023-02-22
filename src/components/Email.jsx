import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { useData } from "../DataContext";
import Backbtn from "../images/back-btn.png";

const Email = () => {
    const navigate = useNavigate();
    const { data, setValues } = useData();
    const { t } = useTranslation();
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
        watch,
        getValues,
    } = useForm({
        defaultValues: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
            passwordСonfirm: data.passwordСonfirm,
        },
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
        setValues(data);
        navigate("login-country");
    };
    return (
        <div className="reg three">
            <img
                className="back_btn"
                onClick={() => navigate(-1)}
                src={Backbtn}
                alt="back btn"
            />

            <div className="reg_btns">
                <div className="reg_light"></div>
                <div className="reg_light active "></div>
                <div className="reg_light"></div>
            </div>

            <form className="reg_form" onSubmit={handleSubmit(onSubmit)}>
                <div className="block9"></div>

                <div className="block2">
                    <h1 className="restore_email">{t("restore_sendEmail")}</h1>
                </div>
                <div></div>

                <div className="block5">
                    <p>
                        {t("key_recall")}{" "}
                        <Link
                            to={"/auth"}
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

                <div className="block7">
                    <select
                        className="select-css"
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

export default Email;

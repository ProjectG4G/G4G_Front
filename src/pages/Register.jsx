import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RegisterView } from '../components/RegisterView';
import { setLanguage } from '../redux/slices/generalSlice';
import { register as registerNewUser } from '../api/auth';
import { setRegister } from '../adapter/auth';
import { useTranslation } from 'react-i18next';
import {toast } from "react-toastify";

export function Register() {
    const { t } = useTranslation()
    let dispatch = useDispatch()
    const { language } = useSelector(state => state.general);
    let navigate = useNavigate()

    const handleLanguageChange = e => {
        dispatch(setLanguage(e.target.value));
    }
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        watch,
        getValues,
    } = useForm({mode: "onChange"});
    


    function handleFormSubmit(data) {
        const cb = (validForm) => {
            dispatch(registerNewUser(validForm))
              .then((res) => {
                if (res.meta.requestStatus === 'fulfilled') {
                  toast.success(t('send_email'), {
                    autoClose: 1000, 
                    onClose: () => {
                      navigate('/login');
                    },
                  });
                }
                else {
                    toast.error(t('register_error'), {
                        autoClose: 1000, 
                        onClose: () => {
                          navigate('/register');
                        },
                      });

                }
              })
              .catch((error) => {
                console.log(error);
                toast.error('Ошибка регистрации');
              });
          };
        setRegister(cb, data);
    }

    const emailProps = register("email", {
        required: "поле обязательно к заполнению",
        pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "напишите правильный email",
        }
    });

    const passwordProps = register("password", {
        required: "поле обязательно к заполнению",
        minLength: {
            value: 8,
            message: "8 минимум  символов",
        }
    });
    const passwordConfirmProps = register("passwordСonfirm", {
        required: "поле обязательно к заполнению",
        validate: (val) => {
            const { password } = getValues();
            if (watch("password") !== val) {
                return (
                    password === val || "пароли не совпадают"
                );
            }
        },
    })
    const firstNameProps =    register("first_name", {
        required: "поле обязательно к заполнению",
    })
    const lastNameProps =    register("last_name", {
        required: "поле обязательно к заполнению",
    })
    const checkBox = register("confirm", {
        required: true,
    })
    const districtProps =  register("district")
    const regionProps =   register("region", { required: true })

    

    return (
        <RegisterView 
            onFormSubmit={handleSubmit(handleFormSubmit)}
            emailProps={emailProps}
            checkBox={checkBox}
            passwordProps={passwordProps}
            errors={errors}
            isValid={isValid}
            passwordConfirmProps={passwordConfirmProps}
            firstNameProps={firstNameProps}
            lastNameProps = {lastNameProps}
            handleLanguageChange={handleLanguageChange}
            regionProps={regionProps}
            districtProps={districtProps}
            language={language}/>
            
    );
}
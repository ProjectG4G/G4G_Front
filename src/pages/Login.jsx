import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { LoginView } from '../components/LoginView';
import { login } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
export function Login() {
    const { t } = useTranslation()

    const { language } = useSelector(state => state.general);
    let dispatch = useDispatch()
    let navigate = useNavigate()
    const {
        register,
        formState: { errors, isValid },
        handleSubmit
    } = useForm({mode: "onChange"});

    function handleFormSubmit(data) {
        console.log('Submit!',data);
        dispatch(login(data)).then((res)=> {
            if(res.meta.requestStatus === "fulfilled"){
                console.log(data)
                localStorage.setItem('UserPass',data.password)
                toast.success(t('succes_login'), {
                    autoClose: 2000, 
                    onClose: () => {
                      navigate('/');
                    },
                  });
            }
            else if(res.meta.requestStatus === "rejected") { 
                toast.error(t('login_error'), {
                    autoClose: 2000, 
                    onClose: () => {
                    },
                    className: "toast-message" 
                });
                
            }
          
        })
       
    
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




    return (
        <LoginView 
            onFormSubmit={handleSubmit(handleFormSubmit)}
            emailProps={emailProps}
            passwordProps={passwordProps}
            errors={errors}
            isValid={isValid}
            language={language}/>
    );
}
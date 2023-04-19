import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { reset } from '../api/auth';
import { ResetView } from '../components/ResetEmail';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

export function Reset() {
    const { t } = useTranslation()

    const { language } = useSelector(state => state.general);
    let dispatch = useDispatch();
   let  navigate = useNavigate()
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        watch,
        getValues,
    } = useForm({mode: "onChange"});
    

    function handleFormSubmit(data) {
        console.log(data);
        dispatch(reset(data)).then(res => {
            console.log(res)
            if (res.meta.requestStatus === 'fulfilled') {
                navigate('/reset-password/show');


              }
              else {
                toast.error(t('email_not_include'), {
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

   


    return (
        <ResetView 
            onFormSubmit={handleSubmit(handleFormSubmit)}
            emailProps={emailProps}
            errors={errors}
            isValid={isValid}
            language={language}/>
            
    );
}
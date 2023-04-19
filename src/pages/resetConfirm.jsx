import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { reset } from '../api/auth';
import { ResetView } from '../components/ResetEmail';
import { ResetShow } from '../components/ResetShow';
import { ResetPassConfirm } from '../components/ResetPassConfirm/ResetPassConfirm';

export function ResetShowMEs() {
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
            
        })
        
    }

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
   
    return (
        <ResetPassConfirm
        onFormSubmit={handleSubmit(handleFormSubmit)}
        passwordProps={passwordProps}
        errors={errors}
        isValid={isValid}
        passwordConfirmProps={passwordConfirmProps}
        language={language}/>
            
    );
}
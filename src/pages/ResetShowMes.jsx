import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { reset } from '../api/auth';
import { ResetView } from '../components/ResetEmail';
import { ResetShow } from '../components/ResetShow';

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
   
    return (
        <ResetShow
        onFormSubmit={handleSubmit(handleFormSubmit)}
        errors={errors}
        isValid={isValid}
        language={language}/>
            
    );
}
import styles from './ResetPass.module.scss';
import { useTranslation } from "react-i18next";
import {Link, useParams} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Logo from '../Logo/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../redux/slices/generalSlice';
import { useEffect, useState } from 'react';
import { setNewPassword, validateToken } from '../../api/auth';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

export const ResetPassConfirm = ()  => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [tokenChecked, setTokenChecked] = useState('Loading');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const {token} = useParams();


    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        watch,
        getValues,
    } = useForm({mode: "onChange"});
    


    
    useEffect(() => {
      dispatch(validateToken({token}))
      .unwrap()
      .then((res) => {
        if (res.status === 'OK') {
          setTokenChecked(true);
        }
        else {
          setTokenChecked(false);
        }
      })
      .catch(() => setTokenChecked(false));
    }, []);
  
    function onResetPassword() {
      if (password === confirmPassword) {
        dispatch(setNewPassword({password, token}))
        .unwrap()
        .then((res) => {
          if (res.status === 'OK') {
            toast.success(t('pass_change_success'), {
                autoClose: 1000, 
                onClose: () => {
                  navigate('/login');
                },
              });
                     }
                     else {
                        toast.error(t('pass_change_err'), {
                            autoClose: 1000, 
                            onClose: () => {
                              navigate('/login');
                            },
                          });
                     }
        })
      }
    }
    const { language } = useSelector(state => state.general);
    

    const handleLanguageChange = e => {
        dispatch(setLanguage(e.target.value));
    }
    
    const { t } = useTranslation();
    return (

    <div className={styles.reset_pass_confirm}>
    <div className='header'>
    <Header/>
    </div>
    <div className='Logo'>
      <Logo/>
      </div>
      <div className='content'>
      <div className="reg">

            <div className={styles.reg_btns}>
                <div className={styles.reg_light}></div>
                <div className={styles.reg_light}></div>
                <div className={styles.reg_light_active}></div>

            </div>

            <form className={styles.reg_form}>
                <div className={styles.block9}>
              <h1 className={styles.restore_title}>{t('create_new_pass')}</h1>
                  
                </div>

                <div className={styles.block2}>
            
                <input
                        placeholder={t('new_pass')}
                        className={styles.password_confirm}
                        {...register("password", {
                            required: "поле обязательно к заполнению",
                            minLength: {
                                value: 8,
                                message: "минимум 8 символов",
                            },
                        })}
                        type="password" onChange={({target}) => setPassword(target.value)}
                    />
              <div style={{ position: "relative" }}>
            {errors?.password && (
                <p
                    style={{
                        color: "red",
                        position: "absolute",
                        left: "52%",
                    }}
                >
                    {errors?.password?.message}
                </p>
            )}
            </div>
             

         
                </div>
                
         
                            <div className={styles.block2}>
            
            <input
                    placeholder={t('check_pass')}
                    className={styles.password_confirm}
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
                    type="password" onChange={({target}) => setConfirmPassword(target.value)}                />
                       

     
            </div>

                <div>
                </div>

                <div className={styles.block4}>
                    <button
                        className={styles.reg_submit}
                        type="button" onClick={onResetPassword}
                        disabled={!isValid}

                    >
                        {t("auth_newPass")}
                    </button>
                </div>
   

                <div className={styles.block5}>
                    <p>
                        {t("key_recall")}{" "}
                        <Link to={'/login'}
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
                        <Link to={'/register'}
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
                        value={language}
                        onChange={handleLanguageChange}
                       
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


      </div>

  
     
  </div>

    )

}

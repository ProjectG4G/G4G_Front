import styles from './style.module.scss';
import { useTranslation } from "react-i18next";
import {Link} from "react-router-dom";

import Header from '../Header';
import Logo from '../Logo/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../redux/slices/generalSlice';

export function LoginView({onFormSubmit, emailProps, passwordProps, errors, isValid}) {
    const { t } = useTranslation();
    let dispatch = useDispatch()
    const { language } = useSelector(state => state.general);

    const handleLanguageChange = e => {
        dispatch(setLanguage(e.target.value));
    }

    
  
    return (
        <div className={styles.login}>
   
        <div className='Logo'>
          <Logo/>
          </div>
          <div className='content'>
          <div className="reg">
            <div className={styles.reg_btns}>
                <div className={styles.reg_light_active}></div>
                <div className={styles.reg_light}></div>
            </div>

            <form className={styles.reg_form} onSubmit={onFormSubmit}>
                <div className={styles.block1}>
                <input
                        placeholder='e-mail'
                        className={styles.email_input}
                        {...emailProps}/>
            
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
                        className={styles.password_input}
                        {...passwordProps}/>
                    
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
                        to={'/reset-password'}
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
                        to={"/register"}
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
                             value={language}
                             onChange={handleLanguageChange}
                        className={styles.select_css}
                        name="language"
                        id="language"
                    
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
          </div>
   
      
         
      </div>
    );
}
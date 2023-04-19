
import styles from './style.module.scss';
import { useTranslation } from "react-i18next";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Logo from '../Logo/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../redux/slices/generalSlice';
export const ResetView = ({onFormSubmit, emailProps, passwordProps, errors,passwordConfirmProps, isValid})  => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { language } = useSelector(state => state.general);

    const handleLanguageChange = e => {
        dispatch(setLanguage(e.target.value));
    }
    const { t } = useTranslation();
    const isEmailValid = !errors.email; 
    return (

    <div className={styles.resetEmail}>

    <div className='Logo'>
      <Logo/>
      </div>
      <div className='content'>
      <div className="reg">

            <div className={styles.reg_btns}>
                <div className={styles.reg_light_active}></div>
                <div className={styles.reg_light}></div>
                <div className={styles.reg_light}></div>

            </div>

            <form className={styles.reg_form} onSubmit={onFormSubmit}>
                <div className={styles.block9}>
              <h1 className={styles.restore_title}>{t('auth_restore_title')}</h1>
                  
                </div>

                <div className={styles.block2}>
            
                <input
                        placeholder="E-mail"
                        className={styles.password_confirm}
                        {...emailProps}
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

                <div>
                </div>

                <div className={styles.block4}>
                    <button
                        className={styles.reg_submit}
                        disabled={ !isEmailValid}
                        type="submit"
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
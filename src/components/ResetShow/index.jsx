
import styles from './style.module.scss';
import { useTranslation } from "react-i18next";
import {Link, useParams} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Logo from '../Logo/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../redux/slices/generalSlice';
export const ResetShow = ({ isValid})  => {
    let navigate = useNavigate();
    const { language } = useSelector(state => state.general);

    const handleLanguageChange = e => {
        dispatch(setLanguage(e.target.value));
    }
    const dispatch = useDispatch();
    const { t } = useTranslation();

    

    
    return (

    <div className={styles.reset_show}>

      <Logo/>
      <div className='content'>
      <div className="reg">
       

            <div className={styles.reg_btns}>
                <div className={styles.reg_light}></div>
                <div className={styles.reg_light_active}></div>
                <div className={styles.reg_light}></div>
            </div>

                <div className={styles.block9}></div>

                <div className={styles.block2}>
                    <h1 className={styles.restore_email}>{t("restore_sendEmail")}</h1>
                </div>
                <div></div>

                <div className={styles.block5}>
                    <p>
                        {t("key_recall")}{" "}
                        <Link
                        to={'/login'}
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
                        className={styles.select_css}
                        name="language"
                        id="language"
                        value={language}
                        onChange={handleLanguageChange}
                     
                    >
                        <option id="ky" value="ky">
                            кыргызча
                        </option>
                        <option id="ru" value="ru">
                            русский
                        </option>
                    </select>
                </div>
        </div>


      </div>

  
     
  </div>

    )

}
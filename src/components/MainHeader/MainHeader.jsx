import React, {useState,useEffect} from 'react'
import logo from '../../assets/images/logo.png'
import i18next from "i18next";
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { useCallback } from 'react';
// import { logout } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import {useTranslation } from "react-i18next";
import styles from './MainHeader.module.scss'
import user from '../../assets/images/user.png'
import { setLanguage } from '../../redux/slices/generalSlice';
import { setLogout } from '../../redux/slices/authSlice';
import Default from '../../assets/images/default.jpeg'

import shop from '../../assets/images/icon_shop.png'

const MainHeader = () => {
    const navigate = useNavigate();
    const [open,setOpen] = useState('');
    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
  
   
  
    const { t } = useTranslation();
  
      const { language } = useSelector(state => state.general);

      const handleLanguageChange = e => {
          dispatch(setLanguage(e.target.value));
      }
    
      useEffect(() => {
        i18next.changeLanguage(language);
        localStorage.setItem("selectedLanguage", language);
      }, [language]);

  return (
    <header className={styles.main_header}>
        <div  className={`${styles.navbar} ${styles.navbar} ? ${styles.scrolled} : ''}`} >
        <img className={styles.main_logo} src={logo} alt="logo" />

<ul>
<li>
  <Link to={'/'}>{t('main_title')}</Link>
  </li>
<li>
<Link to={'/mentors'}>{t('main_mentor')}</Link>
</li>
<li>
<Link to={'/tranings'}>{t('main_trening')}</Link>
  </li>

<li>
<Link to={'/shop'}>{t('main_shop')}</Link>
  </li>
</ul>
<select
                        className={styles.select_lang}
                        name="language"
                        id="language"
                        value={language}
                        onChange={handleLanguageChange}
                    >
                    
                        <option id="ky" value="ky">
                          🇰🇬 кыргызча
                        </option>
                        <option id="ru" value="ru"> 
                        
                        🇷🇺  русский
                        </option>
                    </select>
                    
                      {currentUser ? (
                        <div className={styles.profile_block}>

                          <img className={styles.shop_icon} src={shop} alt="" />
                          
                          <img onClick={() => {
                            setOpen(!open)
                          }} className={styles.profile_img} src={currentUser.profile_picture ? currentUser.profile_picture : Default}>
                            
                        
                            </img>      
                            {open && (
                              <ul className={styles.dropdown}>
                                {currentUser.is_staff
? (
  <li onClick={()=> {
    navigate('/admin-panel')
  }} className={styles.dropdown_item_admin}  >Админ панель</li>
) : ''}
                                <li onClick={()=> {
                                  navigate('/profile')
                                }} className={styles.dropdown_item}  >Профиль</li>
                                <li onClick={() => {
                                  dispatch(setLogout())
                                  navigate('/')
                                }} className={styles.dropdown_item}  >{t('logout')}</li>

                              </ul>
                            )}              
                        </div>
                      ) : (
<button onClick={()=> {
navigate('/register')}} className={styles.main_submit}>{t("reg_submit")}</button>
                      )}
                    

        </div>
 
    </header>
  )
}

export default MainHeader
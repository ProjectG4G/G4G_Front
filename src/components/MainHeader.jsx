import React, {useState,useEffect} from 'react'
import logo from '../images/logo.png'
import i18next from "i18next";
import { Navigate, useNavigate } from 'react-router-dom';
import {useTranslation } from "react-i18next";

const MainHeader = () => {
    const navigate = useNavigate();

    const [navbar, setNavbar] = useState(false);

    const setWhiteBar = () => {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
  
    window.addEventListener("scroll", setWhiteBar);

    const { t } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(
        localStorage.getItem("selectedLanguage") || "ky"
      );
    
      useEffect(() => {
        i18next.changeLanguage(selectedLanguage);
        localStorage.setItem("selectedLanguage", selectedLanguage);
      }, [selectedLanguage]);
    
      const onChangeLangHandler = (event) => {
        setSelectedLanguage(event.target.value);
      };


  return (
    <div className='main_header'>
        <div  className={`navbar ${navbar ? 'scrolled' : ''}`} >
        <img className='main_logo' src={logo} alt="logo" />

<ul>
<li><a href="">{t('main_title')}</a></li>
<li><a href=""> {t('main_mentor')}</a></li>
<li><a href="">{t('main_trening')}</a></li>
<li><a href="">{t('main_video')}</a></li>
<li><a href="">{t('main_shop')}</a></li>
</ul>
<select
                        className="select-lang"
                        name="language"
                        id="language"
                        onChange={onChangeLangHandler}
                        value={selectedLanguage}
                    >
                        <option id="ky" value="ky">
                            кыргызча
                        </option>

                        <option id="ru" value="ru">
                            русский
                        </option>
                    </select>
<button onClick={()=> {
navigate('/login')
}} className='main_submit'>{t("reg_submit")}</button>
        </div>
 
    </div>
  )
}

export default MainHeader
import {useTranslation } from "react-i18next";
import Header from '../components/Header'
import Logo from '../components/Logo'
import '../App.css'
import { Route, Routes, Link } from "react-router-dom";
import SelectCountry from "../components/SelectCountry";



function Country() {
  const { t } = useTranslation();

  return (
    <div className="Login">
      <div className='header'>
      <Header/>
      </div>
      <div className='Logo'>
        <Logo/>
        </div>
        <div className='content'>
        <SelectCountry/>
        </div>
 
    
       
    </div>
  );
}

export default Country;
import {useTranslation } from "react-i18next";
import Header from '../components/Header'
import Log from '../components/Log'
import Logo from '../components/Logo'
import '../App.css'
import { Route, Routes, Link } from "react-router-dom";
import Restore from "../components/Restore";
import Auto from "../components/Auto";
import MainHeader from "../components/MainHeader";
function Main() {
  const { t } = useTranslation();

  return (
    <div className="main">
      <div className='main_header'>
      <MainHeader/>
      </div>
      <div className='main_container'>
        <Logo/>
        </div>
        <div className='about'>
        <Restore/>
        </div>
 <div className="goals">
 <Restore/>
 </div>

 <div className="features">
 <Logo/>

 </div>
 <footer>

 </footer>
    
       
    </div>
  );
}

export default Main;
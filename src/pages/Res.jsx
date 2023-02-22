import {useTranslation } from "react-i18next";
import Header from '../components/Header'
import Log from '../components/Log'
import Logo from '../components/Logo'
import '../App.css'
import { Route, Routes, Link } from "react-router-dom";
import Restore from "../components/Restore";
import Auto from "../components/Auto";

function Res() {
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
        <Restore/>

        </div>
 
    
       
    </div>
  );
}

export default Res;
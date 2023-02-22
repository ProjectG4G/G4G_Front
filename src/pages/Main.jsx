import {useTranslation } from "react-i18next";
import Header from '../components/Header'
import Log from '../components/Log'
import Logo from '../components/Logo'
import '../App.css'
import { Route, Routes, Link } from "react-router-dom";
import Restore from "../components/Restore";
import Auto from "../components/Auto";
import MainHeader from "../components/MainHeader";
import MainContent from "../components/MainContent";
import MainAbout from "../components/MainAbout";
import Goals from "../components/Goals";
import Features from "../components/Features";
import Footer from "../components/Footer";
function Main() {
  const { t } = useTranslation();

  return (
    <div className="main">
      <div>
      <MainHeader/>
      </div>
      <div>
        <MainContent/>
        </div>
        <div>
        <MainAbout/>
        </div>
 <div>
 <Goals/>
 </div>

 <div>
<Features/>
 </div>
 <footer>
    <Footer/>

 </footer>
    
       
    </div>
  );
}

export default Main;
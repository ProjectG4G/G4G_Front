import '../App.css'

import MainHeader from "../components/MainHeader/MainHeader";
import MainContent from "../components/MainContent/MainContent";
import MainAbout from "../components/MainAbout/MainAbout";
import Goals from "../components/MainGoals/Goals";
import Features from "../components/MainFeatures/Features";
import Footer from "../components/Footer/Footer";
import React from "react";
import Us from "../components/MainUs/Us";
import Adventages from "../components/MainAdvengtages/Adventages";
import MainReview from '../components/MainReview/MainReview';

function Main() {

  return (
    <>
   {/* <Modal/> */}
       <MainHeader/>
        <MainContent/>
        <MainAbout/>
 <Goals/>
<Us/>
<MainReview/>
<Adventages/>
<Features/>
    <Footer/> 


    
    </>
  );
}

export default Main;
import {useTranslation } from "react-i18next";
import Header from '../components/Header'
import Content from '../components/Content'
import Logo from '../components/Logo'
import '../App.css'



function Login() {
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
        <Content/>

        </div>
 
    
       
    </div>
  );
}

export default Login;
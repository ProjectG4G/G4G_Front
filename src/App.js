import './App.css';
import {useTranslation } from "react-i18next";
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import Country from './pages/Country';
import Auth from './pages/Auth';
import Restore from './components/Restore';
import Res from './pages/Res';
import EmailPage from './pages/EmailPage';
import Main from './pages/Main.jsx';
function App() {
  const { t } = useTranslation();

  return (
    <div className="App">   
    <Routes>
      <Route path='/' element={<Main/>}></Route> 
      <Route path='/login' element={<Login/>}></Route> 

      <Route path='/login-country' element={<Country/>}></Route>   
      <Route path='/auth' element={<Auth/>}></Route>      
      <Route path='/auth/restore' element={<Res/>}></Route>      
      <Route path='/auth/restore/email' element={<EmailPage/>}></Route>      


   
     
      </Routes>  
  </div>
  );
}

export default App;

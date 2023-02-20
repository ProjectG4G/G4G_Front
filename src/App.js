import './App.css';
import {useTranslation } from "react-i18next";
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import Country from './pages/Country';



function App() {
  const { t } = useTranslation();

  return (
    <div className="App">   
    <Routes>
      <Route path='/' element={<Login/>}></Route> 
      <Route path='/login-country' element={<Country/>}></Route>      
     
      </Routes>  
  </div>
  );
}

export default App;

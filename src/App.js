
import './App.css';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import Main from './pages/Main.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { LOGGED_ROUTES, UNLOGGED_ROUTES } from './constants/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';
import { PublicApi } from './api/api';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header'
import Logo from './components/Logo/Logo';
import { Link } from 'react-router-dom';
import { setNewPassword, validateToken } from './api/auth';
import { ResetPassConfirm } from './components/ResetPassConfirm/ResetPassConfirm';
import { setLanguage } from './redux/slices/generalSlice';

const NotFound = () => (<>Page not found</>);


function App() {
  const { isLogged, user } = useSelector(state => state.auth);
  return (
    <div className="App">   
      <Routes>
        <Route path='/' element={<Main/>} />
        {
          isLogged ?
          LOGGED_ROUTES.map((item, index) => <Route key={index} path={item.path} element={item.element} />)
          :
          UNLOGGED_ROUTES.map((item, index) => <Route key={index} path={item.path} element={item.element} />)
        }
        {

        }

        {/* <Route path="/auth/reset-password/:token" element={<ResetPassword />}/>   */}
         <Route path="/auth/reset-password/:token" element={<ResetPassConfirm />}/> 

        <Route path="/*" element={<NotFound />}/>
      </Routes>
      <ToastContainer/>
  </div>
  );
}

export default App;


import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import './i18next'
import { store } from './redux/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>

  <React.StrictMode>
        <BrowserRouter>
    <Suspense fallback='loadin...'>
    <App />
    </Suspense>
    </BrowserRouter>  
  
  </React.StrictMode>
  </Provider>

);

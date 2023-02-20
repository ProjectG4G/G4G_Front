import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import './i18next'
import { DataProvider } from './DataContext'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <DataProvider>
        <BrowserRouter>
    <Suspense fallback='loadin...'>
    <App />
    </Suspense>
    </BrowserRouter>
</DataProvider>
  
  
  </React.StrictMode>
);

import './App.css';
import {useTranslation } from "react-i18next";
import Login from './pages/Login';



function App() {
  const { t } = useTranslation();

  return (
    <div className="App">     
    <Login/>
  </div>
  );
}

export default App;

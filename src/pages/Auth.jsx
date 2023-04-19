import Header from '../components/Header'
import { useState } from 'react';
import Logo from '../components/Logo/Logo'
import '../App.css'
import {Register} from './auto/forms/Register/Register'
import SelectCountry from './auto/forms/SelectCountry/SelectCountry';
import Restore from './auto/forms/Restore/Restore';
import { useNavigate } from 'react-router-dom';
import { ResMessage } from './auto/forms/ResMessage/ResMessage';
import Login from '../pages/auto/forms/Login/Login'
function Auth() {
  let navigate = useNavigate()
  
  const [step, setStep] = useState(1);
	const [userData, setUserData] = useState('')
	const toStep = (val) => {
		setStep(val);
	};


	const view = () => {
		switch (step) {
			case 1:
				return <Register toStep={toStep} />;
			case 2:
				return   <SelectCountry toStep={toStep} />;
			case 3:
				return <Login toStep={toStep}/>;
			case 4:
				return <Restore toStep={toStep} />;
        case 5:
          return <ResMessage toStep={toStep} />;
			default:
				return;
		}
	};

  return (
    <div className="Login">
      <div className='header'>
      <Header/>
      </div>
      <div className='Logo'>
        <Logo/>
        </div>
        <div className='content'>
        {view()}

        </div>
 
    
       
    </div>
  );
}

export default Auth;
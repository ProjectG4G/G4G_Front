import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import styles from './MentorFormSubmit.module.scss'
import MainHeader from '../MainHeader/MainHeader';
import back from '../../assets/images/back-btn.png'
import { useNavigate } from 'react-router-dom';

const MentorFormSubmit = () => {
    let navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [region, setRegion] = useState("");
    const { t } = useTranslation();

    const regions = [
        "Бишкек",
        "Нарын",
        "Талас",
        "Ош",
        "Баткен",
        "Ыссык-куль",
        "Джалал-Абад"
      ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        // You can access the form values using the state variables (firstName, lastName, email, region)
        console.log("Form submitted with values:");
        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        console.log("Email:", email);
        console.log("Region:", region);
      };
  return (
    <div>
        <MainHeader/>
        <img onClick={() => navigate(-1)} className={styles.back_btn} src={back} alt="" />

        <div className={styles.form_submit}>
            <div className={styles.reg_block}>
                <div className={styles.lights}>
                <div className='reg_light_active'></div>
            <div className='reg_light'></div>
                </div>
         

            <form className={styles.forms} onSubmit={handleSubmit}>
      <label className={styles.label}>
        <input

        className={styles.input_design}
          type="text"
          placeholder='имя'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label className={styles.label}>
        <input
        className={styles.input_design}
          type="text"
          placeholder='фамилие'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <label className={styles.label}>
        <input
        className={styles.input_design}
          type="text"
          placeholder='номер телефона'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className={styles.label}>
        <input
        className={styles.input_design}
          type="email"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className={styles.label}>
        <select value={region} onChange={(e) => setRegion(e.target.value)}>
          <option value="">регион</option>
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </label>
      <button onClick={() => navigate('/mentor-form-submited')} className={styles.submit} type="submit">{t('conf')}</button>
    </form>
            </div>


            <div>
   
            </div>
            
        </div>

    </div>
  )
}

export default MentorFormSubmit
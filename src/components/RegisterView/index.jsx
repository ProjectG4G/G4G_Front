import { useTranslation } from "react-i18next";
import {Link} from "react-router-dom";
import styles from './style.module.scss'
import Header from '../Header';
import Logo from '../Logo/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../redux/slices/generalSlice';
import { useEffect, useState } from 'react';
import i18next from 'i18next';
import { fetchData } from '../../api/geo';


export function RegisterView({onFormSubmit,districtProps,regionProps,checkBox,handleLanguageChange,language, emailProps, passwordProps, errors,firstNameProps,lastNameProps,passwordConfirmProps, isValid}) {
    const { t } = useTranslation();
    const geo = useSelector(state => state.data);
    const dispatch = useDispatch();

 

    const [showSecondForm, setShowSecondForm] = useState(false);
    useEffect(() => {
      dispatch(fetchData());
      
  }, []);

  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
    setSelectedDistrict('');
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };

  let valid = !errors.first_name &&  !errors.last_name && !errors.password && passwordProps.length > 7   && !errors.email && !errors.password_confirm  && passwordConfirmProps.length > 7

  const getDistrictOptions = () => {
    if (selectedRegion && geo.districts[selectedRegion]) {
      const districtEntries = Object.entries(geo.districts[selectedRegion]);
      return districtEntries.map(([districtKey, districtValue]) => ({
        value: districtValue,
        label: districtKey
      }));
    }
    return null;
  };


   
    return (

    <div className={styles.register}>
 
      <Logo/>
      <div className='content'>
     
<div className={styles.reg}>
    <div className={styles.reg_btns}>
        <div className={!showSecondForm? styles.reg_light_active  : styles.reg_light }></div>
        <div className={showSecondForm? styles.reg_light_active  : styles.reg_light }></div>
    </div>

    <form className={styles.reg_form} onSubmit={onFormSubmit}>
        {!showSecondForm ? (
            <div>
                       <div className={styles.block1}>
            <input
                placeholder={t("reg_name")}
                className={styles.firstname}
              {...firstNameProps}
            />

            <input
                placeholder={t("reg_surname")}
                className={styles.lastname}
             {...lastNameProps}
            />
        </div>
        <div style={{ position: "relative" }}>
            {errors?.last_name && (
                <p
                    style={{
                        color: "red",
                        position: "absolute",
                        left: "52%",
                    }}
                >
                    {errors?.last_name?.message}
                </p>
            )}
            {errors?.first_name && (
                <p
                    style={{
                        color: "red",
                        marginTop: "10px",
                        paddingLeft: "15px",
                    }}
                >
                    {errors?.first_name?.message}
                </p>
            )}
        </div>

        <div className={styles.block2}>
            <input
                placeholder="E-mail"
                className={styles.email}
                    {...emailProps}
            />

            <input
                type="password"
                placeholder={t("reg_password")}
                className={styles.password}
                {...passwordProps}
            />
        </div>
        <div style={{ position: "relative" }}>
            {errors?.password && (
                <p
                    style={{
                        color: "red",
                        position: "absolute",
                        left: "52%",
                    }}
                >
                    {errors?.password?.message}
                </p>
            )}
            {errors?.email && (
                <p
                    style={{
                        color: "red",
                        marginTop: "10px",
                        paddingLeft: "15px",
                    }}
                >
                    {errors?.email?.message}
                </p>
            )}
        </div>
        <div className={styles.block3}>
            <input
                type="password"
                placeholder={t("reg_password_confirm")}
                className={styles.password_confirm}
                    {...passwordConfirmProps}
            />
        </div>
        <div>
            {" "}
            {errors.passwordСonfirm && (
                <p
                    style={{
                        color: "red",
                        marginTop: "10px",
                        paddingLeft: "15px",
                    }}
                >
                    {errors.passwordСonfirm.message}
                </p>
            )}
        </div>
        {!showSecondForm ?  (
                  <button
                  className={styles.reg_submit}
                  type="button"
                  disabled={valid}

                  onClick={() => {
                      setShowSecondForm(true); 
                      
                  }}
              >
                  {'Далее'}
              </button>
            ) : (

                <button
                  className={styles.reg_submit}
                  type="submit"
                  disabled={isValid}
                  onClick={() => {
                    // navigate('/')
                  }}
                >
                  {t("reg_submit")}
                </button>
              
            ) 
            }
            </div>
        ) : (
            <div className="step2">
            <div className={styles.block1}>
     
            <select className={styles.form_control}    id="region"  {...regionProps} 
              name="region"   value={selectedRegion}
              onChange={handleRegionChange}>
  <option disabled value="">
    {t("reg_region")}
  </option>
          {Object.entries(geo.regions).map(([regionKey, regionValue]) => (
          <option key={regionValue} value={regionValue}>
            {regionKey}
          </option>
        ))}
      </select>
            
              <div>
                {errors?.country && (
                  <p
                    style={{
                      color: "red",
                      marginTop: "10px",
                      paddingLeft: "15px",
                    }}
                  >
                    {errors?.country?.message || "Error"}
                  </p>
                )}
              </div>
            </div>
            
            <div className={styles.block2}>
            <select
              id="district"
              name="district"
              {...districtProps}
              value={selectedDistrict}
        onChange={handleDistrictChange}
        disabled={!selectedRegion}
              className={styles.form_control}
            >
    <option disabled value="">
    {t("reg_region_place")}
  </option>
  {selectedRegion && Object.entries(geo.districts[selectedRegion])
          .map(([districtKey, districtValue]) => (
            <option key={districtValue} value={districtValue}>
              {districtKey}
            </option>
          ))
        }

            </select>
              <div>
                {errors?.city && (
                  <p
                    style={{
                      color: "red",
                      marginTop: "10px",
                      paddingLeft: "15px",
                    }}
                  >
                    {errors?.city?.message || "Error"}
                  </p>
                )}
              </div>
     
       
            </div>
            <div className={styles.block4}>
              <button
                  className={styles.reg_submit}
                  type="submit"
                  disabled={!isValid}
                  onClick={() => {
                    console.log(selectedRegion,selectedDistrict)
                    
                  }}
                >
                  {t("reg_submit")}
                </button>
              </div>
      
            </div>
        )}
 
        <div className={styles.block5}>
            <p>
                {t("reg_checkReg")}{" "}
                <Link
                    to={"/login"}
                    style={{
                        textDecoration: "none",
                        color: "#7F3A85",
                        cursor: "pointer",
                    }}
                >
                    {t("reg_login")}
                </Link>
            </p>
        </div>
        <div className={styles.block6}>
            <div className={styles.round}>
                <input
                    className="checkbox"
                    type="checkbox"
                    id="checkbox"
                    {...checkBox}
                />
                <label htmlFor="checkbox"></label>
            </div>
            <p>
                я согласен с условиями{" "}
                <a
                    target="_blank"
                    style={{
                        textDecoration: "none",
                        color: "#7F3A85",
                        cursor: "pointer",
                    }}
                    href="https://eshop.elit.ua/imgbank/file/%D0%9F%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B5%20%D1%81%D0%BE%D0%B3%D0%BB%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%B5.pdf"
                >
                    пользовательского соглашения
                </a>{" "}
            </p>
        </div>
        <div className={styles.block7}>
            <select
                className={styles.select_css}
                name="language"
                id="language"
                value={language} // Set the value of the select element to the selected language from the general state
                onChange={handleLanguageChange}
            >
                <option id="ky" value="ky">
                    кыргызча
                </option>

                <option id="ru" value="ru">
                    русский
                </option>
            </select>
        </div>
    </form>
</div>


      </div>

  
     
  </div>

    )
}
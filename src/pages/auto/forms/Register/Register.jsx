import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useSelector } from "react-redux";
import {Link, useNavigate } from "react-router-dom";
import styles from './register.module.scss'
import { useDispatch } from "react-redux";
import { fetchData } from "../../../../api/geo";
import { signupUser } from "../../../../features/auth/authSlice";
import Backbtn from '../../../../assets/images/back-btn.png'


export const Register = ({ toStep }) => {
    const navigate = useNavigate();
    const data = useSelector(state => state.data.data);
    const status = useSelector(state => state.data.status);
    const error = useSelector(state => state.data.error);
    let dispatch = useDispatch();
    const { t } = useTranslation();

    const [successful, setSuccessful] = useState(false);
    const [showSecondForm, setShowSecondForm] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem("selectedLanguage") || "ky");
  
    const { isLoggedIn } = useSelector((state) => state.auth);

      useEffect(() => {
        i18next.changeLanguage(selectedLanguage);
        localStorage.setItem("selectedLanguage", selectedLanguage);
        dispatch(fetchData());
    }, [selectedLanguage,dispatch]);
    
      const onChangeLangHandler = (event) => {
        setSelectedLanguage(event.target.value);
      };
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        watch,
        getValues,
    } = useForm({
        mode: "onChange",
    });

    const selectedCountry = watch("country");
    const selectedCity = watch("city");
    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
        const { password2 ,first_name,last_name, email, password,phone_number, region,district } = data;
    
        setSuccessful(false);
    
        dispatch(signupUser( { password2,first_name,last_name, email, password,phone_number,region,
            district} ))
          .unwrap()
          .then(() => {
            setSuccessful(true);
          })
          .catch(() => {
            setSuccessful(false);
          });
  };
  const [selectedRegion, setSelectedRegion] = useState(Number);
  const [selectedDistrict, setSelectedDistrict] = useState(Number);
  
  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };
  
  const handleRegionChange = (event) => {
    const regionValue = data.regions[event.target];
    setSelectedRegion(event.target.value);
    setSelectedDistrict('');
  };
  
  const getDistrictOptions = () => {
    if (selectedRegion && data.districts[selectedRegion]) {
      const districtEntries = Object.entries(data.districts[selectedRegion]);
      return districtEntries.map(([districtKey, districtValue]) => ({
        value: districtValue,
        label: districtKey
      }));
    }
    return null;
  };
  

    
    return (
        (
            <div className={styles.content}>

            <div className={styles.reg}>
                {showSecondForm ?            <img className={styles.back_btn} onClick={() =>  setShowSecondForm(false)} src={Backbtn} alt="back btn" />
: '' }

                <div className={styles.reg_btns}>
                    <div className={styles.reg_light_active}></div>
                    <div className={styles.reg_light}></div>
                </div>
    
                <form className={styles.reg_form} onSubmit={handleSubmit(onSubmit)}>
                    {!showSecondForm ? (
          <div className="step1">
                        
          <div className={styles.block1}>
              <input
                  placeholder={t("reg_name")}
                  className={styles.firstname}
                  {...register("first_name", {
                      required: "поле обязательно к заполнению",
                  })}
              />

              <input
                  placeholder={t("reg_surname")}
                  className={styles.lastname}
                  {...register("last_name", {
                      required: "поле обязательно к заполнению",
                  })}
              />
          </div>
          <div style={{ position: "relative" }}>
              {errors?.lastName && (
                  <p
                      style={{
                          color: "red",
                          position: "absolute",
                          left: "52%",
                      }}
                  >
                      {errors?.lastName?.message}
                  </p>
              )}
              {errors?.firstName && (
                  <p
                      style={{
                          color: "red",
                          marginTop: "10px",
                          paddingLeft: "15px",
                      }}
                  >
                      {errors?.firstName?.message}
                  </p>
              )}
              
          </div>

          <div className={styles.block2}>
              <input
                  placeholder="E-mail"
                  className={styles.email}
                  {...register("email", {
                      required: "поле обязательно к заполнению",
                      pattern: {
                          value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: "напишите правильный email",
                      },
                  })}
              />

              <input
                  type="password"
                  placeholder={t("reg_password")}
                  className={styles.password}
                  {...register("password", {
                      required: "поле обязательно к заполнению",
                      minLength: {
                          value: 8,
                          message: "минимум 8 символов",
                      },
                  })}
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
                  {...register("password2", {
                      required: "поле обязательно к заполнению",
                      validate: (val) => {
                          const { password } = getValues();
                          if (watch("password") !== val) {
                              return (
                                  password === val || "пароли не совпадают"
                              );
                          }
                      },
                  })}
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
          <div>
            {!showSecondForm &&  (
                  <button
                  className={styles.reg_submit}
                  disabled={!isValid}
                  type="button"
                  onClick={() => {
                      setShowSecondForm(true); 
                  }}
              >
                  {'Далее'}
              </button>
            ) 
            }
            
          </div>
          
          </div>
                    ) : (

<div className="step2">
<div className={styles.block1}>
<select
  id="region"
  name="region"
  value={selectedRegion}
  onChange={handleRegionChange}

  className={styles.form_control}
  {...register("region", { required: true })}
>
  <option disabled value="">
    {t("reg_region")}
  </option>
  {Object.entries(data.regions).map(([regionKey, regionValue]) => (
    <option key={regionKey} value={regionValue}>
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
  className={styles.form_control}
  {...register("district")}
  value={selectedDistrict}
  onChange={handleDistrictChange}
>
  <option disabled value="">
    {t("reg_region_place")}
  </option>
  {getDistrictOptions() && getDistrictOptions().map(({ value, label }) => (
    <option key={label} value={value}>
      {label}
    </option>
  ))}
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
  {showSecondForm && (
    <button
      className={styles.reg_submit}
      type="submit"
      onClick={() => {
        // navigate('/')
      }}
      disabled={selectedCountry === "def_country" || selectedCity === 'def_city'}
    >
      {t("reg_submit")}
    </button>
  )}
</div>
</div>


                    )}
          

    
                    {/* <div className={styles.block4}>
                        <button
                            className={styles.reg_submit}
                            disabled={!isValid}
                            type="button"
                            onClick={() => {
                                setShowSecondForm(true); 
                            }}
                        >
                            {'Далее'}
                        </button>
                    </div> */}
    
                    <div className={styles.block5}>
                        <p>
                            {t("reg_checkReg")}{" "}
                            <Link
                               onClick={()=> toStep(3)}
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
                                {...register("confirm", {
                                    required: true,
                                })}
                            />
                            <label htmlFor="checkbox"></label>
                        </div>
                        <p>
                            я согласен с условиями{" "}
                            <a
                            rel="noreferrer"
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
                            onChange={onChangeLangHandler}
                            value={selectedLanguage}
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
 
    //     )(
  
    //         <div className="reg">
    //         <img className={styles.back_btn} onClick={() =>  setShowSecondForm(false)} src={Backbtn} alt="back btn" />
    //         <div className={styles.reg_btns}>
    //           <div className={styles.reg_light}></div>
    //           <div className={styles.reg_light_active}></div>
    //         </div>
    //         <form className={styles.reg_form} onSubmit={handleSubmit(onSubmit)}>
    //           <div className={styles.block1}>
    //             <select
    //               onChange={(e) => {
    //                 setSelectCountry(e.target.value);
    //               }}
    //               defaultValue={"def_country"}
    //               className={styles.form_control}
    //               {...register("country", { required: true })}
    //             >
    //               <option value="def_country" disabled>
    //                 {t("reg_region")}
    //               </option>
    //               <option value="kg">Кыргызстан</option>
    //             </select>
    //             <div>
    //               {errors?.country && (
    //                 <p
    //                   style={{
    //                     color: "red",
    //                     marginTop: "10px",
    //                     paddingLeft: "15px",
    //                   }}
    //                 >
    //                   {errors?.country?.message || "Error"}
    //                 </p>
    //               )}
    //             </div>
    //           </div>
      
    //           <div className={styles.block2}>
    //             <select
    //               onChange={(e) => {
    //                 setSelectCity(e.target.value);
    //               }}
    //               defaultValue={"def_city"}
    //               className={styles.form_control}
    //               {...register("city", {
    //                 required: selectedCountry !== "def_country",
    //               })}
    //             >
    //               <option value="def_city" disabled>
    //                 {t("reg_region_place")}
    //               </option>
    //               {selectedCountry === "kg" && (
    //                 <>
    //                   <option value="bishkek">Бишкек</option>
    //                   <option value="osh">Ош</option>
    //                   <option value="batken">Баткен</option>
    //                   <option value="issyk-kul">Ысыык-куль</option>
    //                   <option value="jalal-abad">Джалал-Абад</option>
    //                   <option value="naryn">Нарын</option>
    //                   <option value="talas">Талас</option>
    //                 </>
    //               )}
    //     </select>
    //     <div>
    //       {errors?.city && (
    //         <p
    //           style={{
    //             color: "red",
    //             marginTop: "10px",
    //             paddingLeft: "15px",
    //           }}
    //         >
    //           {errors?.city?.message || "Error"}
    //         </p>
    //       )}
    //     </div>
    //   </div>
    //   <div className={styles.block4}>
    //     <button
    //       className={styles.reg_submit}
    //       type="submit"
    //       onClick={()=> {
    //         navigate('/')
    //       }}
    //       disabled={ selectedCountry === "def_country" || selectedCity === 'def_city' }
    //     >
    //       {t("reg_submit")}
    //     </button>
    //   </div>
    
    //   <div className={styles.block5}>
    //     <p>
    //       {t("reg_checkReg")}{" "}
    //       <Link  onClick={()=> toStep(3)}
    //                             style={{
    //                                 textDecoration: "none",
    //                                 color: "#7F3A85",
    //                                 cursor: "pointer",
    //                             }}
                            
    //                         >
    //                             {t("reg_login")}
    //                         </Link>
    //     </p>
    //   </div>
    //   <div className={styles.block7}>
    //     <select
    //       className={styles.select_css}
    //       name="language"
    //       id="language"
    //       onChange={onChangeLangHandler}
    //     >
    //       <option id="ky" value="ky">
    //         кыргызча
    //       </option>
    
    //       <option id="ru" value="ru">
    //         русский
    //       </option>
    //     </select>
    //   </div>
    // </form>
    
    // </div>
    
    //     
        )
      
    );
};


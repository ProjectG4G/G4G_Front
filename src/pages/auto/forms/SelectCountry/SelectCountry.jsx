import { Link, useNavigate } from "react-router-dom";
import React, { useState ,useEffect} from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Backbtn from '../../../../assets/images/back-btn.png';
import styles from './SelectCountry.module.scss'
const SelectCountry = ({ toStep }) => {
    const [selectedLanguage, setSelectedLanguage] = useState(
        localStorage.getItem("selectedLanguage") || "ky"
      );
    
      useEffect(() => {
        i18next.changeLanguage(selectedLanguage);
        localStorage.setItem("selectedLanguage", selectedLanguage);
      }, [selectedLanguage]);
    
      const onChangeLangHandler = (event) => {
        setSelectedLanguage(event.target.value);
      };
    const [selectCountry, setSelectCountry] = useState(null);
    const [selectCity, setSelectCity] = useState(null);
    const { t } = useTranslation();

  
    const {
      register,
      formState: { errors },
      handleSubmit,
      watch,
    } = useForm({
    
      mode: "onChange",
    });
  
    const selectedCountry = watch("country");
    const selectedCity = watch("city");
  
    const onSubmit = (data) => {
      console.log(JSON.stringify(data));
    };
  
    const handleBackButtonClick = () => {
      navigate('/login');
    }
  
    let navigate = useNavigate();
  
    return (
      <div className="reg">
        <img className={styles.back_btn} onClick={() =>  toStep(1)} src={Backbtn} alt="back btn" />
        <div className={styles.reg_btns}>
          <div className={styles.reg_light}></div>
          <div className={styles.reg_light_active}></div>
        </div>
        <form className={styles.reg_form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.block1}>
            <select
              onChange={(e) => {
                setSelectCountry(e.target.value);
              }}
              defaultValue={"def_country"}
              className={styles.form_control}
              {...register("country", { required: true })}
            >
              <option value="def_country" disabled>
                {t("reg_country")}
              </option>
              <option value="kg">Кыргызстан</option>
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
              onChange={(e) => {
                setSelectCity(e.target.value);
              }}
              defaultValue={"def_city"}
              className={styles.form_control}
              {...register("city", {
                required: selectedCountry !== "def_country",
              })}
            >
              <option value="def_city" disabled>
                {t("reg_city")}
              </option>
              {selectedCountry === "kg" && (
                <>
                  <option value="bishkek">Бишкек</option>
                  <option value="osh">Ош</option>
                  <option value="batken">Баткен</option>
                  <option value="issyk-kul">Ысыык-куль</option>
                  <option value="jalal-abad">Джалал-Абад</option>
                  <option value="naryn">Нарын</option>
                  <option value="talas">Талас</option>
                </>
              )}
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
      onClick={()=> {
        navigate('/')
      }}
      disabled={ selectedCountry === "def_country" || selectedCity === 'def_city' }
    >
      {t("reg_submit")}
    </button>
  </div>

  <div className={styles.block5}>
    <p>
      {t("reg_checkReg")}{" "}
      <Link  onClick={()=> toStep(3)}
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
  <div className={styles.block7}>
    <select
      className={styles.select_css}
      name="language"
      id="language"
      onChange={onChangeLangHandler}
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
  )
}

export default SelectCountry
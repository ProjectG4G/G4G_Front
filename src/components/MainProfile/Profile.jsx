import React, { useState ,useEffect} from "react";
import { Navigate } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import  Default  from '../../assets/images/default.jpeg'
import MainHeader from "../MainHeader/MainHeader";
import styles from './profile.module.scss'
import editProfile from '../../assets/images/profile_edit.jpg'
import { useTranslation } from "react-i18next";
import { updateUser } from "../../api/user";
import infoName from '../../assets/images/info_name.png'
import infoEmail from '../../assets/images/info_email.png'

import infoRegion from '../../assets/images/info_region.png'
import { API } from "../../api/api";


const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [isEdit, setIsEdit] = useState(false);

  const [userData, setUserData] = useState({
    first_name: '',
    profile_picture: '',
    last_name: '',
    email: '',
    oldPassword: localStorage.getItem('UserPass'),
    password : ''

  });

  const [showModal, setShowModal] = useState(false);

  const handleModalClick = () => {
    setShowModal(true);
  }
  const handleModalClickCancel = () => {
    setShowModal(false);
  }

  const handleEditProfile = () => {
    setIsEdit(true); 
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsEdit(false);
    try {
      const storedPassword = localStorage.getItem('UserPass');
      if (storedPassword !== userData.oldPassword) {
        console.error('Invalid old password');
        return;
      }
  
      await dispatch(updateUser({ userData }));
  
      const passwordUpdateResponse = await API.post(
        `auth/password_change/`,
        { old_password: userData.oldPassword, new_password: userData.password }
      );
      localStorage.setItem('UserPass', userData.password);
  
      console.log(passwordUpdateResponse.data);
  
    } catch (error) {
      // Handle error
    }
  };
  
  
  

  const { data, isLoading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const { t } = useTranslation();

  const [edit,setEdit] = useState(false);
  let region = currentUser.region
  let regions = {
      "Баткен": 1,
      "Жалал-Абад": 2,
      "Нарын": 3,
      "Ош": 4,
      "Талас": 5,
      "Чүй": 6,
      "Ысык-Көл": 7
  
  }
  let filteredRegions = Object.keys(regions).filter((key) => regions[key] ===  region
  );



  if (!currentUser) {
    return <Navigate to="/login" />;
  }

return (
    <div className="container">
    <MainHeader/>

    <section>
    {!isEdit ? (
    <div className={styles.main_container} >
    <div className={styles.left_block}>
    
    {currentUser.profile_picture ? (
    <img className={styles.profile_picture} src={currentUser.profile_picture}></img>
    ) : (
      <img className={styles.profile_picture} src={Default}></img>

    ) }
    <p className={styles.user_name}>
      {currentUser.last_name}   {currentUser.first_name}
    </p>
    <p className={styles.user_email}>
      {currentUser.email}
</p>


<ul className={styles.menu}>

<li className={!edit ? styles.menu_item_active  : styles.menu_item  } >{t('user_personal_info')}</li>

</ul>
    
    </div>
    <div className={styles.right_block}>


<div  className={styles.info}>
  <div className={styles.info_top}>
    <p className={styles.info_title}>{t('user_name')}</p>
    <img src={infoName} className={styles.info_top_img}></img>

    
  </div>
  <p className={styles.info_inner}>
    {currentUser.last_name}           {currentUser.first_name}

  </p>
</div >
<div className={styles.info}>
<div className={styles.info_top}>
<p className={styles.info_title}>Регион</p>

<img src={infoRegion} className={styles.info_top_img}></img>


</div>
<p className={styles.info_inner}>
{filteredRegions.join(', ')}

</p>


  </div>
  <div className={styles.info}>
  <div className={styles.info_top}>
  <p className={styles.info_title}>{t('reg_password')}</p>

<img src={infoName} className={styles.info_top_img}></img>


  </div>
  <p className={styles.info_inner}>
    ********
  </p>

  </div>
  <div className={styles.info}>
  <div className={styles.info_top}>
  <p className={styles.info_title}>E-mail</p>
  
  <img src={infoEmail} className={styles.info_top_img}></img>

  

  </div>
  <p className={styles.info_inner}>
    {currentUser.email}
  </p>

  </div>
  
    <button className={styles.change_info_btn}>
    <p onClick={() => handleEditProfile()} className={styles.change_info_btn_text}>
    {t('user_change')}
      </p> 
    </button>

</div>
    </div>
  ) : (
    <div className={styles.main_container} >
    <div className={styles.form_update_block}>

<form className={styles.form_update} onSubmit={handleFormSubmit}>

<label className={styles.label_title}>
  </label>
  <div onClick={()=> handleModalClick()}  className={styles.profile_picture_edit}>
    <img src={editProfile} className={styles.edit_img}></img>
  {currentUser.profile_picture ? (
    <img className={styles.profile_picture_edit_img} src={currentUser.profile_picture}></img>
    ) : (
      <img className={styles.profile_picture_edit_img} src={Default}></img>

    ) }
  </div>
  {showModal && (
        <div className={styles.modal_window}>
          <h1 className={styles.edit_profile_img_title}>{t('edit_profile_img')}</h1>
    <input
    placeholder='choose'
    type="file"
    name="profile_picture"
    id="upload_profile"
    
    onChange={(e) => {setUserData({ ...userData, profile_picture: e.target.files[0] }); handleModalClickCancel(); } }
    
  />
  <label className={styles.upload_photo_text} htmlFor="upload_profile">{t('upload_photo')}</label>

  {/* <p     onChange={(e) => setUserData({ ...userData, profile_picture: null})} 
 className={styles.delete_photo}> {t('delete_profile_picture')}</p> */}
    <p     onChange={(e) => {setUserData({ ...userData, profile_picture: null }); handleModalClickCancel(); } }
 className={styles.delete_photo}>{t('delete_profile_picture')}</p>

  <p onClick={()=> handleModalClickCancel()}>{t('cancel')}</p>
        </div>
      )}

  
<div className={styles.label_block}>
<label className={styles.label_title}>
  {t("reg_name")}
</label>
<input className={styles.form_input} type="text" name="first_name"   value={userData.first_name}
  onChange={(e) =>
    setUserData({ ...userData, first_name: e.target.value })
  } />

</div>

<div className={styles.label_block}>
<label className={styles.label_title}>
  Фамилие
</label>
<input className={styles.form_input} type="text" name="last_name"   value={userData.last_name}
  onChange={(e) =>
    setUserData({ ...userData, last_name: e.target.value })
  } />

  </div>

<div className={styles.label_block}>
<label className={styles.label_title}>
  E-Mail
</label>
<input className={styles.form_input} type="text" name="email" 
  value={userData.email}
  onChange={(e) =>
    setUserData({ ...userData, email: e.target.value })
  } />

  </div>

<div className={styles.label_block}>
<label className={styles.label_title}>
{t("old_pass")}
</label>
<input className={styles.form_input} type="password" name="oldPassword" />

  </div>

<div className={styles.label_block}>
    <label className={styles.label_title}>
{t("new_pass")}
</label>
<input className={styles.form_input} type="password" name="password"  value={userData.password}
  onChange={(e) =>
    setUserData({ ...userData, password: e.target.value })
  } />

  </div>

{/* Add more form fields as needed */}
<button className={styles.form_update_btn} type="submit">{t("save_changes")}</button>
</form>
</div>
    </div>
  )}

    </section>


  
    </div>
  );
};

export default Profile;



import React, { useEffect, useState } from 'react'
import styles from '../GetUsers/GetUsers.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserById, editUserById, fetchAllUsers } from '../../api/user';
import Default from '../../assets/images/default.jpeg'
import Delete from '../../assets/images/delete.svg'
import Edit from '../../assets/images/edit.svg'


import { useTranslation } from 'react-i18next';

const GetUsers = () => {
    const { t } = useTranslation();

    const [selectedUserId, setSelectedUserId] = useState(null);



    const [userData, setUserData] = useState({
        first_name: '',
        profile_picture: '',
        last_name: '',
        email: '',
       
    
      });

    const handleFormSubmit = async (e,userId,userData) => {
        e.preventDefault();
        setShowModal(false);
        dispatch(editUserById({ userId: selectedUserId, userData }));
        handleModalClickCancel();
   
      };


  const [showModal, setShowModal] = useState(false);

  const handleModalClick = (userId,email, first_name,last_name) => {
    setShowModal(true);
    setSelectedUserId(userId);
    setUserData({ ...userData, email, first_name ,last_name,});

  }
  const handleModalClickCancel = () => {
    setShowModal(false);

  }

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    const status = useSelector((state) => state.users.status);
    const error = useSelector((state) => state.users.error);

    const handleDeleteUser = (userId) => {
        dispatch(deleteUserById(userId));
      };
  
      const handleEditUser = (userId, userData) => {
        dispatch(editUserById({ userId, userData }));
      };

    useEffect(() => {
      dispatch(fetchAllUsers());
    }, [dispatch]);
    if (status === 'loading') {
        return <div>Loading...</div>;
      }
    
      if (status === 'failed') {
        return <div>Error: {error}</div>;
      }
      
    
  return (

    
    <div className={styles.getUsers_block}>

      <button className={styles.add_new_users}>{t('add_new_user')}</button>

    <div className={styles.get_users}>

    
{ users.map((user) => (
            <div  key={user.id} className={styles.users_info}>
                <img className={styles.users_info_img} src={user.profile_picture ? user.profile_picture : Default } alt="" />
                          <p className={styles.user_last_name} >{user.last_name} </p>
                          <p className={styles.user_first_name} >{user.first_name} </p>

                          <p className={styles.user_email}>{user.email}</p>
                          <img  onClick={() =>
              handleModalClick(user.id, user.email, user.first_name,user.last_name)
            } className={styles.user_edit} src={Edit} alt="delete" />

                          <img onClick={() => handleDeleteUser(user.id)} className={styles.user_delete} src={Delete} alt="delete" />

            </div>
        ))}
        {showModal ? (
     <div className={styles.modal_window}>
     <span onClick={()=> handleModalClickCancel()} className={styles.close}>x</span>

     <form onSubmit={handleFormSubmit}>
        <label  className={styles.form_input_label} htmlFor="upload_profile">{t('photo')}</label>
     <input
     className={styles.form_input}
    placeholder='choose'
    type="file"
    name="profile_picture"
    id="upload_profile"
    
    onChange={(e) => {setUserData({ ...userData, profile_picture: e.target.files[0] }); } }
    
  />
   
     <input placeholder={t('reg_name')} className={styles.form_input} type="text" name="first_name"   value={userData.first_name}
  onChange={(e) =>
    setUserData({ ...userData, first_name: e.target.value })
  } />
      <input placeholder='Фамилие' className={styles.form_input} type="text" name="last_name"   value={userData.last_name}
  onChange={(e) =>
    setUserData({ ...userData, last_name: e.target.value })
  } />
      <input placeholder='E-mail' className={styles.form_input} type="text" name="email"   value={userData.email}
  onChange={(e) =>
    setUserData({ ...userData, email: e.target.value })
  } />
  
<button className={styles.add_btn} type='submit' onSubmit={handleFormSubmit}>{t('add_btn')}</button>


     </form>
 </div>
        ) : (
            ''
        )}
   
    </div>
    </div>

  )
}

export default GetUsers
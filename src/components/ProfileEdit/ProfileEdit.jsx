import React from 'react'
import MainHeader from '../MainHeader/MainHeader';
import styles from '../ProfileEdit/ProfileEdit.module.scss'
const ProfileEdit = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Hello`); // You can customize the submission logic here
      };
    return (
        <div className="container">
        <MainHeader/>
    
        <section>
      <div className={styles.main_container}>
  
      <form onSubmit={handleSubmit}>
      <label htmlFor="nameInput">Name:</label>
      <input
        type="text"
        id="nameInput"
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
    </form>
 
      </div>
    
        </section>
        </div>
      );
}

export default ProfileEdit
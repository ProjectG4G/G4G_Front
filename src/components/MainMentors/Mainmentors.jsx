import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import MainHeader from "../MainHeader/MainHeader";
import styles from "../MainMentors/MainMentor.module.scss";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchMentors } from "../../api/mentors";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
const Mainmentors = ({mentors}) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const mentor = useSelector((state) => state.mentors.mentors);
    const status = useSelector((state) => state.mentors.status);
    const error = useSelector((state) => state.mentors.error);
    const carouselRef = useRef(null);
    const mentorCardRef = useRef(null);
    
    useEffect(() => {
      if (status === 'idle') {
        dispatch(fetchMentors());
      }
    }, [dispatch, status]);
  
    if (status === 'loading') {
      return <div>Loading mentors...</div>;
    }
  
    if (status === 'failed') {
      return <div>Error: {error}</div>;
    }
    return (
        <div className={styles.main_mentors}>
            <MainHeader />

            <div className={styles.mentor_container}>
              

                <div className={styles.mentor_header}>
                    <h1 className={styles.Mentor_title}>{t("be_cool")}</h1>

                    <button onClick={() => navigate('/mentor-form')} className={styles.mentor_btn}>{t("conf")}</button>
                    <div className={styles.mentor_left_back}></div>
                <div className={styles.mentor_right_back}></div>
                </div>

                <div className={styles.our_mentors}>
                    <h3 className={styles.our_mentors_title}>{t('our_mentors')}</h3>
             
                    <div style={{ overflowX: 'scroll' }}>
      <div ref={carouselRef} style={{ display: 'flex' }}>
        {mentor.map((mentor) => (
          <div key={mentor.id}    
          style={{ flex: '0 0 10%', padding: '16px' }}>
            <img src={mentor.image} className={styles.mentors_img} alt="" />
         </div>
        ))}
      </div>
    </div>


         
                </div>
            </div>

            <div className="footer_bottom">
                <Footer />
                
            </div>
        </div>
    );
};

export default Mainmentors;

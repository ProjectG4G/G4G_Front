import React from 'react'
import i18next from "i18next";
import {useTranslation } from "react-i18next";
import mainImg from '../images/main_img.png'

const Goals = () => {
    const { t } = useTranslation();

  return (
    
    <div className='goals'>
                      <h1 className='about_title'>{t('goals_title')}</h1>
                        <div className="goals_container">
                        <div className="left_block">

</div>
<div className="right_block">
  <div className="right_block_top">
      <div className="right_block_top_item">
        <p className='right_block_text'>
        {t('goals_subtitle1')}

        </p>
        
        </div>
      <div className="right_block_top_item">
      <p className='right_block_text'>
        {t('goals_subtitle2')}

        </p>
        </div>
  </div>
  <div className="right_block_centre">
      <div className="right_block_centre_item">
      <p className='right_block_text'>
        {t('goals_subtitle3')}

        </p>
        </div>
      <div className="right_block_centre_item">
      <p className='right_block_text'>
        {t('goals_subtitle4')}

        </p>
        </div>
  </div>
  <div className="right_block_bottom">
      <div className="right_block_bottom_item">
      <p className='right_block_text'>
        {t('goals_subtitle5')}

        </p>
        </div>
      <div className="right_block_bottom_item">
      <p className='right_block_text'>
        {t('goals_subtitle5')}

        </p>
        </div>
  </div>
</div>
                        </div>
                 

    </div>
  )
}

export default Goals
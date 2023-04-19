import React from 'react'
import MainHeader from '../MainHeader/MainHeader'
import { useTranslation } from 'react-i18next'
import styles from './MainShop.module.scss'
import Back  from '../../assets/images/will_updata.png'
import buy from '../../assets/images/buy_shop.svg'
import black from '../../assets/images/clothes.jpg'
import Footer from '../Footer/Footer'
const MainShop = () => {
    const {t} = useTranslation()
  return (
    <section className={styles.container}>
        <MainHeader/>


        <div className={styles.back_container}>
        <h1 className={styles.title}>{t('make_happy')}</h1>
        <button className={styles.shop_btn}>{t('shop_btn')}</button>
        </div>
      <div className={styles.features_shop_top}>
      <div className={styles.features_shop}>
          <h2 className={styles.features_shop_title}>{t('spec_clothes')}</h2>
          <div className={styles.shop_item}>
            <img className={styles.buy_btn} src={buy} alt="" />
          </div>
        </div>
        <div className={styles.features_shop}>
          <h2 className={styles.features_shop_title}>{t('spec_items')}</h2>
          <div className={styles.shop_item_last}>
          <img className={styles.buy_btn} src={buy} alt="" />

          </div>
        </div>
      </div>

      <div className={styles.features_shop_centre}>
        <div className={styles.shop_shows}>
        <div className={styles.shop_clothes_item_1}>
        <img className={styles.buy_btn} src={buy} alt="" />
        </div>
        <p className={styles.shop_name}>{t('purple_hoodie')}</p>
        <p className={styles.shop_price}>2 562 сом</p>
        </div>
    
        <div className={styles.shop_shows}>
        <div className={styles.shop_clothes_item_2}>
        <img className={styles.buy_btn} src={buy} alt="" />

        </div>
        <p className={styles.shop_name}>{t('black_hoodie')}</p>
        <p className={styles.shop_price}>2 562 сом</p>
        </div>


        <div className={styles.shop_shows}>
        <div className={styles.shop_clothes_item_3}>
        <img className={styles.buy_btn} src={buy} alt="" />

        </div>
        <p className={styles.shop_name}>{t('white_hoodie')}</p>
        <p className={styles.shop_price}>2 562 сом</p>
        </div>

      
      
      </div>
      <div className={styles.features_shop_centre}>
        <div className={styles.shop_shows}>
        <div className={styles.shop_clothes_item_1}>
        <img className={styles.buy_btn} src={buy} alt="" />
        </div>
        <p className={styles.shop_name}>{t('purple_hoodie')}</p>
        <p className={styles.shop_price}>2 562 сом</p>
        </div>
    
        <div className={styles.shop_shows}>
        <div className={styles.shop_clothes_item_2}>
        <img className={styles.buy_btn} src={buy} alt="" />

        </div>
        <p className={styles.shop_name}>{t('black_hoodie')}</p>
        <p className={styles.shop_price}>2 562 сом</p>
        </div>


        <div className={styles.shop_shows}>
        <div className={styles.shop_clothes_item_3}>
        <img className={styles.buy_btn} src={buy} alt="" />

        </div>
        <p className={styles.shop_name}>{t('white_hoodie')}</p>
        <p className={styles.shop_price}>2 562 сом</p>
        </div>

      
      
      </div>
    
    
  <Footer/>

    </section>
  )
}

export default MainShop
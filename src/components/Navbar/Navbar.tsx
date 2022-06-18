import React from 'react'
import styles from './navbar.module.css';
import { getImg } from '../../commons/API';


const Navbar = () => {
  return (
    // HEADER
    <div className={styles['main-header']}>
      <div className={styles.navbar}>

        {/* LEFT HEADER LINKS LIST */}
        <div className={styles.left__header__links}>
          <div className={styles.netflix__logo}>
            <a href='home-page.html' title='homepage'>
              <img className={styles.logo} src={getImg('logo.png')} alt="netflixlogo" />
            </a>
          </div>
          <ul>
            <li><a href="home-page.html" title="item__link">Home</a></li>
            <li><a href="home-page.html" title="item__link">Serie TV</a></li>
            <li><a href="home-page.html" title="item__link">Film</a></li>
            <li><a href="home-page.html" title="item__link">Nuovi e popolari</a></li>
            <li><a href="home-page.html" title="item__link">Audio e sottotitoli</a></li>
          </ul>
        </div>

        {/* RIGHT HEADER LINKS LIST */}
        <div className={styles.right__header__links}>
          <ul>
            <li><a href="#home-page.html" title="img"><img src={getImg('searchIcon.png')} alt="searchIcon" className={styles['profile__img search-icon']}></img></a></li>
            <li><a href="#home-page.html" title="img"><img src={getImg('RingbellIcon.png')} alt="ringbellIcon" className={styles['profile__img ringbell-icon']}></img></a></li>
            <li><a href="#home-page.html" title="img"><img src={getImg('ProfileIMG.png')} alt="profileIcon" className={styles.profile__img} id="profile-icon"></img></a></li>
            <li><a href="#home-page.html" title="img"><img src={getImg('dropDownIcon.png')} alt="dropDownIcon" className={styles.profile__img} dropdown-icon></img></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
'use client'

import React, { useState } from 'react';
import Logo from '../logo/Logo';
import Nav from '../navBar/NavBar';
import { CiSearch,CiHeart,CiUser  } from "react-icons/ci";
import styles from './Header.module.css'
import Icon from '../icons/Icon';
import { RiHandbagLine } from "react-icons/ri";
import SelectBox from '../languageSelectBox/SelectBox';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    { text: 'Shop', url: '/shop' },
    { text: 'Skills', url: '/skils' },
    { text: 'Stories', url: '/stories' },
    { text: 'About', url: '/about' },
    { text: 'Contact Us', url: '/contact' },
  ];

  const languageOptions=["Eng","Mal"]
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <header className={styles.header}>
    <div className={styles.firstContainer}> 
      <div className={styles.headerleft}>
      <button className={styles.hamburger} onClick={toggleMenu}>
      ☰
      </button>
        <Logo />
       </div>
       <div className={styles.middle}>
        <p className={styles.logoStyle}>LOGO</p>
        </div>
      <div className={styles.headerright}>
      <Icon Icon={CiSearch} />
      <Icon Icon={CiHeart} />
      <Icon Icon={RiHandbagLine} />
      <div  className={styles.hide} >
      <Icon Icon={CiUser} />
      </div>
      <div  className={styles.hide} >
      <SelectBox options={languageOptions} />
      </div>
  
      </div>
      </div>



      <div className={`${styles.second}`}>
        <Nav links={links} />
      </div>
      <div className={`${styles.secondClosed}`}>
        <Nav links={[   { text: 'HOME', url: '/' },
       { text: 'SHOP', url: '/shop' },]} />
    
      </div>
    </header>
  );
};

export default Header;























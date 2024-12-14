'use client'

import React, { useState } from 'react';
import Logo from '../logo/Logo';
import Nav from '../navBar/NavBar';
import { CiSearch,CiHeart,CiUser  } from "react-icons/ci";
import styles from './Header.module.css'
import Icon from '../icons/Icon';
import { RiHandbagLine } from "react-icons/ri";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    { text: 'Shop', url: '/shop' },
    { text: 'Skills', url: '/skils' },
    { text: 'Stories', url: '/stories' },
    { text: 'About', url: '/about' },
    { text: 'Contact Us', url: '/contact' },
  ];
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
      <Icon Icon={CiSearch} className={styles.icon} />
      <Icon Icon={CiHeart} className={styles.icon} />
      <Icon Icon={RiHandbagLine} className={styles.icon} />
      <Icon Icon={CiUser} className={styles.icon} />
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























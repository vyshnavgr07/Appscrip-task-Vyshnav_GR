import React from 'react'
import styles from './NavBar.module.css'
import Link from 'next/link';
const NavBar = ({ links }) => {
    return (
        <ul className={styles.navigation}>
          {links.map((link) => (
            <li key={link.url} className={styles.navigationItem}>
              <Link className={styles.text} href={link.url}>
              {link.text}
              </Link>
            </li>
          ))}
        </ul>
      );
    };

export default NavBar
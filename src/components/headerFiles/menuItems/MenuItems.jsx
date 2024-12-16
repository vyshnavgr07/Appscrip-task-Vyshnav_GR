import Link from "next/link";
import React from "react";
import styles from './MenuItems.module.css'; // Make sure this is correctly referenced

const MenuItems = ({ title, address }) => {
  return (
    <Link href={address} className={styles.link}>
      <p>{title}</p>
    </Link>
  );
};

export default MenuItems;

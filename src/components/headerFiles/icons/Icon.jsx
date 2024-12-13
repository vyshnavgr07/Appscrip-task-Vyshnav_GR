import React from 'react';
import styles from './icon.module.css'
const Icon = ({ Icon, size = 24 }) => {
  return <Icon size={size} className={styles.icon} />;
};

export default Icon;

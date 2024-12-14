import React from 'react';
import styles from './ProductCard.module.css';
import Image from 'next/image';
import pro from '../../../../public/pro.jpg'
import Link from 'next/link';
const ProductCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={pro} className={styles.image} />
        <div className={styles.newProduct}>NEW PRODUCT</div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>Product Name</h3>
        <div className={styles.actions}>
        <p className={styles.linksText}>
        <Link href="" className={styles.link} style={{ textDecoration: 'none' }}>
    Sign in
  </Link>
  <span className={styles.spacing}> or </span>
  <Link href="" className={styles.link}  >
    Create an account
  </Link>
  <span className={styles.spacing}> see pricing </span>
</p>
      <button className={styles.favoriteButton}>
        <div className={styles.icon} >
        <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  preserveAspectRatio="xMidYMid meet"
  style={{ width: "100%", height: "100%" }} // Correctly formatted style prop
>
  <path
    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
    fill="#ff0000"
    stroke="black" 
 
  />
</svg>
        </div>

 </button>
    </div>
      </div>
    </div>
  );
};

export default ProductCard;
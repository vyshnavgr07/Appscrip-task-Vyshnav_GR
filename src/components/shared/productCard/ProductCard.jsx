'use client'
import React from 'react';
import styles from './ProductCard.module.css';
import Image from 'next/image';
import pro from '../../../../public/pro1.jpg'
import Link from 'next/link';

const ProductCard = ({
  productImage, 
  productName = 'Default Product Name',
  isOutOfStock=true,
  isNewProduct=true
}) => {
  return (
    <div className={styles.container}>
      {isOutOfStock && 
        <div className={styles.stockOut}>
        out of stock
      </div>
      }
      <div className={styles.imageContainer}>
        <Image src={productImage||pro} className={styles.image} alt='products' />
        {isNewProduct &&
        <div className={styles.newProduct}>NEW PRODUCT</div>
        }
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{productName}</h3>
        <div className={styles.actions}>
        <div className={styles.linksDiv}>
        <Link href="/" className={styles.link} >
    Sign in
  </Link>
  <span className={styles.spacing}> or </span>
  <Link href="/" className={styles.link}  >
    Create an account
  </Link>
  <span className={styles.spacing}> see pricing </span>
</div>
      <button className={styles.favoriteButton}>
        <div className={styles.icon} >
        <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  preserveAspectRatio="xMidYMid meet"
  style={{ width: "100%", height: "100%" }} 
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







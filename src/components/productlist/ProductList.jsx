import React from 'react';
import ProductCard from '../shared/productCard/ProductCard';
import styles from './ProductList.module.css';





const ProductList = () => {
return (
   
    <div className={styles.mainContainer}>
     {[...Array(10)].map((_, i) => (
        <div key={i} >
          <ProductCard    isOutOfStock ={true} isNewProduct = {true} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;







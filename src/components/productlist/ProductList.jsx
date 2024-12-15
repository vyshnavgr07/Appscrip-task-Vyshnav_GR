import React from 'react';
import ProductCard from '../shared/productCard/ProductCard';
import styles from './ProductList.module.css';

const ProductList = () => {
  return (
    <div className={styles.mainContainer}>
      {[...Array(10)].map((_, i) => (
        <div key={i} className={styles.cardContainer}>
          <ProductCard />
        </div>
      ))}
    </div>
  );
};

export default ProductList;






// import React from 'react'
// import ProductCard from '../shared/productCard/ProductCard'
// import styles from './ProductList.module.css'
// const ProductList = () => {
//   return (
//     <div className={styles.mainContainer} >
//       {[...Array(10)].map((x,i)=>(
//         <div key={i} className={styles.cardContainer}>
//           <ProductCard/>
//           </div>
// ))}
//     </div>
//   )
// }

// export default ProductList
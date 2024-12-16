'use client'
import React, { useEffect, useState } from 'react';
import ProductCard from '../shared/productCard/ProductCard';
import styles from './ProductList.module.css';
import axios from 'axios';

const ProductList = () => {
  const [products,setProducts]=useState([])
const fetchData=async()=>{
  try {
    const response =await axios.get('https://fakestoreapi.com/products')
    console.log(response,"ress")
    setProducts(response?.data)
   
  } catch (error) {
    console.log(error)
  }
}
console.log(products,"proo")
useEffect(()=>{
  fetchData()
},[])

return (
   
    <div className={styles.mainContainer}>
    
      {products?.map((data, i) => (
        <div key={i} >
          <ProductCard productName={data?.title}  productImage={data?.image}      isOutOfStock ={true} isNewProduct = {true} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;







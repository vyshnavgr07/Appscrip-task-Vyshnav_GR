"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../shared/productCard/ProductCard";
import styles from "./ProductList.module.css";
import axios from "axios";
import Loader from "../loader/Loader";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response, "ress");
      setProducts(response?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  console.log(products, "proo");
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.mainContainer}>
      {products?.map((data, i) => (
        <div key={i}>
          <ProductCard
            productName={data?.title}
            productImage={data?.image}
            isOutOfStock={true}
            isNewProduct={true}
          />
        </div>
      ))}

      {loading && <Loader />}
    </div>
  );
};

export default ProductList;

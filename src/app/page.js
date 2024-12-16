'use client'
import styles from "./page.module.css";
import Title from "@/components/home/title/Title";
import FilterHeader from "@/components/filterHeader/FilterHeader";
import FilterSidebar from "@/components/filter/filterSidear/FilterSidebar";
import ProductList from "@/components/productlist/ProductList";
import { useState } from "react";

export default function Home() {
 const [isSidebar,setIsSidebar]=useState(true)

 const handleSidebar = () => {
  setIsSidebar((prev) => !prev); 
};

  return (
    <div className={styles.home}>
    <div className={styles.titleContainer}>
     <Title/>
   </div>
   <div className={styles.secondContainer}> 
<FilterHeader handleSidebar={handleSidebar} isSidebar={isSidebar}/>
  <div className={styles.mainContainer}>
  {isSidebar && 
  <div className={styles.sidebar}>
  <FilterSidebar/>
</div>
}
<div className={styles.productList}>
  <ProductList/>
   </div>
  </div>
  </div>
</div>
  );
}

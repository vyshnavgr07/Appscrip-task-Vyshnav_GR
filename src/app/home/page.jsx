import DropdownSelect from '@/components/dropDown/DropdownSelect'
import FilterSidebar from '@/components/filter/filterSidear/FilterSidebar'
import FilterHeader from '@/components/filterHeader/FilterHeader'
import React from 'react'
import styles from './Page.module.css'
import ProductList from '@/components/productlist/ProductList'
import Title from '@/components/home/title/Title'
const Home = () => {
  return (
  <div className={styles.home}>
    <div className={styles.titleContainer}>
     <Title/>
   </div>
 <FilterHeader/>
  <div className={styles.mainContainer}>
  <div className={styles.sidebar}>
  <FilterSidebar/>
</div>
<div className={styles.productList}>
  <ProductList/>
  </div>
  </div>
</div>
  )
}

export default Home
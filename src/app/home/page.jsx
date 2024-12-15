import DropdownSelect from '@/components/dropDown/DropdownSelect'
import FilterSidebar from '@/components/filter/filterSidear/FilterSidebar'
import FilterHeader from '@/components/filterHeader/FilterHeader'
import React from 'react'
import styles from './Page.module.css'
const Home = () => {
  return (
  <div className={styles.home}>
  <FilterHeader/>
  <div className={styles.mainContainer}>
  <FilterSidebar/>
    <div className={styles.productList}>

    </div>
  </div>

</div>
  )
}

export default Home
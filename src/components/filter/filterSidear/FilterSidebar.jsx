'use client'
import React from "react";
import styles from "./FilterSidebar.module.css";
import FilterSection from "../filterSection/FilterSection";


const FilterSidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
     <label className={styles.checkboxLabel}>
        <input type="checkbox" /> CUSTOMIZABLE
      </label>

      <FilterSection title="IDEAL FOR">
        <label><input className={styles.input}   type="checkbox" /> Men</label>
        <label><input type="checkbox" /> Women</label>
        <label><input type="checkbox" /> Baby & Kids</label>
      </FilterSection>
      <FilterSection title="OCCASION" />   
      <FilterSection title="WORK" />
      <FilterSection title="FABRIC" />
      <FilterSection title="SEGMENT" />
      <FilterSection title="SUITABLE FOR" />
      <FilterSection title="RAW MATERIALS" />
      <FilterSection title="PATTERN" />
    </div>
  );
};

export default FilterSidebar;

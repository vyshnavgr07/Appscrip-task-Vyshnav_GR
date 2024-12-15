'use client'
import React from "react";
import styles from "./FilterHeader.module.css";
import DropdownSelect from "../dropDown/DropdownSelect";

const FilterHeader = () => {
  return (
    <div className={styles.headerContainer}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <span className={styles.itemCount}>3425 ITEMS</span>
        <span className={styles.hideFilter}>
          <span className={styles.arrow}>&#x2039;</span> {/* Unicode for Left Arrow */}
          HIDE FILTER
        </span>
      </div>

      {/* Right Section */}
      <div className={styles.rightSection}>

        <DropdownSelect/>


      </div>
    </div>
  );
};

export default FilterHeader;

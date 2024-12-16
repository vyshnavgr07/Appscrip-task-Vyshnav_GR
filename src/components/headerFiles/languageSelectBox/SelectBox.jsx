// SelectBox.jsx
import React from "react";
import styles from "./SelectBox.module.css";

const SelectBox = ({ options, defaultValue }) => {
  return (
    <div className={styles.selectContainer}>
      <select className={styles.selectBox} defaultValue={defaultValue}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span className={styles.arrow}>⌄</span>
    </div>
  );
};

export default SelectBox;

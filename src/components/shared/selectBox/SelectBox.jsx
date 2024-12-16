'use client'
import React from "react";
import styles from "./SelectBox.module.css";
const SelectBox = ({ options, label, onChange, value }) => {
  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <select
        className={styles.select}
        value={value}
        onChange={({ target: { value } }) => {
          onChange(value);
        }}
      >
        {options?.map((option) => (
          <option className={styles.options} key={option} value={option}>
            {option}
          </option>   
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
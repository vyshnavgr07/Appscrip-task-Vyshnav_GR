import React, { useState } from "react";
import styles from "./FilterSection.module.css";

const FilterSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader} onClick={toggleSection}>
        <h3>{title}</h3>
        <span>{isOpen ? "▼" : "▶"}</span>
      </div>
      {isOpen && <div className={styles.sectionContent}>{children || <p>All</p>}</div>}
    </div>
  );
};

export default FilterSection;

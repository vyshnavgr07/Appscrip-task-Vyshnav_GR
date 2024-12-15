'use client'
import React, { useState, useRef, useEffect } from "react";
import styles from "./DropdownSelect.module.css";

const DropdownSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Recommended");
  const dropdownRef = useRef(null);

  const options = [
    "Recommended",
    "Newest First",
    "Popular",
    "Price : High to Low",
    "Price : Low to High",
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      <div className={styles.dropdownHeader} onClick={toggleDropdown}>
        <span className={styles.selectedText}>{selectedOption}</span>
        <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <ul className={styles.dropdownList}>
          {options.map((option, index) => (
            <li
              key={index}
              className={`${styles.dropdownItem} ${
                option === selectedOption ? styles.selectedItem : ""
              }`}
              onClick={() => selectOption(option)}
            >
              {option === selectedOption && <span className={styles.checkmark}>✔</span>}
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownSelect;

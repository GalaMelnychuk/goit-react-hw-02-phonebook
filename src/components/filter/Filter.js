import React from "react";
import styles from "./Filter.module.css";

const Filter = () => {
  return (
    <label className={styles.filter}>
      Find contact by name
      <input className={styles.inputFilter}></input>
    </label>
  );
};

export default Filter;
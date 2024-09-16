import React from "react";
import styles from "../styles/stock-tab.module.css";

export default function StockTab({ stock, remove, selected }) {
  return (
    <div className={styles.tab}>
      <button onClick={remove}>&times;</button>
      <p onClick={selected}>{stock}</p>
    </div>
  );
}

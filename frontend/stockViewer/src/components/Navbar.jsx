import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  const nav = useNavigate();
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles["navbar-item"]}>
          <Link to="/">
            <img src="stock-logo.svg" alt="stockViewer logo" className={styles["navbar-image"]}></img>
          </Link>
        </li>
        <li className={styles["navbar-item"]}>
          <Link className={styles["navbar-link"]} to="/">
            My stocks
          </Link>
        </li>
        <li className={styles["navbar-item"]}>
          <Link className={styles["navbar-link"]} to="/aboutus">
            About us
          </Link>
        </li>
        <li className={styles["navbar-item"]}>
          <Link className={styles["navbar-link"]} to="/contactus">
            Contact us
          </Link>
        </li>
        <li className={styles["navbar-item"]}>
          <Link to="/profile">
            <img src="Default_pfp.svg" alt="Profile Picture" className={styles["navbar-image"]}></img>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

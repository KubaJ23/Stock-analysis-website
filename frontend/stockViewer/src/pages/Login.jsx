import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ApiContext } from "../App";
import styles from "../styles/login.module.css";

export default function Login() {
  const [validForm, setValidForm] = useState(true);
  const apiURL = useContext(ApiContext);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  async function sendForm(e) {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const response = await fetch(apiURL + "/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      navigate("/");
    } else {
      setValidForm(false);
    }
  }

  return (
    <div className={`${styles.container} ${styles.centred}`}>
      <h1>Login</h1>
      <form onSubmit={sendForm} className={styles.form}>
        <label>
          E-mail:
          <input className={styles["input-box"]} type="email" name="email" autoComplete="on" ref={emailRef} required />
        </label>

        <label>
          Password:
          <input className={styles["input-box"]} type="password" name="password" ref={passwordRef} required />
        </label>

        <button type="submit" className={styles["submit-button"]}>
          Login
        </button>
      </form>
      {validForm ? <></> : <p className={styles["error-message"]}>Invalid login details, try again</p>}
      <p>
        Don't have a profile ? <Link to="/signup">sign up</Link>
      </p>
    </div>
  );
}

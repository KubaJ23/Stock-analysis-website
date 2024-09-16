import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ApiContext } from "../App";
import styles from "../styles/login.module.css";

export default function SignUp() {
  const [validForm, setValidForm] = useState(true);
  const apiURL = useContext(ApiContext);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  async function sendForm(e) {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const response = await fetch(apiURL + "/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      alert("Account succesfully created");
      navigate("/login");
    } else {
      setValidForm(false);
    }
  }

  return (
    <div className={`${styles.container} ${styles.centred}`}>
      <h1>Sign up</h1>
      <form className={styles.form} onSubmit={sendForm}>
        <label>
          E-mail:
          <input type="email" name="email" autoComplete="on" ref={emailRef} required />
        </label>

        <label>
          Password:
          <input type="password" name="password" ref={passwordRef} required />
        </label>

        <button className={styles["submit-button"]} type="submit">
          Sign up
        </button>
      </form>
      {validForm ? <></> : <p className={styles["error-message"]}>Invalid Sign up details, try again</p>}
      <p>
        Already have a profile ? <Link to="/login">login</Link>
      </p>
    </div>
  );
}

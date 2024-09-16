import React, { useRef, useState } from "react";
import { useContext } from "react";
import { ApiContext } from "../App";
import loginStyles from "../styles/login.module.css";

export default function ChangePasswordForm() {
  const apiURL = useContext(ApiContext);
  const [displayStatus, setDisplayStatus] = useState(false);
  const [succRequest, setSuccRequest] = useState(true);
  const emailRef = useRef(null);
  const oldPRef = useRef(null);
  const newPRef = useRef(null);

  async function sendChangeRequest(e) {
    e.preventDefault();

    const email = emailRef.current.value;
    const newpassword = newPRef.current.value;
    const oldpassword = oldPRef.current.value;

    const response = await fetch(apiURL + "/api/change-password", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "put",
      body: JSON.stringify({ email, oldpassword, newpassword }),
    });
    setDisplayStatus(true);
    if (response !== null && response.ok) {
      setSuccRequest(true);
    } else {
      setSuccRequest(false);
    }
  }

  return (
    <div className={loginStyles.container}>
      <h1>Change Password:</h1>
      <form className={loginStyles.form} onSubmit={sendChangeRequest}>
        <label>
          Email:&nbsp;
          <input type="email" name="email" ref={emailRef} required />
        </label>

        <label>
          Old password:&nbsp;
          <input type="password" name="oldpassword" ref={oldPRef} required />
        </label>

        <label>
          New password:&nbsp;
          <input type="password" name="newpassword" ref={newPRef} required />
        </label>

        <button className={loginStyles["submit-button"]} type="submit">
          Change password
        </button>
      </form>
      {displayStatus ? (
        succRequest ? (
          <p>Password changed</p>
        ) : (
          <p className={loginStyles["error-message"]}>Password not changed</p>
        )
      ) : null}
    </div>
  );
}

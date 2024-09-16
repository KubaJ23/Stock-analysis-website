import React, { useEffect, useState } from "react";
import ChangePasswordForm from "../../components/ChangePasswordForm";
import { useContext } from "react";
import { ApiContext } from "../../App";
import profileStyles from "../../styles/profile.module.css";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [email, setEmail] = useState("Your email");
  const apiURL = useContext(ApiContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(apiURL + "/api/email", { credentials: "include" });
      // console.log(await response.text());
      if (response.ok) {
        setEmail(await response.text());
      } else {
        setEmail("Unable to fetch email");
      }
    }
    fetchData();
  }, []);

  return (
    <div className={profileStyles.container}>
      <img className={profileStyles.pfp} src="Default_pfp.svg" alt="Profile Picture"></img>
      <p className={profileStyles.email}>{email}</p>
      <button className={profileStyles["logout-button"]} onClick={logout}>
        LOGOUT
      </button>
      <ChangePasswordForm />
    </div>
  );

  async function logout() {
    const response = await fetch(apiURL + "/api/logout", {
      method: "delete",
      credentials: "include",
    });

    navigate("/login");
  }
}

import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";

import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import { ApiContext } from "../App";

export default function Home() {
  const navigate = useNavigate();
  const apiURL = useContext(ApiContext);

  useEffect(() => {
    const cookies = document.cookie;
    if (!/sessionid/.test(cookies)) {
      navigate("/login");
    }

    fetch(apiURL + "/api/check-session", { credentials: "include" }).then(
      (response) => {
        if (!response.ok) {
          navigate("/login");
        }
      },
      (reason) => {
        navigate("/login");
      }
    );
  });
  return (
    <div style={{ height: "100%" }}>
      <Navbar />
      <Outlet />
    </div>
  );
}

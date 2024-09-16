import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import StockView from "./pages/Home/StockView";
import Profile from "./pages/Home/Profile";
import AboutUs from "./pages/Home/AboutUs";
import ContactUs from "./pages/Home/ContactUs";

export const ApiContext = createContext();

function App() {
  const apiURL = "http://192.168.0.7:8080";
  // const apiURL = "http://localhost:8080";
  return (
    <ApiContext.Provider value={apiURL}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<StockView />} />
            <Route path="profile" element={<Profile />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="contactus" element={<ContactUs />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </Router>
    </ApiContext.Provider>
  );
}

export default App;

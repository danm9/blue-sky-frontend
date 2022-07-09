import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import { Home } from "./Components/Home/Home";
import { BlueBucks } from "./Components/BlueBucks/BlueBucks";
import { Estimates } from "./Components/Estimates/Estimates";
import { Services } from "./Components/Services/Services";
import { ThankYou } from "./Components/Estimates/ThankYou";
import { SignUpSuccess } from "./Components/SignUp/SignUpSuccess";
import { Profile } from "./Components/Profile/Profile";
import { MoreMenu } from "./Components/MoreMenu/MoreMenu";
import { Admin } from "./Components/Admin/Admin";
import "bootstrap/dist/css/bootstrap.min.css";

// This app uses the BrowserRouter api to navigate between component pages/views
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/moreMenu" element={<MoreMenu />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signUpSuccess" component={<SignUpSuccess />} />
        <Route path="/thankYou" element={<ThankYou />} />
        <Route path="/services" element={<Services />} />
        <Route path="/estimates" element={<Estimates />} />
        <Route path="/blueBucks" element={<BlueBucks />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

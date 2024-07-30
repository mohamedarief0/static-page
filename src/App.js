import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "./App.css";

// Components
import NavBar from "./NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Features from "./Pages/Features/Features";
import About from "./Pages/About/About";
import Enroll from "./Pages/Enroll/Enroll";
import Contact from "./Pages/Contact/Contact";
import TermsAndConditions from "./Pages/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init();

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Home />
            <Features />
            <About />
            <Enroll />
            <Contact />
          </>
        }
      />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
};

export default App;

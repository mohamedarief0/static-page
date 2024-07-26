import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import 'remixicon/fonts/remixicon.css';
//Components
import NavBar from "./NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Features from "./Pages/Features/Features";
import About from "./Pages/About/About";
import Enroll from "./Pages/Enroll/Enroll";
import Contact from "./Pages/Contact/Contact";

const App = () => {
  return (
    
    <>
      <NavBar />
      <Home />
      <Features />
      <About />
      <Enroll />
      <Contact  />
    </>
  );
};

export default App;

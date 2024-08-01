import React, { useState, useEffect } from "react";
import "./NavBar.css";
import logo from "../Asset/logo.png";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleSetActive = (section) => {
    setActiveLink(section);
    const element = document.getElementById(section);
    const offset = 70; // Adjust this value to offset the scroll position
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section, header");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  
  return (
    <div className="nav-header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light  p-2 rounded-5 ms-5 me-5">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#home"
            onClick={() => handleSetActive("home")}
          >
            <img
              src={logo}
              alt="Logo"
              width="50"
              height="50"
              className="d-inline-block align-text-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeLink === "home" ? "active" : ""
                  }`}
                  aria-current="page"
                  href="#home"
                  onClick={() => handleSetActive("home")}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeLink === "feature" ? "active" : ""
                  }`}
                  href="#feature"
                  onClick={() => handleSetActive("feature")}
                >
                  Feature
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeLink === "about" ? "active" : ""
                  }`}
                  href="#about"
                  onClick={() => handleSetActive("about")}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeLink === "enroll" ? "active" : ""
                  }`}
                  href="#enroll"
                  onClick={() => handleSetActive("enroll")}
                >
                  Enroll
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeLink === "contact" ? "active" : ""
                  }`}
                  href="#contact"
                  onClick={() => handleSetActive("contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

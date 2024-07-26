import React from "react";
import "./NavBar.css"
import logo from "../Asset/logo.png"
function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top p-2 rounded-5 ms-5 me-5 ">
        <div className="container-fluid">
          <a class="navbar-brand" href="#home">
            <img
              src={logo}
              alt="Logo"
              width="50"
              height="50"
              class="d-inline-block align-text-top"
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
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#feature">
                  Feature
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#enroll">
                  Enroll
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

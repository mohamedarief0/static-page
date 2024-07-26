import React from "react";
import "./Contact.css";
import Imgbg from "../../Asset/2.png";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <section id="contact" className="backgroundcontact position-relative ">
        {/* <img src={Imgbg} className="contactimg" alt="bg-img" /> */}
        <div className="container mt-5">
          <div className="text-center text-white row justify-content-around p-5">
            <div className="col-md-3 mb-3">
              <h5>
                <i className="ri-compass-3-fill"></i> Location
              </h5>
              <p>80G/3, Kamban Nagar, Elambalur Road, Perambalur-621212</p>
            </div>
            <div className="col-md-3 mb-3">
              <h5>
                <i className="ri-contacts-fill"></i> Contact
              </h5>
              <ul className="list-unstyled">
                <li>
                  <Link
                    to="https://cloudgarage.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-white"
                  >
                    <i className="ri-global-line"></i> cloudgarage.io
                  </Link>
                </li>
                <li>
                  <Link
                    to="mailto:tiktikappcontact@gmail.com"
                    className="text-decoration-none text-white"
                  >
                    <i className="ri-mail-fill"></i> tiktikappcontact@gmail.com
                  </Link>
                </li>
                <li>
                  <Link
                    to="tel:+919597059693"
                    className="text-decoration-none text-white"
                  >
                    <i className="ri-phone-fill"></i> +91 95970 59693
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mb-3">
              <h5>Social Media</h5>
              <div className="d-flex justify-content-evenly social-icons">
                <Link
                  to="https://wa.me/919597059693"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-white"
                >
                  <i style={{ fontSize: 30 }} className="ri-whatsapp-fill"></i>
                </Link>
                <Link
                  to="https://www.linkedin.com/company/cloud-garage-llp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-white"
                >
                  <i
                    style={{ fontSize: 30 }}
                    className="ri-linkedin-box-fill"
                  ></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div id="footer" className="backgroundfooter p-5 lh-1">
          <div className="container text-center text-white">
            <p>
              Copyright &copy; 2024{" "}
              <span>Cloud Garage LLP All rights reserved</span>
            </p>
            <p>
              <Link to="/terms" className="text-white-50 termandconditionshover">
                Terms & Conditions | Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;

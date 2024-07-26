import React from "react";
import "./Contact.css";
import Imgbg from "../../Asset/2.png";

function Contact() {
  return (
    <>
      <section id="contact" className="backgroundcontact position-relative">
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
                  <a
                    href="https://cloudgarage.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-white"
                  >
                    <i className="ri-global-line"></i> cloudgarage.io
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:tiktikappcontact@gmail.com"
                    className="text-decoration-none text-white"
                  >
                    <i className="ri-mail-fill"></i> tiktikappcontact@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919597059693"
                    className="text-decoration-none text-white"
                  >
                    <i className="ri-phone-fill"></i> +91 95970 59693
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mb-3">
              <h5>Social Media</h5>
              <div className="d-flex justify-content-evenly social-icons">
                <a
                  href="https://wa.me/919597059693"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-white"
                >
                  <i style={{ fontSize: 30 }} className="ri-whatsapp-fill"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/your-linkedin-profile/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-white"
                >
                  <i
                    style={{ fontSize: 30 }}
                    className="ri-linkedin-box-fill"
                  ></i>
                </a>
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
              <a href="/terms" className="text-white-50 termandconditionshover">
                Terms & Conditions | Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;

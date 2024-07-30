import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import buyerAboutImg from "../../Asset/b-about-image.png";
import UploderAboutImg from "../../Asset/u-about-image.png";
function About() {
  return (
    <>
      <section id="about" className="position-relative margin-top">
        <div className="bg-light p-5 h-100">
          <div className="about-text container">
            <h1>About</h1>
            <div className="">
              <div
                data-aos="fade-left"
                className="d-flex justify-content-between align-items-center flex-wrap"
              >
                <div className="col-md-5">
                  <h5>Buyer</h5>
                  <p>
                    Purchasing Tickets: Buyers must provide a valid WhatsApp
                    number or email address to receive purchased tickets.{" "}
                  </p>
                  <p>
                    Accuracy of Information: Buyers must ensure that the contact
                    information provided is accurate and up-to-date. Tik Tik
                    will not be responsible for any failure to deliver tickets
                    due to incorrect contact information.
                  </p>
                </div>
                <img src={buyerAboutImg} width={400} />
              </div>

              <div
                data-aos="fade-right"
                className="d-flex justify-content-between align-items-center"
              >
                <img src={UploderAboutImg} width={400} />
                <div className="col-md-5">
                  <h5>Uploder</h5>
                  <p>
                    Purchasing Tickets: Buyers must provide a valid WhatsApp
                    number or email address to receive purchased tickets.{" "}
                  </p>
                  <p>
                    Accuracy of Information: Buyers must ensure that the contact
                    information provided is accurate and up-to-date. Tik Tik
                    will not be responsible for any failure to deliver tickets
                    due to incorrect contact information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-card">
          <div className="row d-flex  align-items-center p-5">
            <div className="text-white col">
              <p className="fs-5">Download Tik Tik tody</p>
              <h1>Download Tik Tik tody</h1>
            </div>
            <div className="col">
              <Link
                to="https://play.google.com/store/apps/details?id=com.TikTik"
                className="call-to-action text-decoration-none"
              >
                <i className="ri-google-play-fill"></i>
                Google play
              </Link>
              <Link className="call-to-action ms-5 text-decoration-none">
                <i className="ri-apple-fill"></i>
                Apple store
              </Link>
            </div>
          </div>
          <div className="moving-image"></div>
        </div>
      </section>
    </>
  );
}

export default About;

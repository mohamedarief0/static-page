import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import buyerAboutImg from "../../Asset/b-about-image.png";
import UploderAboutImg from "../../Asset/u-about-image.png";
import data from "../../Data/data.json";
function About() {
  return (
    <>
      <section id="about" className="position-relative margin-top">
        <div className="bg-light p-5 h-100">
          <div className="about-text container">
            <h1>{data.about.heading.title}</h1>
            <div className="">
              <div
                data-aos="fade-left"
                className="d-flex justify-content-between align-items-center flex-wrap"
              >
                <div className="col-md-5">
                  <h5>{data.about.sections1.title}</h5>

                  {data.about.sections1.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                <img
                  src={buyerAboutImg}
                  className="about-image"
                  alt="buyer-about-img"
                />
              </div>

              <div
                data-aos="fade-right"
                className="d-flex justify-content-between align-items-center flex-wrap-reverse"
              >
                <img
                  src={UploderAboutImg}
                  className="about-image"
                  alt="uploder-about-img"
                />
                <div className="col-md-5">
                  <h5>{data.about.sections2.title}</h5>
                  {data.about.sections2.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-card">
          <div className="container row d-flex justify-content-center align-items-center h-100 ps-5 flex-wrap">
            <div className="text-white col">
              <p className="fs-5">{data.about.callToAction.heading}</p>
              <h1>{data.about.callToAction.heading2}</h1>
            </div>
            <div className="col flex-wrap">
              {data.about.callToAction.links.map((link, i) => (
                <Link
                  key={i}
                  to={link.to}
                  className="call-to-action text-decoration-none ms-2"
                >
                  <i className={link.icon}></i>
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
          <div className="moving-image"></div>
        </div>
      </section>
    </>
  );
}

export default About;

import React from "react";
import "./About.css";
import aboutbannerbg from "../../Asset/1.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
function About() {
  return (
    <>
      <section id="about" className="position-relative margin-top">
        <div className="bg-light p-5 h-100">
          <div className="about-text container">
            <h1>About</h1>
            <div className="mt-5 d-flex flex-row justify-content-between gap-5">
              <div className="card col-md-3">
                <div className=" card-body ">
                  <h5>Movies</h5>
                  <p>
                    TicketMaster is a convenient and user-friendly app designed
                  </p>
                </div>
              </div>
              <div className="card col-md-3">
                <div className=" card-body ">
                  <h5>Sports</h5>
                  <p>
                    TicketMaster is a convenient and user-friendly app designed
                    to help you purchase tickets for your favorite movies,
                    events, and sports.
                  </p>
                </div>
              </div>
              <div className="card col-md-3">
                <div className=" card-body ">
                  <h5>Events</h5>
                  <p>
                    TicketMaster is a convenient and user-friendly app designed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <LazyLoadImage
          src={aboutbannerbg}
          className="aboutbanner"
          alt="banner-img"
          effect="blur"
        /> */}
      </section>
    </>
  );
}

export default About;

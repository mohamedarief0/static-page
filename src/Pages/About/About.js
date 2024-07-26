import React from "react";
import "./About.css";
import aboutbannerbg from "../../Asset/1.png";
function About() {
  return (
    <>
      <section id="about" className="mt-5 screen position-relative">
        <div className="bg-light p-5">
          <div className="about-text container">
            <h1>About</h1>
            {/* <h4 className="mt-3">TiK Tik App</h4> */}
            <div className="mt-5 d-flex justify-content-between gap-5">
              <div className="card col-3">
                <div className=" card-body ">
                  <h5>Movies</h5>
                  <p>
                    TicketMaster is a convenient and user-friendly app designed
                    to help you purchase tickets for your favorite movies,
                    events, and sports.
                  </p>
                </div>
              </div>
              <div className="card col-3">
                <div className=" card-body ">
                  <h5>Sports</h5>
                  <p>
                    TicketMaster is a convenient and user-friendly app designed
                    to help you purchase tickets for your favorite movies,
                    events, and sports.
                  </p>
                </div>
              </div>
              <div className="card col-3">
                <div className=" card-body ">
                  <h5>Events</h5>
                  <p>
                    TicketMaster is a convenient and user-friendly app designed
                    to help you purchase tickets for your favorite movies,
                    events, and sports. With easy navigation and secure payment
                    options, booking tickets has never been easier.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={aboutbannerbg} className="aboutbanner" alt="banner-img" />
      </section>
    </>
  );
}

export default About;

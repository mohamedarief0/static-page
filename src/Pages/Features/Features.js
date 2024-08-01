import React, { useState } from "react";
import "./Features.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";
import data from "../../Data/data.json"; // Import your JSON data

function Features() {
  const [isOpen, setOpen] = useState(false);
  const { feature } = data; // Extract feature section from JSON

  return (
    <>
      <section id="feature" className="margin-top">
        <div className="container">
          <h1>{feature.heading.title}</h1>
          <p className="text-black-50">{feature.heading.description}</p>
          <div className="container mb-5">
            <div className="mt-5 row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 row-cols-xl-6 gx-5 g-lg-5">
              {feature.features.map((item, index) => (
                <div key={index} className="col">
                  <div className="feature-card cards-shadow">
                    <div className="card-body text-center">
                      <i
                        className={item.icon}
                        style={{
                          fontSize: "40px",
                          color: item.iconColor,
                        }}
                      ></i>
                      <p className="mt-2">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p>{feature.additionalText}</p>
        </div>
        <div className="about-card mt-5">
          <div className="container row d-flex justify-content-evenly align-items-center flex-wrap ms-5 h-100">
            <div className="text-white col">
              <p className="font-size fw-light">{feature.videoSection.text}</p>
            </div>
            <div className="col col-sm-5 align-self-center mb-30 position-relative">
              <div className="play-frame play-rotate"></div>
              <div onClick={() => setOpen(true)}>
                <div className="play-button bg-color-1">
                  <i className="ri-play-large-fill"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="moving-image"></div>
        </div>
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          autoplay
          videoId={feature.videoSection.videoId}
          onClose={() => setOpen(false)}
        />
      </section>
    </>
  );
}

export default Features;

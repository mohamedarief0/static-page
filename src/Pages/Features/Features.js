import React, { useState } from "react";
import "./Features.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";

function Features() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section id="feature" className=" margin-top">
        <div className="container">
          <h1>Features</h1>
          <p className="text-black-50">
            We make it simple and fast buying and selling Tickets at anytime and
            any where
          </p>
          <div className="container mb-5">
            <div className="mt-5 row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 row-cols-xl-6 gx-5 g-lg-5">
              <div className="col">
                <div className="feature-card cards-shadow">
                  <div className="card-body text-center">
                    <i
                      className="ri-file-upload-fill"
                      style={{ fontSize: "40px", color: "#18C1F5" }}
                    ></i>
                    <p className="mt-2">Upload Ticket</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="feature-card cards-shadow">
                  <div className=" card-body  text-center ">
                    <i
                      className="ri-bank-fill"
                      style={{ fontSize: "40px", color: "#18C1F5" }}
                    ></i>
                    <p className="mt-2">Bank account</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="feature-card cards-shadow">
                  <div className=" card-body  text-center ">
                    <i
                      className="ri-shopping-cart-fill"
                      style={{ fontSize: "40px", color: "#18C1F5" }}
                    ></i>
                    <p className="mt-2">Buyer Ticket</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="feature-card cards-shadow">
                  <div className=" card-body  text-center ">
                    <i
                      className="ri-swap-3-fill"
                      style={{ fontSize: "40px", color: "#18C1F5" }}
                    ></i>
                    <p className="mt-2">Seller to buyer</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="feature-card cards-shadow">
                  <div className=" card-body  text-center ">
                    <i
                      className="ri-swap-2-fill"
                      style={{ fontSize: "40px", color: "#18C1F5" }}
                    ></i>
                    <p className="mt-2">Buyer to seller</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="feature-card cards-shadow">
                  <div className=" card-body  text-center ">
                    <i
                      className="ri-money-rupee-circle-fill"
                      style={{ fontSize: "40px", color: "#18C1F5" }}
                    ></i>
                    <p className="mt-2">Transaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="about-card mt-5">
          <div className="container row d-flex justify-content-evenly align-items-center flex-wrap ms-5 h-100">
            <div className="text-white col">
              <p className="font-size fw-light">
                Watch <b>video</b> presentation
              </p>
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
          videoId="of3PDj-E7Ck"
          onClose={() => setOpen(false)}
        />
      </section>
    </>
  );
}

export default Features;

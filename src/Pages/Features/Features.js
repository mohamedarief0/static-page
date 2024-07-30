import React, { useState } from "react";
import "./Features.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";

function Features() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section id="feature" className="container-fluid margin-top">
        <div className="container">
          <h1>Features</h1>
          <p className="text-black-50">
            We make it simple and fast buying and selling Tickets at anytime and
            any where
          </p>
          <div className="container">
            <div className="mt-5 row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 row-cols-xl-6 gx-5 g-lg-5">
              <div className="col">
                <div className="card cards-shadow p-3 mb-5 rounded">
                  <div className="card-body text-center">
                    <i
                      className="ri-file-upload-fill"
                      style={{ fontSize: "40px", color: "#19def1" }}
                    ></i>
                    <p className="mt-2">Upload Ticket</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card col cards-shadow p-3 mb-5 rounded">
                  <div className=" card-body  text-center ">
                    <i
                      className="ri-bank-fill"
                      style={{ fontSize: "40px", color: "#19def1" }}
                    ></i>
                    <p className="mt-2">Bank account</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card col cards-shadow p-3 mb-5 rounded">
                  <div className=" card-body  text-center ">
                    <i
                      className="ri-shopping-cart-fill"
                      style={{ fontSize: "40px", color: "#19def1" }}
                    ></i>
                    <p className="mt-2">Buyer Ticket</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card col cards-shadow p-3 mb-5 rounded">
                  <div className=" card-body  text-center ">
                    <i
                      className="ri-p2p-fill"
                      style={{ fontSize: "40px", color: "#19def1" }}
                    ></i>
                    <p className="mt-2">Seller to buyer</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card col cards-shadow p-3 mb-5 rounded">
                  <div className=" card-body  text-center ">
                    <i
                      className="ri-p2p-fill"
                      style={{ fontSize: "40px", color: "#19def1" }}
                    ></i>
                    <p className="mt-2">Buyer to seller</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card col cards-shadow p-3 mb-5 rounded">
                  <div className=" card-body  text-center ">
                    <i
                      className="ri-money-rupee-circle-fill"
                      style={{ fontSize: "40px", color: "#19def1" }}
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
      </section>
      <div className="about-card">
        <div className=" row d-flex justify-content-center align-items-center h-100 ms-5 p-5">
          <div className="text-white col">
            <h1>Watch video presentation</h1>
          </div>
          <div className="col col-12 col-sm-5 align-self-center mb-30 position-relative">
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
    </>
  );
}

export default Features;

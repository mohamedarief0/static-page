import React from "react";
import "./Features.css";

function Features() {
  return (
    <>
      <section id="feature" className="container screen mt-5 ">
        <div className=" ">
          <div className="about-text container">
            <h1>Features</h1>
            <p className="text-black-50">
              We make it simple and fast buying and selling Tickets at anytime
              and any where
            </p>

            <div className="mt-5 d-flex justify-content-between flex-wrap gap-5">
              <div className="card cards-shadow p-3 mb-5 rounded">
                <div className=" card-body text-center">
                  <i
                    className="ri-file-upload-fill"
                    style={{ fontSize: "40px", color: "#19def1" }}
                  ></i>
                  <p className="mt-2">Upload Ticket</p>
                </div>
              </div>

              <div className="card cards-shadow p-3 mb-5 rounded">
                <div className=" card-body  text-center ">
                  <i
                    className="ri-bank-fill"
                    style={{ fontSize: "40px", color: "#19def1" }}
                  ></i>
                  <p className="mt-2">Bank account</p>
                </div>
              </div>
              <div className="card cards-shadow p-3 mb-5 rounded">
                <div className=" card-body  text-center ">
                  <i
                    className="ri-shopping-cart-fill"
                    style={{ fontSize: "40px", color: "#19def1" }}
                  ></i>
                  <p className="mt-2">Buyer Ticket</p>
                </div>
              </div>

              <div className="card cards-shadow p-3 mb-5 rounded">
                <div className=" card-body  text-center ">
                  <i
                    className="ri-p2p-fill"
                    style={{ fontSize: "40px", color: "#19def1" }}
                  ></i>
                  <p className="mt-2">Seller to buyer</p>
                </div>
              </div>
              <div className="card cards-shadow p-3 mb-5 rounded">
                <div className=" card-body  text-center ">
                  <i
                    className="ri-p2p-fill"
                    style={{ fontSize: "40px", color: "#19def1" }}
                  ></i>
                  <p className="mt-2">Buyer to seller</p>
                </div>
              </div>
              <div className="card cards-shadow p-3 mb-5 rounded">
                <div className=" card-body  text-center ">
                  <i
                    className="ri-money-rupee-circle-fill"
                    style={{ fontSize: "40px", color: "#19def1" }}
                  ></i>
                  <p className="mt-2">transaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;

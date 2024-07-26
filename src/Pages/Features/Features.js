import React from "react";
import "./Features.css";

function Features() {
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
                    <p className="mt-2">transaction</p>
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
    </>
  );
}

export default Features;

import React from "react";
//Carousel
import ImageCarousel from "../../ImageCarousel/ImageCarousel";
//img
import playstoreImg from "../../Asset/google-play.png";
import appstoreImg from "../../Asset/apple-store.png";
import "./Home.css";

function Home() {
  return (
    <>
      <section id="home" className="container screen pt-5 margin-top">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <div className="">
            <h3 className="line-height brandtextcolor">
              <span className="brandcolor">Tik Tik</span> is Movie, Sports and
              Event
              <br /> a Ticket Resale Platform
            </h3>
            <p className="text-black-50">
              Don't the fun. It's simple and quick.
            </p>
            <div className="mt-5">
              <a className="" href="">
                <img src={playstoreImg} width={120} alt="playstore-img" />
              </a>
              <a className="ms-3" href="">
                <img src={appstoreImg} width={120} alt="appstore-img" />
              </a>
            </div>
          </div>
          <ImageCarousel />
        </div>
      </section>
    </>
  );
}

export default Home;

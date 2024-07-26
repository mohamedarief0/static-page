import React from "react";
//Carousel
import ImageCarousel from "../../ImageCarousel/ImageCarousel";
//img
import playstoreImg from "../../Asset/google-play.png";
import appstoreImg from "../../Asset/apple-store.png";
import RollImageOne from "../../Asset/roll 1.png";
import "./Home.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Home() {
  return (
    <>
      <header
        id="home"
        className="container margin-top herocontainers position-relative"
      >
        <div
          id="carouselExampleCaptions"
          className="carousel slide position-absolute w-auto carousel-index sm-d-none"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={RollImageOne} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5> Buy and sell extra tickets in snap</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={RollImageOne} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={RollImageOne} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-md-2 row-cols-sm-1  justify-content-between align-items-end  margin-on-title">
          <div className="">
            <h4 className="line-height brandtextcolor col-md-8">
              <span className="brandcolor">Tik Tik</span> is Movie, Sports and
              Event a Ticket Resale Platform
            </h4>
            <p className="text-black-50">
              Don't the fun. It's simple and quick.
            </p>
            <span>
              <Link
                className=""
                to="https://play.google.com/store/apps/details?id=com.TikTik"
              >
                <LazyLoadImage src={playstoreImg} width={120} alt="playstore-img" />
              </Link>
              <Link className="ms-3" href="">
                <img src={appstoreImg} width={120} alt="appstore-img" />
              </Link>
            </span>
          </div>
          <ImageCarousel />
        </div>
      </header>
    </>
  );
}

export default Home;

import React from "react";
//Carousel
import ImageCarousel from "../../ImageCarousel/ImageCarousel";
//img
import playstoreImg from "../../Asset/google-play.png";
import appstoreImg from "../../Asset/apple-store.png";
//slider
import RollImageOne from "../../Asset/roll 1.png";
import RollImageTwo from "../../Asset/roll 2.png";
import RollImageThree from "../../Asset/roll 3.png";

import "./Home.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import data from "../../Data/data.json"

function Home() {
  return (
    <>
      <header id="home" style={{ marginTop: "100px" }}>
        <div
          id="carouselExampleCaptions"
          className="carousel slide margin-top-hero-carousal sm-d-none"
          data-bs-ride="carousel"
          data-bs-interval="3000" // Adjust the interval to 2000ms (2 seconds)
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
              <img
                src={RollImageOne}
                className="d-block w-100"
                alt="event-banner-img"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={RollImageTwo}
                className="d-block w-100"
                alt="sports-banner-img"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={RollImageThree}
                className="d-block w-100"
                alt="movie-banner-img"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev d-none"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next d-none"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container margin-header-minus herocontainers position-relative">
          <div className="row row-cols-sm-1 row-cols-md-2 justify-content-between align-items-center  margin-on-title">
            <div className="">
              <h2 className="line-height brandtextcolor col-md-10">
                <span className="brandcolor">Tik Tik</span> is Movie, Sports and
                Event a Ticket Resale Platform
              </h2>
              <p className="text-black-50">{data.heroSection.description}</p>
              <span>
                <Link
                  className=""
                  to="https://play.google.com/store/apps/details?id=com.TikTik"
                >
                  <img src={playstoreImg} width={120} alt="playstore-img" />
                </Link>
                <Link className="ms-3" href="">
                  <img src={appstoreImg} width={120} alt="appstore-img" />
                </Link>
              </span>
            </div>
            <ImageCarousel />
          </div>
        </div>
      </header>
    </>
  );
}

export default Home;

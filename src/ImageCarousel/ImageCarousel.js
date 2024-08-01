import React, { useState, useEffect } from "react";
import "./ImageCarousel.css"; // Make sure the path is correct

import homeScreenImg from "../Asset/home.png";
import sportsScreenImg from "../Asset/sports.png";
import onboardingScreenImg from "../Asset/onboardingscreen.png";

const ImageCarousel = () => {
  const [positions, setPositions] = useState(["top", "right", "left"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prevPositions) => {
        const newPositions = [...prevPositions];
        newPositions.unshift(newPositions.pop());
        return newPositions;
      });
    }, 3000); // Change the interval as needed
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <img
        src={homeScreenImg}
        className={`carousel-img ${positions[0]}`}
        alt="mobilescreens"
      />
      <img
        src={sportsScreenImg}
        className={`carousel-img ${positions[1]}`}
        alt="mobilescreens"
      />
      <img
        src={onboardingScreenImg}
        className={`carousel-img ${positions[2]}`}
        alt="mobilescreens"
      />
    </div>
  );
};

export default ImageCarousel;

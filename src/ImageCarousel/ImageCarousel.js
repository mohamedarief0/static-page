import React, { useState, useEffect } from "react";
import "./ImageCarousel.css"; // Make sure the path is correct

import img1 from "../Asset/home.png";
import img2 from "../Asset/sports.png";
import img3 from "../Asset/onboardingscreen.png";

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
        src={img1}
        className={`carousel-img ${positions[0]}`}
        alt="Image 1"
      />
      <img
        src={img2}
        className={`carousel-img ${positions[1]}`}
        alt="Image 2"
      />
      <img
        src={img3}
        className={`carousel-img ${positions[2]}`}
        alt="Image 3"
      />
    </div>
  );
};

export default ImageCarousel;

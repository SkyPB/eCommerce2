import React, { useState, useEffect } from "react";
import "../css/slider.css";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/images/caribbean.webp",
    "/images/champagne.webp",
    "/images/french.webp",
    "/images/laundry.webp",
    "/images/lemon.webp",
    "/images/naked.webp",
    "/images/peppermint.webp",
  ];

  // To go to next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // To go to previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // To automatically change images after 3 seconds
  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000);
    return () => clearInterval(intervalId);
  });

  return (
    <div className="slider-container">
      <div className="slider">
        <img
          src={images[currentIndex]}
          alt={`slide-${currentIndex}`}
          className="slider-image"
        />
      </div>
      <button className="prev" onClick={prevImage}>
        &#10094;
      </button>
      <button className="next" onClick={nextImage}>
        &#10095;
      </button>
    </div>
  );
}

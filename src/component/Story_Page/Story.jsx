import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { FaTimes, FaShareAlt } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Story = () => {
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null); // Reference to access slider methods

  // Static Images Array
  const images = [
    {
      url: "../../../public/img/movie-img-01.png",
      caption: "The Infinix Hot 50 is a smartphone with sleek design...",
      storyname:"strory-1"
    },
    {
      url: "../../../public/img/movie-img-02.png",
      caption: "This is the second image in the slider.",
      storyname:"strory-2"
    },
    {
      url: "../../../public/img/movie-img-03.png",
      caption: "Another caption for the third image.",
      storyname:"strory-3"
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_, next) => {
      setProgress(0); // Reset progress bar when slide changes
      setActiveIndex(next); // Update the active index
    },
    autoplay: false, // Turn off autoplay to manage progress manually
  };

  // Update progress bar and move to the next slide when it completes
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (sliderRef.current) {
            sliderRef.current.slickNext(); // Move to the next slide
          }
          return 0;
        }
        return prev + 2;
      });
    }, 100); // Update every 100ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "relative", width: "90%", margin: "auto" }}>
      {/* Header with close and share buttons */}
      <div style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
        <button style={{ background: "none", border: "none" }}>
          <FaTimes size={24} color="orange" />
        </button>
        <span style={{ fontWeight: "bold", color: "black" }}>{images[activeIndex].storyname}</span>
        <button style={{ background: "none", border: "none" }}>
          <FaShareAlt size={24} color="orange" />
        </button>
      </div>

      {/* Slider Component */}
      <Slider ref={sliderRef} {...settings}>
        {images.map((img, index) => (
          <div key={index} style={{ position: "relative" }}>
            <img
              src={img.url}
              alt={`Slide ${index}`}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
              }}
            />
          </div>
        ))}
      </Slider>

      {/* Caption for the Active Slide */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "10%",
          right: "10%",
          margin: "auto",
          backgroundColor: "#ffe4c4",
          padding: "10px",
          borderRadius: "10px",
          textAlign: "center",
          fontWeight: "bold",
          color: "#333",
          zIndex: 1, // Ensure it appears above the image
        }}
      >
        <p style={{ margin: 0 }}>{images[activeIndex].caption}</p>
      </div>

      {/* Progress Bar */}
      <div
        style={{
          position: "absolute",
          top: "50px",
          left: 0,
          width: `${progress}%`,
          height: "5px",
          backgroundColor: "orange",
          transition: "width 0.1s linear",
        }}
      />
    </div>
  );
};

export default Story;

import React, { useState } from "react";
import "./CustomSlider.css";
import img1 from "../../assets/images/sliderImg1.png"
import img2 from "../../assets/images/sliderImg2.png"
import img3 from "../../assets/images/sliderImg3.png"

const slides = [
  {
    img: img1,
    title: "The Finest Lobbies",
    subtitle: "New inspirations for the heart of the home",
  },
  {
    img: img2,
    title: "Modern Living",
    subtitle: "Contemporary designs with timeless style",
  },
  {
    img: img3,
    title: "Nature Inspired",
    subtitle: "Bringing the outdoors inside your home",
  },
];

export default function CustomSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider-container">
      {/* <h2 className="slider-title">
        Inspirations & <span>Trends</span>
      </h2>
      <p className="slider-subtext">
        Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p> */}

      <div className="slider-wrapper">
        {slides.map((slide, index) => {
          let position = "nextSlide";

          if (index === current) {
            position = "activeSlide";
          } else if (
            index === current - 1 ||
            (current === 0 && index === slides.length - 1)
          ) {
            position = "prevSlide";
          }

          return (
            <div className={`slide ${position}`} key={index}>
              <img src={slide.img} alt={slide.title} />
              {position === "activeSlide" && (
                <div className="caption">
                  <h3>{slide.title}</h3>
                  <p>{slide.subtitle}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="slider-controls">
        <button onClick={prevSlide} className="nav-btn">
          ←
        </button>
        <button className="view-all-btn">View All</button>
        <button onClick={nextSlide} className="nav-btn">
          →
        </button>
      </div>
    </div>
  );
}

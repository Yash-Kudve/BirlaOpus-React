import React, { useState } from "react";
import "./CustomSlider.css";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1586105251261-72a756497a11",
    title: "The Finest Lobbies",
    subtitle: "New inspirations for the heart of the home",
  },
  {
    img: "https://images.unsplash.com/photo-1598300053650-8f56e99e5e1b",
    title: "Modern Living",
    subtitle: "Contemporary designs with timeless style",
  },
  {
    img: "https://images.unsplash.com/photo-1622015663311-38aee2ad5cf7",
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

      <div className="slider-box">
        <img
          src={slides[current].img}
          alt={slides[current].title}
          className="slider-image"
        />
        <div className="slider-caption">
          <h3>{slides[current].title}</h3>
          <p>{slides[current].subtitle}</p>
        </div>
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

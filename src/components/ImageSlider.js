import React, { useState, useEffect, useRef } from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = ['https://ibb.co/317VHHT', 'https://ibb.co/WWJq49B', 'https://ibb.co/yFhYjwr'];
  const imageSectionRef = useRef(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.5, // Adjust the threshold as needed
      }
    );

    if (imageSectionRef.current) {
      observer.observe(imageSectionRef.current);
    }

    return () => {
      if (imageSectionRef.current) {
        observer.unobserve(imageSectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isSectionVisible) {
      const interval = setInterval(() => {
        setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isSectionVisible, slides.length]);

  return (
    <div ref={imageSectionRef} className={`slider-container ${isSectionVisible ? 'visible' : ''}`}>
      <div className="slider-wrapper">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slider-item ${index === activeSlide ? 'active' : ''}`}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="slider-image"
            />
          </div>
        ))}
      </div>
      <div className="slider-indicators">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slider-indicator ${index === activeSlide ? 'active' : ''}`}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

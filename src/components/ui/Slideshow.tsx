"use client";

import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type SlideshowProps = {
  images: string[];
  interval?: number; // in milliseconds
  autoplay?: boolean;
};

const Slideshow = ({
  images,
  interval = 7000,
  autoplay = true,
}: SlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to go to a specific slide
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Set up autoplay
  useEffect(() => {
    if (!autoplay) return;

    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [autoplay, interval]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Slides */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={image || "/placeholder.svg"}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
      >
        <FaChevronRight />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;

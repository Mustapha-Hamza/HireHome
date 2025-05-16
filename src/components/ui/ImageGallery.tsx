"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaExpand } from "react-icons/fa";

type ImageGalleryProps = {
  images: string[];
  alt: string;
};

const ImageGallery = ({ images, alt }: ImageGalleryProps) => {
  const [mainImage, setMainImage] = useState(
    images[0] || "/placeholder.svg?height=600&width=800"
  );
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleThumbnailClick = (image: string) => {
    setMainImage(image);
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className="w-full">
      {/* Main Image */}
      <div className="relative mb-4">
        <img
          src={mainImage || "/placeholder.svg?height=600&width=800"}
          alt={alt}
          className={`w-full rounded-lg object-cover ${
            isFullScreen
              ? "fixed inset-0 z-50 h-screen w-screen object-contain bg-black p-8"
              : "h-[400px]"
          }`}
        />

        {/* Full Screen Toggle Button */}
        <button
          onClick={toggleFullScreen}
          className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
        >
          <FaExpand />
        </button>

        {/* Navigation Arrows (only show if more than one image) */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => {
                const currentIndex = images.indexOf(mainImage);
                const prevIndex =
                  currentIndex === 0 ? images.length - 1 : currentIndex - 1;
                setMainImage(images[prevIndex]);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => {
                const currentIndex = images.indexOf(mainImage);
                const nextIndex =
                  currentIndex === images.length - 1 ? 0 : currentIndex + 1;
                setMainImage(images[nextIndex]);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            >
              <FaArrowRight />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-3 gap-2">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => handleThumbnailClick(image)}
              className={`cursor-pointer rounded-lg overflow-hidden h-24 ${
                mainImage === image ? "ring-2 ring-gold-600" : ""
              }`}
            >
              <img
                src={image || "/placeholder.svg?height=150&width=200"}
                alt={`${alt} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;

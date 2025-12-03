import React, { useState } from "react";

interface SlideshowProps {
  images: string[];
}

const Slideshow: React.FC<SlideshowProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full aspect-video bg-gray-100 overflow-hidden group">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
      />

      <div className="absolute bottom-0 left-0 p-6 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={prevSlide}
          className="w-12 h-12 flex items-center justify-center bg-white text-black hover:bg-black hover:text-white transition-colors"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 flex items-center justify-center bg-white text-black hover:bg-black hover:text-white transition-colors"
        >
          →
        </button>
      </div>

      <div className="absolute top-6 right-6 font-mono text-xs bg-white px-2 py-1">
        {String(currentIndex + 1).padStart(2, "0")} /{" "}
        {String(images.length).padStart(2, "0")}
      </div>
    </div>
  );
};

export default Slideshow;

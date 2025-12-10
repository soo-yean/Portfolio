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

      <div className="absolute inset-0 flex justify-between items-center px-4 pointer-events-none md:top-auto md:right-auto md:bottom-0 md:left-0 md:p-6 md:gap-4 md:justify-start md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={prevSlide}
          className="pointer-events-auto text-gray-300 text-3xl drop-shadow-md hover:text-blue-400 hover:cursor-pointer transition-colors md:w-12 md:h-12 md:flex md:items-center md:justify-center md:bg-white md:text-black md:text-base md:drop-shadow-none md:hover:bg-blue-400 md:hover:text-white"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto text-gray-300 text-3xl drop-shadow-md hover:text-blue-400 hover:cursor-pointer transition-colors md:w-12 md:h-12 md:flex md:items-center md:justify-center md:bg-white md:text-black md:text-base md:drop-shadow-none md:hover:bg-blue-400 md:hover:text-white"
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

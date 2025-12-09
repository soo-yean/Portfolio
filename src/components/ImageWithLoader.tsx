import { useState } from "react";
import Illustration from "./Illustration";

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageWithLoader = ({
  src,
  alt,
  className = "",
}: ImageWithLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={`relative overflow-hidden bg-gray-50 flex items-center justify-center ${className}`}
      style={{ minHeight: isLoading ? "300px" : "auto" }}
    >
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="w-24 h-24 opacity-50 mb-4">
            <Illustration variant="curious" />
          </div>
          <p className="text-blue-400 font-serif text-lg">Loading...</p>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default ImageWithLoader;

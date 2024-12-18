import { useState } from 'react';

interface ImageZoomProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageZoom = ({ src, alt, className }: ImageZoomProps) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <div 
        className={`relative aspect-video group cursor-pointer ${className || ''}`}
        onClick={() => setIsZoomed(true)}
      >
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full rounded object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-blue/30 group-hover:bg-transparent transition-colors duration-300"></div>
      </div>

      {isZoomed && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative w-full max-w-5xl aspect-video">
            <img
              src={src}
              alt={alt}
              className="absolute inset-0 w-full h-full rounded object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};
import React from 'react'

export default function Gallery() {
    const images = [
      "/images/1.jpg",
      "/images/2.jpg",
      "/images/3.jpg",
      "/images/4.jpg",
    ];
  
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold text-center mb-4">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-10">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
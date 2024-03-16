import React, { useState } from 'react';

const Slider = ({ images }) => {

    
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-[800px] flex items-center justify-center h-screen ml-64  -mt-6">
    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-700">
      <img
        src={images[currentIndex]}
        alt="slide"
        className="w-full h-auto opacity-100"
      />
    </div>
    <button
      onClick={prevSlide}
      className="absolute left-0 top-1/2 transform transition-transform duration-700 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-4 py-2 rounded-md z-10 hover:bg-opacity-75 focus:outline-none"
    >
      Previous
    </button>
    <button
      onClick={nextSlide}
      className="absolute right-0 top-1/2 transform transition-transform duration-700 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-4 py-2 rounded-md z-10 hover:bg-opacity-75 focus:outline-none"
    >
      Next
    </button>
  </div>
  
  );
};

export default Slider;

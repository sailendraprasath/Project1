import React from 'react'
import Header from '../Components/Header'
import Slider from '../Components/Slider';

const Front = () => {
  const images = [
    "src/assets/img2.jpg ",
    "src/assets/img1.jpg ",
    "src/assets/img3.jpg ",
    "src/assets/img4.jpg ",
     // Add more image URLs as needed
   ];
  return (
    <div className='bg-gradient-to-r from-myfont1 to-myfont2 h-screen relative'>
      <div>
      <Header/>
      </div>
      <div className='flex items-center justify-center font-My3 text-4xl'>
        <h1>Food is our common ground, a universal experience</h1>
      </div>
      <div className="container mx-auto rounded-full relative">
      <Slider images={images} />
    </div>
    </div>
  )
}

export default Front

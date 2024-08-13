import React from 'react';
import image1 from "../assets/Caraousal/slider1.jpg"
import image2 from "../assets/Caraousal/slider2.jpeg"
import image3 from "../assets/Caraousal/slider3.jpeg"
import { Carousel } from "flowbite-react";

const HomeCarousal = () => {
  return (
    <div className='Home h-screen bg-white'>
      {/* Increase the height values here */}
      <div className="h-80 sm:h-96 xl:h-[30rem] 2xl:h-[40rem]">
        <Carousel>
          <img src={image1} alt="Slider Image 1" />
          <img src={image2} alt="Slider Image 2" />
          <img src={image3} alt="Slider Image 3" />
        </Carousel>
      </div>
    </div>
  );
}

export default HomeCarousal;

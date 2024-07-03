import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; // Pagination module

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import Bg from "../assets/bg-1.png";

import { Bph, Penristek } from "../assets/";

export default function Documentation() {
  const images = [Bph, Penristek];
  return (
    <div
      className="-mt-10 w-screen h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div>
        <div className="pt-32">
          <img
            className="mx-auto mt-10 w-[500px]  lg:w-[700px]"
            src="https://bemfilkom.ub.ac.id/assets/TentangTittle-BuK75-IC.png"
            alt="Gambar Tentang"
          />
        </div>
        <Swiper
          navigation={false}
          modules={[Autoplay, Navigation, Pagination]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="h-[400px] w-[400px] lg:w-2/4 mx-auto "
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center text-center "
            >
              <img src={image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

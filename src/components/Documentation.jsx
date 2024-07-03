import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; // Pagination module

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import Bg from "../assets/dokumenopsi.png";

import { Bph, Penristek } from "../assets/";

export default function Documentation() {
  const images = [Bph, Penristek];
  return (
    <div
      className="-mt-10 h-full w-full bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="pb-20">
        <div className="pt-28 lg:pt-52">
          <img
            className="mx-auto mt-8 w-[500px]  lg:w-[700px]"
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
          className="h-[200px] w-[400px]  lg:w-[800px] lg:h-[450px]  lg:pb-40 mt-10
          flex justify-center items-center text-center "
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="">
              <img className="lg:w-[800px] " src={image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

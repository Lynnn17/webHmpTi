import React from "react";
import Bg from "../../assets/bgprofile.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import {
  Gambar1,
  Gambar2,
  Gambar3,
  Gedung,
} from "../../assets/documentations/index";

import Tentang from "../../assets/profile.png";

function Documentation() {
  return (
    <div
      className="-mt-16 w-full h-full lg:bg-cover md:bg-cover"
      style={{
        backgroundImage: `url(${Bg})`,
      }}
    >
      <div className="w-full py-20 ">
        <img className="mx-auto " src={Tentang} alt="Gambar Tentang" />

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          initialSlide={1}
          loop={false}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 3,
            stretch: 0,
            depth: 900,
            modifier: 2.5,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mt-8 h-[220px]  md:h-[380px]  xl:h-[570px] 2xl:h-[850px]"
        >
          <SwiperSlide className="">
            <img
              src={Gambar1}
              className="w-[75%] mx-auto rounded-3xl"
              alt="slide_image"
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <img
              src={Gambar2}
              className="w-[75%] mx-auto rounded-3xl"
              alt="slide_image"
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <img
              src={Gambar3}
              className="w-[75%] mx-auto rounded-3xl"
              alt="slide_image"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Documentation;

import React from "react";
import { InstagramEmbed, YouTubeEmbed } from "react-social-media-embed";
import Bg from "../assets/opsi.png";

const Sosmed = () => {
  return (
    <div>
      <div
        className="-mt-2 w-full h-full lg:bg-cover  "
        style={{
          backgroundImage: `url(${Bg})`,
        }}
      >
        <div className="pt-20">
          <img
            className="mx-auto  w-[500px]  lg:w-[700px]"
            src="https://bemfilkom.ub.ac.id/assets/TentangTittle-BuK75-IC.png"
            alt="Gambar Tentang"
          />

          <div className="px-9">
            <p className="text-black text-center mt-10">
              Video Profile Informatics Engineering, Surabaya State University
            </p>
          </div>
          <div className="mt-10">
            {/* Youtube */}
            <div className="">
              <div className="w-full hidden md:flex justify-center items-center">
                <YouTubeEmbed
                  url="https://www.youtube.com/embed/BBzbQAXkQxk?si=2VfwSTRzczZQhy3h"
                  height={"500px"}
                  width={"75%"}
                />
              </div>
              <div className="w-full sm:hidden flex  justify-center items-center">
                <YouTubeEmbed
                  url="https://www.youtube.com/embed/BBzbQAXkQxk?si=2VfwSTRzczZQhy3h"
                  height={"200px"}
                  width={"75%"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sosmed;

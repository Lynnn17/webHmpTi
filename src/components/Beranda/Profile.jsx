import React from "react";
import { InstagramEmbed, YouTubeEmbed } from "react-social-media-embed";
import Bg from "../../assets/opsi.png";
import profile from "../../assets/tentang.png";

import Kabinet from "../../assets/kabinetlogo.png";
import BorderAtas from "../../assets/borderatas.png";
import BorderBawah from "../../assets/borderbawah.png";

const Profile = () => {
  return (
    <div
      className="-mt-16 h-full w-full bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="py-16 pb-2 ">
        <img className="mx-auto " src={profile} alt="Gambar Tentang" />

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
            <div className="w-full md:hidden flex  justify-center items-center">
              <YouTubeEmbed
                url="https://www.youtube.com/embed/BBzbQAXkQxk?si=2VfwSTRzczZQhy3h"
                height={"270px"}
                width={"85%"}
              />
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="">
          <img
            className="w-[40%] md:w-[30%] lg:w-[20%] h-full mx-auto"
            src={BorderAtas}
            alt=""
          />
          <img
            className="animation-opacity w-[40%]  md:w-[30%] lg:w-[20%] -mt-20 opacity-75 md:-mt-28 h-full mx-auto"
            src={Kabinet}
            alt=""
          />
          <img
            className="animatation-bounce w-[80%] md:w-[60%] lg:w-[40%] -mt-12 md:-mt-20 h-full mx-auto"
            src={BorderBawah}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;

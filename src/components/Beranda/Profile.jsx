import React from "react";
import { YouTubeEmbed } from "react-social-media-embed";
import Bg from "../../assets/bgabu.png";
import profile from "../../assets/profil.png";

import Kabinet from "../../assets/kabinetlogo.png";
import BorderAtas from "../../assets/borderatas.png";
import BorderBawah from "../../assets/borderbawah.png";

import { motion } from "framer-motion";

const Profile = () => {
  return (
    <div
      className="-mt-16 h-full w-full bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="pt-7 pb-4 ">
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="mx-auto  h-full w-[50%] lg:w-[45%] lg:mt-6 2xl:w-[25%] 2xl:mt-10"
          src={profile}
          alt="Gambar Tentang"
        />

        <div className="mt-6 lg:mt-10 ">
          {/* Youtube */}
          <div className="">
            <div className="w-[80%] h-[400px] xl:w-[60%] 2xl:w-[50%]  mx-auto hidden md:flex justify-center items-center">
              <YouTubeEmbed
                url="https://www.youtube.com/embed/SBI7f5m8NGA?si=aYYn2qnNDXxPOxEd"
                // height={"600px"}
                height={"400px"}
                width={"85%"}
              />
            </div>
            <div className="w-full md:hidden flex  justify-center items-center">
              <YouTubeEmbed
                url="https://www.youtube.com/embed/SBI7f5m8NGA?si=aYYn2qnNDXxPOxEdh"
                height={"270px"}
                width={"85%"}
              />
            </div>
          </div>
        </div>
        <div aria-hidden="true" className=" mt-8">
          <img
            className="w-[40%] md:w-[30%] lg:w-[20%] h-full mx-auto"
            src={BorderAtas}
            alt=""
          />
          <img
            className="animation-opacity w-[40%]  h-[250px]  md:w-[200px] md:h-[300px] lg:h-[350px] lg:w-[25%] 2xl:w-[14%] xl:h-[400px] -mt-20 opacity-75 md:-mt-28 h-full mx-auto 2xl:-mt-40 "
            src={Kabinet}
            alt=""
          />
          <img
            className="animatatio n-bounce w-[70%] md:w-[50%] lg:w-[40%] 2xl:w-[25%] -mt-10 md:-mt-12 h-full mx-auto"
            src={BorderBawah}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;

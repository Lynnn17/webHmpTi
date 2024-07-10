import React from "react";
import { InstagramEmbed, YouTubeEmbed } from "react-social-media-embed";
import Bg from "../assets/bgprofile.png";
import profile from "../assets/profile.png";

const Profile = () => {
  return (
    <div
      className="-mt-16 h-full w-full bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="py-20 ">
        <img className="mx-auto " src={profile} alt="Gambar Tentang" />

        <div className="px-9">
          <p className="text-white text-center mt-10">
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
            <div className="w-full md:hidden flex  justify-center items-center">
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
  );
};

export default Profile;

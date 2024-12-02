import Navbar from "../components/Navbar";
import Bg from "../assets/bgprofile.png";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import Nodata from "../components/NoData";
const DetailArtikel = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const fetchData = async () => {
    setLoading(true);
    try {
      const slug = pathname.split("/")[2];
      if (!slug) {
        console.error("Slug tidak ditemukan di path");
        setLoading(false);
        return;
      }

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}galeri/detail/${slug}`
      );

      if (response.data && response.data.model) {
        setData(response.data);
      } else {
        console.error("Data dari API tidak memiliki model");
      }
    } catch (error) {
      console.error("Error fetching galeri:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pathname]);

  if (loading) return <Loading />;
  if (!data) return <Nodata />;

  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:text-cyan-900 selection:bg-cyan-300">
        <div className="  h-full w-full">
          <div
            className="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-center md:bg-cover"
            style={{ backgroundImage: `url(${Bg})` }}
          ></div>
        </div>
        <Navbar />
        <div className="text-center pt-10 pt-16 lg:pt-8">
          <h1 className="text-3xl font-bold">Galeri Foto</h1>
          <h2>Kilasan galeri foto dari beberapa kegiatan</h2>
        </div>
        <div className=" w-full h-full">
          <iframe
            className=" w-[60%] md:w-[80%] lg:w-full  mx-auto h-[32rem]"
            id="myframe"
            src={`https://drive.google.com/embeddedfolderview?id=${data.model.id_gdrive}#grid`}
          ></iframe>
        </div>
        <div className="pt-10">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DetailArtikel;

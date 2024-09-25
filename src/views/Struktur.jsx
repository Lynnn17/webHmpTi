import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Bg from "../assets/bg.png";
import Home from "../components/Struktur/Home";
import { useState, useEffect } from "react";
import axios from "axios";
import VisiMisi from "../components/Struktur/VisiMisi";
import { useLocation } from "react-router-dom";

const Struktur = () => {
  const [data, setData] = useState(null);
  const location = useLocation();
  const { pathname } = location;
  const slug = pathname.split("/")[2];

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/tentang/kepengurusan/struktur/${slug}`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:text-cyan-900 selection:bg-cyan-300">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div
            className="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-center md:bg-cover"
            style={{ backgroundImage: `url(${Bg})` }}
          ></div>
        </div>
        <div className="">
          <Navbar />
          <Home data={data} />
          <VisiMisi data={data.periode} />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Struktur;

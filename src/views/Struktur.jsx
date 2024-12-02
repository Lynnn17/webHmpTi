import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Bg from "../assets/bg.png";
import Home from "../components/Struktur/Home";
import { useState, useEffect } from "react";
import axios from "axios";
import VisiMisi from "../components/Struktur/VisiMisi";
import { useLocation } from "react-router-dom";
import Loading from "../components/Loading";
import Nodata from "../components/NoData";

const Struktur = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const slug = pathname.split("/")[2];

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}tentang/kepengurusan/struktur/${slug}`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <Loading />;
  if (!data) return <Nodata />;

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

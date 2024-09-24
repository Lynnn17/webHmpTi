import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Bg from "../assets/bg.png";
import Home from "../components/Kabinet/Home";
import FilosofiLogo from "../components/Kabinet/FilosofiLogo";
import { useEffect, useState } from "react";
import axios from "axios";
import Kepengurusan from "../components/Kabinet/Kepengurusan";
import Bg2 from "../assets/bgabu.png";

const Kabinet = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/tentang/kepengurusan/periode"
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
  console.log(data);

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:text-cyan-900 selection:bg-cyan-300">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div
          className="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-center md:bg-cover"
          style={{ backgroundImage: `url(${Bg})` }}
        ></div>
      </div>
      <div className="">
        <Navbar />
        <Home data={data.new_periode} />
        <div
          className="w-full h-full -mt-16 bg-no-repeat bg-cover bg-center pb-10"
          style={{ backgroundImage: `url(${Bg2})` }}
        >
          <div className="text-black text-center py-10 pt-16 lg:pt-32">
            <h1 className="text-3xl font-bold">Periode Kepengurusan</h1>
            <h2>Daftar Semua Periode Kepengurusan</h2>
          </div>
          {data.periodes.data.map((event) => (
            <Kepengurusan data={event} />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Kabinet;

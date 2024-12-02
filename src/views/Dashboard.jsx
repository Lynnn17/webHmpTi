import Documentation from "../components/Beranda/Documentation";
import Home from "../components/Beranda/Home";
import Navbar from "../components/Navbar";
import About from "../components/Beranda/About";
import Welcome from "../components/Beranda/Welcome";
import Bg from "../assets/bg.png";
import Footer from "../components/Footer";
import Profile from "../components/Beranda/Profile";
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Nodata from "../components/NoData";

function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}tentang/kepengurusan/periode`
      );

      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <Loading />;
  if (!data || !data.periodes) return <Nodata />;
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
        <Home />
        <Welcome />
        <About />
        <Documentation />
        <Profile data={data.new_periode.foto} />

        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;

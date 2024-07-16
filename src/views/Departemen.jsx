import Documentation from "../components/Beranda/Documentation";
import Home from "../components/Departemen/Home";
import Navbar from "../components/Navbar";
import Bg from "../assets/bg.png";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function Departemen() {
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
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default Departemen;

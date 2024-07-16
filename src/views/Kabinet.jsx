import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Bg from "../assets/bg.png";
import Home from "../components/Kabinet/Home";
import FilosofiLogo from "../components/Kabinet/FilosofiLogo";

const Kabinet = () => {
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
        <FilosofiLogo />
        <Footer />
      </div>
    </div>
  );
};
export default Kabinet;

import gedungTi from "../assets/gedungTi.png";
const Home = () => {
  return (
    <div>
      <div
        className="w-full h-full lg:bg-cover"
        style={{
          backgroundImage:
            'url("https://bemfilkom.ub.ac.id/assets/bgcorak-OepKPvdH.svg")',
        }}
      >
        <div className=" py-20 h-full lg:flex">
          <div className="flex flex-col px-16 lg:items-start lg:justify-left  items-center justify-center">
            <h1 className="text-white text-[20px] sm:text-[35px] md:w-full sm:text-center lg:text-start lg:text-[30px] pt-6 lg:pt-0 font-regular">
              Welcome To
            </h1>
            <div className="flex flex-col lg:items-start items-center justify-center text-blue-500 text-[40px] sm:text-[60px] s lg:text-[65px] xl:text-[80px] font-extrabold  bg-gradient-to-tr from-blue-900 to-blue-500 bg-clip-text text-transparent">
              <span>HMP TI </span>
              <span className="lg:-mt-10 -mt-5 text-nowrap ">UNESA 2024</span>
            </div>
          </div>
          <div className="flex lg:justify-end items-center justify-center ">
            <img
              className=" mt-10 sm:w-[600px] w-[350px] lg:w-[600px] lg:h-full "
              src={gedungTi}
              alt="Gedung TI Unesa"
            />
          </div>
        </div>
        <div>
          <img
            src="https://bemfilkom.ub.ac.id/assets/awanKrem-CFGhF021.png"
            alt="Gambar awan krem"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

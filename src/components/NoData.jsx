import Navbar from "./Navbar";

const Nodata = () => {
  return (
    <div>
      <div className=" w-full bg-neutral-950">
        <Navbar />
      </div>
      <div className="min-h-screen  bg-neutral-950  flex flex-col items-center justify-center ">
        <h1 className="text-2xl text-white font-bold mb-8 animate-pulse">
          Tidak Ada Data
        </h1>
      </div>
    </div>
  );
};

export default Nodata;

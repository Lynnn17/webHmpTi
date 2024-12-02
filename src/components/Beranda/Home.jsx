import TI from "../../assets/TI.png";
import Pembatas from "../../assets/pembatas.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      <div className=" w-full h-full">
        <div className="py-20 h-full lg:flex xl:justify-center  ">
          <div className="flex flex-col px-16 lg:items-start lg:justify-left  items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-white text-[20px] sm:text-[35px] md:w-full sm:text-center lg:text-start lg:text-[30px] pt-6 lg:pt-0 font-regular"
            >
              Welcome To
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
              className="flex flex-col lg:items-start items-center justify-center text-blue-500 text-[40px] sm:text-[60px] s lg:text-[65px] xl:text-[80px] font-extrabold  bg-gradient-to-tr from-blue-900 to-blue-500 bg-clip-text text-transparent"
            >
              <span>HMP TI </span>
              <span className="lg:-mt-10 -mt-5 text-nowrap ">UNESA 2024</span>
            </motion.div>
          </div>
          <div className="flex lg:justify-end i tems-center justify-center xl:flex-initial 2xl:w-2/4 ">
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
              className=" mt-10 sm:w-[600px] w-[500px] lg:w-[600px] 2xl:w-[750px] lg:h-full "
              src={TI}
              alt="Foto HMPTI Unesa"
            />
          </div>
        </div>
        <div className="">
          <img
            className="h-[150px] w-full"
            src={Pembatas}
            alt="Gambar awan krem"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

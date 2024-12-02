import { useState } from "react";
import LogoTi from "../../assets/logohmp.png";
import Bg from "../../assets/bgabu.png";
import Pembatas from "../../assets/pembatas3.png";
import PembatasLP from "../../assets/pembataslp.png";
import Tentang from "../../assets/tentang.png";
import PembatasBawah from "../../assets/pembatas.png";
import { motion } from "framer-motion";

const About = () => {
  // State to manage line clamp
  const [isClamped, setIsClamped] = useState(true);

  // Toggle function to show/hide clamp
  const toggleClamp = () => {
    setIsClamped(!isClamped);
  };

  return (
    <div
      className="-mt-2 w-full h-full lg:bg-cover"
      style={{
        backgroundImage: `url(${Bg})`,
      }}
    >
      <div className="w-full xl:-mt-3 xl:pb-20 md:pb-8">
        <img
          className="absolute xl:hidden sm:-mt-14  md:-mt-15 -mt-10 xl:-mt-20"
          src={Pembatas}
          alt=""
        />
        <img
          className="absolute hidden xl:flex  md:-mt-15 -mt-10 xl:-mt-18 2xl:-mt-24"
          src={PembatasLP}
          alt=""
        />
      </div>

      <div className="w-full h-max pt-14 lg:pt-32 xl:pt-14 pb-8 md:pt-16 xl:pb-[100px] relative">
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="mx-auto"
          src={Tentang}
          alt="Gambar Tentang"
        />

        <div className="h-max mt-10 xl:grid xl:grid-cols-2 xl:mx-24 2xl:mx-40 xl:gap-[200px]">
          <img
            className="w-52 md:w-72 h-full mx-auto xl:hidden"
            src={LogoTi}
            alt="logo ti"
          />
          {/* gambar logo view laptop */}
          <div className="order-last hidden relative xl:flex justify-center items-center w-[30rem] h-[26rem] mt-28 2xl:mt-20 mx-auto">
            <img className="" src={LogoTi} alt="logo ti" />
          </div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className="mx-8 xl:mx-0 xl:w-[35rem] 2xl:w-[40rem]"
          >
            <h3 className="text-start font-bold xl:font-extrabold text-lg xl:text-[32px] mt-8 mb-4 xl:mb-8 text-[#252525]">
              Pengertian HMP TI UNESA
            </h3>
            <p
              className={`text-justify font-normal text-sm xl:text-2xl mb-5 xl:mb-8 xl:leading-7 text-[#252525] ${
                isClamped
                  ? "line-clamp-[9] md:line-clamp-[5] xl:line-clamp-[17]"
                  : ""
              }`}
            >
              HMP TI UNESA (Himpunan Mahasiswa Program Studi Teknik Informatika
              Universitas Negeri Surabaya) adalah sebuah organisasi
              kemahasiswaan yang berada di bawah naungan Program Studi Teknik
              Informatika UNESA. Organisasi ini berfungsi sebagai wadah bagi
              mahasiswa untuk mengembangkan potensi diri, baik dari segi
              akademik, sosial, maupun kepribadian. HMP TI UNESA bertujuan untuk
              meningkatkan kualitas pendidikan mahasiswa dengan menyelenggarakan
              berbagai kegiatan, seperti seminar, pelatihan, workshop, dan
              lomba-lomba yang berkaitan dengan bidang informatika dan
              teknologi. Kegiatan-kegiatan ini tidak hanya memperluas wawasan
              mahasiswa, tetapi juga memberikan kesempatan untuk mempraktikkan
              pengetahuan yang telah dipelajari di kelas dalam konteks dunia
              nyata. Selain itu, HMP TI UNESA juga memiliki peran penting dalam
              menjalin komunikasi yang efektif antara mahasiswa dengan dosen
              serta pihak universitas, sehingga setiap aspirasi mahasiswa dapat
              tersalurkan dengan baik. Organisasi ini berkomitmen untuk
              membangun solidaritas di antara sesama mahasiswa, serta
              menciptakan atmosfer yang mendukung perkembangan pribadi dan
              profesional.
            </p>
            <button
              onClick={toggleClamp}
              className="w-max ring-1 ring-[#304463] text-[#304463] hover:bg-[#304463] hover:text-white rounded-full px-6 py-2 xl:text-xl"
            >
              {isClamped ? "Lihat Selengkapnya" : "Lihat Lebih Sedikit"}
            </button>
          </motion.div>
        </div>
      </div>
      <div>
        <img
          className="h-[150px] w-full"
          src={PembatasBawah}
          alt="Pembatas Kertas"
        />
      </div>
    </div>
  );
};

export default About;

import Logo from "../../assets/kabinetonly.png";
import Timbangan from "../../assets/Timbangan.svg";
import Api from "../../assets/api.svg";
import Sayap from "../../assets/sayap.svg";
import Tangan from "../../assets/tangan.svg";
import Buku from "../../assets/buku.svg";
import Bg from "../../assets/bgabu.png";
import Sambutan from "../../assets/sambutan.png";
import Warna from "../../assets/warnakabinet.png";
import Tes from "../../assets/tes.png";

const FilosofiLogo = () => {
  return (
    <div>
      <div
        className="-mt-20 bg-cover lg:bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${Bg})`,
        }}
      >
        <div className="py-10 pb-24">
          <img className="mx-auto mt-10" src={Sambutan} alt="" />

          <div className="grid grid-cols-3 mt-10 mb-10 gap-4   xl:grid-cols-2 xl:w-[70%] xl:mx-auto xl:gap-2 2xl:w-[50%]">
            <div className="w-full mt-4 md:mt-0">
              <img
                className="mx-auto  w-[100%] xl:w-[50%] md:w-[80%] 2xl:w-[50%] "
                src={Tes}
                alt=""
              />
            </div>
            <div className="col-span-2 md:col-span-2 xl:col-span-1 ">
              <p className="text-black text-lg font-bold text-start md:text-xl ">
                Warna Orange Dan Kuning Bergradasi
              </p>
              <p className="text-sm font-bold text-[#304463] text-start mb-1 md:text-base md:my-1 ">
                Semangat Dan Keberanian
              </p>
              <p className=" text-black text-xs font-medium text-start md:text-sm ">
                Melambangkan dedikasi yang tinggi dan energi yang tak pernah
                padam dalam mengejar tujuan
              </p>
            </div>
          </div>

          <div className="md:grid flex-col  lg:grid-cols-3 lg:gap-2 md:grid-cols-2 py-10 px-4  ">
            {/* Filosofi Logo */}
            <div className="flex flex-col  items-center ">
              <img
                className=" md:mt-2 mx-auto w-[180px] "
                src={Logo}
                alt="Logo Kabinet"
              />
              <p className="text-black text-lg font-bold text-center">
                Logo Kabinet Gagas Karya
              </p>
              <p className="text-sm font-bold text-[#304463] text-center mb-1 ">
                Prinsip Dan Komitmen
              </p>
              <p className=" text-black text-xs font-medium text-center">
                Mencerminkan prinsip-prinsip keadilan, pengetahuan, persatuan,
                inovasi, dan pemberdayaan mahasiswa. Mencerminkan komitmen untuk
                membangun lingkungan yang kolaboratif dan mendukung dimana
                mahasiswa dapat berkembang secara akademis dan kreatif,
                mendorong kemajuan dalam bidang teknik informatika.
              </p>
            </div>

            {/* Filosofi timbangan */}
            <div className="mt-20 sm:mt-0  flex flex-col  items-center ">
              <img
                className="  mx-auto w-[145px]"
                src={Timbangan}
                alt="Timbangan Kabinet"
              />
              <p className="text-black text-lg font-bold text-center">
                Timbangan Keadilan
              </p>
              <p className="text-sm font-bold text-[#304463] text-center mb-1 ">
                Keadilan, Keseimbangan, dan Kesetaraan
              </p>
              <p className=" text-black text-xs font-medium text-center">
                Menunjukan bahwa organisasi ini menghargai keadilan dan
                perlakuan yang adil dalam semua kegiatan
              </p>
            </div>

            {/* Filosofi Api */}
            <div className="mt-20 sm:mt-10 xl:mt-2 flex flex-col  items-center ">
              <img className="mx-auto w-[145px]" src={Api} alt="Nayla Api" />
              <p className="text-black text-lg font-bold text-center">
                Nyala Api
              </p>
              <p className="text-sm font-bold text-[#304463] text-center mb-1 ">
                Semangat tak pernah padam dan Inspirasi
              </p>
              <p className=" text-black text-xs font-medium text-center">
                Menunjukan bahwa organisasi ini berusaha untuk menyalakan
                semangat dan motivasi dalam diri setiap anggotanya. Mendorong
                mereka untuk selalu berusaha mencapai terbaik
              </p>
            </div>

            {/* Filosofi Sayap */}
            <div className="mt-20 sm:mt-10 flex flex-col  items-center ">
              <img
                className=" mx-auto w-[145px]"
                src={Sayap}
                alt="Sayap Kabinet"
              />
              <p className="text-black text-lg font-bold text-center">
                Sayap Yang Terbuka
              </p>
              <p className="text-sm font-bold text-[#304463] text-center mb-1 ">
                Kebebasan dan Aspirasi
              </p>
              <p className=" text-black text-xs font-medium text-center">
                Menunjukan bahwa organisasi ini memberikan anggotanya kebebasan
                untuk berekspresi dan mengejar impian mereka. Memberikan
                dorongan utuk terus maju dan mencapai ketinggian baru dalam
                pengetahuan dan inovasi
              </p>
            </div>

            {/* Filosofi Tangan */}
            <div className="mt-20 sm:mt-10 flex flex-col  items-center ">
              <img
                className="mx-auto w-[145px]"
                src={Tangan}
                alt="Tangan Kabinet"
              />
              <p className="text-black text-lg font-bold text-center">
                Tangan Membentuk Perisai
              </p>
              <p className="text-sm font-bold text-[#304463] text-center mb-1 ">
                Kerjasama, Persatuan, dan Saling Dukung
              </p>
              <p className=" text-black text-xs font-medium text-center">
                Menunjukan bahwa anggota organisasi ini bekerja sama untuk
                melindungi dan meningkatkan satu sama lain, membangun rasa
                komunitas dan kerjasama yang kuat
              </p>
            </div>

            {/* Filosofi Buku */}
            <div className="mt-20 sm:mt-10 flex flex-col  items-center ">
              <img
                className="  mx-auto w-[145px]"
                src={Buku}
                alt="Timbangan Kabinet"
              />
              <p className="text-black text-lg font-bold text-center">Buku</p>
              <p className="text-sm font-bold text-[#304463] text-center mb-1 ">
                Pendidikan dan ilmu pengetahuan
              </p>
              <p className=" px-1 text-black text-xs font-medium text-center">
                Menunjukan bahwa organisasi ini sangat menghargai pendidikan dan
                mendukung upaya akademis anggotanya
              </p>
            </div>

            {/* end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilosofiLogo;

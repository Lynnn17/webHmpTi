import Logo from "../../assets/logo.png";
import Timbangan from "../../assets/Timbangan.svg";
import Api from "../../assets/api.svg";
import Sayap from "../../assets/sayap.svg";
import Tangan from "../../assets/tangan.svg";
import Buku from "../../assets/buku.svg";
import Bg from "../../assets/bgabu.png";
import Sambutan from "../../assets/sambutan.png";

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

          <div className="md:grid flex-col  lg:grid-cols-3 lg:gap-2 md:grid-cols-2 py-10 px-4 ">
            {/* Filosofi Logo */}
            <div className="flex flex-col  items-center ">
              <img
                className="  mx-auto w-[175px] "
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
                className="  mx-auto w-[175px]"
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
            <div className="mt-20 sm:mt-10 xl:mt-0 flex flex-col  items-center ">
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

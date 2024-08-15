import LogoT from "../../assets/fti.png";
import LogoI from "../../assets/fi.png";
import LogoTagar from "../../assets/ftagar.png";

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

          <div className="md:grid flex-col  lg:grid-cols-3 lg:gap-2 md:grid-cols-2 py-10 px-4  ">
            {/* Filosofi Logo */}
            <div className="flex flex-col  items-center ">
              <img
                className="  mx-auto w-[175px]"
                src={LogoT}
                alt="Logo Kabinet"
              />
              <p className="text-black text-lg font-bold text-center">
                Letter T
              </p>
              <p className="text-sm font-bold text-[#304463] text-center mb-1 ">
                Prinsip Dan Komitmen
              </p>
              <p className=" text-black text-xs font-medium text-center">
                Letter T yang memvisualisasikan huruf T yang ada pada gabungan
                logo HMP TI UNESA
              </p>
            </div>

            {/* Filosofi timbangan */}
            <div className="mt-20 sm:mt-0  flex flex-col  items-center ">
              <img
                className="  mx-auto w-[85px]"
                src={LogoI}
                alt="Timbangan Kabinet"
              />
              <p className="text-black text-lg font-bold text-center">
                Letter I
              </p>
              <p className="text-sm font-bold text-[#304463] text-center mb-1 ">
                Keadilan, Keseimbangan, dan Kesetaraan
              </p>
              <p className=" text-black text-xs font-medium text-center">
                Letter I yang memvisualisasikan huruf I yang ada pada gabungan
                logo HMP TI UNESA
              </p>
            </div>

            {/* Filosofi Api */}
            <div className="mt-20 sm:mt-10 xl:mt-0 flex flex-col  items-center md:col-span-2 xl:col-span-1 ">
              <img
                className="mx-auto w-[145px]"
                src={LogoTagar}
                alt="Nayla Api"
              />
              <p className="text-black text-lg font-bold text-center">
                Symbol Tagar Pembuka
              </p>
              <p className="text-sm font-bold text-[#304463] text-center mb-1 ">
                Semangat tak pernah padam dan Inspirasi
              </p>
              <p className=" text-black text-xs font-medium text-center">
                Symbol Tagar Pembuka mempunyai makna sebuah progress atau
                perubahan, serta keterbukaan yang transparant
              </p>
            </div>

            {/* Filosofi Sayap */}

            {/* end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilosofiLogo;

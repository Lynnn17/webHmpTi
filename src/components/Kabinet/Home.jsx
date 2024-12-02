import LogoKabinet from "../../assets/kabinetonly.png";

import PembatasBawah from "../../assets/pembatas.png";

const Home = (data) => {
  return (
    <div>
      <div className="w-full h-max pb-8  2xl:pb-[200px] relative ">
        <div className=" h-max mt-10  xl:grid xl:grid-cols-2 xl:mx-24 2xl:mx-40 xl:gap-[50px] ">
          <img
            className="w-52 md:w-72 h-full mx-auto xl:hidden"
            src={`${import.meta.env.VITE_URL}/assets/periode/${data.data.foto}`}
            alt="Kabinet Logo"
          />
          {/* gambar logo view laptop */}
          <div className="order-start hidden relative xl:flex justify-center items-center w-[24rem] h-[15rem] mt-40  mx-auto">
            <img
              src={`${import.meta.env.VITE_URL}/assets/periode/${
                data.data.foto
              }`}
              alt="Kabinet Logo"
            />
          </div>
          <div>
            <div className="mx-8 xl:mx-0 xl:w-[35rem] ">
              <h3 className="text-start font-bold xl:font-extrabold text-lg xl:text-[32px] mt-8  xl:mb-4 text-white">
                Nama Kabinet
              </h3>
              <p className="text-justify font-normal text-sm xl:text-2xl mb-5 xl:mb-8 xl:leading-7 text-white">
                {data.data.nama}
              </p>
            </div>
            <div className="mx-8 xl:mx-0   xl:w-[35rem] ">
              <h3 className="text-start font-bold xl:font-extrabold text-lg xl:text-[32px] mt-8  xl:mb-4 text-white">
                Filosofi Logo
              </h3>
              <p
                className="text-justify font-normal text-sm xl:text-2xl mb-5 xl:mb-8 xl:leading-7 text-white"
                dangerouslySetInnerHTML={{ __html: data.data.filosofi_logo }}
              ></p>
            </div>

            <div className="mx-8 xl:mx-0   xl:w-[35rem] ">
              <h3 className="text-start font-bold xl:font-extrabold text-lg xl:text-[32px] mt-8  xl:mb-4 text-white">
                Visi
              </h3>
              <p
                className="text-justify font-normal text-sm xl:text-2xl mb-5 xl:mb-8 xl:leading-7 text-white"
                dangerouslySetInnerHTML={{ __html: data.data.visi }}
              ></p>
            </div>
            <div className="mx-8 xl:mx-0   xl:w-[35rem] ">
              <h3 className="text-start font-bold xl:font-extrabold text-lg xl:text-[32px] mt-8  xl:mb-4 text-white">
                Misi
              </h3>
              <p
                className="text-justify font-normal text-sm xl:text-2xl mb-5 xl:mb-8 xl:leading-7 text-white"
                dangerouslySetInnerHTML={{ __html: data.data.misi }}
              ></p>
            </div>
          </div>
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

export default Home;

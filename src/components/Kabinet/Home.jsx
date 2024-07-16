import LogoKabinet from "../../assets/kabinetonly.png";
import Bg from "../../assets/opsi.png";
import Pembatas from "../../assets/pembatas3.png";
import PembatasLP from "../../assets/9.png";
import Tentang from "../../assets/profile.png";
import PembatasBawah from "../../assets/pembatas.png";

const Home = () => {
  return (
    <div>
      <div className="w-full h-max pb-8  xl:pb-[200px] relative ">
        <img className="mx-auto " src={Tentang} alt="Gambar Tentang" />

        <div className=" h-max mt-10  xl:grid xl:grid-cols-2 xl:mx-24 2xl:mx-40 xl:gap-[50px] ">
          <img
            className="w-52 md:w-72 h-full mx-auto xl:hidden"
            src={LogoKabinet}
            alt="Kabinet Logo"
          />
          {/* gambar logo view laptop */}
          <div className="order-start hidden relative xl:flex justify-center items-center w-[24rem] h-[15rem] mt-40  mx-auto">
            <img src={LogoKabinet} alt="Kabinet Logo" />
          </div>
          <div className="mx-8 xl:mx-0   xl:w-[35rem] ">
            <h3 className="text-start font-bold xl:font-extrabold text-lg xl:text-[32px] mt-8 mb-4 xl:mb-8 text-white">
              Pengertian Kabinet
            </h3>
            <p className="text-justify font-normal text-sm xl:text-2xl mb-5 xl:mb-8 xl:leading-7 text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptate et reiciendis accusamus alias consectetur illo, quas
              facere ut odit velit a quasi, nisi ducimus, cupiditate earum
              dignissimos molestiae. Minus, voluptatibus quasi. Modi quae ipsam
              neque repellat quasi error accusamus obcaecati itaque, aliquam
              officia corporis iure unde quas non omnis, amet ullam id quod?
              Quibusdam itaque magnam deleniti quia ea ut aut culpa quis!
            </p>
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

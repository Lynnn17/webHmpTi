import LogoTi from "../assets/logo.png";
const Tentang = () => {
  return (
    <div
      className="-mt-1 w-full h-full lg:bg-cover"
      style={{
        backgroundImage:
          'url("https://bemfilkom.ub.ac.id/assets/kremBg-CWd6Mabg.svg")',
      }}
    >
      <div className="w-full h-max py-20 relative ">
        <img
          className="mx-auto mt-10 w-[500px]  lg:w-[700px]"
          src="https://bemfilkom.ub.ac.id/assets/TentangTittle-BuK75-IC.png"
          alt="Gambar Tentang"
        />
        <img
          className="h-20 mt-20  xl:h-60 left-0 top-0 absolute xl:-top-8"
          src="https://bemfilkom.ub.ac.id/assets/daunKiri-Ds23qS7B.png"
          alt="daun kiri"
        />
        <img
          className="h-20 mt-20  xl:h-60 right-0 top-0 absolute xl:-top-8"
          src="https://bemfilkom.ub.ac.id/assets/daunKanan-BCLFADNB.png"
          alt="daun kiri"
        />
        <div className=" h-max mt-10  xl:flex xl:flex-row-reverse xl:mx-20 2xl:mx-40 xl:gap-[120px]">
          <img
            className="w-40 h-full mx-auto xl:hidden"
            src={LogoTi}
            alt="logo ti"
          />
          {/* gambar logo view laptop */}
          <div className="hidden relative xl:flex justify-center items-center w-64 h-[26rem] mt-20 mx-auto">
            <img className="w-[100%]  h-full" src={LogoTi} alt="logo ti" />
          </div>
          <div className="mx-8 xl:mx-0   xl:w-[35rem] ">
            <h3 className="text-start font-bold xl:font-extrabold text-lg xl:text-[32px] mt-8 mb-4 xl:mb-8 text-[#252525]">
              Pengertian HMP TI UNESA
            </h3>
            <p className="text-justify font-normal text-sm xl:text-2xl mb-5 xl:mb-8 xl:leading-7 text-[#252525]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptate et reiciendis accusamus alias consectetur illo, quas
              facere ut odit velit a quasi, nisi ducimus, cupiditate earum
              dignissimos molestiae. Minus, voluptatibus quasi. Modi quae ipsam
              neque repellat quasi error accusamus obcaecati itaque, aliquam
              officia corporis iure unde quas non omnis, amet ullam id quod?
              Quibusdam itaque magnam deleniti quia ea ut aut culpa quis!
              Reprehenderit voluptatibus fugiat magnam, voluptate beatae ratione
              consequuntur sequi! Quia consectetur fugiat similique nisi,
              voluptatibus cumque expedita, dolor nesciunt porro odit modi quae
              ducimus adipisci incidunt harum magni sunt assumenda obcaecati,
              eos temporibus voluptates velit ex! Ad.
            </p>
            <button className=" w-max ring-1 ring-[#dd7802] text-[#dd7802] hover:bg-[#dd7802] hover:text-white rounded-full px-6 py-2 xl:text-xl">
              Lihat Selengkapnya
              <svg
                aria-hidden="true"
                width={20}
                height={20}
                focusable="false"
                style={{ display: "inline-block", marginLeft: "5px" }}
                data-prefix="fas"
                data-icon="arrow-right-long"
                class="svg-inline--fa fa-arrow-right-long relative"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tentang;

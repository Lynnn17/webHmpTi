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
      </div>
    </div>
  );
};

export default Tentang;

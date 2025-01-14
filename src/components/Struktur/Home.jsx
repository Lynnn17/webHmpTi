const Home = (data) => {
  console.log("data", data.data);
  return (
    <>
      <div>
        <img
          className="w-[50%]  h-full mx-auto"
          src={`${import.meta.env.VITE_URL}/assets/periode/${
            data.data.periode.foto
          }`}
          alt=""
        />

        <div className="mx-8 xl:mx-0">
          <h3 className="text-center font-bold xl:font-extrabold text-lg xl:text-[32px] mt-8 xl:mb-4 text-white">
            {data.data.page_attr.description}
          </h3>
          <div className="lg:px-24 xl:px-44">
            {data.data.page_attr.pengurus.bidang.map((item, index) => (
              <div className="pt-4" key={index}>
                <a
                  href="#"
                  className="text-justify font-normal text-sm xl:text-2xl mb-5 xl:mb-8  xl:leading-7 text-white"
                >
                  {item.header?.nama}
                </a>
                {item.body?.map((bodyItem, bodyIndex) => (
                  <div className="flex flex-row gap-2 " key={bodyIndex}>
                    <p className="w-[9rem] md:w-[20rem] text-sm xl:text-lg text-white">
                      {bodyItem.jabatan?.nama}
                    </p>
                    <p>:</p>
                    <div className="flex flex-col">
                      {Array.isArray(bodyItem.pejabat) ? (
                        bodyItem.pejabat.map((anggota, anggotaIndex) => (
                          <a
                            key={anggotaIndex}
                            href="#"
                            className="text-sm xl:text-lg text-white"
                          >
                            {anggota.anggota?.nama || "Nama tidak tersedia"}
                          </a>
                        ))
                      ) : (
                        <a href="#" className="text-sm xl:text-lg text-white">
                          {bodyItem.pejabat?.anggota?.nama ||
                            "Nama tidak tersedia"}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

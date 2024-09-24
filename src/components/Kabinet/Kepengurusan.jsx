import { Link } from "react-router-dom";

const Kepengurusan = (data) => {
  return (
    <>
      <div>
        <div className="text-black pt-2">
          <img
            className="w-[80%] md:w-[50%]  h-full "
            src={`http://127.0.0.1:8000/assets/periode/${data.data.foto}`}
            alt=""
          />
          <div className="px-3">
            <p className="font-semibold ">
              {data.data.dari} - {data.data.sampai}
            </p>
            <p className="font-bold text-xl py-2">{data.data.nama}</p>
            <p
              className="text-justify font-normal text-sm xl:leading-7 py-2"
              s
              dangerouslySetInnerHTML={{ __html: data.data.slogan }}
            ></p>
            <div className="pt-3">
              <Link
                className="bg-blue-800 rounded-[20px] hover:bg-white hover:border-blue-800 hover:border-2 hover:text-blue-800 px-6 py-3 text-white"
                to={`/struktur/${data.data.slug}`}
              >
                Lihat Struktur Kepengurusan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kepengurusan;

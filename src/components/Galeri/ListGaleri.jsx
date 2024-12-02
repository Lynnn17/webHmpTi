import { Link } from "react-router-dom";
import { MdDateRange } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import moment from "moment";
import "moment/locale/id";

const formatDate = (dateString) => moment(dateString).format("DD MMMM YYYY");

const ListGaleri = (data) => {
  return (
    <div>
      <div key={data.id} className=" md:px-7 pt-2 pb-8 pt-5">
        <div className="    w-[22rem] lg:w-[19rem] h-full bg-white rounded-[20px] mx-auto">
          <p className="text-black text-xl font-bold pt-6 pl-4">
            {data.data.nama}
          </p>
          <div className="flex flex-row gap-2 pt-1">
            <MdDateRange className="w-6 h-6 text-gray-500 ml-4" />
            <p className="text-gray-500">{formatDate(data.data.tanggal)}</p>
            <SiGooglemaps className="w-5 h-6 text-gray-500" />
            <p className="text-gray-500">{data.data.lokasi}</p>
          </div>
          <div className=" pb-6 pt-8 pl-3">
            <Link
              to={`/galeri/${data.data.slug}`}
              className="bg-blue-800 rounded-[20px] px-10 py-3 text-white hover:bg-white hover:border-blue-800 hover:border-2 hover:text-blue-800"
            >
              Lihat
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListGaleri;

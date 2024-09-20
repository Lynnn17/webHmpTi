import Navbar from "../components/Navbar";
import axios from "axios";
import React, { useState, useEffect } from "react";

import Bg from "../assets/bgprofile.png";
import { useLocation } from "react-router-dom";
import moment from "moment";
import "moment/locale/id";

const formatDate = (dateString) => moment(dateString).format("DD MMMM YYYY");

const DetailArtikel = () => {
  const [data, setData] = useState(null);
  const [keyword, setKeyword] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const slug = pathname.split("/")[2];
      if (!slug) {
        console.error("Slug tidak ditemukan di path");
        setLoading(false);
        return;
      }

      const response = await axios.get(
        `http://127.0.0.1:8000/api/artikel/${slug}`
      );

      if (response.data && response.data.model) {
        setData(response.data.model);
        setKeyword(response.data.page_attr.keywords);
      } else {
        console.error("Data dari API tidak memiliki model");
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, [pathname]);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No data available</p>;

  const dataDetail = data
    ? data.detail.replace(
        /src="\/assets\/artikel/g,
        'src="http://127.0.0.1:8000/assets/artikel'
      )
    : "";

  return (
    <>
      <Navbar />
      <div
        className=" -mt-20 md:-mt-32 z-[-2] w-full bg-neutral-950 bg-center bg-cover text-white pb-8"
        style={{ backgroundImage: `url(${Bg})` }}
      >
        <div className="mx-auto px-5 pt-28">
          <h1 className="text-4xl font-bold">{data.nama}</h1>
          <div className="flex items-center pt-2">
            <img
              className="w-10 h-10 rounded-full "
              src={`http://127.0.0.1:8000/assets/anggota/${data.user.foto}`}
              alt="tess"
            />
            <p className="font-bold pl-2 overflow-hidden whitespace-nowrap text-ellipsis max-w-[180px]">
              {data.user.name}
            </p>
            <p className="pl-2 font-light text-[14px]">
              {formatDate(data.date)}
            </p>
          </div>
          <div
            className="overflow-x-hidden text-wrap w-full pt-6  "
            dangerouslySetInnerHTML={{ __html: dataDetail }}
          ></div>
          <div>
            <p className="text-sm font-bold">Keyword : {keyword}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailArtikel;

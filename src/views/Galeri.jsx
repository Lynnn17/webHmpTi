import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ListGaleri from "../components/Galeri/ListGaleri";
import Bg from "../assets/bg.png";

import { FiSearch } from "react-icons/fi";
import Pagination from "../components/Pagination";
import React, { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const Galeri = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || ""
  ); // Kata kunci pencarian
  const currentPage = searchParams.get("page") || 1;

  // Fungsi untuk mengambil data berdasarkan pencarian dan halaman
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/galeri?page=${currentPage}&search=${
          searchParams.get("search") || ""
        }`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, [currentPage, searchParams]);

  // Memanggil fetchData hanya ketika currentPage atau searchParams berubah
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Fungsi untuk menangani input pencarian
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update state pencarian, tetapi tidak memanggil API dulu
  };

  // Fungsi untuk memulai pencarian ketika tombol Enter ditekan
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearchParams({ page: 1, search: searchTerm }); // Reset ke halaman 1 dan set parameter pencarian
    }
  };

  // Fungsi untuk menangani perubahan halaman pada pagination
  const handlePageChange = (page) => {
    setSearchParams({ page, search: searchParams.get("search") || "" });
  };

  if (loading) return <p>Loading...</p>;
  if (!data || !data.galeries) return <p>No Data...</p>;

  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:text-cyan-900 selection:bg-cyan-300">
        <div className="h-full w-full">
          <div
            className="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-center md:bg-cover"
            style={{ backgroundImage: `url(${Bg})` }}
          ></div>
        </div>
        <div>
          <Navbar />
          <div className="text-center py-10 pt-16 lg:pt-8">
            <h1 className="text-3xl font-bold">Galeri Foto</h1>
            <h2>Kilasan galeri foto dari beberapa kegiatan</h2>
          </div>
          {/* search */}
          <div>
            <div className="flex justify-center">
              <div className="w-[90%] relative">
                <input
                  type="text"
                  value={searchTerm} // Value diambil dari state searchTerm
                  onChange={handleSearchChange} // Handle perubahan input, tidak memanggil API
                  onKeyDown={handleKeyDown} // Memanggil API hanya saat tombol Enter ditekan
                  className="border text-black p-2 rounded pl-10 w-full"
                  placeholder="Cari..."
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black">
                  <FiSearch />
                </div>
              </div>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 lg:grid-cols-3 pt-4">
            {data.galeries.data.map((item) => (
              <ListGaleri data={item} key={item.id} />
            ))}
            <div>
              <div className="w-screen  flex  justify-center pb-10 text-xl">
                <Pagination
                  links={data.galeries.links}
                  currentPage={Number(currentPage)}
                  lastPage={data.galeries.last_page}
                  handlePageChange={handlePageChange}
                />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Galeri;

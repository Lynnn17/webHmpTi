import Navbar from "../components/Navbar";
import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import ListArtikel from "../components/Artikel/ListArtikel";
import Pagination from "../components/Pagination";
import Bg from "../assets/bgprofile.png";
const Artikel = () => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const [loading, setLoading] = useState(false);

  const baseURL = "http://127.0.0.1:8000/api/artikel/list-berita";

  const buildURL = (page) => {
    let url = `${baseURL}?page=${page}`;
    if (selectedCategory) url += `&kategori=${selectedCategory}`;
    if (selectedTag) url += `&tag=${selectedTag}`;
    return url;
  };

  const fetchArticles = useCallback(
    async (page = 1) => {
      setLoading(true); // Mulai loading
      try {
        const response = await axios.get(buildURL(page));
        setData(response.data);
        setCurrentPage(page);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false); // Selesai loading
      }
    },
    [selectedCategory, selectedTag]
  );

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const handlePageChange = (page) => {
    if (page > 0 && page <= data.articles.last_page) {
      fetchArticles(page);
    }
  };

  const handleCategoryChange = (categorySlug) => {
    if (categorySlug === selectedCategory) {
      setSelectedCategory(null);
      setSelectedTag(null);
    } else {
      setSelectedCategory(categorySlug);
      setSelectedTag(null);
    }
    fetchArticles(1); // Reset ke halaman pertama
  };

  const handleTagChange = (tagSlug) => {
    if (tagSlug === selectedTag) {
      setSelectedTag(null);
      setSelectedCategory(null);
    } else {
      setSelectedTag(tagSlug);
      setSelectedCategory(null);
    }
    fetchArticles(1); // Reset ke halaman pertama
  };

  if (loading) {
    return <p>Loading articles...</p>; // Loading state
  }

  if (!data || !data.articles || !data.articles.data) {
    return <p>No articles found.</p>;
  }

  return (
    <>
      <Navbar />

      <div
        className="  -mt-20 md:-mt-32  z-[-2] w-full  bg-neutral-950 bg-center bg-cover text-white pb-16"
        style={{ backgroundImage: `url(${Bg})` }}
      >
        <div className="text-center py-10 pt-28 lg:pt-36 ">
          <h1 className="text-3xl font-bold">Articles</h1>
          <h2>Daftar artikel dan informasi lainnya</h2>
        </div>
        <div className="lg:grid lg:grid-cols-3 lg:w-[90%] mx-auto  ">
          {/* Articles List */}
          <div className="md:grid md:grid-cols-2 lg:col-span-2">
            {data.articles.data.map((article) => (
              <ListArtikel article={article} key={article.id} />
            ))}
            {/* Pagination */}
            <div className="flex gap-2 justify-center   mt-4 md:col-span-2">
              <Pagination
                links={data.articles.links}
                currentPage={currentPage}
                lastPage={data.articles.last_page}
                handlePageChange={handlePageChange}
              />
            </div>
          </div>

          <div className="lg:flex lg:flex-col ">
            {/* Categories */}
            <div className="w-full pl-5">
              <p className="font-bold text-[18px] pt-3 pb-8">Kategori</p>
              <div className="flex flex-col items-start text-[15px] ">
                {data.categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.slug)}
                    className={`mb-4 transition-all inline-block relative duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100  ${
                      selectedCategory === category.slug
                        ? "font-bold text-blue-900"
                        : "font-medium "
                    }`}
                  >
                    {category.nama} ({category.artikel})
                  </button>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="w-full px-5">
              <p className="font-bold text-[18px] pt-3 pb-4">Tags</p>
              {data.tags.map((tag) => (
                <button
                  key={tag.id}
                  onClick={() => handleTagChange(tag.slug)}
                  className={` bg-blue-700 rounded-xl px-5 py-1 text-white mt-2 mx-1 hover:bg-blue-900 text-sm ${
                    selectedTag === tag.slug ? "font-bold bg-blue-900" : ""
                  }`}
                >
                  {tag.nama}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Artikel;
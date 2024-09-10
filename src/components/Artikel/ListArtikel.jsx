import moment from "moment";
import "moment/locale/id";

const formatDate = (dateString) => moment(dateString).format("DD MMMM YYYY");

const ListArtikel = ({ article }) => {
  return (
    <>
      <div className="mx-auto w-[90%] " key={article.id}>
        <img
          className="w-full h-[250px] lg:h-[220px] object-cover rounded-[30px]"
          src={
            article.foto
              ? `http://127.0.0.1:8000${article.foto}`
              : "https://i.ytimg.com/vi//sddefault.jpg"
          }
          alt="Foto Artikel"
          loading="lazy"
        />
        <div className="pt-3 pb-8">
          <p className="font-light text-sm">
            <a
              href={`http://127.0.0.1:8000/artikel?kategory=${article.categories[0].slug}`}
            > 
              {article.categories[0].nama}
            </a>
          </p>
          <p className="font-bold pb-1">
            <a href={`http://127.0.0.1:8000/artikel/${article.slug}`}>
              {article.nama}
            </a>
          </p>
          <p className="font-light text-sm">{formatDate(article.date)}</p>
        </div>
      </div>
    </>
  );
};

export default ListArtikel;

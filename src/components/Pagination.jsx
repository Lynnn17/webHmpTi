const Pagination = ({ links, currentPage, lastPage, handlePageChange }) => {
  return (
    <>
      {/* Tombol Previous hanya muncul jika currentPage > 1 */}
      {currentPage > 1 && (
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="pagination-link"
        >
          Sebelumnya
        </button>
      )}

      {/* Render tombol halaman */}
      {links
        .filter((link) => !isNaN(link.label)) // Hanya menampilkan tombol dengan angka
        .map((link) => (
          <button
            key={link.label}
            onClick={() => handlePageChange(parseInt(link.label))}
            disabled={link.active}
            className={` px-2 ${link.active ? "text-gray-400" : ""}`}
          >
            {link.label}
          </button>
        ))}

      {/* Tombol Next hanya muncul jika currentPage < lastPage */}
      {currentPage < lastPage && (
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="pl-2"
        >
          Selanjutnya
        </button>
      )}
    </>
  );
};

export default Pagination;

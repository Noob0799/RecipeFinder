const Pagination = ({ currentPage, updateCurrentPage, totalNumberOfPages }) => {
  const handleClick = (newPage) => {
    updateCurrentPage(newPage);
  };
  return (
    <div className="pagination-container">
      <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <i className="fa-solid fa-backward"></i>
      </button>
      {Array(totalNumberOfPages)
        .fill(0)
        .map((_, idx) => (
          <button
            key={idx}
            className={`${currentPage === idx + 1 ? "selected" : ""}`}
            onClick={() => handleClick(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalNumberOfPages}
      >
        <i className="fa-solid fa-forward"></i>
      </button>
    </div>
  );
};

export default Pagination;

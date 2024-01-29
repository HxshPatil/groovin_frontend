// Pagination.jsx
import React from "react";

const Pagination = ({ cardsPerPage, totalCards, currentPage, paginate }) => {
  const pageNumbers = Math.ceil(totalCards / cardsPerPage);

  if (pageNumbers === 1) {
    return null; // Don't display pagination if there's only one page
  }

  return (
    <div className="pagination">
      <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
        Prev
      </button>
      {Array.from({ length: pageNumbers }).map((_, index) => (
        <button
          key={index + 1}
          onClick={() => paginate(index + 1)}
          className={currentPage === index + 1 ? "active" : ""}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === pageNumbers}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

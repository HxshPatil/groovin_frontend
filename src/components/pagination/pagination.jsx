import React from "react";

const Pagination = ({ cardsPerPage, totalCards, currentPage, paginate }) => {
  const pageNumbers = Math.ceil(totalCards / cardsPerPage);

  if (pageNumbers === 1) {
    return null; // Don't display pagination if there's only one page
  }

  // Calculate the range of page numbers to display
  const maxPagesToShow = 6;
  let startPage, endPage;

  if (pageNumbers <= maxPagesToShow) {
    // Display all pages if total pages are less than or equal to maxPagesToShow
    startPage = 1;
    endPage = pageNumbers;
  } else {
    // Calculate the range based on the current page
    const halfPagesToShow = Math.floor(maxPagesToShow / 2);
    if (currentPage <= halfPagesToShow + 1) {
      startPage = 1;
      endPage = maxPagesToShow;
    } else if (currentPage + halfPagesToShow >= pageNumbers) {
      startPage = pageNumbers - maxPagesToShow + 1;
      endPage = pageNumbers;
    } else {
      startPage = currentPage - halfPagesToShow;
      endPage = currentPage + halfPagesToShow;
    }
  }

  return (
    <div className="pagination">
      {currentPage !== 1 && (
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Prev
        </button>
      )}
      {Array.from({ length: endPage - startPage + 1 }).map((_, index) => (
        <button 
          key={startPage + index}
          onClick={() => paginate(startPage + index)}
          className={currentPage === startPage + index ? "active" : ""}
          style={currentPage === startPage + index ? { backgroundColor: "#000000", color: "#ffffff" } : {}}
        >
          {startPage + index}
        </button>
      ))}
      {currentPage !== pageNumbers && (
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === pageNumbers}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;

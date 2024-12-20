
import React from "react";
import '../styles/pagination.css'
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, currentPage + 2);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {startPage > 1 && (
        <button onClick={() => onPageChange(1)}>1</button>
      )}
      {startPage > 2 && <span>...</span>}
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={currentPage === number ? 'active' : ''}
        >
          {number}
        </button>
      ))}
      {endPage < totalPages - 1 && <span>...</span>}
      {endPage < totalPages && (
        <button onClick={() => onPageChange(totalPages)}>
          {totalPages}
        </button>
      )}
    </div>
  );
};


export default Pagination;

/* eslint-disable react/prop-types */
import { usePagination } from "../../hooks/usePagination";

usePagination;
const Pagination = ({
  onPageChange,
  totalCount,
  sibilingCount = 1,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    sibilingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className="pagination-container">
      <li onClick={() => onPageChange(currentPage - 1)}>⬅️</li>

      {paginationRange.map((pageNumber) => {
        if (pageNumber === "...") {
          return <li key={pageNumber}>...</li>;
        }
        return (
          <li
            className={pageNumber === currentPage ? "selected" : ""}
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}

      <li onClick={() => onPageChange(currentPage + 1)}>➡️</li>
    </ul>
  );
};

export default Pagination;

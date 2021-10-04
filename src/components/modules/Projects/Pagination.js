import React from "react";
import { PaginationContainer } from "./StyledPagination";

const Pagination = ({
  itemsPerPage,
  totalNoOfItems,
  navigatePage,
  prevPage,
  activePage,
  nextPage,
  }) => {
    const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalNoOfItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <PaginationContainer>
      <li>
        {pageNumbers.includes(activePage - 1) && (
          <a
            href="#pagination" onClick={() => prevPage(pageNumbers)}
          >
            Prev
          </a>
        )}
      </li>
      {pageNumbers.map((pageNumber) => (
        
          <li className={pageNumber === activePage? 'pageActive':''} key={pageNumber}>
            <a href="#pagination" onClick={() => navigatePage(pageNumber)}>
              {pageNumber}
            </a>
          </li>
      ))}
      <li>
        {pageNumbers.includes(activePage + 1) && (
          <a href="#pagination" onClick={() =>  nextPage(pageNumbers)}>
            Next
          </a>
        )}
      </li>
    </PaginationContainer>
  );
};
export default Pagination;
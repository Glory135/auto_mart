import React, { useState } from "react";
import { SingleProducts } from "./SingleProducts";
import ReactPaginate from "react-paginate";
import { ArrowBack, ArrowForward } from "@material-ui/icons";

export const AllProducts = ({ data }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const dataPerPage = 8;
  const pagesVisited = pageNumber * dataPerPage;

  const DisplayData = data
    .slice(pagesVisited, pagesVisited + dataPerPage)
    .map((item, index) => {
      return <SingleProducts key={index} data={item} />;
    });

  const pageCount = Math.ceil(data.length / dataPerPage);
  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <div className='paginate'>{DisplayData}</div>{" "}
      {data.length > 8 && (
        <div className='paginate-btn-container'>
          <ReactPaginate
            previousLabel={<ArrowBack />}
            nextLabel={<ArrowForward />}
            pageCount={pageCount}
            onPageChange={pageChange}
            containerClassName='paginationBtn'
            previousLinkClassName='prevBtn btn'
            nextLinkClassName='nextBtn btn'
            disableClassName='paginationDisabled'
            activeClassName='paginationActive'
          />
        </div>
      )}
    </>
  );
};

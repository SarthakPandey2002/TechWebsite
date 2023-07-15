import React from "react";
import { useGlobalContext } from "./context";

const Pagination = () => {
  const { page, nbPages, getPrevPage, getNextPage } = useGlobalContext();
  return (
    <>
      <div className="pagination-btn">
        <button onClick={() => getPrevPage()}>prev</button>
        <p>
          {page + 1} of {nbPages}
        </p>
        <button onClick={() => getNextPage()}>next</button>
      </div>
    </>
  );
};

export default Pagination;

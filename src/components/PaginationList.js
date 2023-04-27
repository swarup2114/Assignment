import React from "react";

function PaginationList({ items, pageCount }) {
  let pageNumber = [];
  for (let i = 1; i < Math.ceil(items.length / 10) + 1; i++) {
    pageNumber.push(i);
  }
  return (
    <div>
      {pageNumber.map((val, index) => (
        <span key={index} className="classButton">
          <button onClick={() => pageCount(val)}>{val}</button>
        </span>
      ))}
    </div>
  );
}

export default PaginationList;

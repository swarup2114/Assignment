import React, { useState, useEffect } from "react";
import PaginationList from "./PaginationList";
// import { shouldProcessLinkClick } from "react-router-dom/dist/dom";
function Pagination() {
  const [items, setItems] = useState([]);
  const [pageContent, setPageContent] = useState([items.splice(0, 10)]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  function handleClick(pageCount) {
    setPageContent(items.splice(0, pageCount * 10));
  }
  return (
    <div>
      {items.length && (
        <div>
          {items.map((val, item) => (
            <div key={item}>
              <h6>{val.title}</h6>
            </div>
          ))}
        </div>
      )}
      <PaginationList items={items} pageCount={handleClick} />
    </div>
  );
}

export default Pagination;

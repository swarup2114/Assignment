import React, { useState, useEffect } from "react";
import "./App.css";
function ApiData() {
  const [member, setMember] = useState(0);
  const [fetchdata, setFetchdata] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => setFetchdata(json));
  }, []);
  function updatedPerson() {
    setMember(member + 1);
  }
  function previousPerson() {
    setMember(member - 1);
  }
  return (
    <div className="container">
      <div className="header">
        <div>
          <button
            className="Button1"
            disabled={member <= 0}
            onClick={previousPerson}
          >
            PREVIOUS
          </button>
        </div>
        <div>
          <h1>USER:{member + 1}</h1>
        </div>
        <button
          className="Button2"
          disabled={member >= fetchdata.length - 1}
          onClick={updatedPerson}
        >
          NEXT
        </button>
      </div>
      <div className="imageContainer">
        <img
          style={{ height: "100px", width: "100px" }}
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
          alt="hello"
        />
      </div>
      <div className="bodyContainer">
        {fetchdata.length &&
          fetchdata.map((val, index) => {
            return (
              <div>
                <h1>{val.id}</h1>
              </div>
            );
          })}
        <h6>
          <span className="title">Name:</span>
          {fetchdata.length && fetchdata[member].title}
        </h6>
        <h6>
          <span className="title">Email:</span>
          {fetchdata.length && fetchdata[member].id}
        </h6>
      </div>
    </div>
  );
}

export default ApiData;

import React, { useState } from "react";

function MovieData() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  function handleSearch(e) {
    setSearch(e.target.value);
  }
  function handleSubmit() {
    fetch(`https://www.omdbapi.com/?s=${search}&apikey=263d22d8`)
      .then((response) => response.json())
      .then((value) => setData(value.Search));
  }
  return (
    <div className="App">
      <div className="headContainer">
        <p>Enter your favourite movie</p>
        <input type="text" value={search} onChange={handleSearch} />
        <div>
          <button onClick={handleSubmit} style={{ backgroundColor: "yellow" }}>
            search
          </button>
        </div>
      </div>
      {!data ? (
        <div>
          <h1 style={{ color: "red" }}>No Data Found</h1>
        </div>
      ) : (
        data.map((movie, id) => (
          <div className="bodyContainer">
            <img key={id} src={movie.Poster} alt="hellloooo" />
            <p style={{ color: "red" }}>{movie.Title}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default MovieData;

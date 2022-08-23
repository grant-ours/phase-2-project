import React from "react";

function Search({ setInput, input }) {
  return (
    <div className="searchbar">
      <h2>Buy a Car from Us!</h2>
      <label htmlFor="search">Search for Cars to Buy:</label>
      <input
        type="text"
        id="search"
        placeholder="Search by name"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
    </div>
  );
}

export default Search;

import React from "react";

function Search({ setInput, input }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Cars:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
    </div>
  );
}

export default Search;

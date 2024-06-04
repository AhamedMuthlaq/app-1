import React from "react";

const SearchBar = ({ searchContent, setSearchContent }) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        role="searchBox"
        placeholder="Search items"
        value={searchContent}
        onChange={(e) => setSearchContent(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;

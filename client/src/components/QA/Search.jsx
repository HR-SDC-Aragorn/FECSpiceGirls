/* eslint-disable react/function-component-definition */
import React from 'react';

const Search = (props) => (
  <div id="search-bar">
    <form action="/" method="GET" className="search-bar-form">
      <input
        type="search"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS"
        className="search-bar-field"
      />
      <button type="submit" className="search-bar-button">
        <img src="https://www.kindacode.com/wp-content/uploads/2020/12/search.png" alt="Search!!!" />
      </button>
    </form>
  </div>
);

//https://www.kindacode.com/wp-content/uploads/2020/12/search.png
export default Search;

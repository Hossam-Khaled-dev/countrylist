import React, { useState } from "react";
import { response } from "../response";

function Search({ searchHandler }) {
  return (
    <>
      <input
        data-testid="filterInput"
        className="large"
        placeholder="Enter Country Name"
        onChange={(text) => {
          searchHandler(text);
        }}
      />
    </>
  );
}

export default Search;

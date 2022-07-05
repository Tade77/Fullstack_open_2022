import React from "react";

const Filter = ({ handleSearch, filtered }) => {
  return (
    <div>
      Filter shown with: <input value={filtered} onChange={handleSearch} />
    </div>
  );
};

export default Filter;

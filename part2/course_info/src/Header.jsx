import React from "react";

const Header = ({ courses }) => {
  return (
    <div>
      <h1>{courses[0].name}</h1>
    </div>
  );
};
export default Header;

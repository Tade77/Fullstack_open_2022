import React from "react";
import Content from "./Content";
import Header from "./Header";
// import Total from "./Total";

const Course = ({ courses }) => {
  return (
    <div>
      <Header courses={courses} />
      <Content />
      {/* <Total courses={courses} /> */}
    </div>
  );
};

export default Course;

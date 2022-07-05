import React from "react";

const Part = ({ name, excercises }) => {
  //   console.log({ name, excercises });
  return (
    <div>
      <p>
        {name} {excercises}
      </p>
    </div>
  );
};

export default Part;

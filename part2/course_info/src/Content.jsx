import React from "react";
import Part from "./Part";

const Content = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];
  const Total2 = () => {
    const total2 = courses[1].parts
      .map((part) => part.exercises)
      .reduce((prev, curr) => prev + curr);
    return <h3>total number of {total2} exercises </h3>;
  };
  const Total1 = () => {
    const total2 = courses[0].parts
      .map((part) => part.exercises)
      .reduce((prev, curr) => prev + curr);
    return <h3>total number of {total2} exercises </h3>;
  };

  return (
    <section>
      <div>
        <Part
          name={courses[0].parts[0].name}
          excercises={courses[0].parts[0].exercises}
        />
        <Part
          name={courses[0].parts[1].name}
          excercises={courses[0].parts[1].exercises}
        />
        <Part
          name={courses[0].parts[2].name}
          excercises={courses[0].parts[2].exercises}
        />
        <Part
          name={courses[0].parts[3].name}
          excercises={courses[0].parts[3].exercises}
        />
        <Total1 total={Total1} />
      </div>
      <h1>{courses[1].name}</h1>
      <Part
        name={courses[1].parts[0].name}
        excercises={courses[1].parts[0].exercises}
      />
      <Part
        name={courses[1].parts[1].name}
        excercises={courses[1].parts[1].exercises}
      />
      <Total2 total={Total2} />
    </section>
  );
};

export default Content;

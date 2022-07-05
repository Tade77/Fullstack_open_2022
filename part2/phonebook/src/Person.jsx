import React from "react";

const Person = ({ persons, filtered }) => {
  console.log(persons);
  return (
    <div>
      <div>
        {persons
          .filter((person) =>
            person.name.toLowerCase().includes(filtered.toLowerCase())
          )
          .map((person, personIndex) => (
            <li className="nameList" key={`persons${personIndex}`}>
              {person.name} {person.number}
            </li>
          ))}
      </div>
    </div>
  );
};

export default Person;

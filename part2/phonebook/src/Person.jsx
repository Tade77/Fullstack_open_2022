import React from "react";

const Person = ({ id, persons, filtered, handleDelete }) => {
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
              <button onClick={() => handleDelete(person.id)}>Delete</button>
            </li>
          ))}
      </div>
    </div>
  );
};

export default Person;

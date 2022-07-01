import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addPerson = (event) => {
    const nameObj = {
      name: newName,
      id: persons.length + 1,
    };
    setPersons(persons.concat(nameObj));
    event.preventDefault();
    console.log("clicked", event.target);
  };
  const handleNewName = (event) => {
    setNewName(event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <p>
        {persons.map((person, personIndex) => (
          <li key={`persons${personIndex}`}>{person.name}</li>
        ))}
      </p>
    </>
  );
};

export default App;

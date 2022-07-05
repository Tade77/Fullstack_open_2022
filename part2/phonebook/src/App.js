import { useState } from "react";
import "./App.css";
import Filter from "./Filter";
import Person from "./Person";
import PersonForm from "./PersonForm";
// console.log(PersonForm);

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filtered, setFiltered] = useState("");

  const addPerson = (event) => {
    const nameObj = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    setPersons(persons.concat(nameObj));
    event.preventDefault();
    // console.log("clicked", event.target);
    persons.find((person) => person.name === newName)
      ? setPersons(persons, alert(`${newName} is already added to phonebook`))
      : setPersons(persons.concat(nameObj));
  };
  const handleNewName = (event) => {
    setNewName(event.target.value);
    console.log(event.target.value);
  };
  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
    console.log(event.target.value);
  };
  const handleSearch = (event) => {
    setFiltered(event.target.value);
  };

  return (
    <>
      <h2>Phonebook</h2>
      <Filter handleSearch={handleSearch} filtered={filtered} />
      <h1>Add new</h1>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNewName={handleNewName}
        handleNewNumber={handleNewNumber}
      />

      <h3>Numbers</h3>
      <Person persons={persons} filtered={filtered} />
    </>
  );
};

export default App;

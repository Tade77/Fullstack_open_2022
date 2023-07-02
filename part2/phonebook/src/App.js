import { useState, useEffect } from "react";
import "./App.css";
import Filter from "./Filter";
import Person from "./Person";
import PersonForm from "./PersonForm";
// import axios from "axios";
import services from "./services/PhonebookServices";
const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filtered, setFiltered] = useState("");
  useEffect(() => {
    services.getAll();
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const nameObj = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    setFiltered("");
    setNewName("");
    setNewNumber("");
    persons.find((person) => person.name === newName)
      ? setPersons(persons, alert(`${newName} is already added to phonebook`))
      : setPersons(persons.concat(nameObj));
    setPersons(persons.concat(nameObj));
    services.create();
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
  const handleDelete = (id) => {
    setPersons(persons.filter((person) => person.id !== id));
    window.confirm("delete");
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
      <Person
        persons={persons}
        filtered={filtered}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default App;

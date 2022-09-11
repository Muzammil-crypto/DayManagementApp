import React from "react";
import Person from "./Person";

function List() {
  const persons = [
    { id: 1, name: "Muzammil", age: 24, skill: "Flutter" },
    { id: 2, name: "Ali", age: 34, skill: "Java" },
    { id: 3, name: "Bashira mochi", age: 54, skill: ".Net" },
    { id: 4, name: "Arose", age: 23, skill: "Backend" },
    { id: 5, name: "Sufyan", age: 22, skill: "JS" },
    { id: 6, name: "Muneeb", age: 24, skill: "Flutter" },
  ];
  const PersonList = persons.map((person, index) => (
    <Person key={index} person={person} />
  ));
  return (
    <div>
      <h2> {PersonList}</h2>
    </div>
  );
}

export default List;

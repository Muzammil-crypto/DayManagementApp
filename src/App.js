import React, { useState } from "react";
import "./App.css";
import Form from "./MyComponents/Form";
import TodoList from "./MyComponents/TodoList";
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <header>
        <h1>Muzammil's Todo List </h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;

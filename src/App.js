import React, { useState } from "react";
import "./App.css";
import Form from "./MyComponents/Form";
import TodoList from "./MyComponents/TodoList";
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");

  return (
    <div>
      <header>
        <h1>Schedule Your Day Here!</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;

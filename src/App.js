import "./App.css";
import React, { useState } from "react";
import data from "./data.json";
import Task from "./components/Task";

function App() {
  const [todos, setTodos] = useState(data);
  const onCheked = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === Number(id)
          ? { ...todo, complete: !todo.complete }
          : { ...todo };
      })
    );
  };
  const onDelete = (id) => {
    setTodos([...todos].filter((todo) => todo.id !== id));
  };
  return (
    <div className="container">
      <Task todos={todos} onCheked={onCheked} onDelete={onDelete} />
    </div>
  );
}

export default App;

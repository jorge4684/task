import "./App.css";
import React, { useState } from "react";
import data from "./data.json";
import Task from "./components/Task";
import TaskForm from "./TaskForm";

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
  const addTodo = (newTodo) => {
    let newItem = { id: new Date().getTime(), task: newTodo, complete: false };
    setTodos([...todos, newItem]);
  };
  return (
    <div className="container">
      <TaskForm addTodo={addTodo} />
      <Task todos={todos} onCheked={onCheked} onDelete={onDelete} />
    </div>
  );
}

export default App;

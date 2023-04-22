import "./App.css";
import React, { useState } from "react";
import data from "./data.json";
import Task from "./components/Task";

function App() {
  const [todos, setTodos] = useState(data);
  return (
    <div className="container">
      <Task todos={todos} />
    </div>
  );
}

export default App;

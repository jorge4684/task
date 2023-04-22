import React from "react";

const TaskItem = ({ todo, onCheked, onDelete }) => {
  const getStyle = () => {
    return {
      textDecoration: todo.complete ? "line-through" : "none",
      margin: "20px",
      padding: "5px",
    };
  };
  return (
    <div style={getStyle()}>
      <input
        type="checkbox"
        cheked={todo.complete}
        onChange={() => onCheked(todo.id)}
      />
      {todo.task}
      <button onClick={() => onDelete(todo.id)}>X</button>
    </div>
  );
};

export default TaskItem;

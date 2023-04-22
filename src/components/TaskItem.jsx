import React from "react";

const TaskItem = ({ todo }) => {
  const getStyle = () => {
    return {
      textDecoration: todo.complete ? "line-through" : "none",
      margin: "20px",
      padding: "5px",
    };
  };
  return (
    <div style={getStyle()}>
      <input type="checkbox" />
      {todo.task}
      <button>X</button>
    </div>
  );
};

export default TaskItem;

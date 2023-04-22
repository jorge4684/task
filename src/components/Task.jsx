import React from "react";
import TaskItem from "./TaskItem";

const Task = ({ todos, onCheked, onDelete }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div>
            <TaskItem todo={todo} onCheked={onCheked} onDelete={onDelete} />
          </div>
        );
      })}
    </div>
  );
};

export default Task;

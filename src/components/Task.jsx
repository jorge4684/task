import React from "react";
import TaskItem from "./TaskItem";

const Task = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div>
            <TaskItem todo={todo} />
          </div>
        );
      })}
    </div>
  );
};

export default Task;

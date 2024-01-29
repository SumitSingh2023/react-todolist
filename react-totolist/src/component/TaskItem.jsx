import React, { useState } from "react";

function TaskItem({ item, setTasks }) {
  const handleDelete = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => task !== item));
  };

  const handleToggle = () => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task === item ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div style={{ color: item.completed ? "green" : "red" }}>
      <p>{item.task}</p>
      <p>Assigned To: {item.taskAssignedTo}</p>
      <button onClick={handleDelete}>Delete Task</button>
      <button onClick={handleToggle}>Toggle Task</button>
    </div>
  );
}

export default TaskItem;


import React from "react";

function Task({task, category}) {
  const deleteTask = (e) => {
    e.target.parentElement.remove()
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{task}</div>
      <button className="delete" onClick={deleteTask}>X</button>
    </div>
  );
};

export default Task;

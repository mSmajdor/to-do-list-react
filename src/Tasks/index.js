import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ul className="tasks">
    {tasks.map(({ done, content, id }) => (
      <li
        className={`tasks__item ${
          done && hideDone ? "tasks__item--hidden" : ""
        }`}
      >
        <button onClick={() => toggleTaskDone(id)} className="tasks__button">
          {done ? "✖" : "✔"}
        </button>
        <span className={done ? "tasks__taskDone" : ""}>{content}</span>
        <button
          onClick={() => removeTask(id)}
          class="tasks__button tasks__button--remove"
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;

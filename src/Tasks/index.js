import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDone }) => (
  <ul className="tasks">
    {tasks.map(({ done, content }) => (
      <li
        className={`tasks__item ${
          done && hideDone ? "tasks__item--hidden" : ""
        }`}
      >
        <button className="tasks__button">{done ? "✖" : "✔"}</button>
        <span className={done ? "tasks__taskDone" : ""}>{content}</span>
        <button class="tasks__button tasks__button--remove">🗑</button>
      </li>
    ))}
  </ul>
);

export default Tasks;

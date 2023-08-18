/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import "./todo.css";

//Synthetic Events are passed on to event handlers implicitly as the first argument
// We don't do DOM Manipulation directly
// createElement, nextElement, previousElement, delete, querySelector, getElementById

function Todo() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([]);

  function handleChange(e) {
    // console.log(e)
    setInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (isEditing === false) {
      setTasks([...tasks, input]);
    } else {
      tasks[isEditing] = input;
      setTasks(tasks);
      setIsEditing(false);
    }
    setInput("")
  }
  function handleDelete(e, idToDelete) {
    e.preventDefault();
    setTasks(
      tasks.filter((task, index) => {
        return index !== idToDelete;
      })
    );
  }
  function handleEdit(e, idToEdit) {
    e.preventDefault();
    setInput(tasks[idToEdit]);
    setIsEditing(idToEdit);
  }
  function handleComplete(e, idToMarkComplete) {
    e.preventDefault();
    setCompletedTasks([...completedTasks, idToMarkComplete]);
  }

  //   diffing algo

  return (
    <>
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your task"
          value={input}
          onChange={handleChange}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {
          // tasks.map(task => <li>{task}</li>)

          //KEYS
          // If we are creating multiple instances of the same element, react needs a unique attribute to identify each instance of that element
          //To help react identify each instance separately, we create key attribute which is unique for every instance of that element

          tasks.map((task, index) => {
            return (
              <li
                key={index}
                className={completedTasks.includes(index) ? "completed" : ""}
              >
                {task}
                <a href="" onClick={(e) => handleDelete(e, index)}>
                  <DeleteIcon />
                </a>
                <a href="" onClick={(e) => handleEdit(e, index)}>
                  <EditIcon />
                </a>
                <a href="" onClick={(e) => handleComplete(e, index)}>
                  <CheckIcon />
                </a>
              </li>
            );
          })
        }
      </ul>
    </>
  );
}

export default Todo;

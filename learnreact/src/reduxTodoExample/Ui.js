import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInput, setTasks, handleEdit, handleDelete, handleCheck } from "./slice";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import './Ui.css'

function Ui() {
  const initialState = useSelector((state) => {
    return state.todo;
  });

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(setTasks());
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your task"
          value={initialState.input}
          onChange={(e) => dispatch(setInput(e.target.value))}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {initialState.tasks.map((task, index) => {
          return (
            <li key={index} className={initialState.completedTasks.includes(index) ? 'checked' : ''}>
                {task}
                <button onClick={() => dispatch(handleDelete(index))}><DeleteIcon /></button>
                <button onClick={() => dispatch(handleEdit(index))}><EditIcon /></button>
                <button onClick={() => dispatch(handleCheck(index))}><CheckIcon /></button>
            </li>);
        })}
      </ul>
    </>
  );
}

export default Ui;

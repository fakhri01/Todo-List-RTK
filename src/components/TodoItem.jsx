import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../features/todo/todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({id: id}))
  }

  return (
    <li className={completed ? "completed" : ""}>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleCompleteClick}
      />
      <label>{title}</label>
      <div className="btn-wrapper">
        <button className="btn-dangerous" onClick={handleDeleteClick}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;

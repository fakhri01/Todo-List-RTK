import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
        )).reverse()}
    </ul>
  );
};

export default TodoList;

import { useSelector } from "react-redux";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const completedTodos = useSelector((state) =>
    state.todos.todos.filter((todo) => todo.completed)
  );
  return (
    <div className="App">
      <h2>Todo List - Redux Toolkit</h2>
      <AddTodoForm />
      <TodoList />
      <h3>Total Complete Items: {completedTodos.length}</h3>
    </div>
  );
}

export default App;

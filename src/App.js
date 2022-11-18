import { useState, useRef } from "react";
import TodoList from "./TodoList.jsx";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";


function App() {
  const [todos, setTodos] = useState([]);

const todoNameRef = useRef();

const handleAddTodo = () => {
  // Add task
  const name = todoNameRef.current.value;
  if(name === "") return;
  setTodos((prevTodos) => {
    return [...prevTodos, {id: uuidv4(), name: name, completed: false}]
  });
  todoNameRef.current.value = null;
};

const toggleTodo = (id) => {
  const newTodos = [...todos];
  const todo = newTodos.find((todo) => todo.id === id);
  todo.completed = !todo.completed;
  setTodos(newTodos);
};

const handleClear = () => {
  const newTodos = todos.filter((todo) => !todo.completed);
  setTodos(newTodos);
};

  return(
    <div>
      <h1 class="h1">Todo list app</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef}/>
      <button onClick={handleAddTodo}>Add task</button>
      <button onClick={handleClear}>Delete task</button>
      <div>Task : {todos.filter((todo) => !todo.completed).length}</div>
    </div>
  );

}


export default App;

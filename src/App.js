import { useState, useRef } from "react";
import TodoList from "./TodoList.jsx";


function App() {
  const [todos, setTodos] = useState([
    {id: 1, name: "Todo1", completed: false},
  ]);

const todoNameRef = useRef();

const handleAddTodo = () => {
  // Add task
  console.log(todoNameRef.current.value)
};

  return(
    <div>
      <TodoList todos={todos} />
      <input type="text" ref={todoNameRef}/>
      <button onClick={handleAddTodo}>Add task</button>
      <button>Done task</button>
      <div>Task : 0</div>
    </div>
  );

}


export default App;

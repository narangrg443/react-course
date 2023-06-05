import React, { useState } from "react";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    setTodoList([...todoList, newTodo]);
    setNewTodo("");
  };

  return (
    <div className="app-container">
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Add to-do item"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <div className="todo-list">
        {todoList.map((todo, index) => (
          <div key={index}>{todo}</div>
        ))}
      </div>
    </div>
  );
};

export default App;

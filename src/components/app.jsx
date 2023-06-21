import React, { useState } from "react";
import Input from "./input";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const changeHandler = (e) => {
    setTodo(e.target.value);
  };

  const clickHandler = () => {
    printHandler();
  };

  const keyHandler = (e) => {
    if (e.key === "Enter") {
      printHandler();
    }
  };

  const deleteHandler = (id) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((todo) => todo.id !== id)
    );
  };

  const toggleComplete = (id) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const printHandler = () => {
    if (todo.trim() !== "") {
      setTodoList((prevTodoList) => [
        ...prevTodoList,
        { id: Date.now(), todo: todo, completed: false },
      ]);
      setTodo("");
    }
  };

  return (
    <div className="app-container">
      <Input
        todo={todo}
        changeHandler={changeHandler}
        clickHandler={clickHandler}
        keyHandler={keyHandler}
      />

      {todoList.map((todo) => (
        <div
          className={`todo-container ${todo.completed ? "completed" : ""}`}
          key={todo.id}
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
          />
          <b className={`item ${todo.completed && "cross"}`}>{todo.todo}</b>
         { todo.completed && (<button onClick={() => deleteHandler(todo.id)}>delete</button>)} </div>
      ))}
    </div>
  );
};

export default App;

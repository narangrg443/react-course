import React, { useState } from "react";

const Input = () => {
  const [todolist, setTodolist] = useState([]);
  const [todo, setTodo] = useState("");

  const changeHandler = (e) => {
    setTodo(e.target.value);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    addTodo();
  };

  const enterHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTodo();
    }
  };

  const addTodo = () => {
    if (todo.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        todo: todo,
        checked: false, // Added 'checked' property to track the checked state
      };
      setTodolist((prevTodoList) => [...prevTodoList, newTodo]);
      setTodo("");
    }
  };

  const toggleChecked = (id) => {
    setTodolist((prevTodoList) =>
      prevTodoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      })
    );
  };

  const deleteHandler = (id) => {
    setTodolist((prevTodoList) =>
      prevTodoList.filter((todo) => todo.id !== id)
    );
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="notes.."
        value={todo}
        onChange={changeHandler}
        onKeyDown={enterHandler}
      />
      <button type="submit" onClick={clickHandler}>
        add
      </button>

      {todolist.map((todo) => (
        <div className="todo-container" key={todo.id}>
          <input
            type="checkbox"
            checked={todo.checked} // Bind checked state to the 'checked' property
            onChange={() => toggleChecked(todo.id)} // Toggle checked state on change
          />

          <b className={todo.checked ? "todo-text checked" : "todo-text"}>
            {todo.todo}
          </b>
          <button onClick={() => deleteHandler(todo.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <Input />
    </div>
  );
};

export default App;

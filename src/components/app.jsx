import React, { useState } from "react";
import Todo from "./todo";
import Input from "./input";
import Checked from "./checkbox"


const App = () => {
  const [todo, setTodo] = useState(["hello", "fello", "bello"]);
const [isChecked,setchecked]=useState(false);
  function clickHandler(e){
    setTodo([...todo, e]);
  }

  function deleteHandler(index) {
    const updatedTodo = [...todo];
    updatedTodo.splice(index, 1);
    setTodo(updatedTodo);
  }

function crossHandler(isChecked){
  
  setchecked(isChecked);
}

  return (
    <div className="app-container">
      <h2>Todo List</h2>
      
      <Input onClick={clickHandler} />
      <ul>
        {todo.map((t, index) => (
        <div className="check-list-container">
           <Checked cross={crossHandler} /> 
           <Todo 
           key={index} 
           id={index} 
           onDelete={deleteHandler} 
           style={{textDecoration:isChecked?"line-through":"none"}} 
           text={t} />
        </div>
        
        ))}
      </ul>
    </div>
  );
};

export default App;

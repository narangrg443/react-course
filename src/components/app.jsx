import React, { useState } from "react";
import Todo from "./todo"

const App=()=>{
  const [todo,settodo]=useState(["helllo","fello","bello"]);
  const [newtodo,setnewtodo]=useState("");
  
  
  
  return (
    <div className="app-container">
    <h2>to do list</h2>
    <input type="text"placeholder="hello"/>
    <button>todo</button>
    
    
  <ul>
  {todo.map(t=>(
  <Todo text={t}/>
  
  ))
    
}
</ul>
    </div>
    
    );
  
  
}


export default App;

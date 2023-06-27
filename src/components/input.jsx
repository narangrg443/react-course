import React,{useState} from "react";


const Input=({onClick})=>{
  
  const [todo,setTodo]=useState("");
   console.log("input refreshed");
 return(
   <>
   <input 
   placeholder="countries..."
   value={todo} 
   onChange={(e)=>{ setTodo(e.target.value)}}
  
   />
   <button onClick={()=>{if(todo.trim()!=="")onClick(todo); setTodo("")}}>submit</button>
  
   </>
   
   ); 
  
}

export default Input;
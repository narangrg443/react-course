
import React,{useState}  from "react";



const Input=({onSubmit})=>{
const [items,setitems]=useState("");

function handleSubmit(e){
  e.preventDefault();
  onSubmit(items);
  
  
}

  return (
    <div className="input-container">
    <form onSubmit={handleSubmit}>
      <input 
      type ="text"  
      placeholder="notes.."
      value={items}
      onChange={(e)=>{setitems(e.target.value)}}
      />
    <button type="submit">add</button>
    
    </form>
    </div>
    );
}




export default Input;
import React,{useState} from "react";


const Checkbox=({onChange,todo})=>{
  console.log("check box refreshed....")
  const [checked,setChecked]=useState(false);
  
  const changeHandler=()=>{
    setChecked(!checked);
    onChange(todo);
  }
  
  return (
  <>
  <input type="checkbox"  checked={checked} onChange={changeHandler} />
  </>
  
  
  );
}

export default Checkbox;
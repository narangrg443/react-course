import React,{useState} from "react";

const Checkbox=({cross})=>{
  
  const [isChecked,setchecked]=useState(false);
  
  
  function checkHandler(){
    setchecked(!isChecked);
    cross(isChecked);
  }
  
  return(
    
    <div className="check-container">
      <label>
       <input
       type="checkbox"
       checked={isChecked}
       onChange={checkHandler}
       />
      </label>
    </div>
    );
  
}

 export default Checkbox;
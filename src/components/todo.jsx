import React, { useState } from "react";

const Todo = (props) => {
  const [strike, setStrike] = useState(false);

  function styleHandler() {
    setStrike((prev) => !prev);
  }

  const textStyle = {
    textDecoration: strike ? "line-through" : "none"
    
  };

  return (
    <div onClick={styleHandler} style={textStyle}>
      <li>{props.text}</li>
    </div>
  );
};

export default Todo;

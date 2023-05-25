import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [headingText, setHeadingText] = useState("hello");
  const [headingColor, setHeadingColor] = useState("white");

  const increment = () => {
    setCount(count + 1);
    setHeadingText("incremented");
    setHeadingColor("blue");
  };

  const decrement = () => {
    setCount(count - 1);
    setHeadingText("decremented");
    setHeadingColor("red");
  };

  const style = {
    color: headingColor,
  };

  return (
    <div>
      <h3 style={style}>{headingText}</h3>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default App;

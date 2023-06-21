import React from "react";

const Input = ({ todo, changeHandler, clickHandler, keyHandler }) => {
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="notes.."
        value={todo}
        onChange={changeHandler}
        onKeyDown={keyHandler}
      />
      <button type="submit" onClick={clickHandler}>
        Add
      </button>
    </div>
  );
};

export default Input;

import React, { useState, useRef } from "react";

const Input = ({ onClick }) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      onClick(inputValue);
      setInputValue("");
    }
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  }

  return (
    <div className="form-container">
    <form onSubmit={handleSubmit}>
      <input className="input-field"
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        ref={inputRef}
        placeholder="notes...."
      />
      <button className="addBtn" type="submit">Add</button>
    </form>
    </div>
  );
};

export default Input;

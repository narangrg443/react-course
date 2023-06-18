import React from "react";

const TodoItem = ({ id, text, onDelete,style }) => {
  function handleDelete() {
    onDelete(id);
  }

  return (
    <li>
    <div className="item-container">
      <span style={style}>{text}</span>
      <button className="deleteBtn" onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;

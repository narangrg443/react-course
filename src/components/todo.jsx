import React, { useState } from 'react';
import Input from './input';
import Checkbox from './checkbox';

const Todo = () => {
  console.log('todo refreshed...');

  const [todoList, setTodoList] = useState([]);

  const checkHandler = (todo) => {
    setTodoList((prev) =>
      prev.map((item) =>
        item.key !== todo.key ? item : { ...item, checked: !item.checked }
      )
    );
  };

  const clickHandler = (value) => {
    if (!todoList) {
      setTodoList([{ todo: value, checked: false, key: Date.now() }]);
    } else {
      setTodoList((prev) => [
        ...prev,
        { todo: value, checked: false, key: Date.now() },
      ]);
    }
    
    
  
  };

  const deleteHandler = (item) => {
    setTodoList((prev) =>
      prev.filter((todo) => todo.key !== item.key)
    );
  };

  return (
    <>
    
    <ul>
      <Input onClick={clickHandler} />
      
        {todoList.length > 0 ? (
          todoList.map((todo) => (
            <li className={todo.checked ? 'checked' : ''} key={todo.key}>
              <Checkbox todo={todo} onChange={checkHandler} />
              {todo.todo}
              {todo.checked && (
                <button onClick={() => deleteHandler(todo)}>X</button>
              )}
            </li>
          ))
        ) : (
          <b>list not found</b>
        )}
      </ul>
    </>
  );
};

export default Todo;

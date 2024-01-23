import "./style.css";
import { useState } from "react";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todo, setTodo] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setTodo((currentTodo) => [
      ...currentTodo,
      { id: crypto.randomUUID(), title: newItem, completed: false },
    ]);

    setNewItem("");
  }

  return (
    <>
      <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn" type="submit">
          Add
        </button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todo.map((todo) => (
          <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} 
              onChange={e => toggleTodo(todo.id, e.target.checked)} 
              />{/*by adding toggle to do we can check if the check box is 
            currently checked or not */}
              {todo.title}
            </label>
            <button className="btn btn-danger">Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

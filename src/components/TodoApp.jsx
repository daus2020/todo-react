import { useState } from "react";
import Todo from "./Todo";

import "./todoApp.css";

export default function TodoApp() {
  const [title, setTitle] = useState("hello!");
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    const value = e.target.value;
    setTitle(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
  }

  function handleUpdate(id, value) {
    const items = todos.filter((item) =>
      item.id === id ? (item.title = value) : item
    );
    setTodos(items);

    // const temp = [...todos];
    // const item = temp.find((item) => item.id === id);
    // item.title = value;
    // setTodos(temp);
  }

  function handleDelete(id) {
    const temp = todos.filter((todo) => todo.id !== id);
    setTodos(temp);
  }
  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input onChange={handleChange} className="todoInput" value={title} />
        <input
          onClick={handleSubmit}
          type="submit"
          value="Create todo"
          className="buttonCreate"
        />
      </form>
      <div className="todosContainer">
        {todos.map((el) => (
          <Todo
            key={el.id}
            el={el}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

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
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTodos(temp);
    // const newTitle = todos.map((el) =>
    //   el.key === id ? (el.title = value) : el
    // );
    // setTodos(newTitle);
    // const item = todos.find((todo) => todo.id === id);
    // item.title = value;
    // setTodos(...todos, item);
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

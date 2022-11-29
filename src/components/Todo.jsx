import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { GoTrashcan } from "react-icons/go";

export default function Todo({ el, onUpdate, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);

  function FormEdit() {
    const [newValue, setNewValue] = useState(el.title);
    function handleSubmit(e) {
      e.preventDefault();
    }

    function handleChange(e) {
      const value = e.target.value;
      setNewValue(value);
    }

    function handleClickUpdateTodo() {
      onUpdate(el.id, newValue);
      setIsEdit(false);
    }
    return (
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todoInput"
          onChange={handleChange}
          value={newValue}
        />
        <button className="button" onClick={handleClickUpdateTodo}>
          Update
        </button>
      </form>
    );
  }

  function TodoElement() {
    return (
      <div className="todoInfo">
        <span className="todoTitle">{el.title}</span>
        <button className="button" onClick={() => setIsEdit(true)}>
          <FiEdit />
          Edit
        </button>
        <button className="buttonDelete" onClick={(e) => onDelete(el.id)}>
          {" "}
          <GoTrashcan />
          Delete
        </button>
      </div>
    );
  }
  return <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>;
}

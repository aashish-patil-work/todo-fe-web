import { useState } from "react";
import styles from "../css/form.module.css";

export default function Form({ todoList, setTodoList }) {
  const emptyToDoItem = { name: "", done: false };
  const [todo, setTodo] = useState(emptyToDoItem);

  function handleAdd(e) {
    console.log(todo);
    e.preventDefault();
    setTodoList([...todoList, todo]);
    setTodo(emptyToDoItem);
  }

  return (
    <form className={styles.todoform}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
          type="text"
          placeholder="Enter Todo Task Details here..."
        ></input>

        <button
          className={styles.modernButton}
          onClick={(e) => handleAdd(e)}
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
}

import TodoListItem from "./TodoListItem";
import styles from "../css/todolist.module.css";

export default function TodoList({ todoList, setTodoList }) {
  //** Mark and unmark item completed */
  function markUnmarkCompleted(itemClicked) {
    console.log("markUnmarkCompleted ", itemClicked);

    //** First toggle the done flag of clicked item */
    const newTodoList = todoList.map((itemL) =>
      itemClicked.name === itemL.name ? { ...itemL, done: !itemL.done } : itemL
    );
    setTodoList(newTodoList);
  }

  //**delete item */
  function handleDelete(itemClicked) {
    console.log("handleDelete log test: ", itemClicked);
    setTodoList(todoList.filter((item) => item !== itemClicked));
  }

  // *** Sort the todo list
  const sortedTodoList = todoList
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));

  return (
    <div className={styles.todolist}>
      {sortedTodoList.map((item) => (
        <TodoListItem
          itemValue={item}
          todoList={todoList}
          handleDelete={handleDelete}
          markUnmarkCompleted={markUnmarkCompleted}
        ></TodoListItem>
      ))}
    </div>
  );
}

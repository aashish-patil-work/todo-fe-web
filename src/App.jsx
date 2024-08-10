import { useState } from "react";
import "./css/styles.css";
import "./App.css";

import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

function App() {
  const [todoList, setTodoList] = useState([]);

  const completedItemsCount = todoList.filter((itemL) => itemL.done).length;
  const totalItemsCount = todoList.length;

  return (
    <>
      <Header></Header>
      <Form todoList={todoList} setTodoList={setTodoList}></Form>
      <TodoList todoList={todoList} setTodoList={setTodoList}></TodoList>
      <Footer
        completedItemsCount={completedItemsCount}
        totalItemsCount={totalItemsCount}
      ></Footer>
    </>
  );
}

export default App;

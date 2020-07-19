import React, { useState } from "react";
import { TodoList } from "./components/TodoList";
import "./App.css";

/**
 * Main wrapper of the Todo App.
 */
function App() {
  const [items, setItems] = useState([
    { id: 1, text: "Finish Todo Exam", done: false },
    { id: 2, text: "Finish Large Button Exam", done: false },
    { id: 3, text: "Confirm that you are done", done: false },
    { id: 4, text: "Submit the exam", done: false },
    { id: 5, text: "Fill up the form", done: false },
  ]);

  /**
   * Function that sets a todo to done.
   * @param item todo item.
   * @param event event that was passed from TodoList.
   */
  const onItemClick = (item, event) => {
    event.preventDefault();
    const todos = [...items];
    todos.map((todo) => {
      if (item.id === todo.id) {
        todo.done = true;
      }
      return todo;
    });
    setItems(todos);
  };

  return (
    <div className='app'>
      <div className='header'>TODO List</div>
      <TodoList items={items} onItemClick={onItemClick} />
    </div>
  );
}

export default App;

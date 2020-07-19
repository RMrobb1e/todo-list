import React from "react";
import "../App.css";

/**
 * Function that returns TodoList Component.
 * @param items list of all todo items.
 * @param onItemClick responsible to todo being done.
 */
export const TodoList = ({ items, onItemClick }) => {
  return (
    <div className='todo-list'>
      {items.map((item) => (
        <div
          key={item.id}
          className='todo'
          onClick={(e) => {
            if (!item.done) {
              onItemClick(item, e);
            }
          }}
          style={{ textDecoration: item.done ? "line-through" : "" }}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
};

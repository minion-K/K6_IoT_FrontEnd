import type { Todo } from "@/_practices/c_hooks/todoAppLocalStorage";
import React from "react";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

function TodoItem({ todo, toggleTodo, deleteTodo }: TodoItemProps) {
  return (
    <li>
      <span 
        style={{
          textDecoration: todo.completed ?
          'line-through' :
          'none', cursor: 'pointer'
        }}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button 
        onClick={() => {deleteTodo(todo.id)}}
        style={{cursor: 'pointer'}}
      >Delete</button>
    </li>
  )

}

export default TodoItem;

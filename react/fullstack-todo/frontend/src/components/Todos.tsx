import React from 'react'
import { ITodoItem, ITodoProps } from '../interface'

const Todos: React.FC<ITodoProps> = ({ todos }): JSX.Element => {
  return (
    <div>
      {todos.map((todo: ITodoItem, index: number) => (
        <div key={index}>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <h2>{JSON.stringify(todo.targetDate)}</h2>
          <button>{todo.completed ? "Completed" : "Mark as Completed"}</button>
        </div>
      ))}
    </div>
  );
};

export default Todos
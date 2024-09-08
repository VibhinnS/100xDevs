import React, { useState } from 'react';
import './App.css';
import { ITodoAppItem, ITodoItemProps } from './interface';

const App: React.FC = (): JSX.Element => {
  const [todos, setTodos] = useState<Array<ITodoAppItem>>([{
    title: "Go to Gym",
    description: "5-7 Gym",
    completed: false
  }, {
    title: "Hello World",
    description: "Learn ASP / Spring / JS-TS",
    completed: true
  }]);

  const toggleTodoStatus = (index: number): void => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          title={todo.title}
          description={todo.description}
          completed={todo.completed}
          toggleCompleted={() => toggleTodoStatus(index)}
        />
      ))}
    </div>
  );
}


const TodoItem: React.FC<ITodoItemProps> = ({ title, description, completed, toggleCompleted }): JSX.Element => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={toggleCompleted}>
        {completed ? "Completed" : "Mark as complete"}
      </button>
    </div>
  );
};

export default App;

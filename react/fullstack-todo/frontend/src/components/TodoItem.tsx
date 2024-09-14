import React, { useState } from 'react';
import { ITodoItem } from "../interface";

const TodoItem: React.FC<ITodoItem> = ({ title, description, targetDate, completed }): JSX.Element => {
    let [complete, setComplete] = useState(completed)

    const changeStatus = (): void => {
        if (complete===true){
            alert("Task already completed!");
        } else {
        setComplete(true);
        }
    }

  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <h2>{targetDate.toString()}</h2>
      <button onClick={() => changeStatus()}>{complete ? "Completed" : "Mark as Completed"}</button>
    </div>
  );
};

export default TodoItem;

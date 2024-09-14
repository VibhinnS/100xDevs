import React, { useState } from 'react';
import { ICreateToDoBody } from "../../../backend/interface";

const CreateToDo: React.FC = (): JSX.Element => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [targetDate, setTargetDate] = useState<Date>(new Date());

  const addTodoToBackend = (): void => {
    const todo: ICreateToDoBody = {
      title: title,
      description: description,
      date: new Date(),
      targetDate: targetDate,
      completed: false,
    };

    fetch("http://localhost:3000/create-todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    })
      .then(async function (res) {
        const response = await res.json();
        console.log(response);
        alert("Todo Added!");
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => {
          const value: string = e.target.value;
          setTitle(value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Description"
        onChange={(e) => {
          const value: string = e.target.value;
          setDescription(value);
        }}
      />
      <br />
      <input
        type="date"
        placeholder="Target Date"
        onChange={(e) => {
          const value: Date = new Date(e.target.value);
          setTargetDate(value);
        }}
      />
      <br />
      <button onClick={addTodoToBackend}>Add Todo</button>
    </div>
  );
};

export default CreateToDo;

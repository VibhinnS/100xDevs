import React, { useState } from 'react'
import './App.css'

interface todoAppItem {
  title: string | undefined,
  description: string | undefined,
  completed: boolean | undefined | string
}

const App: React.FC = (): JSX.Element => {
  const [todos, setTodos] = useState<Array<todoAppItem | null>>([{
    title: "Go to Gym",
    description: "5-7 Gym",
    completed: false
  }, {
    title: "Hello World",
    description: "Learn ASP / Spring / JS-TS",
    completed: true
  }])

  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          title={todo?.title}
          description={todo?.description}
          completed={JSON.stringify(todo?.completed)}
        />
      ))}
    </div>
  )

}

const TodoItem: React.FC<todoAppItem> = (props: todoAppItem):JSX.Element => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>{props.completed}</p>
    </div>
  )
}

export default App

import { useState } from "react"
import CreateTodo from "./components/CreateTodo"
import Todos from "./components/Todos"
import { ITodoItem } from "./interface"

const App: React.FC = (): JSX.Element => {
  const [todos, setTodos] = useState<Array<ITodoItem>>([])
  
  fetch("http://localhost:3000")
  .then(async function (res) {
    const response = await res.json();
    setTodos(response.todos);
    return
  })
  .catch(function (error) {
    console.error(error);
  });

  return (
    <div>
      <CreateTodo />
      <h1>Current Todos</h1>
      <Todos todos={todos} />
    </div>
  )
}

export default App

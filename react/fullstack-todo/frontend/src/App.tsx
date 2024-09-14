import { useEffect, useState } from "react"
import CreateTodo from "./components/CreateTodo"
import Todos from "./components/Todos"
import { ITodoItem } from "./interface"

const App: React.FC = (): JSX.Element => {
  const [todos, setTodos] = useState<Array<ITodoItem>>([])

  useEffect(() => {
    const fetchTodos = async ():Promise<void> => {
      try {
        const res = await fetch("http://localhost:3000");
        const response = await res.json();
        setTodos(response.todos);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
    fetchTodos();
  }, []); 

  return (
    <div>
      <CreateTodo />
      <h1>Current Todos</h1>
      <Todos todos={todos} />
    </div>
  )
}

export default App

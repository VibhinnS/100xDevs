import { ITodoItem, ITodoProps } from '../interface'
import TodoItem from './TodoItem';

const Todos: React.FC<ITodoProps> = ({ todos }): JSX.Element => {
  return (
    <div>
      {todos.map((todo: ITodoItem, index: number) => (
        <TodoItem key={index} title={todo.title} description={todo.description} targetDate={todo.targetDate} completed={todo.completed}/>
      ))}
    </div>
  );
};

export default Todos

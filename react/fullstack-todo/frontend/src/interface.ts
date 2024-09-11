export interface ITodoItem {
    title: string,
    description: string,
    targetDate: Date,
    completed: boolean
}

export interface ITodoProps {
    todos: Array<ITodoItem>;
}
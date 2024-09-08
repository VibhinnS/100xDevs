export interface ITodoAppItem {
    title: string;
    description: string;
    completed: boolean;
}
  
export interface ITodoItemProps {
    title: string;
    description: string;
    completed: boolean;
    toggleCompleted: () => void;
}

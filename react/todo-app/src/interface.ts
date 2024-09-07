export interface TodoAppItem {
    title: string;
    description: string;
    completed: boolean;
  }
  
  export interface TodoItemProps {
    title: string;
    description: string;
    completed: boolean;
    toggleCompleted: () => void;
  }
  
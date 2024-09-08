import zod from 'zod';

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string(),
    date: zod.date(),
    targetDate: zod.date()
})

const markTodoAsCompleted = zod.object({
    id: zod.string()
})

export { createTodo, markTodoAsCompleted }

import zod from 'zod';

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string(),
    date: zod.coerce.date(),
    targetDate: zod.coerce.date(),
    completed: zod.boolean()
})

const markTodoAsCompleted = zod.object({
    id: zod.string()
})

const getOneTodo = zod.object({
    id: zod.string()
})

export { createTodo, markTodoAsCompleted, getOneTodo }

import express, { Express, Request, Response } from "express"
import { createTodo, markTodoAsCompleted, getOneTodo } from "./types";
import { ICreateToDoBody, IToDoCompletedBody, ISingleToDoItemBody } from "./interface";
import todo from "./database";

let app: Express = express();

app.use(express.json())

app.get('/', async (req: Request, res: Response) => {
    const todos = await todo.find({})
    res.status(200).json(todos);
})

app.get('/todo-item', async (req: Request, res: Response) => {
    const singleToDoItemBody: ISingleToDoItemBody = req.body
    const response = getOneTodo.safeParse(singleToDoItemBody);

    if (!response.success) {
        res.status(411).json({
            msg:"Todo item does not exist"
        })
        return;
    }

    const todoItem = await todo.find({
        _id: singleToDoItemBody.id,
    })

    res.status(200).json(todoItem)

})

app.post('/create-todo', async (req: Request, res: Response) => {
    const createTodoBody: ICreateToDoBody = req.body;
    const response = createTodo.safeParse(createTodoBody) 

    if (!response.success) {
        res.status(411).json({
            msg: "Wrong data sent"
        })
        return;
    }

    await todo.create<ICreateToDoBody>({

        title: createTodoBody.title,
        description: createTodoBody.description,
        date: createTodoBody.date,
        targetDate: createTodoBody.targetDate,
        completed: false

    })
    res.json({
        msg: "Todo created!"
    })
})


app.put('/todo-completed', async (req: Request, res: Response) => {
    const toDoCompletedBody: IToDoCompletedBody = req.body;
    const response = markTodoAsCompleted.safeParse(toDoCompletedBody)

    if (!response.success) {
        res.status(411).json({
            msg: "Invalid todo accessed"
        })
        return;
    }

    await todo.updateOne({
        _id: toDoCompletedBody.id,
    }, {
        completed: true
    })

    res.json({
        msg: "Completed! Yayy!"
    })

})

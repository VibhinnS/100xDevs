import express, { Express, Request, Response } from "express"
import { createTodo, markTodoAsCompleted, getOneTodo } from "./types";
import { ICreateToDoBody, IToDoCompletedBody, ISingleToDoItemBody } from "./interface";

let app: Express = express();

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send("List of all the todos")
})

app.get('/todo-item', (req: Request, res: Response) => {
    const singleToDoItemBody: ISingleToDoItemBody = req.body
    const response = getOneTodo.safeParse(singleToDoItemBody);

    if (!response.success) {
        res.status(411).json({
            msg:"Todo does not exist"
        })
        return;
    }
})

app.post('/create-todo', (req: Request, res: Response) => {
    const createTodoBody: ICreateToDoBody = req.body;
    const response = createTodo.safeParse(createTodoBody) 

    if (!response.success) {
        res.status(411).json({
            msg: "Wrong data sent"
        })
        return;
    }
    
})

app.put('/todo-completed', (req: Request, res: Response) => {
    const toDoCompletedBody: IToDoCompletedBody = req.body;
    const response = markTodoAsCompleted.safeParse(toDoCompletedBody)

    if (!response.success) {
        res.status(411).json({
            msg: "Invalid todo accessed"
        })
        return;
    }
    res.send("Marked as completed!")
})
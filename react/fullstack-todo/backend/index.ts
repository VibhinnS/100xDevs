import express, { Express, Request, Response } from "express"


let app: Express = express();

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send("List of all the todos")
})

app.get('/todo-item', (req: Request, res: Response) => {
    res.send("A single to do item")
})

app.post('/create-todo', (req: Request, res: Response) => {
    res.send("Create a todo here")
})

app.put('/todo-completed', (req: Request, res: Response) => {
    res.send("Marked as completed!")
})
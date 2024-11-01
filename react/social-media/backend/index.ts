import express, {Express, Request, Response} from "express";
import cors from "cors";

let app: Express = express();
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        msg: "Server working fine!"
    })
})

app.get('/sign-in', (req: Request, res: Response) => {
    res.status(200).json({
        msg: "Sign-In page working!"
    })
})


app.listen(3000)
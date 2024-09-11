import mongoose, {Schema} from "mongoose";
import { ITodo } from "./interface";

const dbUsername: string | undefined = process.env.DB_USERNAME;
const dbPassword: string | undefined = process.env.DB_PASSWORD;

const dbConnectionString: string = `mongodb+srv://${dbUsername}:${dbPassword}@db1.b9r3r.mongodb.net/yourDatabaseName`;

mongoose.connect(dbConnectionString)

const todoSchema: Schema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: Date, required: true},
    targetDate: {type: Date, required: false},
    completed: {type: Boolean}
})

const todo = mongoose.model<ITodo>('todos', todoSchema)

export default todo;

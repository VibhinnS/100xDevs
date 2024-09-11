import mongoose, {Schema} from "mongoose";
import { ITodo } from "./interface";

mongoose.connect("mongodb+srv://vibhinnsinghal:<db_password>@db1.b9r3r.mongodb.net/")


const todoSchema: Schema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    completed: {type: Boolean, required: true}
})

const todo = mongoose.model<ITodo>('todos', todoSchema)

export default todo;

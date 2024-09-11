import mongoose from "mongoose"
import { Document } from "mongoose"

export interface ICreateToDoBody {
    title: string,
    description: string,
    date: Date,
    targetDate: Date,
    completed: boolean
}

export interface IToDoCompletedBody {
    id: string
}

export interface ISingleToDoItemBody {
    id: string
}

export interface ITodo extends Document{
    title: string,
    description: string,
    date: Date,
    targetDate: Date,
    completed: boolean
}
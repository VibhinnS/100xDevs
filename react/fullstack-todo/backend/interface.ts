export interface ICreateToDoBody {
    title: string,
    description: string,
    date: Date
    targetDate: Date
}

export interface IToDoCompletedBody {
    id: string
}

export interface ISingleToDoItemBody {
    id: string
}
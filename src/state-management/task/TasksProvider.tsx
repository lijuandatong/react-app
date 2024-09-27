import { ReactNode, useReducer } from 'react'
import TaskContext from './TaskContext'

export interface Task {
    id: number
    title: string
}

interface AddAction {
    type: 'ADD'
    task: Task
}

interface DeleteAction {
    type: 'DELETE'
    taskId: number
}

export type TaskAction = AddAction | DeleteAction // union

const taskReducer = (tasks: Task[], action: TaskAction) => {
    switch(action.type){
        case 'ADD':
            return [action.task, ...tasks]
        case 'DELETE':
            return tasks.filter(task => task.id !== action.taskId)
    }
    return tasks
}

interface Props{
    children: ReactNode
}

const TasksProvider = ({children}: Props) => {
    const [tasks, dispatch] = useReducer(taskReducer, [])

    return (
        <TaskContext.Provider value={{tasks, dispatch}}>
            {children}
        </TaskContext.Provider>
    )
}

export default TasksProvider
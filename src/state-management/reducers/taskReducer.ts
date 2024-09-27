
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

export default taskReducer
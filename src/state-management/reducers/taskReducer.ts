
interface Task {
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

type Action = AddAction | DeleteAction // union

const taskReducer = (tasks: Task[], action: Action) => {

}

export default taskReducer
import React from "react";
import { Dispatch } from "react";
import { Task, TaskAction } from "./TasksProvider";

interface TaskContextType {
    tasks: Task[]
    dispatch: Dispatch<TaskAction>
}

const TaskContext = React.createContext<TaskContextType>({} as TaskContextType)

export default TaskContext
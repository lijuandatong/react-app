import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { CACHE_KEY_TODOS } from "../constants"
import APIClient from "../services/apiClient"

export interface Todo {
    id: number
    userId: number
    title: string
    completed: boolean
}

const apiClient = new APIClient<Todo>('/todos')

const useTodoList = () => {
    return useQuery<Todo[], Error>({
        queryKey: CACHE_KEY_TODOS,
        queryFn: apiClient.getAll.bind(apiClient)
    })
}

export default useTodoList
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { CACHE_KEY_TODOS } from "../constants"
import APIClient from "../services/apiClient"
import todoService, { Todo } from "../services/todoService"


const useTodoList = () => {
    return useQuery<Todo[], Error>({
        queryKey: CACHE_KEY_TODOS,
        queryFn: todoService.getAll
    })
}

export default useTodoList
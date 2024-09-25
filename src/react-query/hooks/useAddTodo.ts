import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { CACHE_KEY_TODOS } from "../constants"
import APIClient from "../services/apiClient"
import { Todo } from "./useTodoList"

const apiClinet = new APIClient<Todo>('/todos')

interface AddTodoContext {
    previousTodos: Todo[]
}

const useAddTodo = (onAdd: () => void) => {
    const queryClient = useQueryClient()

    return useMutation<Todo, Error, Todo, AddTodoContext>({
        mutationFn: apiClinet.add,
        onMutate: (newTodo) => {
            const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || []

            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos=[]) => [newTodo, ...todos])

            return { previousTodos }
        },
        onSuccess: (saveTodo, newTodo) => {
            // approach 1: invalidating the cache
            // queryClient.invalidateQueries({
            //     queryKey: constants.CACHE_KEY_TODOS
            // })
            
            // approach 2: updating the data in cache
            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, todos => todos?.map(todo => todo === newTodo ? saveTodo : todo))

            // 清空input,消费者消费
            // if(ref.current) ref.current.value = ''
            onAdd()
        },
        onError: (error, newTodo, context) => {
            if(!context) return
            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos)
        }
        
    })
}

export default useAddTodo
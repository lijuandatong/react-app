import axios from "axios"
import { useQuery } from "@tanstack/react-query"


interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
}

const TodoList = () => {
    const fetchTodos = () => 
        axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.data)

    const {data: todos, error} = useQuery<Todo[], Error>({
        queryKey: ['todos'],
        queryFn: fetchTodos
    })

    if(error) return <p>{error.message}</p>

    return (
        <ul className="list-group">
            {todos?.map(todo => <li key={todo.id} className="list-group-item">{todo.title}</li>)}
        </ul>
    )
}

export default TodoList
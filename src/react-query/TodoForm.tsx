import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React, { FormEvent, InputHTMLAttributes, useRef, useState } from 'react'
import { Todo } from './hooks/useTodoList'


const TodoForm = () => {
    // use Ref hook to access the value of the input fields
    // common practice to set null
    // set a type for useRef
    const ref = useRef<HTMLInputElement>(null)

    const queryClient = useQueryClient()

    const addTodo = useMutation<Todo, Error, Todo>({
        mutationFn: (todo: Todo) => 
            axios
            .post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
            .then(res => res.data),
        onSuccess: (saveTodo, newTodo) => {
            // approach 1: invalidating the cache
            // queryClient.invalidateQueries({
            //     queryKey: ['todos']
            // })
            
            // approach 2: updating the data in cache
            queryClient.setQueryData<Todo[]>(['todos'], todos => [saveTodo, ...(todos || [])])

            // 清空input
            if(ref.current) ref.current.value = ''
        }
        
    })

    return (
        <>
        {addTodo.error && <div className="alert alert-danger">{addTodo.error.message}</div>}
        <form className='row mb-3' onSubmit={event => {
            event.preventDefault()
            // 当postRef.current存在，并且postRef.current.value为ture，即有值的时候
            if(ref.current && ref.current.value){
                addTodo.mutate({ // mutate方法会触发上面的mutationFn提交数据
                    id: 0,
                    title: ref.current?.value,
                    completed: false,
                    userId: 1
                })
            }   
        }}>
            <div className="col">
                <input 
                    ref={ref}
                    type="text" 
                    className="form-control" />
            </div>
            <div className='col'>
                <button disabled={addTodo.isLoading} className="btn btn-primary">{addTodo.isLoading ? 'adding' : 'add'}</button>
            </div>
            
        </form>
        </>
    )
}

export default TodoForm
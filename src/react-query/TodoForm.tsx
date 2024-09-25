import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React, { FormEvent, InputHTMLAttributes, useRef, useState } from 'react'
import useAddTodo from './hooks/useAddTodo'

const TodoForm = () => {
    // use Ref hook to access the value of the input fields
    // common practice to set null
    // set a type for useRef
    const ref = useRef<HTMLInputElement>(null)

    const addTodo = useAddTodo(() => {if(ref.current) ref.current.value = ''})

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
import React, { FormEvent, InputHTMLAttributes, useRef, useState } from 'react'
import { useForm, FieldValues } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object ({
    name: z.string().min(3, { message: 'The name must be at least 3 characters.'}),
    age: z.number({ invalid_type_error: 'Age field is required.'}).min(18, { message: 'The age must be at least 18.'})
})

type FormData = z.infer<typeof schema>

// interface FormData {
//     name: string
//     age: number
// }

const Form = () => {
    // use Ref hook to access the value of the input fields
    // // common practice to set null
    // // set a type for useRef
    // const nameRef = useRef<HTMLInputElement>(null)
    // const ageRef = useRef<HTMLInputElement>(null)
    // // create a object
    // const person = {name: '', age: 0}

    // const handleSubmit = (event: FormEvent) => {
    //     event.preventDefault()
    //     if(nameRef.current)
    //         person.name = nameRef.current.value
    //     if(ageRef.current)
    //         person.age = parseInt(ageRef.current.value)

    //     console.log(person)
    // }

    // use state hook to access
    // const [person, setPerson] = useState({
    //     name: '',
    //     age: ''
    // })

    // const handleSubmit = (event: FormEvent) => {
    //     event.preventDefault()
    //     // console.log(person)
    // }

    // use form hook
    const { register, handleSubmit, formState: {errors, isValid} } = useForm<FormData>({ resolver: zodResolver(schema)})

    const handler = (data: FieldValues) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(handler)}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input 
                    // value={person.name} 
                    // onChange={(event) => setPerson({...person, name: event.target.value})} 
                    { ...register('name')}
                    id="name" 
                    type="text" 
                    className="form-control" />
                {errors.name && <p className='text-danger'>{errors.name.message}</p>}
            </div>

            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input { ...register('age', { valueAsNumber: true})} id="age" type="number" className="form-control" />
                {errors.age && <p className='text-danger'>{errors.age.message}</p>}
            </div>

            <button disabled={!isValid} className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Form
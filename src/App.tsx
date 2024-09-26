import { MouseEvent, useEffect, useRef, useState } from 'react'
import Alert from './components/Alert'
import Button from './components/Button'
import ListGroup from './components/ListGroup'
import { SlCalender } from "react-icons/sl";
import Like from './components/Like';
import produce from 'immer';
import Form from './components/Form';
import ExpenseList from './expense-tracker/components/ExpenseList';
import ExpenseFilter from './expense-tracker/components/ExpenseFilter';
import ExpenseForm from './expense-tracker/components/ExpenseForm';
import categories from './expense-tracker/categories';
import ProductList from './components/ProductList';
import { AxiosError } from 'axios'
import apiClient, {CanceledError} from './services/api-client';
import UserService, { User } from './services/UserService';
import useUsers from './hooks/useUsers';
import TodoList from './react-query/TodoList';
import PostList from './react-query/PostList';
import TodoForm from './react-query/TodoForm';
import LoginStatus from './state-management/LoginStatus';

function App() {
  // let items = [
  //   'London',
  //   'New YorK',
  //   'Shanghai',
  //   'Tokyo'
  // ]

  // const handleSelectItem = (item: string) => {
  //   console.log(item)
  // }

  // list group
  // return <div><ListGroup items={items} heading="City" onSelectItem={handleSelectItem} /></div>


  // alert and button
  // const [alertVisible, setAlertVisibility] = useState(false)

  // const handleClick = () => {
  //   console.log("button is clicked")
  //   setAlertVisibility(true)
  // }

  // return (
  //   <div>
  //     {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>
  //       hello <span>button</span>
  //     </Alert>}

  //     <Button color="secondary" onClick={handleClick}>my button</Button>
  //   </div>
  // )

  // return (
  //   <div>
  //     <SlCalender />
  //   </div>
  // )

  // like component
  // return (
  //   <div>
  //     <Like onClick={() => {console.log("clicked")}}></Like>
  //   </div>
  // )

  // updating array of objects by immer 
  // const [bugs, setBugs] = useState([
  //   {id: 1, title: 'bug1', fixed: false},
  //   {id: 2, title: 'bug2', fixed: false}
  // ]
  // )

  // const handleClick = () => {
  //   setBugs(produce(draft => {
  //     const bug = draft.find(bug => bug.id === 1)
  //     if(bug)
  //       bug.fixed = true
  //   }))
  // }

  // return (
  //   <div>
  //     {bugs.map((bug) => <p key={bug.id}>{bug.title} {bug.fixed ? 'fixed' : 'new'}</p>)}

  //     <Button color="secondary" onClick={handleClick}>my button</Button>
  //   </div>
  // )

  // return (
  //   <div>
  //     <Form></Form>
  //   </div>
  // )

  // form project
  // const expenses = [
  //   { id: 1, description: 'aaa', amount: 10, category: 'Food' },
  //   { id: 2, description: 'bbb', amount: 10, category: 'Food' },
  //   { id: 3, description: 'ccc', amount: 10, category: 'Food' },
  //   { id: 4, description: 'ddd', amount: 10, category: 'Food' },
  // ]

  // const [list, setExpenses] = useState(expenses)
  // const [selectedCategory, setSelectedCategory] = useState('')

  // const onDelete = (id: number) => {
  //   console.log(id)
  //   setExpenses(list.filter((expense) => expense.id !== id))
  // }

  // const visibleList = selectedCategory ? list.filter((expense) => expense.category === selectedCategory) : list

  // return (
  //   <div>
  //     <div className="mb-5">
  //       <ExpenseForm onSubmit={expense => setExpenses([...list, {...expense, id: list.length + 1} ])}></ExpenseForm>
  //     </div>
  //     <div className="mb-3">
  //       <ExpenseFilter onChange={(category) => setSelectedCategory(category)}></ExpenseFilter>
  //     </div>
  //     <ExpenseList expenses={visibleList} onDelete={onDelete}></ExpenseList>
  //   </div>
  // )
  
  // use effect hook
  // const ref = useRef<HTMLInputElement>(null)

  // // after render
  // useEffect(() => {
  //   // side effect
  //   if(ref.current) 
  //     ref.current.focus()
  // })

  // useEffect(() => {
  //   document.title = 'My App'
  // })

  // return (
  //   <div>
  //     <input ref={ref} type="text" className="form-control" />
  //   </div>
  // )

  // effect dependencies
  // const [category, setCategory] = useState('')

  // return (
  //   <div>
  //     <select className="form-select" onChange={(event) => { setCategory(event.target.value) }}>
  //       <option value=""></option>
  //       <option value="Clothing">Clothing</option>
  //       <option value="Household">Household</option>
  //     </select>
  //     <ProductList category={category}></ProductList>
  //   </div>
  // )


  // user的增删改查的操作
  // const {users, errors, isLoading, setUsers, setErrors} = useUsers()

  // const deleteUser = (user: User) => {
  //   const originalData = [...users]
  //   setUsers(users.filter((item) => item.id !== user.id))
  //   UserService.delete(user.id).catch((error) => {
  //     setErrors(error.message)
  //     setUsers(originalData)
  //   })
  // }

  // const addUser = () => {
  //   const originalData = [...users]
  //   const newUser = {id: 0, name: 'Lijuan'}
  //   setUsers([newUser, ...users])
  //   UserService.add(newUser)
  //   .then(({data: savedUser}) => {
  //     setUsers([savedUser, ...users])
  //   })
  //   .catch((error) => {
  //     setErrors(error.message)
  //     setUsers(originalData)
  //   })
  // }

  // const updateUser = (user: User) => {
  //   const originalData = [...users]
  //   const updateUser = {...user, name: user.name + "!"}
  //   setUsers(users.map(u => u.id === user.id ? updateUser : u))

  //   UserService.update(updateUser)
  //   .catch((error) => {
  //     setErrors(error.message)
  //     setUsers(originalData)
  //   })
  // }

  // return (
  //   <div>
  //     {errors && <p className='text-danger'>{errors}</p>}
  //     {isLoading && <div className="spinner-border"></div>}
  //     <button className="btn btn-primary" onClick={addUser}>Add</button>
  //     <ul className="list-group">
  //       {users.map((user) => 
  //       <li key={user.id} className="list-group-item d-flex justify-content-between">
  //         {user.name}
  //         <div>
  //           <button className="btn btn-outline-primary" onClick={() => {updateUser(user)}}>Update</button>
  //           <button className="btn btn-outline-danger" onClick={() => {deleteUser(user)}}>Delete</button>
  //         </div>
  //         </li>)}
  //     </ul>
  //   </div>
  // )

  // return (
  //   <div>
  //     <TodoForm />
  //     <TodoList />
  //   </div>
  // )
  
  return (
    <div>
      <LoginStatus />
    </div>
  )

}

export default App

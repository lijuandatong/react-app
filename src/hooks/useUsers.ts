import { useEffect, useState } from "react"
import { CanceledError } from "../services/api-client"
import userService, { User } from "../services/UserService"

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([])
  const [errors, setErrors] = useState('')
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    setLoading(true)
    const {request, cancel} = userService.getAll<User>()
      request.then(res => {
        setUsers(res.data)
        setLoading(false)
      })
      .catch(error => {
        if (error instanceof CanceledError) return
        setErrors(error.message)
        setLoading(false)
      })
    
      return () => cancel()

  }, [])

  return {users, errors, isLoading, setUsers, setErrors}
}

export default useUsers
import apiClient from "./api-client"
import create from "./HttpService"

export interface User {
    id: number
    name: string
  }

export default create('/users')
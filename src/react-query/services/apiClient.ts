import axios from "axios"
import apiClient from "../../services/api-client"

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

class APIClient<T> {
    constructor(private endpoint: string){}

    getAll = () => {
        return apiClient.get<T[]>(this.endpoint).then(res => res.data)
    }

    add = (data: T) => {
        return apiClient.post(this.endpoint, data).then(res => res.data)
    }
}

export default APIClient
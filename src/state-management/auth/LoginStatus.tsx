import useAuthStore from './store'

const LoginStatus = () => {
    // const [user, setUser] = useState('')
    //const [user, dispatch] = useReducer(authReducer, '')
    //const {user, dispatch} = useAuth()
    const { user, login, logout } = useAuthStore()

    if(user !== '')
        return (
            <div>
                <span className="mx-2">{user}</span>
                <a onClick={() => logout()} href="#">
                    logout
                </a>
            </div>
        )
    return (
        <div>
            <a onClick={() => login('Lijuan')} href="#">
                login
            </a>
        </div>
    )
}

export default LoginStatus
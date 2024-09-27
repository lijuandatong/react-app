import useAuth from './useAuth'

const LoginStatus = () => {
    // const [user, setUser] = useState('')
    //const [user, dispatch] = useReducer(authReducer, '')
    const {user, dispatch} = useAuth()

    if(user !== '')
        return (
            <div>
                <span className="mx-2">{user}</span>
                <a onClick={() => dispatch({type: 'LOGOUT'})} href="#">
                    logout
                </a>
            </div>
        )
    return (
        <div>
            <a onClick={() => dispatch({type: 'LOGIN', userName: 'Lijuan'})} href="#">
                login
            </a>
        </div>
    )
}

export default LoginStatus
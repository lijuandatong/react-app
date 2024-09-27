import React, { ReactNode, useReducer } from 'react'
import AuthContext from './context/AuthContext'
import authReducer from './reducers/authReducer'

interface Props{
    children: ReactNode
}

const AuthProvider = ({children}: Props) => {
    const [user, dispatch] = useReducer(authReducer, '')

    return (
        <AuthContext.Provider value={{user, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
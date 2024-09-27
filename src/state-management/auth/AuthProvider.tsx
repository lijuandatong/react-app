import React, { ReactNode, useReducer } from 'react'
import AuthContext from './AuthContext'

interface LogoutAction {
    type: 'LOGOUT'
}

interface LoginAction {
    type: 'LOGIN'
    userName: string
}

export type AuthAction = LoginAction | LogoutAction

const authReducer = (user: string, action: AuthAction) => {
    switch(action.type){
        case 'LOGIN':
            return action.userName
        case 'LOGOUT':
            return ''
    }
    return user
}

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
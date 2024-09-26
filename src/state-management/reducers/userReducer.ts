interface LogoutAction {
    type: 'LOGOUT'
}

interface LoginAction {
    type: 'LOGIN'
    userName: string
}

type AuthAction = LoginAction | LogoutAction

const authReducer = (user: string, action: AuthAction) => {
    switch(action.type){
        case 'LOGIN':
            return action.userName
        case 'LOGOUT':
            return ''
    }
    return user
}

export default authReducer
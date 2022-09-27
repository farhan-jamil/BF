import * as actions from './actionTypes'
export const getLogin = (loginInfo) => {
    return {
        type: actions.LOGIN_SUCCESS,
        payload: loginInfo
    }
}
export const getLogout=()=>{
    return{
        type:actions.LOGOUT_REQUEST
    }
}
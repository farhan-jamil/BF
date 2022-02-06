export const getLogin = (loginInfo) => {
    return {
        type: "Get_Login",
        loginInfo
    }
}
export const getLogout=()=>{
    return{
        type:'Get_Logout'
    }
}
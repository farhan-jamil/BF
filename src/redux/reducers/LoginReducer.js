
const initialData = {
    email: 'farhan',
    password: '1234',
    matchingVar: false
}
const LoginReducer = (state = initialData, action) => {
    switch (action.type) {

        case "Get_Login":

            // console.log(action.loginInfo);
            if (state.email == action.loginInfo.loginEmail && state.password == action.loginInfo.loginPassword) {
                console.log('Hi from redux');
                return {
                    ...state,
                    matchingVar:true

                }

                // console.log(action.loginInfo.loginEmail);
                // console.log(action.loginInfo.loginPassword);
                // navigation.navigate('HomeScreen')

            }
            else {
                console.log('Hi from redux else');


            }

            case "Get_Logout":
           
                return {
                    ...state,
                    matchingVar:false

                }
        default: return state;
    }

}
export default LoginReducer;
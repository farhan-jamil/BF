import * as actions from '../actions/actionTypes'
const initialData = {
    email: 'farhan',
    password: '1234',
    matchingVar: false
}
const LoginReducer = (state = initialData, action) => {
    switch (action.type) {

        case actions.LOGIN_SUCCESS:

            // console.log(action.loginInfo);
            if (state.email == action.payload.loginEmail && state.password == action.payload.loginPassword) {
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

            case actions.LOGOUT_REQUEST:
           
                return {
                    ...state,
                    matchingVar:false

                }
        default: return state;
    }

}
export default LoginReducer;
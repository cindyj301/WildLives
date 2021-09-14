import { combineReducers } from "redux";

import loginErrorsReducer from "./login_errors_reducer";
import signupErrorsReducer from "./signup_errors_reducer";
import userErrorsReducer from "./user_errors_reducer";

const errorsReducer = combineReducers({
    signup: signupErrorsReducer,
    login: loginErrorsReducer,
    user: userErrorsReducer
})

export default errorsReducer;
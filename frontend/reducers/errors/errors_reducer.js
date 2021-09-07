import { combineReducers } from "redux";

import loginErrorsReducer from "./login_errors_reducer";
import signupErrorsReducer from "./signup_errors_reducer";
import postErrorsReducer from "./posts_errors_reducer";

const errorsReducer = combineReducers({
    signup: signupErrorsReducer,
    login: loginErrorsReducer,
    post: postErrorsReducer
})

export default errorsReducer;
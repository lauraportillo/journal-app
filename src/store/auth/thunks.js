import { checkingCredentials } from "./";


// Primer thunk
export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    }
}


// Segundo thunk
export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    }
}
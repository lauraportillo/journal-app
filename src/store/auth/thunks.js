import { singInWithGoogle } from "../../firebase/providers";
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

        const result = await singInWithGoogle();
        console.log(result);
    }
}

// IMPORTAMOS LOS PROVEEDORES:
import { registerUserWithEmailPassword, singInWithGoogle } from '../../firebase/providers';
import { checkingCredentials, logout, login } from './';


// Primer thunk checkingAuthentication
export const checkingAuthentication = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    }
}


// Segundo thunk startGoogleSignIn
export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await singInWithGoogle();
        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result));
    }
}

// Tercer thunk startCreatingUserWithEmailPassword
export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {

        dispatch(checkingCredentials());

        const result = await registerUserWithEmailPassword({ email, password, displayName });
        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result))

        console.log(result);

    }

}


// // Cuarto thunk
// export const startLoginWithEmailPassword = ({ email, password }) => {
//     return async (dispatch) => {

//         dispatch(checkingCredentials());

//         const result = await loginWithEmailPassword({ email, password });
//         console.log(result);

//         if (!result.ok) return dispatch(logout(result));
//         dispatch(login(result));

//     }
// }

// // Quinto thunk
// export const startLogout = () => {
//     return async (dispatch) => {

//         await logoutFirebase();

//         dispatch(logout());

//     }
// }
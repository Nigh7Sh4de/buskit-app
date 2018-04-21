import * as Actions from './'

// export function signIn() {
//     return async dispatch => {
//         dispatch(signInLoading())
//         try {
//             const user = await GoogleSignIn.signInPromise()
//             dispatch(signInSuccess(user))
//         }
//         catch(e) { signInError(e) }
//     }
// }

export function signOut() {
    GoogleSignIn.signOut()
    return {
        type: Actions.USER_LOGOUT
    }
}

export function signInLoading() {
    return {
        type: Actions.USER_LOGIN_LOADING
    }
}

export function signInUpdated(user) {
    return {
        type: Actions.USER_LOGIN_SUCCESS,
        user
    }
}

export function signInError(error) {
    return {
        type: Actions.USER_LOGIN_ERROR,
        error
    }
}

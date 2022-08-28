import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: null,
    token: null,
    userName: '',
    authFailedMessage: ''
}

export const authReducer = createSlice({
    name: 'authReducer',
    initialState,
    reducers: {
        authSuccess: state => state,
        authFailed: (state, action) => ({
            ...state,
            authFailedMessage: action.payload
        }),
        authLoading: state => state,
        authLogout: state => state
    }
})

export const auth = (newUser, email, password) => dispatch => {
    const baseUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:'
    let user = ''
    const endPoint = '?key=AIzaSyDs7aKtSQz0aEgSmDaoCyWUUYNtC6mpzg8'
    if (newUser) {
        user = 'signUp'
    } else {
        user = 'signInWithPassword'
    }

    const authData = {
        email, password,
        returnSecureToken: true
    }

    // console.log("reducer => ", email, password);
    // expiresIn, idToken, localId
    fetch(baseUrl + user + endPoint, {
        method: 'POST',
        body: JSON.stringify(authData)
    }).then(
        response => response.json()
    ).then(
        async data => {
            if(data.error) {
                dispatch(authFailed(data.error.message))
            } else {
                console.log(data);
            }
        }
    ).catch(
        error => console.log(error)
    )
}

export const { authSuccess, authFailed } = authReducer.actions;
export default authReducer.reducer;
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
        authSuccess(state, action) {
            // console.log(action);
            // console.log(state.token);
            return {
                ...state,
                token: action.payload.token,
                userId: action.payload.userId
                // console.log(action.payload);
            }
        },
        authFailed: (state, action) => ({
            ...state,
            authFailedMessage: action.payload
        }),
        authLoading: state => state,
        authLogout: state => ({
            ...state,
            userId: null,
            token: null,
            userName: ''
        })
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
            if (data.error) {
                dispatch(authFailed(data.error.message))
            } else {
                const token = data.idToken;
                const userId = data.localId;
                const expiresIn = data.expiresIn;
                localStorage.setItem('token', token);
                localStorage.setItem('userId', userId);
                // expirationTime
                const expirationTime = new Date(new Date().getTime() + expiresIn * 1000)
                localStorage.setItem('expirationTime', expirationTime)
                dispatch(authSuccess({ token, userId }))
                // console.log('auth validatio fetch');
            }
        }
    ).catch(
        error => console.log(error)
    )
}

export const authCheck = () => dispatch => {
    const token = localStorage.getItem('token');
    // console.log(token);
    if (token) {
        const expirationTime = new Date(localStorage.getItem('expirationTime'))
        if (new Date <= expirationTime) {
            const userId = localStorage.getItem('userId');
            // console.log(expirationTime);
            dispatch(authSuccess({ token, userId }))
        } else {
            logout()
        }
    } else {
        logout();
    }
}

export const logout = () => dispatch => {
    localStorage.clear();

    // console.log(localStorage.getItem('userId'));
    dispatch(authLogout());
}

export const { authSuccess, authFailed, authLogout } = authReducer.actions;
export default authReducer.reducer;
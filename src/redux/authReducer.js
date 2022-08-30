import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: null,
    token: null,
    userName: '',
    authFailedMessage: '',
    loading: false
}

export const authReducer = createSlice({
    name: 'authReducer',
    initialState,
    reducers: {
        authSuccess: (state, action) => ({
            ...state,
            token: action.payload.token,
            userId: action.payload.userId
        }),
        authFailed: (state, action) => ({
            ...state,
            authFailedMessage: action.payload
        }),
        authLoading: (state, action) => ({
            ...state,
            loading: action.payload
        }),
        authLogout: state => ({
            ...state,
            userId: null,
            token: null,
            userName: ''
        }),
        authName: (state, action) => ({
            ...state,
            userName: action.payload
        })
    }
})

export const auth = (newUser, email, password, name) => dispatch => {
    dispatch(authLoading(true))
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

    fetch(baseUrl + user + endPoint, {
        method: 'POST',
        body: JSON.stringify(authData)
    }).then(
        response => response.json()
    ).then(
        data => {
            if (data.error) {
                dispatch(authLoading(false))
                dispatch(authFailed(data.error.message))
            } else {
                const token = data.idToken;
                const userId = data.localId;
                const expiresIn = data.expiresIn;
                localStorage.setItem('token', token);
                localStorage.setItem('userId', userId);

                const expirationTime = new Date(new Date().getTime() + expiresIn * 1000)
                localStorage.setItem('expirationTime', expirationTime)
                dispatch(authSuccess({ token, userId }))
                name || dispatch(getUserName(userId, token))

                // here for new user
                if (newUser) {
                    const userInfo = {
                        userId, name
                    }
                    let endPoint = 'https://photo-gallery-8f403-default-rtdb.asia-southeast1.firebasedatabase.app/userInfo.json?auth=';
                    fetch(endPoint + token, {
                        method: "POST",
                        body: JSON.stringify(userInfo)
                    }).then(
                        response => response.json()
                    ).then(
                        () => {
                            dispatch(authName(name))
                            dispatch(authLoading(false))
                        }
                    ).catch(
                        error => {
                            console.log(error)
                            dispatch(authLoading(false))
                        }

                    )
                }
            }
        }
    ).catch(
        error => {
            console.log(error)
            dispatch(authLoading(false))
        }
    )
}

const getUserName = (userId, token) => dispatch => {
    // sing in or reload => name colect from firebase
    const api = 'https://photo-gallery-8f403-default-rtdb.asia-southeast1.firebasedatabase.app/userInfo.json?auth='
    const query = '&orderBy="userId"&equalTo="' + userId + '"';
    fetch(api + token + query)
        .then(response => response.json())
        .then(data => dispatch(
            authName(data[Object.keys(data)[0]].name))
        )
}

export const authCheck = () => dispatch => {
    const token = localStorage.getItem('token');
    // reload or token check local storage
    if (token) {
        const expirationTime = new Date(localStorage.getItem('expirationTime'))
        if (new Date <= expirationTime) {
            const userId = localStorage.getItem('userId');
            // console.log(expirationTime);
            dispatch(authSuccess({ token, userId }))

            // console.log('authceck');
            dispatch(getUserName(userId, token))

        } else {
            dispatch(logout())
        }
    } else {
        dispatch(logout())
    }
}

export const logout = () => dispatch => {
    localStorage.clear();
    dispatch(authLogout());
}



export const {
    authSuccess,
    authFailed,
    authLogout,
    authLoading,
    authName
} = authReducer.actions;
export default authReducer.reducer;
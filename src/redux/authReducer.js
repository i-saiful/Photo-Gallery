import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: null,
    token: null,
    userName: ''
}

export const authReducer = createSlice({
    name: 'authReducer',
    initialState,
    reducers: {
        authSuccess: state => state
    }
})

export const {authSuccess} = authReducer.actions;
export default authReducer.reducer;
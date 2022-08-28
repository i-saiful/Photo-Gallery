import { createSlice } from "@reduxjs/toolkit";

const initalState = {
    userId: null,
    token: null,
    userName: ''
}

export const authReducer = createSlice({
    name: 'authReducer',
    state: initalState,
    reducers: {

    }
})

export const {} = authReducer.actions;
export default authReducer.reducer;
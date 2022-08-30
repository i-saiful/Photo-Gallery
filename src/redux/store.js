import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import imageReducer from "./imageReducer";
import commentReducer from "./commentReducer";

export default configureStore({
    reducer: {
        auth: authReducer,
        img: imageReducer,
        comment: commentReducer
    }
})
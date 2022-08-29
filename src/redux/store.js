import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import imageReducer from "./imageReducer";

export default configureStore({
    reducer: {
        auth: authReducer,
        img: imageReducer
    }
})
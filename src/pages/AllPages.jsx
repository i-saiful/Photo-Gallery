import React from 'react';
import Navigation from "../components/Navigation";
import Home from "./Home";
import ImageFeedback from "./ImageFeedback";
import UserForm from "./UserForm";
import { useDispatch, useSelector } from 'react-redux'
import { authCheck } from '../redux/authReducer'

function AllPages() {
    const dispatch = useDispatch();
    const check = () => dispatch(authCheck())
    check();
    const token = useSelector(state => state.auth.token)

    if (token) {
        return (
            <div>
                <Navigation />
                <Home />
                {/* <ImageFeedback /> */}
            </div>
        )
    } else {
        return (
            <div>
                <UserForm />
            </div>
        )
    }
}

export default AllPages
import React, { Component } from 'react';
import Navigation from "../components/Navigation";
import Bicycle from './Bicycle';
import Bike from './Bike';
import Car from './Car';
import Home from "./Home";
import ImageFeedback from "./ImageFeedback";
import UserForm from "./UserForm";
import { connect } from 'react-redux'
import { authCheck } from '../redux/authReducer';
import {
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

const mapStateToProps = state => ({
    token: state.auth.token
})

const mapDispatchToProps = dispatch => ({
    authCheck: () => dispatch(authCheck())
})

class AllPages extends Component {
    componentDidMount() {
        this.props.authCheck();
    }

    render() {
        if (this.props.token) {
            return (
                <div>
                    <Navigation />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/bike" element={<Bike />} />
                        <Route path="/bicycle" element={<Bicycle />} />
                        <Route path="/car" element={<Car />} />
                        <Route path="/image-feedback" element={<ImageFeedback />} />
                        <Route path="*" element={<Navigate to='/' replace={true} />} />
                    </Routes>
                </div>
            )
        } else {
            return (
                <Routes>
                    <Route path="/login" element={<UserForm />} />
                    <Route path="*" element={<Navigate to='/login' replace={true} />} />
                </Routes>
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPages)
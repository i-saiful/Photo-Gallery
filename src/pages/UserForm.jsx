import React, { useState, useEffect } from 'react';
import { auth, authFailed } from '../redux/authReducer';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../components/Spinner';

function UserForm() {
    const dispatch = useDispatch();
    const errorMessage = useSelector(state => state.auth.authFailedMessage)
    const loading = useSelector(state => state.auth.loading)
    const [showPassword, setShowPassword] = useState(false);
    const [newUser, setNewUser] = useState(false);
    const [validation, setValidation] = useState(false);
    const [errorMsg, setErrorMsg] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [userInput, setUserInput] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    let renderName = null;
    let renderConfirPassword = null;


    if (newUser) {
        renderName = (
            <div className="form-check mb-3 ps-0">
                <input type="text"
                    name='name'
                    className={errorMsg.name ?
                        'form-control is-invalid' : 'form-control'}
                    placeholder='Your Full Name'
                    onChange={(e) => handleInputChange(e)}
                />

                <div className="invalid-feedback">
                    {errorMsg.name}
                </div>
            </div>
        )

        renderConfirPassword = (
            <div className="form-check mb-3 ps-0">
                <input type={showPassword ? 'text' : 'password'}
                    name='confirmPassword'
                    className={errorMsg.confirmPassword ?
                        'form-control is-invalid' : 'form-control'}
                    placeholder='Confirm Password'
                    onChange={(e) => handleInputChange(e)}
                />

                <div className="invalid-feedback">
                    {errorMsg.confirmPassword}
                </div>
            </div>
        )
    }

    // here onchange input 
    const handleInputChange = (e) => {
        setUserInput({
            ...userInput,
            [e.target.name]: e.target.value
        });
        resetValidation();
    }

    // here validation check of form
    const validationCheck = () => {
        let flag = true;
        const { name, email, password, confirmPassword } = userInput;
        // eslint-disable-next-line
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        const isEmail = regex.test(email)

        if (newUser) {
            // name is not empty
            if (!name) {
                setErrorMsg({
                    ...errorMsg,
                    name: 'Please do not empty your name.'
                })

                flag &&= false;
            }

            // email validation check
            if (!isEmail) {
                setErrorMsg({
                    ...errorMsg,
                    email: 'Please provide a valid email address.'
                })
                flag &&= false;
            }

            // password length check
            if (password.length < 6) {
                setErrorMsg({
                    ...errorMsg,
                    password: 'minimum password length is 6 characters'
                })
                flag &&= false;
            }

            // match passowrd and confirm password
            if (password !== confirmPassword) {
                setErrorMsg({
                    ...errorMsg,
                    confirmPassword: "Those passwords didn't match. Try again."
                })
                flag &&= false;
            }

        } else {
            if (!isEmail) {
                setErrorMsg({
                    ...errorMsg,
                    email: 'Please provide a valid email address.'
                })
                flag &&= false;
            }

            if (password.length < 6) {
                setErrorMsg({
                    ...errorMsg,
                    password: 'minimum password length is 6 characters'
                })
                flag &&= false;
            }
        }

        return flag;
    }

    // here submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = validationCheck();

        if (isValid) {
            const { email, password, name } = userInput;
            dispatch(auth(newUser, email, password, name))
            dispatch(authFailed(''));
        }
    }

    // reset validation in input field
    const resetValidation = () => {
        setValidation(false);
        setErrorMsg({
            ...errorMsg,
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
    }

    useEffect(() => {
        // error validation using switch case 
        switch (errorMessage) {
            case 'EMAIL_EXISTS':
                setErrorMsg({
                    ...errorMsg,
                    email: 'The email address is already in use by another account.'
                })
                break;

            case 'EMAIL_NOT_FOUND':
                setErrorMsg({
                    ...errorMsg,
                    email: 'Email not found.'
                })
                break;

            case 'INVALID_PASSWORD':
                setErrorMsg({
                    ...errorMsg,
                    password: 'The password is invalid or the user does not have a password.'
                })
                break;

            default:
                setErrorMsg({
                    ...errorMsg,
                    email: errorMessage
                })
                break;
        }
        // eslint-disable-next-line

        // console.log(authReducer);
    }, [errorMessage]);

    if (loading) {
        return (
            <div className='bg-form'>
                <Spinner />
            </div>
        )
    } else {
        return (
            <main className='bg-form'>
                <form className={newUser && validation ?
                    'was-validated form-signin rounder' : 'form-signin rounded'}
                    onSubmit={e => handleSubmit(e)}
                >
                    <h1 className='font-monospace text-center mb-3'>
                        Please {newUser ? 'sign up' : 'sign in'}
                    </h1>
                    {/* input name */}
                    {renderName}

                    {/* input mail */}
                    <div className="form-check mb-3 ps-0">
                        <input type="email"
                            name='email'
                            className={errorMsg.email ?
                                'form-control is-invalid' : 'form-control'}
                            placeholder='Email'
                            onChange={(e) => handleInputChange(e)}
                        />

                        <div className="invalid-feedback">
                            {errorMsg.email}
                        </div>
                    </div>

                    {/* input password */}
                    <div className="form-check mb-3 ps-0">
                        <input type={showPassword ? 'text' : 'password'}
                            className={errorMsg.password ?
                                'form-control is-invalid' : 'form-control'}
                            placeholder='Password'
                            name='password'
                            onChange={(e) => handleInputChange(e)}
                        />

                        <div className="invalid-feedback">
                            {errorMsg.password}
                        </div>
                    </div>

                    {/* confirm password */}
                    {renderConfirPassword}

                    {/* checkbox password */}
                    <div className="form-check mb-5">
                        <input className="form-check-input"
                            type="checkbox"
                            id='showPassword'
                            onChange={() => setShowPassword(!showPassword)} />

                        <label className="form-check-label"
                            htmlFor='showPassword' >
                            Show Password
                        </label>
                    </div>

                    {/* sumbit button */}
                    <div className='d-flex justify-content-between align-items-center'>
                        <input type="submit" value="Submit"
                            className='btn btn-primary' />

                        <button className='btn bg-light'
                            onClick={e => { e.preventDefault(); setNewUser(!newUser) }}
                        >{newUser ? 'Sign in' : 'Create account'}</button>
                    </div>
                </form>
            </main>
        )
    }
}

export default UserForm
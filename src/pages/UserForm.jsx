import React, { useState } from 'react';

function UserForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [newUser, setNewUser] = useState(false);
    const [validation, setValidation] = useState(false);
    const [errorMsg, setErrorMsg] = useState({
        name: '',
        email: '',
        password: '',
        confirmPasswoed: ''
    })

    let renderName = null;
    let renderConfirPassword = null;
    //is-invalid
    if (newUser) {
        renderName = (
            <div className="form-check mb-3 ps-0">
                <input type="text"
                    name='name'
                    className={errorMsg.name ?
                        'form-control is-invalid' : 'form-control'}
                    placeholder='Your Full Name' />

                <div className="invalid-feedback">
                    {errorMsg.name}
                </div>
            </div>
        )

        renderConfirPassword = (
            <div className="form-check mb-3 ps-0">
                <input type={showPassword ? 'text' : 'password'}
                    className={errorMsg.confirmPasswoed ?
                        'form-control is-invalid' : 'form-control'}
                    placeholder='Confirm Password' />

                <div className="invalid-feedback">
                    {errorMsg.confirmPasswoed}
                </div>
            </div>
        )
    }

    return (
        <main className='bg-form'>
            <form className={newUser && validation ?
                'was-validated form-signin rounder' : 'form-signin rounded'}>
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
                        placeholder='Email' />

                    <div className="invalid-feedback">
                        {errorMsg.email}
                    </div>
                </div>

                {/* input password */}
                <div className="form-check mb-3 ps-0">
                    <input type={showPassword ? 'text' : 'password'}
                        className={errorMsg.password ?
                            'form-control is-invalid' : 'form-control'}
                        placeholder='Passowed' />

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
                    <button className='btn bg-light'
                        onClick={e => { e.preventDefault(); setNewUser(!newUser) }}
                    >{newUser ? 'Sign in' : 'Create account'}</button>
                    <input type="submit" value="Submit"
                        className='btn btn-primary' />
                </div>
            </form>
        </main>
    )
}

export default UserForm
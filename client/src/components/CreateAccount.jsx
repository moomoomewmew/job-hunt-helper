import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'
import '../styles/login.css'

const iState = {
    userName: '',
    password: '',
    confirmPassword: ''
}

export default function Register(props) {

    const navigate = useNavigate()
    const [formValues, setFormValues] = useState({
        userName: '',
        password: '',
        confirmPassword: ''
    })
    const password = formValues.password
    const passwordConfirm = formValues.confirmPassword
    const userName = formValues.userName

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (userName === "") {
            alert('Please enter a user name')
        } else if (password.length < 7) {
            alert("Your password must be at least 7 characters long")
            console.log(password.length)
        } else if (password !== passwordConfirm) {
            alert("Your passwords do not match")
        } else if (userName && password === passwordConfirm && password.length >= 7) {
            await RegisterUser({
                userName: formValues.userName,
                password: formValues.password
            })
            setFormValues(iState)
            navigate('/login')
            alert("You\'ve sucessfully registered!")
        } else {
            console.log('error')
        }
    }

    return (
        <div className="register-slip">
            <div className="card-overlay centered">
                <form className="col" onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <h2 className='login-title'>Create Account</h2>
                        <div>

                            <input
                                className='login-input'
                                onChange={handleChange}
                                name="userName"
                                type="text"
                                placeholder="Create your username here."
                                value={formValues.userName}
                                required
                            />
                        </div>

                        <div className="input-wrapper">
                            {/* <label htmlFor="password">Password</label> */}
                            <input
                                className='login-input'
                                onChange={handleChange}
                                type="password"
                                name="password"
                                placeholder='Now create a password.'
                                value={formValues.password}
                                required
                            />
                        </div>
                        <div className="input-wrapper">
                            {/* <label htmlFor="confirmPassword">Confirm Password</label> */}
                            <input
                                className='login-input'
                                onChange={handleChange}
                                type="password"
                                name="confirmPassword"
                                placeholder='Confirm your password.'
                                value={formValues.confirmPassword}
                                required
                            />
                        </div>
                        <button type='submit' className='login-button'>
                            Let's go!
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}


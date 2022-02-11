import '../styles/login.css'
import React, { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { Link, useNavigate } from 'react-router-dom'


export default function LogIn(props) {
    const navigate = useNavigate()
    const [formValues, setFormValues] = useState({ userName: '', password: '' })
    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = await SignInUser(formValues)
        navigate(`/dashboard`)
        props.toggleAuthenticated(true)
        alert('You\'ve successfully logged in!')
    }


    return (
        <div className="register-form">
            <div className="register-slip">
                <form className="col" onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <h2 className='login-title'>Login</h2>
                        <input
                            className='login-input'
                            onChange={handleChange}
                            name="userName"
                            type="userName"
                            placeholder="Username"
                            value={formValues.userName}
                            required
                        />
                    </div>
                    <div className="input-wrapper">
                        <input
                            className='login-input'
                            onChange={handleChange}
                            type="password"
                            name="password"
                            placeholder='Password'
                            value={formValues.password}
                            required
                        />
                    </div>
                    <button className='login-button' disabled={!formValues.userName || !formValues.password}>
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    )
}



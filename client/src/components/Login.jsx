
import React, { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { Link, useNavigate } from 'react-router-dom'


export default function LogIn(props) {
    const navigate = useNavigate()
    const [formValues, setFormValues] = useState({ email: '', password: '' })
    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = await SignInUser(formValues)
        setFormValues({ email: '', password: '' })
        props.setAuthUser(payload)
        props.toggleAuthenticated(true)
        navigate(`/dashboard`)
        alert('You\'ve successfully logged in!')
    }


    return (
        <div className="rigister-form">
            <div className="register-slip">
                <form className="col" onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <h2 className='login-title'>Login</h2>
                        <input
                            onChange={handleChange}
                            name="email"
                            type="email"
                            placeholder="email"
                            value={formValues.email}
                            required
                        />
                    </div>
                    <div className="input-wrapper">
                        <input
                            onChange={handleChange}
                            type="password"
                            name="password"
                            placeholder='Password'
                            value={formValues.password}
                            required
                        />
                    </div>
                    <button disabled={!formValues.email || !formValues.password}>
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    )
}



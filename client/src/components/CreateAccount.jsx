import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Dashboard from '../dashboard'

const CreateAccount = (props) => {

    const navigate = useNavigate()
    const user = props.user
    const setUser = props.setUser

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const isLoggedIn = props.isLoggedIn
    const toggleLogin = props.toggleLogin

    const handleLoginClick = async () => {

        try {
            const resp = await axios.get(`/api/users/${username}`)
            toggleLogin(username)
            console.log(resp.data)
            setUser(resp.data.user[0])
        } catch (err) {
            console.log(err)
            alert('login failed')
        }
    }

    const saveUserName = (e) => {
        setUserName(e.target.value)
    }

    const savePassword = (e) => {
        setPassword(e.target.value)
    }

    const savePasswordConfirm = (e) => {
        setPasswordConfirm(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (username === "") {
            alert('Please enter a user name')
        } else if (password.length < 7) {
            alert("Your password must be at least 7 characters long")
            console.log(password.length)
        } else if (password !== passwordConfirm) {
            alert("Your passwords do not match")
        } else if (username && password === passwordConfirm && password.length > 7) {
            navigate('/dashboard')
            alert("Youve sucessfully logged in")
            const request = {
                username,
                password
            };
            console.log('creating user with request', request)
            const res = await axios.post('/api/users', request).then(() => {
                handleLoginClick()
            })
        } else {
            console.log('something went wrong')
        }

    }

    return (
        <div>
            {!isLoggedIn ?
                (< div className="form" >
                    <h1>Sign Up</h1>
                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            value={username}
                            placeholder="username"
                            id="username"
                            onChange={saveUserName}
                        />
                        <label htmlFor="username">Username</label>        

                        <input
                            type="password"
                            value={password}
                            placeholder="Password"
                            id="password"
                            onChange={savePassword}

                        />
                        <label htmlFor="password">Password</label>

                        <input
                            type="password"
                            value={passwordConfirm}
                            placeholder="Confirm password"
                            id="passwordConfirm"
                            onChange={savePasswordConfirm}
                        />
                        <label htmlFor="passwordConfirm">Confirm password</label>

                        <button type="submit" >Sign Up</button>
                    </form>
                </div >) :
                <Dashboard user={user} />
            }
        </div>
    )
}

export default CreateAccount

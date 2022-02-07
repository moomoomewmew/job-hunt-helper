import React from "react"
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = (props) => {
    console.log(props)
    const setUser = props.setUser
    const isLoggedIn = props.isLoggedIn
    const toggleLogin = props.toggleLogin
    if (isLoggedIn) {
        console.log('logged in')
        return (
            <nav className="nav-bar">
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/"><p onClick={() => props.toggleLogin(false)}>Log out from {isLoggedIn}</p></Link>
            </nav>
        )
    } else {
        console.log('not logged in')
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/newaccount">Create Account</Link>
                <Link to="/login">Login</Link>
            </nav>
        )
    }
}

export default Navbar
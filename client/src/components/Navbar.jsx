import React from "react"
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = (props) => {
    console.log(props)
    const setUser = props.setUser
    const isLoggedIn = props.isLoggedIn
    const toggleLogin = props.toggleLogin
    if (isLoggedIn) {
        return (
            <nav className="nav-bar">
                <div><Link to="/" className="logo">Hunt Helpr</Link></div>
                <div className="nav-right"><Link to="/dashboard">Dashboard</Link>
                    <Link to="/"><p onClick={() => props.toggleLogin(false)}>Log out from {isLoggedIn}</p></Link></div>
            </nav>
        )
    } else {
        return (
            <nav className="nav-bar">
                <div><Link to="/" className="logo">Hunt Helpr</Link></div>
                <div className="nav-right"><Link to="/newaccount">Create Account</Link>
                    <Link to="/login">Login</Link></div>
            </nav>
        )
    }
}

export default Navbar
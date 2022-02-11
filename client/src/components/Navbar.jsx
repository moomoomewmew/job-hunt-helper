import React from "react"
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = (props) => {
    const authenticated = props.authenticated

    if (authenticated) {
        return (
            <nav className="nav-bar">
                <div><Link to="/" className="logo">Hunt Helpr</Link></div>
                <div className="nav-right"><Link to="/dashboard">Dashboard</Link>
                    <Link  onClick={props.handleLogOut} to="/">Logout</Link>
                </div>
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
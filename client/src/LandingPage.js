import React from 'react'
import { Link } from 'react-router-dom'
import './styles/landingpage.css'

const LandingPage = () => {

    return (
        <div className='landing-box'>
            <div className='description'>
                <h2 className="welcome-line-1">A managment system for your job hunt</h2>
                <h4 className="welcome-line-2">Organize all of your job opportunities in one place</h4>
                <Link className='sign-up' to="/newaccount">Sign up for free</Link>
            </div>
        </div>
    )
}


export default LandingPage
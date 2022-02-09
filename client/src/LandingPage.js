import React from 'react'
import { Link } from 'react-router-dom'
import './styles/landingpage.css'

const LandingPage = () => {

    

    return (
        <div>
            <div className='description'>
                <h2>A managment system for your job hunt</h2>
                <h4>Organize all of your job opportunities in one place</h4>
                <Link className='sign-up' to="/login">Sign up for free</Link>
            </div>
            <div className='image'>

            </div>
        </div>
    )
}

export default LandingPage
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CheckSession } from './services/Auth';
import { Link, useNavigate, Redirect } from 'react-router-dom';
import { BASE_URL } from "./globals/index";
import './styles/dashboard.css'
import Client from './services/api';

export default function Dashboard({ authUser, ...props }) {
    console.log(authUser)
    const [opportunities, setOpportunities] = useState()


    if (props.authenticated) {
        return (
            <div className='dashboard-box'>
                <h1>Welcome, {authUser.userName}!</h1>
            </div>
        )
    } else {
        return (
            <h1>Please log in</h1>
        )
    }

}




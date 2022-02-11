import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CheckSession } from './services/Auth';
import { Link, useNavigate, Redirect } from 'react-router-dom';
import { BASE_URL } from "./globals/index";
import './styles/dashboard.css'
import Client from './services/api';

export default function Dashboard({ authUser, ...props }) {
    console.log(authUser)
    const [opportunities, setOpportunities] = useState([])

    useEffect( () => {
        if (!props.authenticated || !authUser.userName) {
            console.log('not logged in')
            return
        }
        Client.get(`/api/opportunities?userName=${authUser.userName}`)
        .then(opportunities => {
            console.log(authUser.userName, opportunities)
            setOpportunities(opportunities.data)
        })
    }, [authUser, props.authenticated])

    console.log(opportunities)

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




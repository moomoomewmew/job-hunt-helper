import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CheckSession } from './services/Auth';
import { Link, useNavigate, Redirect } from 'react-router-dom';
import { BASE_URL } from "./globals/index";
import './styles/dashboard.css'
import Client from './services/api';
import Stage from './components/Stage';

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
                <h1 className='welcome'>Welcome, {authUser.userName}!</h1>
                <div className='dashboard-box-2'>
                <Stage name="Wishlist" opportunities={opportunities.filter(opp => opp.stage === 'wishlist')} onEdit={setOpportunities} />
                <Stage name="Applied" opportunities={opportunities.filter(opp => opp.stage === 'applied')} onEdit={setOpportunities} />
                <Stage name="Interview" opportunities={opportunities.filter(opp => opp.stage === 'interview')} onEdit={setOpportunities} />
                <Stage name="Offer" opportunities={opportunities.filter(opp => opp.stage === 'offer')} onEdit={setOpportunities} />
                <Stage name="Rejected" opportunities={opportunities.filter(opp => opp.stage === 'rejected')} onEdit={setOpportunities} />
                </div>
            </div>
        )
    } else {
        return (
            <h1>Please log in</h1>
        )
    }

}




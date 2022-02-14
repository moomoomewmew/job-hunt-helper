import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CheckSession } from './services/Auth';
import { Link, useNavigate, Redirect } from 'react-router-dom';
import { BASE_URL } from "./globals/index";
import './styles/dashboard.css'
import Client from './services/api';
import Stage from './components/Stage';
import Interview from './components/Interview';

export default function Dashboard({ authUser, ...props }) {
    const [opportunities, setOpportunities] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        if (!props.authenticated || !authUser.userName) {
            console.log('not logged in')
            return
        }
        Client.get(`/api/opportunities?userName=${authUser.userName}`)
            .then(opportunities => {
                setOpportunities(opportunities.data)
            })
    }, [authUser, props.authenticated])

    const navToAddOpp = () => {

    }

    const handleAddOpportunity = () => {
        navigate('/createopportunity')
    }

    if (props.authenticated) {
        return (
            <div>
                <div className='dashboard-box'>
                    <div className='welcome-and-add'>
                        <h1 className='welcome'>Welcome, {authUser.userName}!</h1>
                    </div>
                    <div className='dashboard-box-4'>
                        <h1>Your Opportunities:</h1>
                        <button className='add-opp-button' onClick={handleAddOpportunity}>+ add opportunity</button>
                    </div>
                    <div className='dashboard-box-2'>
                        <Stage name="Wishlist" opportunities={opportunities.filter(opp => opp.stage === 'wishlist')} onEdit={setOpportunities} />
                        <Stage name="Applied" opportunities={opportunities.filter(opp => opp.stage === 'applied')} onEdit={setOpportunities} />
                        <Stage name="Interview" opportunities={opportunities.filter(opp => opp.stage === 'interview')} onEdit={setOpportunities} />
                        <Stage name="Offer" opportunities={opportunities.filter(opp => opp.stage === 'offer')} onEdit={setOpportunities} />
                        <Stage name="Rejected" opportunities={opportunities.filter(opp => opp.stage === 'rejected')} onEdit={setOpportunities} />
                    </div>

                    <div className='dashboard-box-3'>
                        <h1 className='upcoming-interviews'>Upcoming Interviews:</h1>
                        <Interview />
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <h1>Please log in</h1>
        )
    }

}




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Client from '../services/api';

export default function Opportunity({opp}) {


    const navigate = useNavigate()

    return (
        <div >
            <button id={opp.id} className='opportunity-button' onClick={() => navigate(`/opportunity/${opp.id}/edit`)}>
            <h3>Job title: {opp.jobTitle}</h3>
            <h3>Company: {opp.company}</h3>
            </button>
        </div>
    )
}


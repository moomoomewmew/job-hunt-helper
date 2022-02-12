import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default function Opportunity(props) {

    const [opportunity, setOpportunity] = useState('')

    const editOpportunity = async (e) => {
        e.preventDefault()
        console.log(props.opp.id)
        const opportunityId = e.target.id;
        console.log(opportunityId)
        const res = await axios.get(`/api/opportunities/info/${props.opp.id}`)
        Navigate('/opportunityedit/:id')

    }
    // console.log(props)
    return (
        <div >
            <button id={props.opp.id} className='opportunity-button' onClick={editOpportunity}>
            <h3>Job title: {props.opp.jobTitle}</h3>
            <h3>Company: {props.opp.company}</h3>
            </button>
        </div>
    )
}


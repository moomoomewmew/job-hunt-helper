import React from 'react';

export default function Opportunity(props) {
    // console.log(props)
    return (
        <div>
            <h3>Job title: {props.opp.jobTitle}</h3>
            <h3>Company: {props.opp.company}</h3>
        </div>
    )
}

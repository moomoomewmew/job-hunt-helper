import React from 'react';
import Opportunity from './Opportunity';
import '../styles/stage.css'

export default function Stage(props) {
console.log(props)
    return (
        <div className='stage-box'>
            <h1 className='stage-title'>{props.name}</h1>
            <div>{props.opportunities.map(opp => <Opportunity opp={opp} key={opp.id}/>)}</div>
        </div>
    )
}

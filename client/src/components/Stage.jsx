import React from 'react';
import Opportunity from './Opportunity';

export default function Stage(props) {
console.log(props)
    return (
        <div>
            <h1>{props.name}</h1>
            <div>{props.opportunities.map(opp => <Opportunity opp={opp} key={opp.id}/>)}</div>
        </div>
    )
}

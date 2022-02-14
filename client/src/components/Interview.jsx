import React from 'react'
import Client from '../services/api'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Interview(authUser, ...props) {

    const [interviews, setInterviews] = useState([])


    useEffect(() => {
        Client.get(`/api/interviews`)
            .then(interviews => {
                setInterviews(interviews.data)
            })
    }, [authUser, props.authenticated])

    console.log(interviews)

    return (
        <div className="display-interview-box">
            {interviews && interviews.map((interview) => (
                <div key={interview.id} className='individual-interview'>
                    <p>Interviewer: {interview.interviewer}</p>
                    <p>Time: {interview.time}</p>
                    <p> Date: {interview.date}</p>
                    <p>Meeting Link:{interview.meetingLink}</p>
                    <p>Location: {interview.location}</p>
                    <p>Notes: {interview.notes}</p>

                    <Link to={(`/interviews/${interview.id}`)} className="details-link">Details</Link>
                </div>
            ))}
        </div>
    )
}

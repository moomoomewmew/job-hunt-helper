import React from 'react'
import '../styles/displayinterviews.css'
import Client from '../services/api'
import { useEffect, useState } from 'react'

export default function DisplayInterviews(authUser, ...props) {

    const [interviews, setInterviews] = useState([])
    // const navigate = useNavigate()

    useEffect(() => {
        if (!props.authenticated || !authUser.userName) {
            console.log('not logged in')
            return
        }
        Client.get(`/api/interviews?userName=${authUser.userName}`)
            .then(interviews => {
                console.log(authUser.userName, interviews)
                setInterviews(interviews.data)
            })
    }, [authUser, props.authenticated])

    return (
        <div className="display-interview-box">
            hi!!
        </div>
    )
}

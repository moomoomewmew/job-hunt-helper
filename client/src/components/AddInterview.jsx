import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import '../styles/edit.css'
import Client from '../services/api'


export default function AddInterview(props) {
    const navigate = useNavigate()

    const [interview, setInterview] = useState({
        time: '',
        date: '',
        meetingLink: '',
        interviewer: '',
        location: '',
        notes: ''
    })

    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await Client.post(`/api/interviews`,
            {
                time: document.getElementById('time').value,
                date: document.getElementById('date').value,
                meetingLink: document.getElementById('meetingLink').value,
                interviewer: document.getElementById('interviewer').value,
                location: document.getElementById('location').value,
                notes: document.getElementById('notes').value
            }).then(() => {
                alert('Your interview has successfully been added!')
                navigate('/dashboard')
            })
    }

    return (
        <div className="form">
            <h1 className='position-at-company'>Add a new interview</h1>
            <form onSubmit={handleSubmit}>
                <div className='input-container'>
                    <div className='row-1'>
                        <div className="label-input-box">
                            <label htmlFor="time">Time</label>
                            <input
                                className='edit-input'
                                type="text"
                                defaultValue={interview.time}
                                placeholder="Time"
                                name="time"
                                id='time'
                            />
                        </div>
                        <div className="label-input-box">
                            <label>Date</label>
                            <input
                                className='edit-input'
                                type="text"
                                defaultValue={interview.date}
                                placeholder="Date"
                                name="date"
                                id="date"
                            />
                        </div>
                        <div className="label-input-box">
                            <label htmlFor="meetingLink">Meeting Link</label>
                            <input
                                className='edit-input'
                                type="text"
                                defaultValue={interview.meetingLink}
                                placeholder="Meeting Link"
                                name="meetingLink"
                                id='meetingLink'
                            />
                        </div>
                     
                    </div>
                    <div className='row-2'>
                           <div className="label-input-box">
                            <label htmlFor='interviewer'>Interviews</label>
                            <input
                                className='edit-input'
                                type="text"
                                defaultValue={interview.interviewer}
                                placeholder="Interviewer"
                                name="interviewer"
                                id='interviewer'
                            />
                        </div>
                        <div className="label-input-box">
                            <label>Location</label>
                            <input
                                className='edit-input'
                                type="text"
                                defaultValue={interview.location}
                                placeholder="Location"
                                name="location"
                                id='location'
                            />
                        </div>
                    </div>
                </div>
                <div className='notes-and-buttons'>
                    <div className='notes-label-interview'>
                        <label htmlFor="notes">Notes</label>
                    </div>
                    <input
                        className='note-input'
                        type="text"
                        defaultValue={interview.notes}
                        placeholder='Notes'
                        name="notes"
                        id='notes'
                    />
                    <div className='button-box'>
                        <div className='update-and-delete-buttons'>
                            <button className='these-buttons' type="submit" >Save</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}



import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import '../styles/edit.css'
import Client from '../services/api'


export default function CreateOpportunity(props) {
    console.log(props)
    const navigate = useNavigate()

    const [opportunity, setOpportunity] = useState({
        jobTitle: '',
        stage: '',
        company: '',
        payRange: '',
        location: '',
        pointOfContact: '',
        phoneNumber: '',
        jobPostURL: '',
        companyURL: '',
        dateApplied: '',
    })


    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await Client.post(`/api/opportunities`,
            {
                userId: props.user.id,
                jobTitle: document.getElementById('jobTitle').value,
                stage: document.getElementById('stage').value,
                company: document.getElementById('company').value,
                payRange: document.getElementById('payRange').value,
                location: document.getElementById('location').value,
                pointOfContact: document.getElementById('pointOfContact').value,
                phoneNumber: document.getElementById('phoneNumber').value,
                jobPostURL: document.getElementById('jobPostURL').value,
                companyURL: document.getElementById('companyURL').value,
                dateApplied: document.getElementById('dateApplied').value,
                // notes
            }).then(() => {
                alert('Your opportunity has successfully been added!')
                navigate('/dashboard')
            })
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className='input-container'>
                    <div className='row-1'>
                        <div className="label-input-box">
                            <label htmlFor="jobTitle">Job Title</label>
                            <input
                                className='edit-input'
                                type="text"
                                defaultValue={opportunity.jobTitle}
                                name="jobTitle"
                                id='jobTitle'
                            />
                        </div>
                        <div className="label-input-box">
                            <label htmlFor="company">Company</label>
                            <input
                                className='edit-input'
                                type="text"
                                defaultValue={opportunity.company}
                                name="company"
                                id='company'
                            />
                        </div>
                        <div className="label-input-box">
                            <label htmlFor='payRange'>Pay Range</label>
                            <input
                                className='edit-input'
                                type="text"
                                defaultValue={opportunity.payRange}
                                name="payRange"
                                id='payRange'
                            />
                        </div>
                    </div>
                    <div className='row-2'>
                        <div className="label-input-box">
                            <label>Location</label>
                            <input
                                className='edit-input'
                                type="text"
                                defaultValue={opportunity.location}
                                name="location"
                                id='location'
                            />
                        </div>
                        <div className="label-input-box">
                            <label>Point Of Contact</label>
                            <input
                                className='edit-input'
                                type="text"
                                defaultValue={opportunity.pointOfContact}
                                name="pointOfContact"
                                id="pointOfContact"
                            />
                        </div>
                        <div className="label-input-box">
                            <label>Phone Number</label>
                            <input
                                className='edit-input'
                                type="text"
                                defaultValue={opportunity.phoneNumber}
                                name="phoneNumber"
                                id="phoneNumber"
                            />
                        </div>
                    </div>
                    <div className='row-3'>
                        <div className="label-input-box">
                            <label>Job Post URL</label>
                            <input
                                className='edit-input'
                                type="text"
                                defaultValue={opportunity.jobPostURL}
                                name="jobPostURL"
                                id='jobPostURL'
                            />
                        </div>
                        <div className="label-input-box">
                            <label>Company URL</label>
                            <input
                                className='edit-input'
                                type="text"
                                defaultValue={opportunity.companyURL}
                                name="companyURL"
                                id="companyURL"
                            />
                        </div>
                        <div className="label-input-box">
                            <label>Date Applied</label>
                            <input
                                className='edit-input'
                                type="text"
                                defaultValue={opportunity.dateApplied}
                                name="dateApplied"
                                id="dateApplied"
                            />
                        </div>
                        
                    </div>
                </div>
                <div className='notes-and-buttons'>
                    <div className='notes-label'>
                        <label htmlFor="notes">Notes</label>
                    </div>
                    <input
                        className='note-input'
                        type="text"
                        defaultValue={opportunity.notes}
                        placeholder='Notes'
                        name="notes"
                        id='notes'
                    />
                    <div className='button-box'>
                        <div className="stage-label-and-dropdown">
                            <label htmlFor="stage">Stage
                                <select
                                    className='edit-input'
                                    name="stage"
                                    id="stage"
                                    onChange={(e) => {
                                        console.log('onChange')
                                        const stage = e.target.value;
                                        const updated = { ...opportunity, stage }
                                        console.log(updated, e.target)
                                        setOpportunity(opportunity)
                                    }}
                                >
                                    <option value="-">-</option>
                                    <option value="wishlist">wishlist</option>
                                    <option value="applied">applied</option>
                                    <option value="interview">interview</option>
                                    <option value="offer">offer</option>
                                    <option value="rejected">rejected</option>
                                </select>
                            </label>
                        </div>
                    </div>
                </div>
            </form>
            <button className='these-buttons' type="submit" >Add Opportunity</button>

        </div>
    )
}



import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import '../styles/edit.css'
import Client from '../services/api'


export default function OpportunityEdit() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [opportunity, setOpportunity] = useState({
        // jobTitle: '',
        // stage: '',
        // company: '',
        // payRange: '',
        // location: '',
        // pointOfContact: '',
        // phoneNumber: '',
        // jobPostURL: '',
        // companyURL: '',
        // dateApplied: '',
        // notes: ''
    })

    useEffect(() => {
        const getOpportunity = async () => {
            await Client.get(`/api/opportunities/${id}`)
                .then((res) => {
                    console.log(res.data)
                    setOpportunity(res.data)
                })
        }
        getOpportunity()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await Client.put(`/api/opportunities/${id}`,
            {
                jobTitle: e.target.jobTitle.value,
                stage: e.target.stage.value,
                company: e.target.company.value,
                payRange: e.target.payRange.value,
                location: e.target.location.value,
                pointOfContact: e.target.jobTitle.value,
                phoneNumber: e.target.phoneNumber.value,
                jobPostURL: e.target.jobPostURL.value,
                companyURL: e.target.companyURL.value,
                dateApplied: e.target.dateApplied.value,
                // notes
            }).then(() => {
                alert('Your opportunity has successfully been recorded!')
            })
    }

    const deleteOpportunity = async (e) => {
        const res = await Client.delete(`/api/opportunities/${id}`)   
    }

    const handleDelete = async (e) => {
        e.preventDefault()
        const payload = await deleteOpportunity()
        // if (confirm('Are you sure you want to delete this opportunity?') === true) {
        //     deleteOpportunity()
        // } else {
        //     navigate('/dashboard')
        // } 
        
    }   

    return (
        <div className="form">
            <h1 className='position-at-company'>{opportunity.jobTitle} at {opportunity.company}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <div className='row-1'>
                        <div classname="label-input-box">
                        <label for="jobTitle">Job Title</label>
                        <input
                            className='edit-input'
                            type="text"
                            defaultValue={opportunity.jobTitle}
                            name="jobTitle"
                        />
                        </div>
                        <div classname="label-input-box">
                        <label for="company">Company</label>
                        <input
                            className='edit-input'
                            type="text"
                            defaultValue={opportunity.company}
                            name="company"
                        />
                        </div>
                        <div classname="label-input-box">
                        <label for='payRange'>Pay Range</label>
                        <input
                            className='edit-input'
                            type="text"
                            defaultValue={opportunity.payRange}
                            placeholder="Pay Range"
                            name="payRange"
                        />
                        </div>
                        <div classname="label-input-box">
                        <label for="stage">Stage</label>
                        <select
                            className='edit-input'
                            defaultValue={opportunity.stage}
                            name="stage"
                        >
                            <option value="-">-</option>
                            <option value="wishlist">wishlist</option>
                            <option value="applied">applied</option>
                            <option value="interview">interview</option>
                            <option value="offer">offer</option>
                            <option value="rejected">rejected</option>
                        </select>
                        </div>
                    </div>
                    <div className='row-2'>
                        <div classname="label-input-box">
                        <label>Location</label>
                        <input
                            className='edit-input'
                            type="text"
                            defaultValue={opportunity.location}
                            placeholder="Location"
                            name="location"
                        />
                        </div>
                        <div classname="label-input-box">
                        <label>Point Of Contact</label>
                        <input
                            className='edit-input'
                            type="text"
                            defaultValue={opportunity.pointOfContact}
                            placeholder="Point Of Contact"
                            name="point-of-contact"
                        />
                        </div>
                        <div classname="label-input-box">
                        <label>Phone Number</label>
                        <input
                            className='edit-input'
                            type="text"
                            defaultValue={opportunity.phoneNumber}
                            placeholder="Phone Number"
                            name="phone-number"
                        />
                        </div>
                    </div>
                    <div className='row-3'>
                        <div classname="label-input-box">
                        <label>Job Post URL</label>
                        <input
                            className='edit-input'
                            type="text"
                            defaultValue={opportunity.jobPostURL}
                            placeholder="Job Post URL"
                            name="job-post-url"
                        />
                        </div>
                        <div classname="label-input-box">
                        <label>Company URL</label>
                        <input
                            className='edit-input'
                            type="text"
                            defaultValue={opportunity.companyURL}
                            name="company-url"
                        />
                        </div>
                        <div classname="label-input-box">
                        <label>Date Applied</label>
                        <input
                            className='edit-input'
                            type="text"
                            defaultValue={opportunity.dateApplied}
                            name="date-applied"
                        />
                        </div>
                    </div>
                </div>
                <input
                    className='note-input'
                    type="text"
                    defaultValue={opportunity.notes}
                    placeholder='Notes'
                    name="notes"
                />
                <button type="submit" >Update Opportunity</button>
                <button onClick={handleDelete}>Delete Opportunity</button>

            </form>
        </div>
    )
}



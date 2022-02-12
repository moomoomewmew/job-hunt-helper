import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function OpportunityEdit(props) {

    const [jobTitle, setJobTitle] = useState('')
    const [stage, setStage] = useState('')
    const [company, setCompany] = useState('')
    const [payRange, setPayRange] = useState('')
    const [location, setLocation] = useState("")
    const [pointOfContact, setPointOfContact] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [jobPostURL, setJobPostURL] = useState('')
    const [companyURL, setCompanyURL] = useState('')
    const [dateApplied, setDateApplied] = useState('')
    const [notes, setNotes] = useState('')

    const saveJobTitle = (e) => {
        setJobTitle(e.target.value)
    }
    const saveStage = (e) => {
        setStage(e.target.value)
    }
    const saveCompany = (e) => {
        setCompany(e.target.value)
    }
    const savePayRange = (e) => {
        setPayRange(e.target.value)
    }
    const saveLocation = (e) => {
        setLocation(e.target.value)
    }
    const savePointOfContact = (e) => {
        setPointOfContact(e.target.value)
    }
    const savePhoneNumber = (e) => {
        setPhoneNumber(e.target.value)
    }
    const saveJobPostURL = (e) => {
        setJobPostURL(e.target.value)
    }
    const saveCompanyURL = (e) => {
        setCompanyURL(e.target.value)
    }
    const saveDateApplied = (e) => {
        setDateApplied(e.target.value)
    }
    const saveNotes = (e) => {
        setNotes(e.target.value)
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.put(`/api/opportunity/${props.opp.id}`,
            {
                jobTitle,
                stage
            }).then(() => {
                alert('Your opportunity has successfully been recorded!')
            })
    }

    // if (Object.keys(props.opp).length === 0) {
    //     return (<div>did not select a ride to edit!</div>)
    // }

    return (
        <div className="form">
            <h1>Opportunity at { }</h1>
            <form onSubmit={handleSubmit}>
                <div className='row-1'>
                    <input
                        type="text"
                        value={jobTitle}
                        placeholder="Job Title"
                        id="job-title"
                        onChange={saveJobTitle}
                    />
                    <input
                        type="text"
                        value={company}
                        placeholder="Company"
                        id="company"
                        onChange={saveCompany}
                    />
                    <input
                        type="text"
                        value={payRange}
                        placeholder="Pay Range"
                        id="pay-range"
                        onChange={savePayRange}
                    />
                    <select
                        value={stage}
                        name="stage"
                        id="stage"
                        onChange={saveStage}>
                        <option value="-">-</option>
                        <option value="wishlist">wishlist</option>
                        <option value="applied">applied</option>
                        <option value="interview">interview</option>
                        <option value="offer">offer</option>
                        <option value="rejected">rejected</option>
                    </select>
                </div>
                <div className='row-2'>
                <input
                    type="text"
                    value={location}
                    placeholder="Location"
                    id="location"
                    onChange={saveLocation}
                />
                <input
                    type="text"
                    value={pointOfContact}
                    placeholder="Point Of Contact"
                    id="point-of-contact"
                    onChange={savePointOfContact}
                />
                <input
                    type="text"
                    value={phoneNumber}
                    placeholder="Phone Number"
                    id="phone-number"
                    onChange={savePhoneNumber}
                />
                </div>
                <div className='row-3'>
                <input
                    type="text"
                    value={jobPostURL}
                    placeholder="Job Post URL"
                    id="job-post-url"
                    onChange={saveJobPostURL}
                />
                <input
                    type="text"
                    value={companyURL}
                    placeholder="Company URL"
                    id="company-url"
                    onChange={saveCompanyURL}
                />
                <input
                    type="text"
                    value={dateApplied}
                    placeholder="Date Applied"
                    id="date-applied"
                    onChange={saveDateApplied}
                />
                </div>
                <input
                    type="text"
                    value={notes}
                    placeholder="Notes"
                    id="notes"
                    onChange={saveNotes}
                />

                <button type="submit" >Update Opportunity</button>
                <p>{alert}</p>
            </form>
        </div>
    )
}



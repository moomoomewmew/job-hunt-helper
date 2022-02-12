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
                <input
                    type="text"
                    value={jobTitle}
                    placeholder="Job Title"
                    id="jobtitle"
                    onChange={saveJobTitle}
                />
                <input
                    type="text"
                    value={stage}
                    placeholder="Stage"
                    id="stage"
                    onChange={saveStage}
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
                    value={stage}
                    placeholder="Stage"
                    id="stage"
                    onChange={saveStage}
                />
                <input
                    type="text"
                    value={stage}
                    placeholder="Stage"
                    id="stage"
                    onChange={saveStage}
                />
                <input
                    type="text"
                    value={stage}
                    placeholder="Stage"
                    id="stage"
                    onChange={saveStage}
                />
                <input
                    type="text"
                    value={stage}
                    placeholder="Stage"
                    id="stage"
                    onChange={saveStage}
                />
                <input
                    type="text"
                    value={stage}
                    placeholder="Stage"
                    id="stage"
                    onChange={saveStage}
                />
                <input
                    type="text"
                    value={stage}
                    placeholder="Stage"
                    id="stage"
                    onChange={saveStage}
                />
                <input
                    type="text"
                    value={stage}
                    placeholder="Stage"
                    id="stage"
                    onChange={saveStage}
                />
                <input
                    type="text"
                    value={stage}
                    placeholder="Stage"
                    id="stage"
                    onChange={saveStage}
                />

                <button type="submit" >Update Opportunity</button>
                <p>{alert}</p>
            </form>
        </div>
    )
}



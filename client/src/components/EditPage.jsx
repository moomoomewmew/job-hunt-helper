import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const EditPage = (props) => {

    console.log(props)
    const ride = props.ride;

    const [title, setTitle] = useState(ride.title)
    const [location, setLocation] = useState(ride.location)
    const [description, setDescription] = useState(ride.description)
    const [pace, setPace] = useState(ride.pace)
    const [alert, setAlert] = useState("")
    const [who, setWho] = useState(ride.who)
    const [when, setWhen] = useState(ride.when)

    const saveTitle = (e) => {
        setTitle(e.target.value)
    }

    const saveLocation = (e) => {
        setLocation(e.target.value)
    }

    const saveDescription = (e) => {
        setDescription(e.target.value)
    }

    const savePace = (e) => {
        setPace(e.target.value)
    }

    const saveWho = (e) => {
        setWho(e.target.value)
    }

    const saveWhen = (e) => {
        setWhen(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.put(`/api/v1/rides/${ride._id}`,
            {
                title,
                description,
                who,
                location,
                pace,
                when
            }).then(() => {
                alert('Your ride has successfully been submitted!')
            })
    }

    if (Object.keys(ride).length === 0) {
        return (<div>did not select a ride to edit!</div>)
    }

    return (
        <div className="form">
            <h1>Update Ride</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    placeholder="Give your ride a name."
                    id="title"
                    onChange={saveTitle}
                />
                <label htmlFor="Ride Name">Give your ride a name.</label>

                <input
                    type="text"
                    value={description}
                    placeholder="Describe your ride."
                    id="description"
                    onChange={saveDescription}
                />
                <label htmlFor="description">Description</label>

                <input
                    type="text"
                    value={who}
                    placeholder="Who is this ride for?"
                    id="who"
                    onChange={saveWho}
                />
                <label htmlFor="who">Who should join?</label>

                <div className="dropdowns">
                    <h5 htmlFor="city">City:</h5>
                    <select
                        value={location}
                        name="location"
                        id="location"
                        onChange={saveLocation}>
                        <option value="NYC">NYC</option>
                        <option value="ATL">ATL</option>
                        <option value="LA">LA</option>
                    </select>

                    <h5 htmlFor="pace">Pace:</h5>
                    <select
                        value={pace}
                        name="pace"
                        id="pace"
                        placeholder="pace"
                        onChange={savePace}>
                        <option value="party-pace">party pace</option>
                        <option value="medium-pace">medium pace</option>
                        <option value="race-pace">race pace</option>
                    </select>

                </div>
                <label htmlFor="start">Start date:</label>

                <input
                    type="date"
                    id="start"
                    name="trip-start"
                    value="2021-12-23"
                    min="2021-01-01"
                    max="2024-12-31"
                    onChange={saveWhen}>
                </input>

                <button type="submit" >Update Ride</button>
                <p>{alert}</p>
            </form>
        </div>
    )
}

export default EditPage

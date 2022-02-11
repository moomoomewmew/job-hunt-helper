import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CheckSession } from './services/Auth';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from "./globals/index";
import './styles/dashboard.css'

export default function Dashboard({ authUser, ...props }) {
    console.log(authUser)

    // const navigate = useNavigate()
    // let userId = authUser.id
    // let userDetailsArray = [];

    // const [userDetails, setUserDetails] = useState(userDetailsArray);

    // const getUserDetails = async (user) => {
    //     const response = await axios.get(`${BASE_URL}/users/info/${authUser.id}`);
    //     setUserDetails(response.data);

    // };

    // useEffect(() => {
    //     CheckSession()
    //     getUserDetails();
    // }, []);

console.log(props)
    return (
        <div className='dashboard-box'>
            <h1>hi!</h1>
        </div>
    )

}




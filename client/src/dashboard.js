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

    // useEffect(() => {
    //     CheckSession()
    //     getUserDetails();
    // }, []);

console.log(props)
    return (
        <div className='dashboard-box'>
            <h1>Welcome, {authUser.userName}!</h1>
        </div>
    )

}




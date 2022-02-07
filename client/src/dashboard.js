import React from 'react'
import CreateAccount from './components/CreateAccount'

export default function Dashboard(props) {
    console.log('hello dashboard')
    console.log(props)

    const user = props.user;

    if (user) {
        return (
            <div>
                <h3>Hello, {user.username} in {user.location}!</h3>

            </div>
        )
    } else {
        return (
            <div>

            </div>
        )
    }
}

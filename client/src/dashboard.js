import React from 'react'
import CreateAccount from './components/CreateAccount'

export default function Dashboard(props) {
    console.log('hello dashboard')
    console.log(props)

    const user = 'Rodney'
    // props.user;


    // if (user) {
        return (
            <div>
                {/* <h3>Hello, {user.username}!</h3> */}
                <h3>Hello, {user} !</h3>


            </div>
        )
    // } else {
    //     return (
    //         <div>
    //             <h1>please log in</h1>
    //         </div>
    //     )
    // }
}


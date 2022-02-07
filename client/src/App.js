import React, { useState } from 'react'
import './styles/App.css'
import { Routes, Route } from 'react-router-dom'


function App() {

  const [user, setUser] = useState(null)
  const [isLoggedIn, toggleLogin] = useState(false)
  const [ride, setRide] = useState({})

  return (
    <div className="App">
      <header className="App-header">
        <h1>Job Hunt Helper</h1>
        <div className="info"><h3>Manage your hunt!</h3></div>
        <Navbar isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} setUser={setUser} />

      </header>
      <Routes>
        <Route path='/' element={<LandingPage setRide={setRide} user={user} />} />
        <Route path='/dashboard' element={<Dashboard setRide={setRide} user={user} />} />
        <Route path='/newaccount' element={<CreateAccount isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} setUser={setUser} user={user} />} />
        <Route path='/login' element={<Login isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} setUser={setUser} />} />
        <Route path='/edit' element={<EditPage ride={ride} />} />
      </Routes>
    </div>
  )
}

export default App;

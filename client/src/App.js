import React, { useState } from 'react'
import './styles/App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingPage from './LandingPage'
import Dashboard from './dashboard'
import CreateAccount from './components/CreateAccount'
import Login from './components/Login'
import EditPage from './components/EditPage'



function App() {

  const [user, setUser] = useState(null)
  const [isLoggedIn, toggleLogin] = useState(false)
  const [ride, setRide] = useState({})

  return (
    <div className="App">
      <header className="App-header">
        <Navbar isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} setUser={setUser} />

      </header>
        <Routes>
          <Route path='/dashboard' element={<Dashboard setRide={setRide} user={user} />} />
          <Route path='/newaccount' element={<CreateAccount isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} setUser={setUser} user={user} />} />
          <Route path='/login' element={<Login isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} setUser={setUser} />} />
          <Route path='/edit' element={<EditPage ride={ride} />} />
          <Route exact path='/' element={<LandingPage setRide={setRide} user={user} />} />
        </Routes>
    </div>
  )
}

export default App;

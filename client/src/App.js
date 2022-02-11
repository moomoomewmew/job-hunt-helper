import { useEffect, useState } from 'react';
import './styles/App.css';
import Register from './components/CreateAccount';
import { Routes, Route } from 'react-router-dom';
import { CheckSession } from './services/Auth';
import axios from 'axios';
import { BASE_URL } from './globals/index';
import Navbar from './components/Navbar'
import Landingpage from './LandingPage'
import LogIn from './components/Login';
import Dashboard from './dashboard';

function App() {
  const [authenticated, toggleAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [authUser, setAuthUser] = useState({});
  const [loading, setLoading] = useState(true);

  const checkToken = async () => {
    const user = await CheckSession();
    setUser(user);
    toggleAuthenticated(true);
  };
  const getAuthUser = async () => {
    const id = localStorage.getItem('id');
    axios.get(`${BASE_URL}/users/${id}`).then((res) => {
      setAuthUser(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      checkToken();
      getAuthUser();
    }
  }, []);

  const handleLogOut = () => {
    setUser(null);
    toggleAuthenticated(false);
    localStorage.clear();
  };
  // if (loading) {
  //   return <div> loading...</div>;
  // }
  return (
    <div className="App">
      <Navbar
        user={authUser}
        authenticated={authenticated}
        handleLogOut={handleLogOut}
      />

      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route
          path="/login"
          element={
            <LogIn
              setAuthUser={setAuthUser}
              authUser={authUser}
              toggleAuthenticated={toggleAuthenticated}
              authenticated={authenticated}
            />
          }
        />
        <Route path="/newaccount" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              authUser={authUser}
              checkToken={checkToken}
              setUser={setUser}
            />
          }
        />
      </Routes>
    </div>
  );
}
export default App;

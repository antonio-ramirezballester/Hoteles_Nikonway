import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from '../context/user/UserContext';
import { Button } from '@mui/material';
import './Header.css'


const Header = () => {

  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const logout = () => {
    // Init context
    setUser({
      id: null,
      name: null,
      surnames: null,
      email: null,
      phone: null,
      token: null,
      rol: null,
      language: "en"
    });
    // Remove local storage data
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <header>
      <h1>Hotels Nikonway</h1>

      {user.name ?
        <nav className='login'>
          <div className='hotels'>
            <select name="Hotels" id="hotels" >
              {/* Pasarlo a dinámico */}
              <option value="Alcudia">Alcudia</option>
              <option value="Inca">Inca</option>
              <option value="Palma">Palma</option>
            </select>
          </div>
          <div className='profile'>
            <Button href="#" onClick={() => { logout() }} variant="contained">Logout</Button>
            {/* <a href="#" onClick={() => { logout() }}>Logout</a> */}
            <span>{`${user.name} ${user.surname}` }</span>
          </div>
        </nav>
        :
        <nav>
          <Link to="/registration">Create Account</Link> |
          <Link to="/login">Login</Link>
        </nav>
      }

    </header >
  )
}

export default Header
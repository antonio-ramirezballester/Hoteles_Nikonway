import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from '../../context/user/UserContext';
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
      <h1><Link to="/" className='h1Header'>Hotels Nikonway</Link></h1>
      {user.rol === "ADMIN" && 
      <div className='manages'>
        <Link to="/ManageHotelsPage"><Button variant="contained" style={{backgroundColor:'var(--naranja)', color:'var(--negro)'}}>Manage hotels</Button></Link>
        <Link to="/ManageRoomsPage"><Button variant="contained" style={{backgroundColor:'var(--naranja)', color:'var(--negro)'}}>Manage Rooms</Button></Link>
        <Link to="/ManageEmployeesPage"><Button variant="contained" style={{backgroundColor:'var(--naranja)', color:'var(--negro)'}}>Manage Employees</Button></Link>
      </div>
      

      }

      {user.name ?
        <nav className='login'>
          <div className='profile'>
            <Button href="#" onClick={() => { logout() }} variant="contained" style={{backgroundColor:'var(--naranja)', color:'var(--negro)'}}>Logout</Button>
            <span style={{color:'var(--naranja)'}}>{`${user.name} ${user.surname}`}</span>
          </div>
        </nav>
        :
        <nav className='notlogin'>
          <Link to="/registration"><Button variant="contained" style={{backgroundColor:'var(--naranja)', color:'var(--negro)'}}>Create Account</Button></Link>
          <span><Link to="/login"><Button variant="contained" style={{backgroundColor:'var(--naranja)', color:'var(--negro)'}}>Login</Button></Link></span>
        </nav>
      }

    </header >
  )
}

export default Header
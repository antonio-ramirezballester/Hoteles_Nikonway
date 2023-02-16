import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from '../context/user/UserContext';
import { Button } from '@mui/material';
import './Header.css'

const useStyles = makeStyles({
  customButton: {
    backgroundColor: 'var(--naranja)',
    color: 'var(--negro)',
    '&:hover': {
      backgroundColor: '#CC0000',
    },
  },
});

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
          <div className='profile'>
            <Button href="#" onClick={() => { logout() }} variant="contained" className={classes.customButton}>Logout</Button>
            {/* <a href="#" onClick={() => { logout() }}>Logout</a> */}
            <span style={{color:'var(--naranja)'}}>{`${user.name} ${user.surname}` }</span>
          </div>
        </nav>
        :
        <nav className='notlogin'>
          <Link to="/registration"><Button variant="contained" className={classes.customButton}>Create Account</Button></Link>
          <span><Link to="/login"><Button variant="contained" style={{backgroundColor:'var(--naranja)', color:'var(--negro)'}}>Login</Button></Link></span>
        </nav>
      }

    </header >
  )
}

export default Header
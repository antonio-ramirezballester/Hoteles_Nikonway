import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from '../context/user/UserContext';


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
      <h1>Título</h1>
      {user.name ?
        <nav>
          <div className='profile'>
            <a href="#" onClick={() => { logout() }}>Logout</a>
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
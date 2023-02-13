import React, { useContext, useEffect, useState } from 'react'
import UserContext from "../context/user/UserContext";
import { useNavigate } from "react-router-dom";
const WelcomePage = () => {

  const { user } = useContext(UserContext);
  const [welcomeInfo, setWelcomeInfo] = useState(null)
  const navigate = useNavigate();

  const getWelcomeInfo = async (token) => {
    const options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': token //esto protege la página
      },
    };
    console.log(options);

    try {
      const response = await fetch('http://localhost:4001/welcome', options);
      const data = await response.json();
      setWelcomeInfo(data.message);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!user.name) {
      navigate("/error/1");
    } else {
      getWelcomeInfo(user.token);
    }
  }, []);

  return (
    <>
      <div>WelcomePage  {user.name}</div>
      <div>
        <h2>Private Info</h2>
        <p>{welcomeInfo}</p>
      </div>
    </>

  )
}

export default WelcomePage
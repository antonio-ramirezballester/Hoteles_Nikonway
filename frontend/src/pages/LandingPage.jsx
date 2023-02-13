import React, { useContext, useEffect, useState } from 'react'
import UserContext from "../context/user/UserContext";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {

  const { user } = useContext(UserContext);
  const [landingInfo, setLandingInfo] = useState(null)
  const navigate = useNavigate();

  const getLandingInfo = async (token) => {
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
      const response = await fetch('http://localhost:4001/landing', options);
      const data = await response.json();
      setLandingInfo(data.message);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!user.name) {
      navigate("/error/1");
    } else {
      getLandingInfo(user.token);
    }
  }, []);

  return (
    <>
      <div>LandingPage  {user.name}</div>
      <div>
        <h2>Private Info</h2>
        <p>{landingInfo}</p>
      </div>
    </>

  )
}

export default LandingPage
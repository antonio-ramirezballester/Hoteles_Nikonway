import React, { useContext, useEffect, useState } from 'react'
import UserContext from "../context/user/UserContext";
import { useNavigate } from "react-router-dom";
import ListHotels from '../components/hotels/ListHotels';
import HotelService from '../services/HotelService'
import './LeadingPage.css'
const LandingPage = () => {

  const { user } = useContext(UserContext);
  const [landingInfo, setLandingInfo] = useState(null)
  const navigate = useNavigate();
  const [hotels, setHotels] = useState([])

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

  useEffect(() => {
    HotelService.getHotels().then(data => setHotels(data));
  }, []);

  return (
    <>
      <section className='welcome'>
        <h1 id="salute">¡Welcome to Nikonway Hotels!</h1>
        <p>Discover the Mediterranean paradise at our hotel in Mallorca, where luxury and comfort merge to offer you an unforgettable seaside vacation experience.</p>
      </section>
      <main>
        <ListHotels hotels={hotels}/>
      </main>
    </>

  )
}

export default LandingPage
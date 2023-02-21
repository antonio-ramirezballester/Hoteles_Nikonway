import React, { useContext, useEffect, useState } from 'react'
import HotelService from '../../services/HotelService'
import UserContext from "../../context/user/UserContext";
import { useNavigate } from "react-router-dom";
import './FormHotels.css'

const FormHotels = () => {

  const { user } = useContext(UserContext);
  const [landingInfo, setLandingInfo] = useState(null)
  const navigate = useNavigate();
  const [hotels, setHotels] = useState([])

  useEffect(() => {
    HotelService.getHotels().then(data => setHotels(data));
  }, []);

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
      <h1>HOTELS</h1>
    {
        hotels.map(hotel => 
            <article className='hotels' key={hotel.id}>
                <p>ID: {hotel.id}</p>
                <p>NAME: {hotel.name}</p>
                <p>LOCALIZATION: {hotel.localization}</p>
                <p>PHONE_NUMBER: {hotel.phone_number}</p>
                <p>EMAIL: {hotel.email}</p>
            </article>
        )   
    }
    </>
  )
}

export default FormHotels
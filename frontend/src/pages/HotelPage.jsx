import React, { useContext, useEffect, useState } from 'react'
import UserContext from "../context/user/UserContext";
import { useNavigate } from 'react-router-dom'
import { URL_API_HOTELS } from '../constants/http_constants.js';
import { Button } from '@mui/material';
import './HotelPage.css'

const HotelPage = () => {

    const { user } = useContext(UserContext);
    const [landingInfo, setLandingInfo] = useState(null)
    const navigate = useNavigate();
    // Coger el numero del hotel desde la url
    const url = new URL(window.location.href);
    const numero = url.pathname.split("/")[2];
    console.log("Numero hotel: "+numero);
    const [hotel, setHotel] = useState(null)
    const inicio = useNavigate();

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
          setTimeout(function() {
            navigate("/");
          }, 10000);
        } else {
          getLandingInfo(user.token);
        }
      }, []);

        const getHotel = async() => {
            try {
                const res= await fetch(URL_API_HOTELS);
                const data = await res.json();
                console.log(data);
                const hotelData= data.find(hotel=>hotel.id==numero);
                setHotel(hotelData);
                
                
            } catch (error) {
                console.log(error);
            }
        }

        useEffect(
            ()=>{
                getHotel();
            },[]
        )

  return (
    <main>
        {/* Si existe hotel, lo pinta, sino no */}
        {
            hotel &&
            <>
              <article className='hotelInfo' key={hotel.id}>
                <h2>{hotel.name}</h2>
                <p><span className='locPhoEma'>Localization:</span> {hotel.localization} <span className='locPhoEma'>Phone_number:</span> {hotel.phone_number} <span className='locPhoEma'>Email:</span> {hotel.email}</p>
                <p className='description'>{hotel.description}</p>
              </article>
              <div className='goBack'><Button variant="contained" onClick={()=> inicio(-1)} style={{backgroundColor:'var(--naranja)', color:'var(--negro)'}}>Go back</Button></div>
            </>
        }
    </main>
  )
}

export default HotelPage
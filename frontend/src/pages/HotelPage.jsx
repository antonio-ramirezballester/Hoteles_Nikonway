import React, { useContext, useEffect, useState } from 'react'
import UserContext from "../context/user/UserContext";
import { useNavigate } from 'react-router-dom'
import { URL_API_HOTELS, URL_API_ROOMS } from '../constants/http_constants.js';
import { Button } from '@mui/material';
import './HotelPage.css'
import { margin } from '@mui/system';

const HotelPage = () => {

    const { user } = useContext(UserContext);
    const [landingInfo, setLandingInfo] = useState(null)
    const navigate = useNavigate();
    // Coger el numero del hotel desde la url
    const url = new URL(window.location.href);
    const numero = url.pathname.split("/")[2];
    console.log("Numero hotel: "+numero);
    const [hotel, setHotel] = useState(null)
    const [rooms, setRooms] = useState([])
    const start = useNavigate();

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

      const getHotel = async() => {
          try {
            const res= await fetch(URL_API_HOTELS);
            const data = await res.json();
            // console.log(data);
            const hotelData= data.find(hotel=>hotel.id==numero);
            setHotel(hotelData);
              
              
          } catch (error) {
            console.log(error);
          }
      }

      const getRooms = async() => {
        try {
          const res= await fetch(URL_API_ROOMS);
          const data = await res.json();
          // console.log(data);
          const roomsData= data.filter(room=>room.hotel_id==numero);
          setRooms(roomsData);
            
            
        } catch (error) {
          console.log(error);
        }
      }
      
      useEffect(
          ()=>{
              getHotel();
              getRooms();
          },[]
      )

  return (
    <main>
        {/* If there is a hotel, he paints it, otherwise not */}
        {   
            hotel &&
            <>
              <article className='hotelInfo' key={hotel.id}>
                <h1>{hotel.name}</h1>
                <img src={hotel.img} height='300px'/>
                <p style={{fontSize:'20px'}}><span className='locPhoEma'>Localization:</span> {hotel.localization} <span className='locPhoEma'>Phone_number:</span> {hotel.phone_number} <span className='locPhoEma'>Email:</span> {hotel.email}</p>
                <p className='description'>{hotel.description}</p>
              </article>

              { rooms && rooms.map(room=>
                <article className='roomInfo' key={room.id}>
                  <img src={room.img} width="500px"/>
                  <div className='namTypDes'>
                    <h2>{room.name}</h2>
                    <h3>{room.type}</h3>
                    <p>{room.description}</p>
                  </div>
                  <div className='priRes'>
                    <h3>{room.price} <small>€/night</small></h3>
                    <Button variant="Outlined" style={{color:'var(--naranja)', border:'1px solid var(--naranja)', marginTop:'50px'}}>Reserve</Button>
                  </div>
                </article>  
              )}

            </>
        }
        <div className='goBack'><Button variant="contained" onClick={()=> start(-1)} style={{backgroundColor:'var(--naranja)', color:'var(--negro)'}}>Go back</Button></div>
    </main>
  )
}

export default HotelPage
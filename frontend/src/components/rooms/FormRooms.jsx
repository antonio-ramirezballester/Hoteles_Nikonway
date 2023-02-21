import React, { useContext, useEffect, useState } from 'react'
import RoomService from '../../services/RoomService'
import UserContext from "../../context/user/UserContext";
import { useNavigate } from "react-router-dom";
import './FormRooms.css'

const FormRooms = () => {

  const { user } = useContext(UserContext);
  const [landingInfo, setLandingInfo] = useState(null)
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    RoomService.getRooms().then(data => setRooms(data));
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
      <h1>ROOMS</h1>
    {
        rooms.map(room => 
            <article className='rooms' key={room.id}>
                <p>ID: {room.id}</p>
                <p>NAME: {room.name}</p>
                <p>TYPE: {room.type}</p>
                <p>PRICE: {room.price}</p>
                <p>HOTEL_ID: {room.hotel_id}</p>
            </article>
        )   
    }
    </>
  )
}

export default FormRooms
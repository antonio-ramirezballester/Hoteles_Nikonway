import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { URL_API_HOTELS } from '../constants/http_constants.js';


const HotelPage = () => {

    const [hotel, setHotel] = useState(null)
    const {idHotel} = useParams();
    const inicio = useNavigate();

        const getHotel = async(idHotel) => {
            try {
                const res= await fetch(URL_API_HOTELS);
                const data = await res.json();
                const hotelData= data.find(hotel=>hotel.id==idHotel);
                setHotel(hotelData);
                
            } catch (error) {
                console.log(error);
            }
        }

        useEffect(
            ()=>{
                getHotel(idHotel);
            },[]
        )


  return (
    <main>
        {/* Si existe hotel, lo pinta, sino no */}
        {
            hotel &&  
            <article key={hotel.id}>
                <h2>{hotel.name}</h2>
                <button onClick={()=> inicio(-1)}>Inicio</button> 
            </article>
        }
    </main>
  )
}

export default HotelPage
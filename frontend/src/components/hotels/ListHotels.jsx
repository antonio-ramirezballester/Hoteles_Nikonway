import React from 'react'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'
import './ListHotels.css'

const ListHotels = ({hotels}) => {
  return (
    <>
    {
        hotels.map(hotel => 
            <article className='card' key={hotel.id}>
                <img src={hotel.img} height='300xp'/>
                <p>{hotel.name}</p>
                <Link to={"/hotel/"+hotel.id}><Button variant="Outlined" style={{color:'var(--naranja)', border:'1px solid var(--naranja)'}}>detalles</Button></Link>
            </article>
        )   
    }
    </>
  )
}

export default ListHotels
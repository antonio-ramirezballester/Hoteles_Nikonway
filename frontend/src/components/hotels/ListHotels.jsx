import React from 'react'
import { Button } from '@mui/material';
import './ListHotels.css'

const ListHotels = ({hotels}) => {
  return (
    <>
    {
        hotels.map(hotel => 
            <article className='card'>
                <img src={hotel.img} height='300xp'/>
                <p>{hotel.name}</p>
                <Button variant="Outlined" style={{color:'var(--naranja)', border:'1px solid var(--naranja)'}}>detalles</Button>
            </article>
        )   
    }
    </>
  )
}

export default ListHotels
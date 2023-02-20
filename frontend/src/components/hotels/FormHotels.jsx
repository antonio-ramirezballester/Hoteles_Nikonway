import React, { useContext, useEffect, useRef, useState } from 'react'
import HotelService from '../../services/HotelService.js'
import UserContext from '../../context/user/UserContext';


export const FormHotels = () => {

    const { user, setUser } = useContext(UserContext);
    const [hotels, setHotels] = useState([]);
    const [message, setMessage] = useState("");

    const inputName = useRef(null);
    const inputImg = useRef(null);
    const inputDescription = useRef(null);
    const inputLocalization = useRef(null);
    const inputPhoneNumber = useRef(null);
    const inputEmail = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const hotel = {
            "name": inputName.current.value,
            "img": inputImg.current.value,
            "description": inputDescription.current.value,
            "localization": inputLocalization.current.value,
            "phone_number": inputPhoneNumber.current.value,
            "email": inputEmail.current.value
        }

        HotelService.new(hotel).then(data => {
            document.getElementById("frm-hotel").reset();
            setMessage(data.message)
        });
    }  
    
    const handleDelete = (id) => {
        HotelService.delete(id).then(data => setMessage(data.message));
    }

  return (
    <div> {user.rol === "ADMIN" &&
        <form id="frm-hotel" name="frm-hotel" onSubmit={e => handleSubmit(e)}>
            <h2>Hotel data</h2>
            <section className='firstRow'>
                <div className='inputBox'>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name"/>
                </div>
                <div className='inputBox'>
                    <label htmlFor="img">Img</label>
                    <input type="text" id="img"/>
                </div>
                <div className='inputBox'>
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description"/>
                </div>
                <div className='inputBox'>
                    <label htmlFor="localization">Localization</label>
                    <input type="text" id="localization"/>
                </div>
                <div className='inputBox'>
                    <label htmlFor="phone_number">Phone number</label>
                    <input type="text" id="phone_number"/>
                </div>
                <div className='inputBox'>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email"/>
                </div>
            </section>
            <section className='panelButton'>
                <button>New hotel</button>
            </section>

        </form>}
    {message && <div className='action-message'>{message}</div>}
    </div>

  )
}

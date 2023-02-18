import React, { useRef, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import UserContext from "../context/user/UserContext";
import { useNavigate } from "react-router-dom";
// import { TextField, Button } from '@mui/material';
// import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';

const RegistrationFormPage = () => {

    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const inputName = useRef(null);
    const inputSurnames = useRef(null);
    const inputEmail = useRef(null);
    const inputPhone = useRef(null);
    const inputPass1 = useRef(null);
    const inputPass2 = useRef(null);

    const newUser = async (params) => {
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        };
        console.log("new user", params)
        try {
            const response = await fetch('http://localhost:4001/register', options);

            const data = await response.json();
            if (data.token) {
                console.log("registrado");
                // Context
                setUser(data);
                // LocalStarage
                localStorage.setItem('user', JSON.stringify(data));
                // Redirect
                navigate("/landing");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate password
        if (inputPass1.current.value != inputPass2.current.value) {
            alert("Password no match");
            return false;
        }
        const data = {
            "name": inputName.current.value,
            "surname": inputSurnames.current.value,
            "email": inputEmail.current.value,
            "phone": inputPhone.current.value,
            "password": inputPass1.current.value
        }
        newUser(data);
    }

    return (
        <div className='form-container'>
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    {/* <TextField id="user-name" label="Name" variant="outlined" ref={inputName}/>
                    <TextField id="user-surname" label="Surname" variant="outlined" ref={inputSurnames}/>
                    <TextField id="user-email" type="email" label="Email" variant="outlined" ref={inputEmail}/>
                    <TextField id="user-phone" type="phone" label="Phone" variant="outlined" ref={inputPhone}/>
                    <TextField id="user-password1" type="password" label="Password" variant="outlined" ref={inputPass1}/>
                    <TextField id="user-password2" type="password" label="Password" variant="outlined" ref={inputPass2}/> */}
                    <p><input type="text" ref={inputName} placeholder="name" /></p>
                    <p><input type="text" ref={inputSurnames} placeholder="surname" /></p>
                    <p><input type="email" ref={inputEmail} placeholder="email" /></p>
                    <p><input type="phone" ref={inputPhone} placeholder="phone" /></p>
                    <p><input type="password" ref={inputPass1} placeholder="password" /></p>
                    <p><input type="password" ref={inputPass2} placeholder="password2" /></p>
                    {/* <Button type="submit" variant="outlined" value="Enviar" endIcon={<SendIcon />}>Enviar</Button> */}
                    <input type="submit" value="Enviar" />
                </form>
                <p style={{color:'white'}}> 
                    If you already have and account: <span><Link to="/login"><Button variant="contained" style={{backgroundColor:'var(--naranja)', color:'var(--negro)'}}>Login</Button></Link></span>
                </p>
            </div>


           
        </div>

    )
}

export default RegistrationFormPage
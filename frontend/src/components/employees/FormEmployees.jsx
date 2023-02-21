import React, { useContext, useEffect, useState } from 'react'
import EmployeService from '../../services/EmployeService'
import UserContext from "../../context/user/UserContext";
import { useNavigate } from "react-router-dom";
import './FormEmployees.css'

const FormEmployees = () => {

  const { user } = useContext(UserContext);
  const [landingInfo, setLandingInfo] = useState(null)
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    EmployeService.getEmployees().then(data => setEmployees(data));
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
      <h1>EMPLOYEES</h1>
    {
        employees.map(employe => 
            <article className='employees' key={employe.id}>
                <p>ID: {employe.id}</p>
                <p>NAME: {employe.name}</p>
                <p>SURNAMES: {employe.surnames}</p>
                <p>JOB: {employe.job}</p>
                <p>SALARY: {employe.salary}</p>
                <p>HOTEL_ID: {employe.hotel_id}</p>
            </article>
        )   
    }
    </>
  )
}

export default FormEmployees
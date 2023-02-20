import { color } from '@mui/system';
import React from 'react'
import { useParams } from 'react-router-dom'

const ErrorPage = () => {
    const { code } = useParams();
    let message = "no-permission"
    if (code==="1") message="restricted access" 

        return (
            <div className='error' style={{color:'white'}}>
                Error:{message}
                <p>Para tener acceso a esta página, inicie sesión o regístrese si aun no lo ha hecho.</p>
            </div>
        )
}

export default ErrorPage
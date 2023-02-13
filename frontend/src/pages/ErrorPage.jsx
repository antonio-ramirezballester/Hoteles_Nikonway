import React from 'react'
import { useParams } from 'react-router-dom'

const ErrorPage = () => {
    const { code } = useParams();
    let message = "no-permission"
    if (code==="1") message="restricted access" 

        return (
            <div className='error'>
                Error:{message}
            </div>
        )
}

export default ErrorPage
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginScreen = () => {
    
    const navigate = useNavigate();

    const handleLogin =  () => {
        navigate('/items', {
            replace: true
        });
    }
    
    return (
        <div className="container mt-4">
            <h1>Login</h1>
            <button 
                className= "btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}

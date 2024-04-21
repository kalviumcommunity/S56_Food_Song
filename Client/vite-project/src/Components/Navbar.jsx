import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Navbar() {
    const [login, setLogin] = useState(false);

    useEffect(() => {
       
        const checkLogin = () => {
            setLogin(document.cookie.includes('username'));
        };
        checkLogin(); 
        return () => {
        };
    }, []);

    const handleLogout = () => {
        document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setLogin(false); 
    };

    return (
        <>
            <nav>
                <h1>Bollywood Foodie Tunes</h1>
                <input type="text" placeholder="search song" />
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/form'><li>Form</li></Link>
                    <Link to='/about'><li>About</li></Link>
                    {login ? (
                        <button onClick={handleLogout}>Logout</button>
                    ) : (
                        <Link to='/login'><li>Login</li></Link>
                    )}
                </ul>
            </nav>
        </>
    )
}
export default Navbar;

import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Navbar(){

    return(
        <>
         <nav>
             <h1>Bollywood Foodie Tunes</h1>
             <input type="text" placeholder="search song" />
              <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/form'><li>Form</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/login'><li>Login</li></Link>
             </ul>
         </nav>
        </>
    )
}
export default Navbar;
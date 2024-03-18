import React from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Home(){
const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://s56-food-song-2.onrender.com/getUser')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log('Error fetching users:', error);
      });
  }, []);
    return(
        <>
         <Navbar/>
         <div className="grid-container">
         {users.map(user => (
           <div className="grid-item" key={user._id} style={{ width: '300px', height: '300px' }}>
             <img src={user.img} alt={user.food} style={{ width: '300px' }} />
             <h3 style={{ marginTop: '20px' }}>{user.song}</h3>
             <h4 className="food"style={{marginTop: '30px'}}>{user.food}</h4>
            <Link to={`/update/${user._id}`}><button className="update">Update</button></Link><button className="delete">Delete</button>
           </div>
         ))}
       </div>
        </>
    )
}
export default Home;
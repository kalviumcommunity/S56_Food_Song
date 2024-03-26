import React from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom"; 

function Home(){
const [users, setUsers] = useState([]);
const [data, setData] = useState([]);
const [every, setEvery] = useState("All")

  useEffect(() => {
    axios.get('https://s56-food-song-2.onrender.com/getUser')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log('Error fetching users:', error);
      });
      
      axios.get('https://s56-food-song-2.onrender.com/username')
      .then(response=>{
        setData(response.data);
      })
      .catch(error=>{
        console.log(error)
      })
  }, []);

  // console.log(data)
  let filter = every === 'All' ? data:data.filter(el=> el.creator === every);

  const handleDelete = (id)=>{
    axios.delete(`https://s56-food-song-2.onrender.com/deleteUser/${id}`)
   .then(response=>{
    console.log('Item deleted successfully!!!', response.data)
    setUsers(response.data)
    
   })
   .catch(error=>{
    console.log(error)
   })

   setTimeout(() => {
    window.location.reload();
}, 2000);
  }
    return(
        <>
         <Navbar/>
         <div className="grid-container">
          <label>
             User:
            <select value={every} onChange={(e)=>{setEvery(e.target.value)}}>
              <option value="All">All</option>
              {data.map((data, index)=>(
                <option key={index} value={data.username}>
                  {data.username}
                </option>
              ))}
            </select>
          </label>
         {users.map(user => (
           <div className="grid-item" key={user._id} style={{ width: '300px', height: '300px' }}>
             <img src={user.img} alt={user.food} style={{ width: '300px' }} />
             <h3 style={{ marginTop: '20px' }}>{user.song}</h3>
             <h4 className="food"style={{marginTop: '30px'}}>{user.food}</h4>
            <Link to={`/update/${user._id}`}><button className="update">Update</button></Link>
            <button className="delete" onClick={(e)=>handleDelete(user._id)}>Delete</button>
           </div>
         ))}
       </div>
        </>
    )
}
export default Home;
import React,{useState} from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import "./Form.css"
function Form(){
    const [img,setImage]= useState('');
    const [song,setSong]= useState('');
    const [food,setFood]= useState('');
    const [done,setDone]= useState({img:img,food:food,song:song})

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("https://s56-food-song-2.onrender.com/createUser", {img,song,food})
        .then(result =>console.log(result))
        .catch(err=>console.log(err))
       }
    return(
        <>
         <Navbar/>
         <div>
        
         <form action="/submit" method="post" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label><br />
          <input type="text" id="name" name="name" /><br /><br />

          <label htmlFor="song">Favorite Song:</label><br />
          <input type="text" id="song" name="song" /><br /><br />

          <label htmlFor="food">Favorite Food:</label><br />
          <input type="text" id="food" name="food" /><br /><br />
          <Link to="/"><button type="submit">SUBMIT</button></Link>
        </form>
            
         </div>
        </>
    )
}
export default Form;
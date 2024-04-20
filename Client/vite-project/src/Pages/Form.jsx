import React,{useState} from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import "./Form.css"
function Form(){
    const [img,setImage]= useState('');
    const [song,setSong]= useState('');
    const [food,setFood]= useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        let obj={
            img:img,
            song:song,
            food:food
        }
        console.log(obj)
        axios.post("https://s56-food-song-2.onrender.com/createUser", obj)
        .then(result =>console.log(result))
        .catch(err=>console.log(err))
       }
    return(
        <>
         <Navbar/>
         <div>
        
         <form onSubmit={handleSubmit}>
          <label htmlFor="name">Image:</label><br />
          <input type="text" id="img" name="img" onChange={(e)=>{setImage(e.target.value)}} /><br /><br />

          <label htmlFor="song">Favorite Song:</label><br />
          <input type="text" id="song" name="song" onChange={(e)=>{setSong(e.target.value)}}/><br /><br />

          <label htmlFor="food">Favorite Food:</label><br />
          <input type="text" id="food" name="food" onChange={(e)=>{setFood(e.target.value)}}/><br /><br />
          <input type="submit" />
        </form>
            

            
         </div>
        </>
    )
}

export default Form;
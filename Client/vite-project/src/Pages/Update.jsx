import React,{useState,useEffect} from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";

function Update(){
    const {id} = useParams()
    const [img,setImage]= useState('');
    const [song,setSong]= useState('');
    const [food,setFood]= useState('');

    useEffect(() => {
        axios.get(`https://s56-food-song-2.onrender.com/getUser/${id}`)
          .then(response => {
          console.log(response);
          setImage(response.data.img)
          setSong(response.data.song)
          setFood(response.data.food)
          })
          .catch(error => {
            console.log('Error fetching users:', error);
          });
      }, []);


    return(
        <>
         <Navbar/>
         <div>
        
         <form
        //   onSubmit={handleSubmit}
          >
          <label htmlFor="name">Image:</label><br />
          <input type="text" id="img" name="img" /><br /><br />

          <label htmlFor="song">Favorite Song:</label><br />
          <input type="text" id="song" name="song" /><br /><br />

          <label htmlFor="food">Favorite Food:</label><br />
          <input type="text" id="food" name="food" /><br /><br />
          <input type="submit" />
        </form>
            

            
         </div>
        </>
    )
}

export default Update;
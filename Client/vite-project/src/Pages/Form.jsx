import React,{useState} from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import "./Form.css"
function Form(){
    const [image,setImage]= useState('');
    const [song,setSong]= useState('');
    const [food,setFood]= useState('');
    const [done,setDone]= useState({img:image,food:food,song:song})
  //2 ftech the data and use post in this one same like home wala useeffect change the end point according to route
  //3 put value in input
    return(
        <>
         <Navbar/>
         <div>
        
         <form action="/submit" method="post">
          <label htmlFor="name">Name:</label><br />
          <input type="text" id="name" name="name" /><br /><br />

          <label htmlFor="song">Favorite Song:</label><br />
          <input type="text" id="song" name="song" /><br /><br />

          <label htmlFor="food">Favorite Food:</label><br />
          <input type="text" id="food" name="food" /><br /><br />

        </form>
            {/* <table>
                <thead>
                <tr>
                    <th>Image</th>
                    <th>Song</th>
                    <th>Food</th>
                </tr>
                </thead>
                <tbody>
                    {users.map(user=>(
                        <tr>
                            <td>{user.Image}</td>
                            <td>{user.Song}</td>
                            <td>{user.Food}</td>
                            <td><button>Edit</button><button>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
            <Link to="/"><button>SUBMIT</button></Link>
         </div>
        </>
    )
}
export default Form;
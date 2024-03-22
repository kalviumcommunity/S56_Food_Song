import React,{useState} from "react";
import axios from "axios";

function Login(){
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

const handleSubmit =(e)=>{
    e.preventDefault();
   
    axios.post("https://s56-food-song-2.onrender.com/auth",{username,password})
    .then(response=>
        {
            console.log("hello")
            document.cookie = `username=${username}`;
            console.log(response)
        }
        )
    .catch(error=>console.log(error))
}

    return(
        <>
          <form onSubmit={handleSubmit}>                
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} required/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
                </div>
                <button type="submit">Login</button>
            </form>
        </>
    )
}
export default Login;
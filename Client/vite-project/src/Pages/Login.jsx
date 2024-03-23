import React, { useState } from "react";
import axios from "axios";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
   

    const handleSubmit = (e) => {
        e.preventDefault();
       
        axios.post("https://s56-food-song-2.onrender.com/auth", { username, password })
            .then(response => {
                document.cookie = `username=${username}`
                document.cookie = `token=${JSON.stringify(response.data)};expires=` + new Date(2028, 2, 1).toUTCString();
                console.log(response.data);
                window.location.href = "/";
            })
            .catch(error => console.log(error));
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} required />
                </div>
                <button type="submit">Login</button>
            </form>
        </>
    )
}
export default Login;

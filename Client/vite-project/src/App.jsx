import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"; 
import Home from '../src/Pages/Home';
import Form from '../src/Pages/Form';
import About from '../src/Pages/About';
import Login from '../src/Pages/Login';


function App() {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   axios.get('https://s56-food-song-2.onrender.com/getUser')
  //     .then(response => {
  //       setUsers(response.data);
  //     })
  //     .catch(error => {
  //       console.log('Error fetching users:', error);
  //     });
  // }, []);

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/form' element={<Form/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
    // <div>
    //   <nav>
    //     <h1>Bollywood Foodie Tunes</h1>
    //     <input type="text" placeholder="search song" />
    //     <ul>
    //       <li>Home</li>
    //       <li>Music</li>
    //       <li>About</li>
    //       <li>Login</li>
    //     </ul>
    //   </nav>
    //   <div className="grid-container">
    //     {users.map(user => (
    //       <div className="grid-item" key={user._id} style={{ width: '300px', height: '250px' }}>
    //         <img src={user.img} alt={user.food} style={{ width: '300px' }} />
    //         <h3 style={{ marginTop: '20px' }}>{user.song}</h3>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}

export default App;
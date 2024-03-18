import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"; 
import Home from '../src/Pages/Home';
import Form from '../src/Pages/Form';
import About from '../src/Pages/About';
import Login from '../src/Pages/Login';
import Update from './Pages/Update';


function App() {


  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/form' element={<Form/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import tandoori from './assets/tandoori.jpg'
import jalebi from './assets/jalebiBaby.jpg'
import chicken from './assets/Chicken.jpg'
import channe from './assets/channe.jpg'
import chai from './assets/chai.jpg'
import ande from './assets/ande.jpg'
import barfi from './assets/barfi.jpg'
import bhel from './assets/bhel.jpg'
import chocolate from './assets/chocolate.jpeg'

function App() {
 

  return (
    <div>
      <nav>
        <h1>Bollywood Foodie Tunes</h1>
        <input type="text" placeholder='search song'/>
        <ul>
          <li>Home</li>
          <li>Music</li>
          <li>About</li>
        </ul>
      </nav>
      <div className='grid-container'>
        <div className='grid-item' style={{width:'300px',height:'250px'}}><img src={tandoori} alt="" style={{width:'300px'}}/><h3 style={{marginTop:'20px'}}>TANDOORI NIGHTS</h3></div>
        <div className='grid-item' style={{width:'300px',height:'250px'}}><img src={jalebi} alt="" style={{width:'300px'}}/><h3 style={{marginTop:'20px'}}>JALEBI BABY</h3></div>
        <div className='grid-item' style={{width:'300px',height:'250px'}}><img src={chicken} alt="" style={{width:'300px'}}/><h3 style={{marginTop:'20px'}}>CHICKEN KUK-DOO-KOO</h3></div>
        <div className='grid-item' style={{width:'300px',height:'250px'}}><img src={channe} alt="" style={{width:'300px'}}/><h3 style={{marginTop:'20px'}}>CHANNE KE KHET MEIN</h3></div>
        <div className='grid-item' style={{width:'300px',height:'250px'}}><img src={chai} alt="" style={{width:'300px'}}/><h3 style={{marginTop:'20px'}}>EK  GARAM CHAI KI PYALI</h3></div>
        <div className='grid-item' style={{width:'300px',height:'250px'}}><img src={ande} alt="" style={{width:'300px'}}/><h3 style={{marginTop:'20px'}}>ANDE KA PHDANA</h3></div>
        <div className='grid-item' style={{width:'300px',height:'250px'}}><img src={barfi} alt="" style={{width:'300px'}}/><h3 style={{marginTop:'20px'}}>BARFI</h3></div>
        <div className='grid-item' style={{width:'300px',height:'250px'}}><img src={bhel} alt="" style={{width:'300px'}}/><h3 style={{marginTop:'20px'}}>MAIN TOH RASTE SE JA RAHA THA </h3></div>
        <div className='grid-item' style={{width:'300px',height:'250px'}}><img src={chocolate} alt="" style={{width:'300px'}}/><h3 style={{marginTop:'20px'}}>CHOCOLATE , LIME JUICE</h3></div>
      </div>
    </div>
  )
}

export default App

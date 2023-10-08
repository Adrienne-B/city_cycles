import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Button.css';
// import Reservations from '../pages/Reservations'

function Button() {
  return (
    <div className='Button'>
   
    <button>
      <Link to="/Reservations">
        <h4 className='Click'>Click Here!</h4>
      </Link>
    </button>
  </div>
  )
}

export default Button




    
  
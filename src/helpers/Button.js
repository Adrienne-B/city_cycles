import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Button.css';


function Button() {
  return (
    <div className='Button'>
      <Link to="/Reservation">
        <button>
          <h4 className='Click'>Click Here!</h4>
        </button>
      </Link>
    </div>
  )
}

export default Button




    
  
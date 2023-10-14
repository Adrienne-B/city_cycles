import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Button.css';
import about from '../pages/About';

function Button() {
  return (
    <div className='Button'>
      <Link to="/About">
        <button>
          <h4 className='Click'>Click Here!</h4>
        </button>
      </Link>
    </div>
  )
}

export default Button




    
  
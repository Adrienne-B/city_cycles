import React from 'react'
import blueberry from "../images/blueberry_benz.png"
import Button from "../helpers/Button"
import '../styles/ReservationsIntro.css';
// import { Link } from 'react-router-dom';

function ReservationIntro() {
  return (
    <div className='reservationIntro'>
        <div className="reservationIntoContainer">
            <img id="blueberryBike" alt="blue bike" src={blueberry} />

            <div className="reservationIntroContainer">
              <center><h2>Reservations</h2></center>
              <center><p>If you want to make reservations for <br/>
              a special occasion hit the button below.</p></center>      
           </div>
       </div>
      <Button />
    </div>
  )
}

export default ReservationIntro




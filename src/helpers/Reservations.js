import React from 'react'

import Blueberry from "../images/blueberry_benz.png"
import Wendy from "../images/wendy_wednesday.png"
import Bee from "../images/bee_stinger.png"
import Sunset from "../images/sunset_blackout.png"

const Reservations() {
  return (
    <div className="Reservations">
        <div className="ReservationsContainer">
            <h3>We’re so excited you want to ride with us. Make a reservation here!</h3>


        <div cass="bikeOptions">
        <p class="bikeDiscription">If you want to make reservations for 
        a special occassion hit the button below.</p>
         <img class="blueberryBike" src={Blueberry} />

         <p class="bikeDiscription">If you want to make reservations for 
        a special occasion hit the button below.</p>
         <img class="blueberryBike" src={Wendy} />

         <p class="bikeDiscription">If you want to make reservations for 
        a special occasion hit the button below.</p>
         <img class="blueberryBike" src={Bee} />

         <p class="bikeDiscription">If you want to make reservations for 
        a special occasion hit the button below.</p>
         <img class="blueberryBike" src={Sunset} />
       
        <div className="ReservationsContainer">
            <img class="blueberryBike" src={Sunset} />
        </div>
        </div>
        </div>
        </div>
         
  )
}

export default Reservations
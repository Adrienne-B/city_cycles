import React from 'react'
import { ReservationList } from '../helpers/ReservationList'
import ReservationItems from '../components/ReservationItem'
// import '../styles/Reservation.css';


function Reservation() {
  return (
    <div className='reservation'>
      <div className="reservationContainer">
        <h3 style={{backgroundColor: "#032A18", height:"5rem", color:"white", paddingTop:"2.5rem", paddingLeft:"18rem"}}>We’re so excited you want to ride with us. Make a reservation <u>here!</u></h3>
      </div>
      <div style = {{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} className='reservationList'>
        {ReservationList && ReservationList.map((reservationItem, key) => {
          return (
            <ReservationItems 
              key={key} 
              images={reservationItem.images} 
              name={reservationItem.name} 
              description={reservationItem.description}
              price={reservationItem.price}
              />
            );
          })}
      </div>
    </div>
  )
}

export default Reservation

/*Array in our application meaning loop through the array and it will render each item in the array as a div in the website instead of typing each individually which wouldbe longer. */
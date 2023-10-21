import React from 'react'

function ReservationItem({images, name,  description, price}) {
  return (
    <div className='reservationItem'>
         <div style={{ backgroundImage: `url(${images})` }}> </div>
        <div>{images}</div>
        <h6>{name}</h6>
        <h6>{description}</h6>
        <p>${price}</p>
    </div> 
  )
}

export default ReservationItem
import React from 'react'
// import Blueberry from "../images/blueberry_benz.png";
// import Wendy from "../images/wendy_wednesday.png"
// import Bee from "../images/bee_stinger.png";
// import Sunset from "../images/sunset_blackout.png";


function ReservationItem({images, name,  description, price}) {
  return (
    <div className='reservationItem'>
         <div style={{ backgroundImage: `url(${images})` }}> </div>
        {/* <div><img src={Blueberry} alt="berry"/></div>
        <div><img src={Wendy} alt="wendy"/></div>
        <div><img src={Bee} alt="bee"/></div>
        <div><img src={Sunset} alt="bee"/></div> */}
        <div><img src={images} alt="image" /></div>
        {/* <div>{images}</div> */}
        <h6>{name}</h6>
        <h6>{description}</h6>
        <p>${price}</p>
    </div> 
  )
}

export default ReservationItem

/* <div>{images}</div> caused for the images path to show..never the pictures unlesss it was image break logo*/
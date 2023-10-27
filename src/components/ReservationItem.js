import React from 'react'
// import '../styles/Reservation.css';


// import Bee from "../images/bee_stinger.png";
console.log(ReservationItem); 
function ReservationItem({images, name,  description, price}) {
  return (
    <div style={{paddingLeft: "11rem", paddingTop: "7rem"}} className='reservationItem'>
         {/* <div style={{ backgroundImage: `url(${images})` }}> </div> */}
  
        <div style={{height: '220px'}}><img src={images} alt="images of bikes" /></div>
        <h6 style={{fontSize: "18px"}}>{name}</h6>
        <h5 style={{color: "#7A7C83", wordBreak: "break-all",  width: "18rem"}}>{description}</h5>
        <p style={{fontWeight: "bold"}}>${price}</p>
    </div> 
  )
}
export default ReservationItem

/* <div>{images}</div> caused for the images path to show..never the pictures unlesss it was image break logo*/
/* <div><img src={Sunset} alt="bee"/></div>  */
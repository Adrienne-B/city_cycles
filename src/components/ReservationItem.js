import React from 'react'


console.log(ReservationItem); 
function ReservationItem({images, name,  description, price}) {
  return (
    <div style={{ paddingLeft: "6rem", paddingTop: "9rem"}} className='reservationItem'>  
      <center><div style={{height: '220px'}}><img src={images} alt="images of bikes" /></div></center> 
      <center><h6 style={{fontSize: "18px"}}>{name}</h6></center>
      <center><h5 style={{color: "#7A7C83", wordBreak: "break-all",  width: "18rem"}}>{description}</h5></center>
      <center><p style={{fontWeight: "bold"}}>${price}</p></center>
      <button id="Reservation" style={{  backgroundColor: "#5F8575", left: "12rem", top: "1rem"}} type="submit">Click Here</button>
    </div> 
  )
}
export default ReservationItem

/* <div>{images}</div> caused for the images path to show..never the pictures unlesss it was image break logo*/
/* <div><img src={Sunset} alt="bee"/></div>  */
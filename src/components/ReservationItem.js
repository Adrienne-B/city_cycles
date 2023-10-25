import React from 'react'
// import Blueberry from "../images/blueberry_benz.png";
// import Wendy from "../images/wendy_wednesday.png"
// import Bee from "../images/bee_stinger.png";
// import Sunset from "../images/sunset_blackout.png";


function ReservationItem({images, name,  description, price}) {
  return (
    <div style={{paddingLeft: "11rem", paddingTop: "7rem"}} className='reservationItem'>
         {/* <div style={{ backgroundImage: `url(${images})` }}> </div> */}
        {/* <div><img src={Blueberry} alt="berry"/></div>
        <div><img src={Wendy} alt="wendy"/></div>
        <div><img src={Bee} alt="bee"/></div>
        <div><img src={Sunset} alt="bee"/></div> */}
        <div><img style={{boxShadow: "2px 2px #999"}} src={images} alt="image" /></div>
        {/* <div>{images}</div> */}
        <h6 style={{fontSize: "18px"}}>{name}</h6>
        <h5 style={{color: "#7A7C83", wordBreak: "break-all",  width: "18rem"}}>{description}</h5>
        <p style={{fontWeight: "bold"}}>${price}</p>
    </div> 
  )
}

export default ReservationItem

/* <div>{images}</div> caused for the images path to show..never the pictures unlesss it was image break logo*/
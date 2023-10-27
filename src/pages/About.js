import React from 'react'
import Building from '../images/about_picture.png';
import Team from "../helpers/Team";
import '../styles/About.css'


function About() {
  return (
    <div className="About">
      <div className="aboutContainer"> {/*Green background*/}
        <div className='picture'>
          <img id="Building" src={Building} alt="building of City Cyles" />
      
      <div className='aboutCard'>
            <h1>About Us</h1>
            <h5>The city’s best provider of local bike rentals <br /> since 1993. We want you to
            have a great <br />experience from the time you get to our shop, <br /> to when 
            you are spinning around the city.</h5>
          </div>
        </div>
      </div>
   <Team />
  </div>
  )
}

export default About
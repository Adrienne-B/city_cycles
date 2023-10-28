import React from 'react'
import Johnathan from '../images/johnathan_smith.png';
import Berry from "../images/berry_ike.png";
import Deanna from "../images/deanna_wong.png";


function Team() {
  return (
    <div className='Team'>
        <div className='teamContainer'>
            <center><h2>Team</h2></center>
            <center><h5>Our staff have been renting bikes for the average of a decade – they are avid bikers, 
            safety <br/>experts, and locals. They’re here to ensure you have a great time, and stay safe!</h5></center>
        </div>

        <div className="team">
            <div className="teamMembers">
                <img class="JohnathanSmith" alt="smith" src={Johnathan} />
    
            <div className="teamMembers">
                <img class="berryIke" alt="ike" src={Berry} />

            <div className='teamMembers'>
                <img class="deannaWong" alt="wong" src={Deanna} />
                </div>
            </div> 
        </div>
    </div>

        <div className="membersNames">
            <div className="Names">
                <h4>Johnathan Smith</h4>
        
                <div className="Names"> 
                    <h4>Berry Ike</h4>

                <div className='Names'>
                    <h4>Deanna Wong</h4> 
                </div>
            </div> 
        </div>
    </div>
 </div>
  )
}

export default Team
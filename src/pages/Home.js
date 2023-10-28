import React from 'react';
import BannerImage from '../images/Hero_Image.png';
import ReservationIntro from '../helpers/ReservationIntro';
import '../styles/Home.css';
import SearchBar from '../helpers/SearchBar';


function Home() {
    return (
        <div className="Home"  style={{backgroundImage: `url(${BannerImage})`}}>
          <div className="homeContainer">
            <div className='colorBox'></div>
            <h1>City Cycles</h1>
            <h5>If you are looking for a quick ride to any destination
            and attraction then City Cycles is the place to be.<br></br> One of the most
            popular places to get a bike.</h5>
            <SearchBar />
          </div> 
        <ReservationIntro />
      </div>
     )
  }
    

export default Home


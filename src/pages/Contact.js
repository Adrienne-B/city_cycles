import React from 'react'
import ContactBanner from '../images/Hero_Image.png';
import '../styles/Contact.css'


function Contact() {
  return (

      <div className="Contact" style={{ backgroundImage: `url(${ ContactBanner})` }}>
   
       <div className='colorBoxTwo'>
    
         <div className='Address'>
            <h3>Address</h3>
            <h5>4921 Terrance Blvd <br />
            Logan, Michigan 90341 </h5>

            <p>Monday - Thursday</p>
            <p>Friday - Saturday</p>
            <p>Sunday</p>

            <div className="Time">
               <p>8:00 a.m. - 5:00 p.m.</p>
               <p>12:00 p.m. - 6:00 p.m.</p>
               <p>CLOSED</p>
            </div>
         </div>



<div className="ContactBox">
      <div className="Title">
         <h1>Contact Us</h1>
      </div>

      <form className="comment-form">

         <div className="row">
            <div className="col-sm-6 form-group">
               {/* <label className="name">Use Your Real Name</label> */}
               <input type="text" className="form-control" placeholder="Name"/>
            </div>
            <div id="Email" className="col-sm-6 form-group">
               {/* <label className="email">Email Will Not Be Published</label> */}
               <input type="text" className="form-control" placeholder="Email" />
            </div>


            <div className="clearfix">
            <div className="col-md-12 form-group">
               {/* <label className="message">Write a good comment</label> */}
               <textarea name="" class="form-control" cols="47" rows="7" placeholder="Message"></textarea>
            </div>
            <div className="col-md-12 form-group">
              <button id="buttonContact" className="btn btn-block btn-lg btn-success">
              <h5>Button</h5></button>
           </div>        
           </div>
         </div>
      </form>
      </div>
       </div>
       </div>
     
  )
}

export default Contact
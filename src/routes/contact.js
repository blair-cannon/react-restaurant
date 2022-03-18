import React from 'react';
import '../App.css';
import contactBackground from '../wireframes/contactBackground.jpg';
import contactpic from '../wireframes/taco.png';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="App" style={{  backgroundImage:`url(${contactBackground})`}}>
      <div className="space"></div>
    <div className="Contact" >
          <h1 style={{ color:"green", fontSize:"3em", fontWeight:"bold", marginBottom:"0" }}>Contact Us!</h1> 
          <p style={{ color:"#624a3c", fontSize:"2em", marginTop:"0" }}>
            <ul>
              <li>Sunday: 11am - 6pm</li>
              <li>Monday-Wednesday: 11am - 9pm</li>
              <li>Thursday-Saturday: 11am - 11pm</li>
            </ul>
          </p>
          <p style={{ color:"#624a3c", fontSize:"2em", marginTop:"0" }}>158 West High St, Lexington, KY, 40511</p>
          <a style={{ color:"#624a3c", fontSize:"2em", marginTop:"0" }} href="mailto:Lukarita@restaurant.com">Lukarita@restaurant.com</a>  
          <br></br>
        <button style={{ color:"green", backgroundColor:"transparent", borderRadius:"25px", border:"solid 2px green", height:"2rem", width:"10rem", fontSize:"1rem", marginTop:"3rem" }}>
          <Link style={{ textDecoration:"none", color:"green" }} to="#">(895) 690-4916</Link> 
        </button>
    </div>
</div>
  );
}

export default Contact;

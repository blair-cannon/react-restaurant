import React from 'react';
import contactBackground from '../wireframes/contactBackground.jpg';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="App" style={{  backgroundImage:`url(${contactBackground})`, height:"100vh" }}>
      <div className="space"></div>
    <div className="Contact" >
          <h1 className="contactHeader" >Contact Us!</h1> 
            <ul className="contactList">
              <li>Sunday: 11am - 6pm</li>
              <li>Monday-Wednesday: 11am - 9pm</li>
              <li>Thursday-Saturday: 11am - 11pm</li>
            </ul>
          <p className="contactList">158 West High St, Lexington, KY, 40511</p>
          <a className="contactList" href="mailto:Lukarita@restaurant.com">Lukarita@restaurant.com</a>  
          <br></br>
        <button className="phoneNumberButton">
          <Link className="greenLink" to="#">(895) 690-4916</Link> 
        </button>
    </div>
</div>
  );
}

export default Contact;

import React from 'react';
import '../App.css';
import background from '../wireframes/background.png';

function Home() {
  return (
    <div className="App">
        <div className="Home" style={{ backgroundImage:`url(${background})`, backgroundSize: 'cover' }}>
            <div className="home-left">
              <h1 style={{ color:"green", fontSize:"7em", fontWeight:"bold", marginBottom:"0" }}>Restaurant</h1> 
              <p style={{ color:"#624a3c", fontSize:"3em", marginTop:"0" }}>type of food/ slogan text</p>
            <button style={{ color:"green", backgroundColor:"transparent", borderRadius:"25px", border:"solid 2px green", height:"4rem", width:"8rem", fontSize:"2rem" }}>Menu</button>
          </div>
          <div className="home-right">
            <h1>picture</h1>
          </div>
        </div>
    </div>
  );
}

export default Home;

import React from 'react';
import '../App.css';
import background from '../wireframes/background.png';
import openpic from '../wireframes/taco.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App" style={{  backgroundImage:`url(${background})`}}>
        <div className="Home" >
            <div className="home-left">
              <h1 style={{ color:"green", fontSize:"7em", fontWeight:"bold", marginBottom:"0" }}>Restaurant</h1> 
              <p style={{ color:"#3d2e25", fontSize:"3em", marginTop:"0" }}>type of food/ slogan text</p>
            <button style={{ color:"green", backgroundColor:"transparent", borderRadius:"25px", border:"solid 2px green", height:"4rem", width:"8rem", fontSize:"2rem" }}>
              <Link style={{ textDecoration:"none", color:"green" }} to="/menu">Menu</Link> 
            </button>
          </div>
          <div className="home-right">
            <img src={openpic} ></img>
          </div>
        </div>
    </div>
  );
}

export default Home;
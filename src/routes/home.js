import React from 'react';
import '../App.css';
import background from '../wireframes/background.png';
import openpic from '../wireframes/taco.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App" style={{  backgroundImage:`url(${background})`, height:"100vh" }}>
      <div className="spacer"></div>
        <div className="Home" >
            <div className="home-left">
              <h1 className="homeHeader" >Lukarita</h1> 
              <p className="slogan" >type of food/ slogan text</p>
            <button className="homeButton" >
              <Link style={{ textDecoration:"none", color:"green" }} to="/menu">Menu</Link> 
            </button>
          </div>
          <div className="home-right">
            <img className="taco" src={openpic} ></img>
          </div>
        </div>
    </div>
  );
}

export default Home;
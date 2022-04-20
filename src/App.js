import React from 'react';
// import { Link, Outlet } from 'react-router-dom';
import {Link, Outlet} from 'react-router-dom';
import logopic from './wireframes/LukaRita.png';

function App() {
  return (
    <div className="App">  
    <nav>
        <h3><img className="logo" src={logopic} ></img></h3>
      <Link className="nav-link" to="/">HOME</Link> 
      <Link className="nav-link" to="/menu">MENU</Link> 
      <Link className="nav-link" to="/about">ABOUT</Link> 
      <Link className="nav-link" to="/contact">CONTACT</Link> 
  </nav>
  <Outlet />
  </div>
  );
}
export default App;

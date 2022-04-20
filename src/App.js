import React from 'react';
// import { Link, Outlet } from 'react-router-dom';
import {Link, Outlet} from 'react-router-dom';


function App() {
  return (
    <div className="App">  
    <nav>
        <h3>Logo</h3>
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

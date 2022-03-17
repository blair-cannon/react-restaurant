import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function App() {

  const navStyle = {
    color: "white"
  }
  return (
    <div className="App">
    <nav>
        <h3>Logo</h3>
      <Link style={navStyle} to="/">HOME</Link> 
      <Link style={navStyle} to="/menu">MENU</Link> 
      <Link style={navStyle} to="/about">ABOUT</Link> 
      <Link style={navStyle} to="/contact">CONTACT</Link> 
  </nav>
  <Outlet />
  </div>
  );
}
export default App;

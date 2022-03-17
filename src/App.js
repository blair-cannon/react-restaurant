import React from 'react';
import './App.css';
import About from './routes/about';
import Contact from './routes/contact';
import Home from './routes/home';
import Menu from './routes/menu';
import Nav from './routes/nav';
import {
  BrowserRouter,
  Routes,
  Route,
  Switch
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Routes>
          <Nav />
          <Route path="Home" element={<Home />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;

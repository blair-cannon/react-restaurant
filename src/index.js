import React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import Home from './routes/home';
import Menu from './routes/menu';
import About from './routes/about';
import Contact from './routes/contact';

// import 'bootstrap/dist/bootstrap.min.css';

const rootElement = document.getElementById("root"); 

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="Menu" element={<Menu />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
      </Route> 
      {/* route tag around app is not self-closing and wraps around all nav items bc we want it on all pages */}
    </Routes>
  </BrowserRouter>,
  rootElement
);



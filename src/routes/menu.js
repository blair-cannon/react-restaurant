import '../App.css';
import { getData } from '../data.js'; 
import React, { useEffect, useState } from 'react';


export default function Menu() {
  const URL = 'https://sheltered-refuge-85246.herokuapp.com/api/json';
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getData(URL)
    .then((data) => {
      // console.log(data)
      setMenu(data)
    })
}, []);

  return (
    <div className="App"> 
        <h1>Menu</h1> 

        {/* {menus.filter((menu) => menu.cuisine.label === 'Mexican')}  */}
       {menu.map((menuItem) => <MenuItem key={menuItem.id} menuItem={menuItem} />)}
    </div>
  );
}

const MenuItem = ({ menuItem }) => {
  return (
    <div>
      <h2>{menuItem.title}</h2>
      {/* <div>Colors: {house.houseColours}</div>
      <div>Founder: {house.founder}</div>
      <div>Animal: {house.animal}</div>
      <div>Element: {house.element}</div>
      <div>Ghost: {house.ghost}</div>
      <div>Common Room: {house.commonRoom}</div> */}
    </div>
  )
}

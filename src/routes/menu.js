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
        <h2>Mexican Plates</h2>
       {menu.filter((tacoItem) => tacoItem.cuisine.label === 'Mexican').map((tacoItem) => <TacoItem key={tacoItem.id} tacoItem={tacoItem} />)}
       <h2>Sandwiches</h2>
       {menu.filter((sandwichItem) => sandwichItem.category.title === 'Sandwiches').map((sandwichItem) => <SandwichItem key={sandwichItem.id} sandwichItem={sandwichItem} />)}
       <h2>Desserts</h2>
       {menu.filter((dessertItem) => dessertItem.category.title === 'Dessert').map((dessertItem) => <DessertItem key={dessertItem.id} dessertItem={dessertItem} />)}

    </div>
  );
}

const TacoItem = ({ tacoItem }) => {
  return (
    <div>
      <p>{tacoItem.title}</p>
      <div>{tacoItem.price}</div>
      <div>{tacoItem.description}</div>
    </div>
  )
}

const SandwichItem = ({ sandwichItem }) => {
  return (
    <div>
      <p>{sandwichItem.title}</p>
      <div>{sandwichItem.price}</div>
      <div>{sandwichItem.description}</div>
    </div>
  )
}

const DessertItem = ({ dessertItem }) => {
  return (
    <div>
      <p>{dessertItem.title}</p>
      <div>{dessertItem.price}</div>
      <div>{dessertItem.description}</div>
    </div>
  )
}
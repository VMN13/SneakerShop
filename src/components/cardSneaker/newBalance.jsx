/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {Link } from 'react-router-dom';
import Footer from '../maket/Footer';
import Header from '../maket/Header';
import Fuel from '../img/sneakerPrev/newBalance/fuel/Fuel.jpg';
import Nitriel from '../img/sneakerPrev/newBalance/nitiel/Nitiel.jpg';
export default function SneakerMain() {
return (
<>   
<Header /> 
<h1 id="home">
    New Balance
  </h1> 
  <div className="Sneaker_Container">
    <div className='Sneaker_Box'>
      <div>
        <h2>
        NewBalance "Fuelcell flite"
        </h2>
      </div>
        <div>
          <Link to='/AirMax'>
            <img
              className='Fix_img'
              src={Fuel} />
          </Link>
        </div>
      </div>

      <div className='Sneaker_Box'>
      <div>
        <h2>
        Nike "Huarache"
        </h2>
      </div>
        <div>
          <Link to='/Jordan'>
            <img
              className='Fix_img'
              src={Nitriel} />
          </Link>
        </div>
      </div>
  </div>
<Footer /> 
    </>
  );
}
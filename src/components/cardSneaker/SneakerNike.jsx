/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {Link } from 'react-router-dom';
import Footer from '../maket/Footer';
import Header from '../maket/Header';
import AirMax from '../img/sneakerPrev/nike/airMax/AirMax.jpg';
import Huarache from '../img/sneakerPrev/nike/huarache/Huarache.png';
import AirForce from '../img/sneakerPrev/nike/forceLow/AirForce.png';
import AirMid from '../img/sneakerPrev/nike/forceMid/AirMid.jpg';
export default function SneakerMain() {
return (
<>   
<Header /> 


<h1 id="home">
    Nike 
  </h1> 
  <div className="Sneaker_Container">
    <div className='Sneaker_Box'>
      <div>
        <h2>
          Nike  "AirMax"
        </h2>
      </div>
        <div>
          <Link to='/AirMax'>
            <img
              className='Fix_img'
              src={AirMax} />
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
          <Link to='/Huarache'>
            <img
              className='Fix_img'
              src={Huarache} />
          </Link>
        </div>
      </div>

      <div className='Sneaker_Box'>
      <div>
        <h2>
          Nike "Air Force" LOW
        </h2>
      </div>
        <div>
          <Link to='/AirLow'>
            <img
              className='Fix_img'
              src={AirForce} />
          </Link>
        </div>
      </div>

      <div className='Sneaker_Box'>
      <div className='Sneaker_Box_h2'>
        <h2 className='Sneaker_Box_h2'>
        Nike "Air Force" MID 
        </h2>
      </div>
        <div>
          <Link to='/AirMid'>
            <img
              className='Fix_img'
              src={AirMid} />
          </Link>
        </div>
      </div>
  </div>
<Footer /> 
    </>
  );
}
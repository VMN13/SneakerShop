/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {Link } from 'react-router-dom';
import Footer from '../maket/Footer';
import Header from '../maket/Header';
import BOG from '../img/sneakerPrev/puma/BOG/BOG.jpg';
import Joy from '../img/sneakerPrev/puma/JOY/Joy.jpg';

export default function SneakerMain() {
return (
<>   
<Header /> 
<h1 id="home">
    Puma
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
              src={BOG} />
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
              src={Joy} />
          </Link>
        </div>
      </div>

    
    

  </div>
<Footer /> 
    </>
  );
}
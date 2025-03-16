/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {Link } from 'react-router-dom';
import Footer from '../maket/Footer';
import Header from '../maket/Header';
import InstaPump from  '../img/sneakerPrev/reebook/instaPump/Pump.jpg';
export default function SneakerMain() {
return (
<>   
<Header /> 
<h1 id="home">
    Reebook
  </h1> 
  <div className="Sneaker_Container">
    <div className='Sneaker_Box'>
      <div>
        <h2>
        reebok instapump
        </h2>
      </div>
        <div>
          <Link to='/AirMax'>
            <img
              className='Fix_img'
              src={InstaPump} />
          </Link>
        </div>
      </div>
  </div>
<Footer /> 
    </>
  );
}
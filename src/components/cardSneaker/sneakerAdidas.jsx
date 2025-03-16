import React from 'react';
import {Link } from 'react-router-dom';
import Footer from '../maket/Footer';
import Header from '../maket/Header';

import Adidas from '../img/sneakerMain/adidas/adidas.jpg';
export default function SneakerAdidas() {
return (
<>   
<Header /> 
<h1 id="home">
  Adidas
  </h1> 
  <div className="Sneaker_Container">
    <div className='Sneaker_Box'>
      <div>
        <h2>
        Adidas
        </h2>
      </div>
        <div>
          <Link to='/AirMax'>
            <img
              className='Fix_img'
              src={Adidas} />
          </Link>
        </div>
      </div>

  </div>
<Footer /> 
    </>
  );
}
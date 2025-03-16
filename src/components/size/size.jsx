import React from 'react';
import Header from '../maket/Header';
import Footer from '../maket/Footer';

export default function size() {

  return (
    <>
    <Header />

    <h1 id="home">
      Check your size
  </h1> 
    <div className="sizeTable">
      <table 
      style={{"width" : "100%"}}
      >
      <tr>
    <th>
      Company
    </th>
    <th>
      Contact
    </th>
    <th>
      Country
    </th>
  </tr>
  <tr>
    <td>
      Alfreds Futterkiste
    </td>
    <td>
      Maria Anders
    </td>
    <td>
      Germany
    </td>
  </tr>
  <tr>
    <td>
      Centro comercial Moctezuma
    </td>
    <td>
      Francisco Chang
    </td>
    <td>
      Mexico
    </td>
  </tr>
  </table>
  </div>
  <Footer />
    </>
  );
};
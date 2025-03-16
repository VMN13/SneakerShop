import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import air from '../img/sneakerMain/nike/air.jpg';
import jordan from '../img/sneakerMain/jordan/jord.png';
import reb from '../img/sneakerMain/reebook/reb.jpg';
import adidas from '../img/sneakerMain/adidas/adidas.jpg';
import puma from '../img/sneakerMain/puma/puma.jpg';
import yezzy from '../img/sneakerMain/yeezy/yezzy.jpg';
import NewBalance from '../img/sneakerMain/newbalance/NewBalance.jpg';
import Bel from '../img/sneakerMain/balenciaga/Bel.jpg';



export default function Sneakers() {
  return (
    <>
    <Header/>
    <h1 id="home">Sneakers</h1>
    <section className='sneakerContainer'>
    <Link to="/SneakerNike">
      <h3 className="write">
        Nike
      </h3>
        <img 
          id='sneakerimg' 
          src={air} 
          alt="airmax"/>
  </Link>
  <Link to="/sneakerjordan">
    <h3 className="write">
      Jordan
    </h3>
      <img 
        id='sneakerimg' 
        src={jordan} 
        alt="airmax"/>
  </Link>

  <Link to="/sneakerreebok">
    <h3 className="write">
      Reebook
    </h3>
      <img 
        id='sneakerimg' 
        src={reb} 
        alt="reebok"/>
  </Link>
  <Link to="/sneakeradidas">
  <h3 className="write">
    Adidas
  </h3>
    <img 
      id='sneakerimg' 
      src={adidas} 
      alt="adidas"/>
  </Link>

  <Link to="/sneakerpuma">
    <h3 className="write">
      Puma
    </h3>
      <img 
        id='sneakerimg' 
        src={puma} 
        alt="airmax"/>
  </Link>

  <Link to="/Yeezy">
    <h3 className="write">
      Yeezy
    </h3>
      <img 
        id='sneakerimg' 
        src={yezzy} 
        alt="airmax"/>
  </Link>

  
  <Link to="/sneakernewbalance">
    <h3 className="write">
      New Balance
    </h3>
      <img 
        id='sneakerimg' 
        src={NewBalance} 
        alt="airmax"/>
  </Link>

  <Link to="/Balenciaga">
    <h3 className="write">
      Balenciaga
    </h3>
      <img 
        id='sneakerimg' 
        src={Bel} 
        alt="airmax"/>
  </Link>


    </section>
<Footer/>
    </>
);
};


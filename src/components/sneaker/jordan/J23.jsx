import { Link } from "react-router-dom";
import Footer from "../../maket/Footer";
import ImageMagnifier from "../../logic/ImageMagnifier";
import Header from "../../maket/Header";
import svg from "../../img/icons/right.svg";
import LeftSvg from "../../img/icons/left.svg";
import Stars from "../../logic/Stars";
import size from '../../img/icons/size.svg';
import J23 from '../../img/sneakerCard/jordan/J23/J23Two.jpg';

export default function Max() {
  return (
  <>
  <div className="App">
    <Header />
    <div className="sneakerDescription">
    <h1 id="Phantom">
    Air Jordan "J23 Low"
  </h1> 
  </div>
<section
  className='containerSneaker'>
    <div className="con">
    <ImageMagnifier 
      imageUrl={J23}/>
      <div>
        <div id="size">
          <div className="checkSize">
        <h3 id="Choice">Check <br /> your <br /> size:
            
        </h3>
        <Link
          className="SizeRelative"
          to="/Size">
            <img src={size} />  
        </Link>
        </div>
        
        <hr class="custom-hr"/>
        <div className="size-btn">
        Сhoose your shoe size
<div>
  
  <button
    className="sizecard">8
  </button>
  <button className="sizecard ">
    8.5
  </button>
  <button className="sizecard ">
    9
  </button>
  <button className="sizecard ">
    10
  </button>
  <button className="sizecard ">
    10
  </button>
</div>

<div>
  <button className="sizecard ">
    11
  </button>
  <button className="sizecard ">
    10
  </button>
  <button className="sizecard ">
    10.5
  </button>
  <button className="sizecard ">
    11
  </button>
  </div>
  <div className="buyTwoContainer">
<div className="buyTwoContainer">

</div>
      <Link Link to="/Credit">
      <button
      className="buyTwo" > 
      B 
      U 
      Y 
    </button>
    </Link>
    
</div>
  </div>
  <hr class="custom-hr"/>
  <div className="checkSize">
  <Link 
    className="headerlink"
    to="/Credit">
    <button 
      className="buy" 
      Link to="/Credit">
        B <br />
        U <br />
        Y 
    </button>
  </Link>
</div>
</div>
</div>
</div>     
  <div className='description'> 
    <h2 className="Iname">
    Air Jordan "J23 Low"
    </h2>
  <Stars />
    <p className="des">
      Step into the court with the iconic Air Jordan J23 Low 'White'. 
      With its crisp white leather upper, perforated toe box, 
      and signature Jumpman branding, this low-top sneaker combines timeless 
      style with unbeatable comfort. The luxurious Phylon midsole absorbs shock for exceptional cushioning, 
      while the lightweight rubber outsole provides durable traction on and off the court. 
      Own a piece of basketball history with these legendary sneakers, perfect for both 
      casual wear and game-day performance.
    </p>

<div className="cardbottons">
  <Link 
    className="headerlink"
    to="/jordan">
      <button 
        className="buttoncardLeft"
        Link to="/Retro">prev
          <img 
            className="svg"
            src={LeftSvg}
            alt="" />
      </button>
  </Link>

<Link 
  className="headerlink"
  to="/Jumpman">
    <button
      className="buttoncard" 
      Link to="/Max">
        next
          <img 
            className="svg" 
            src={svg}
            alt="" />
    </button>
  </Link>
  </div>
</div>
</section>
<Footer/>
</div>
</>
);
};
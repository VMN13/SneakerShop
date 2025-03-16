import { Link } from "react-router-dom";
import Footer from "../../maket/Footer";
import airMid from '../../img/sneakerCard/nike/airMid/airMid.jpg';
import ImageMagnifier from "../../logic/ImageMagnifier";
import Header from "../../maket/Header";
import svg from "../../img/icons/right.svg";
import Stars from "../../logic/Stars";
import size from '../../img/icons/size.svg';


export default function AirMid() {
return (
<>
<div className="App">
  <Header />


<section
  className='container'>
    <div className="con">
      <ImageMagnifier 
      imageUrl={airMid}/>
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
      className="sizecard">
        8
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
    Nike Air Force Mid
  </h2>
  <Stars />
    <p className="des">
      Nike Air Max is a line of shoes produced by Nike,
      Inc., with the first model released in 1987. 
      Air Max shoes are identified by their midsoles 
      incorporating flexible urethane pouches filled
      with pressurized gas, visible from the exterior
      of the shoe and intended to provide cushioning 
      to the underfoot. Air Max was conceptualized by
      Tinker Hatfield, who initially worked for Nike
      designing stores
    </p>

<div className="cardbottons">
  <Link 
    className="headerlink"
    to="/airLow">
      <button 
        className="buttoncard"
        Link to="/Max">
          prev
          <img 
            className="svg"
            src={svg}
            alt="" />
      </button>
  </Link>

<Link 
  className="headerlink"
  to="/airmax">
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
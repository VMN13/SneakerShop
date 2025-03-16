import { Link } from "react-router-dom";
import Footer from "../../maket/Footer";
import huarache from '../../img/sneakerCard/nike/huarache/huarache.jpg';
import ImageMagnifier from "../../logic/ImageMagnifier";
import Header from "../../maket/Header";
import svg from "../../img/icons/right.svg";
import Stars from "../../logic/Stars";
import size from '../../img/icons/size.svg';


export default function Huarache() {
return (
<>
<div className="App">
  <Header />


<section
  className='container'>
    <div className="con">
      <ImageMagnifier 
      imageUrl={huarache}/>
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
    Nike Huarache
  </h2>
  <Stars />
    <p className="des">
    When it fits this good and looks this great. The Air Huarache takes on a classic 
    silhouette with a runner-inspired design, mixed materials and rich neutrals for a 
    look that is both nostalgic and brand new.
    </p>

<div className="cardbottons">
  <Link 
    className="headerlink"
    to="/airmax">
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
  to="/airLow">
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
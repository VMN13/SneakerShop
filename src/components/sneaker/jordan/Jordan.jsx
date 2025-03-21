import { Link } from "react-router-dom";
import Footer from "../../maket/Footer";
import jordan from '../../img/sneakerCard/jordan/aura/Aura.jpg';
import ImageMagnifier from "../../logic/ImageMagnifier";
import Header from "../../maket/Header";
import svg from "../../img/icons/right.svg";
import LeftSvg from "../../img/icons/left.svg";
import Stars from "../../logic/Stars";
import size from '../../img/icons/size.svg';



export default function Max() {
  return (
  <>
  <div className="App">
    <Header />
    <div className="sneakerDescription">
    <h1 id="Phantom">
    Air Jordan 12 Retro "Phantom"
  </h1> 
  </div>
<section
  className='containerSneaker'>
    <div className="con">
    <ImageMagnifier 
      imageUrl={jordan}/>
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
      Air Jordan 12 Retro "Phantom"
    </h2>
  <Stars />
    <p className="des">
      Jordan Brings the Heat
      Michael Jordan brought the literal heat in his 1996-1997 season, 
      setting the stage for one of basketball’s 
      most transformative moments. In game five of The Finals—Jordan’s famous 
      “flu game”—he scored 38 points to go 
      with seven rebounds and five assists against the Utah Jazz, 
      all with a temperature of 103 degrees. His enduring drive 
      ultimately helped lead his team to another title, 
      serving as inspiration for the technology and construction of 
    </p>

<div className="cardbottons">
  <Link 
    className="headerlink"
    to="/Westbrook">
      <button 
        className="buttoncardLeft"
        Link to="/jordan">prev
          <img 
            className="svg"
            src={LeftSvg}
            alt="" />
      </button>
  </Link>

<Link 
  className="headerlink"
  to="/sneakerj23">
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
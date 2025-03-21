import { Link } from "react-router-dom";
import Tooltip from "../../components/logic/Tooltip";
import Footer from "./Footer";
import Header from "./Header";
import Video from "./video";

export default function Home() {
  return (
    <div>
    <Header />
<div className="chat">
</div>

<div className="homePage">
  <h1 id="home">
    Home Page
  </h1> 
  </div>
<section
  className='container'>
    <Tooltip
      className="tooltip"
      infotext="Welcome to the Sneaker SneakerShop page!">  
      <Link to="https://www.youtube.com/watch?v=cPAGwnzJpec">
        <Video />
      </Link>
    </Tooltip>
  
  
<div className='descriptionHome'>
  <p className="welcome">
    Welcome to the Sneaker Shop sneaker page
    Here you can find a cool pair at a price that is 
    affordable for your wallet.
  </p>

  <Link id="shop"
    to="/Sneakers">
      <button id="ShopNow">
        Shop Now
      </button>
      
  </Link>
</div>
</section>
<Footer />
    </div>    
);
};
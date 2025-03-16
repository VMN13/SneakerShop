import { createContext } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './components/styles/App.css';
import './components/styles/media.css';
import './components/styles/congratulations.css';
import Sneakermain from './components/maket/Sneakers'
import Sneakers from './components/maket/Sneakers';
import NoPage from './components/nopage/NoPage';
import Main from './components/maket/main';
import About from './components/about/About';
import Home from './components/maket/Home';
import Max from './components/sneaker/nike/Max';
import Jordan from './components/sneaker/jordan/Jordan';
import Jumpman from './components/sneaker/jordan/Jumpman';
import Reebook from './components/sneaker/reebook/Reebook';
import SneakerAdidas from './components/cardSneaker/sneakerAdidas';
import Adidas from './components/sneaker/adidas/Adidas';
import Puma from './components/sneaker/puma/Puma';
import Yezzy from './components/sneaker/yeezy/Yeezy';
import SneakerJordan from './components/cardSneaker/sneakerjordan';
import Newbalance from './components/sneaker/newbalance/Newbalance';
import Balenciaga from './components/sneaker/balenciaga/Balenciaga';
import Credit from './components/logic/credit';
import Congratulations from './components/congratulations/congratulations';
import Size from './components/size/size';
import SneakerNike from './components/cardSneaker/SneakerNike';
import J23 from './components/sneaker/jordan/J23';
import SneakerReebook from './components/cardSneaker/SneakerReebook';
import Westbrook from './components/sneaker/jordan/Westbrook';
import SneakerPuma from './components/cardSneaker/SneakerPuma';
import SneakerNewBalance from './components/cardSneaker/newBalance';
import AirLow from './components/sneaker/nike/AirLow';
import AirMid from './components/sneaker/nike/AirMid';
import Huarache from './components/sneaker/nike/Huarache';

export const ThemeContext = createContext(null);

function App() {
  return (
    <>
     {/* <Snowfall /> */}
    <BrowserRouter>
      <Routes>
        <Route path='/size' element={<Size />} />
        <Route path='/sneakernike' element={<SneakerNike />} />
        <Route path='/sneakerjordan' element={<SneakerJordan />} />
        <Route path='/sneakeradidas' element={<SneakerAdidas />} />
        <Route path='/westbrook' element={<Westbrook />} />
        <Route path='/sneakerreebok' element={<SneakerReebook />} />
        <Route path='/sneakerj23' element={<J23 />} />
        <Route path='/airLow' element={<AirLow />} />
        <Route path='/airMid' element={<AirMid />} />
        <Route path='/huarache' element={<Huarache />} />
        <Route path='/sneakerpuma' element={<SneakerPuma />} />
        <Route path='/sneakermain' element={<Sneakermain />} />
        <Route path='/sneakernewbalance' element={<SneakerNewBalance />} />
        <Route path='/congratulations' element={<Congratulations />} />
        <Route path='/credit' element={<Credit />} />
        <Route path='/Balenciaga' element={<Balenciaga />} />
        <Route path='/Newbalance' element={<Newbalance />} />
        <Route path='/Yeezy' element={<Yezzy />} />
        <Route path='/Puma' element={<Puma />} />
        <Route path='/airmax' element={<Max />} />
        <Route path='/Adidas' element={<Adidas />} />
        <Route path='/Reebook' element={<Reebook />} />
        <Route path='/jordan' element={<Jordan />} />
        <Route path='/jumpman' element={<Jumpman />} />
        <Route path='/sneakers' element={<Sneakers />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} /> 
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
</>
);
};

export default App;
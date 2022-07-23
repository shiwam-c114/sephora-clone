import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import { MakeupPage } from './pages/MakeupPage';
import { GiftPage } from './pages/GiftPage';
import { MiniSize } from './pages/MiniSize';
import { BathNBody } from './pages/BathNBody';
import { ToolsNBrush } from './pages/ToolsNBrush';
import { Fragrance } from './pages/Fragrance';
import { Hair } from './pages/Hair';
import { Skincare } from './pages/Skicare';
import Home from './pages/Home';
import Description from './pages/Description';
import One,{Two} from './components/checkout/checkout'
import Pay from './components/payment/payment'
import Basket from './components/basket/basket';
import Footer from "./components/HomePage/Footer/Footer";




function App() {
  return (




    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/bas' element={<One />} />
        <Route path='/next' element={<Two/>} />
        <Route path='/pay' element={<Pay />} />
        <Route path='/one' element={<Basket />} />
        <Route path="/" element={<Home />} ></Route>
        <Route path="/makeup" element={<MakeupPage />}></Route>
        <Route path="/gifts" element={<GiftPage />}></Route>
        <Route path="/minisize" element={<MiniSize />}></Route>
        <Route path="/bathnbody" element={<BathNBody />}></Route>
        <Route path="/toolsnbrushes" element={<ToolsNBrush />}></Route>
        <Route path="/fragrance" element={<Fragrance />}></Route>
        <Route path="/hair" element={<Hair />}> </Route>
        <Route path="/skincare" element={<Skincare />}></Route>
        <Route path="/ProdDesc/:productId" element={<Description />}></Route>
      </Routes>

    <Footer/>
    </div>
  );

}

export default App;

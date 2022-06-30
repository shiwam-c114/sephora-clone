import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


import Navbar from './components/common/Navbar';
import { MakeupPage } from './pages/MakeupPage';
import {GiftPage} from './pages/GiftPage';
import { MiniSize } from './pages/MiniSize';
import { BathNBody } from './pages/BathNBody';
import { ToolsNBrush } from './pages/ToolsNBrush';
import { Fragrance } from './pages/Fragrance';
import { Hair } from './pages/Hair';
import { Skincare } from './pages/Skicare';


function App() {
  return (

    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" ></Route>
        <Route path="/makeup" element={<MakeupPage/>}></Route>
        <Route path="/gifts" element={<GiftPage/>}></Route>
        <Route path="/minisize" element={<MiniSize/>}></Route>
        <Route path="/bathnbody" element={<BathNBody/>}></Route>
        <Route path="/toolsnbrushes" element={<ToolsNBrush/>}></Route>
        <Route path="/fragrance" element={<Fragrance/>}></Route>
        <Route path="/hair" element={<Hair/>}> </Route>
        <Route path="/skincare" element={<Skincare/>}></Route>
      </Routes>
      

    </div>
  );

}

export default App;

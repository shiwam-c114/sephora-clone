import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
 import One ,{Two}from './components/checkout/checkout'
 import  Pay from './components/payment/payment'
 import { ChakraProvider } from '@chakra-ui/react';
 import Home from "./pages/Home"
import Popup from './components/HomePage/Navbar/Popup';
function App() {
  return (

    <div className="App">
      <Home/>
      {/* <Popup/> */}
    </div>
  );

}

export default App;

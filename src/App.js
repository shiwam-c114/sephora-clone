import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
 import One ,{Two}from './components/checkout/checkout'
 import  Pay from './components/payment/payment'
 import Basket from './components/basket/basket';
 import { ChakraProvider } from '@chakra-ui/react';
function App() {
  return (
    <ChakraProvider>
    <BrowserRouter>
    <Routes>
    
<Route path='/bas' element={<One/>} />
<Route path='/next' element={<Two/>} />
<Route path='/pay' element={<Pay/>} />
<Route path='/' element={<Basket/>} />

    </Routes>

    </BrowserRouter>
    </ChakraProvider>
  
  
      );
}

export default App;

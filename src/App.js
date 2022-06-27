import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
 import One ,{Two}from './components/checkout/checkout'
 import  Pay from './components/payment/payment';
 import Makeup from "./pages/Makeup";
 
function App() {
  return (

    <div className="App">
      <Makeup/>
      
    </div>
  );

}

export default App;

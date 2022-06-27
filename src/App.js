import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
 import One ,{Two}from './components/checkout/checkout'
 import  Pay from './components/payment/payment';
 import Makeup from "./pages/Makeup";
 import { MakeupPage } from './pages/MakeupPage';
 
function App() {
  return (

    <div className="App">
      <MakeupPage/>
      
    </div>
  );

}

export default App;

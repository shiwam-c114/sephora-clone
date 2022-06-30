import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
 
 import { ChakraProvider } from '@chakra-ui/react';
import Description from './pages/Description';
function App() {
  return (

    <div className="App">
      <Description/>
    </div>
  );

}

export default App;
